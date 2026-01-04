
import React, { useState, useMemo, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { FAQ_DATA } from './constants';
import { Category, FAQItem } from './types';
import { askGemini } from './services/geminiService';
import { useReadingQueue } from './hooks/useReadingQueue';

import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';
import { ArticleCard } from './components/ArticleCard';
import { ArticleView } from './components/ArticleView';
import { FadeInSection } from './components/FadeInSection';
import { CommandPalette } from './components/CommandPalette';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<FAQItem | null>(null);
  const [viewMode, setViewMode] = useState<'HOME' | 'QUEUE'>('HOME');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const { queue, toggleQueue } = useReadingQueue();

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedArticle(null);
    setViewMode('HOME');
    setSearchQuery('');
    setAiAnswer(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleGlobalKeys = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeys);
    return () => window.removeEventListener('keydown', handleGlobalKeys);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const displayedArticles = useMemo(() => {
    if (viewMode === 'QUEUE') {
      return queue
        .map(id => FAQ_DATA.find(a => a.id === id))
        .filter(Boolean) as FAQItem[];
    }
    const query = searchQuery.toLowerCase();
    return FAQ_DATA.filter(item => {
      const matchesCat = !selectedCategory || item.category === selectedCategory;
      const matchesSearch = !query || 
        item.question.toLowerCase().includes(query) || 
        item.tags.some(t => t.toLowerCase().includes(query));
      return matchesCat && matchesSearch;
    });
  }, [viewMode, queue, selectedCategory, searchQuery]);

  const handleAskAi = async () => {
    if (!searchQuery || searchQuery.length < 3) return;
    setLoading(true);
    try {
      const answer = await askGemini(searchQuery);
      setAiAnswer(answer);
    } catch (error) {
      setAiAnswer("Acesso restrito ou serviço indisponível no momento.");
    } finally {
      setLoading(false);
    }
  };

  const nav = useMemo(() => {
    if (!selectedArticle) return { prev: null, next: null };
    const articles = viewMode === 'QUEUE' ? displayedArticles : (selectedCategory ? FAQ_DATA.filter(a => a.category === selectedCategory) : FAQ_DATA);
    const idx = articles.findIndex(a => a.id === selectedArticle.id);
    return {
      prev: idx > 0 ? articles[idx - 1] : null,
      next: idx < articles.length - 1 ? articles[idx + 1] : null
    };
  }, [selectedArticle, selectedCategory, viewMode, displayedArticles]);

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        currentCat={selectedCategory} 
        onSelect={(c) => { 
          setSelectedCategory(c); 
          setSelectedArticle(null); 
          setViewMode('HOME');
          setSearchQuery('');
        }}
        isDarkMode={isDarkMode}
        toggleDark={() => setIsDarkMode(!isDarkMode)}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isQueueView={viewMode === 'QUEUE'}
        onSelectQueue={() => {
          setViewMode('QUEUE');
          setSelectedCategory(null);
          setSelectedArticle(null);
          setSearchQuery('');
        }}
        queueCount={queue.length}
        onLogoClick={handleReset}
        isPinned={isSidebarPinned}
        onPinToggle={() => setIsSidebarPinned(!isSidebarPinned)}
      />

      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectArticle={(a) => { setSelectedArticle(a); setViewMode('HOME'); }}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
        onSelectCategory={(cat) => { setSelectedCategory(cat); setViewMode('HOME'); setSelectedArticle(null); }}
        onSelectQueue={() => { setViewMode('QUEUE'); setSelectedCategory(null); setSelectedArticle(null); }}
      />

      {/* 
          CALCULO DO LAYOUT:
          - Se Sidebar Pinned: Padding fixo de 20rem (320px) para limpar os 288px da barra.
          - Se Sidebar Unpinned: Padding de 8rem (128px) para respeitar os 80px da lâmina.
      */}
      <main className={`flex-1 transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] pr-12 lg:pr-24 pt-32 pb-64 ${isSidebarPinned ? 'lg:pl-80' : 'lg:pl-32'}`}>
        <div className="max-w-5xl">
          
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden mb-16 p-2 border border-[var(--border)] rounded-full">
            <Menu size={20} strokeWidth={1} />
          </button>

          {!selectedArticle ? (
            <div className="space-y-40">
              <header className="space-y-20">
                <div className="space-y-10">
                   <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.8em] text-stone-400 reveal" style={{ animationDelay: '0ms' }}>
                     <div className="w-10 h-[0.5px] bg-stone-200" />
                     <span>Arquivos 2025</span>
                   </div>
                   
                   <h1 className="text-6xl lg:text-[7rem] font-serif font-light leading-[0.9] tracking-tight reveal" style={{ animationDelay: '200ms' }}>
                     {viewMode === 'QUEUE' ? (
                       <span className="italic">Lista de Leitura</span>
                     ) : selectedCategory ? (
                       <span>{selectedCategory}</span>
                     ) : (
                       <>Acervo de <span className="italic font-normal">Processos</span></>
                     )}
                   </h1>
                </div>
                
                {viewMode === 'HOME' && (
                  <div className="reveal" style={{ animationDelay: '400ms' }}>
                    <SearchBar 
                      onClick={() => setIsCommandPaletteOpen(true)}
                      query={searchQuery}
                      onAskAi={handleAskAi} 
                      loading={loading}
                    />
                  </div>
                )}
              </header>

              {aiAnswer && (
                <FadeInSection className="max-w-3xl">
                  <div className="border-l-[2px] border-[var(--text-main)] pl-12 py-6 relative">
                    <button onClick={() => setAiAnswer(null)} className="absolute top-0 right-0 text-stone-300 hover:text-[var(--text-main)]">
                      <X size={18} strokeWidth={1} />
                    </button>
                    <div className="flex items-center gap-3 text-stone-400 font-bold text-[9px] uppercase tracking-[0.4em] mb-6">
                      <Sparkles size={10} strokeWidth={1} /> Neural Engine
                    </div>
                    <p className="text-2xl font-serif font-light italic leading-snug">
                      "{aiAnswer}"
                    </p>
                  </div>
                </FadeInSection>
              )}

              <div className="grid grid-cols-1 gap-4">
                {displayedArticles.map((item, i) => (
                  <ArticleCard 
                    key={item.id}
                    item={item} 
                    onClick={() => { setSelectedArticle(item); window.scrollTo({top:0, behavior:'smooth'}); }} 
                    isInQueue={queue.includes(item.id)}
                    onToggleQueue={(e) => { e.stopPropagation(); toggleQueue(item.id); }}
                    featured={i === 0 && viewMode === 'HOME' && !selectedCategory}
                  />
                ))}
              </div>

              {displayedArticles.length === 0 && (
                <div className="py-20 border-t border-[var(--border)] reveal">
                  <p className="text-stone-300 font-serif italic text-2xl font-light">Nenhum documento encontrado neste critério.</p>
                </div>
              )}
            </div>
          ) : (
            <ArticleView 
              article={selectedArticle} 
              onBack={() => setSelectedArticle(null)} 
              onNavigate={setSelectedArticle} 
              nav={nav} 
            />
          )}
        </div>
      </main>
    </div>
  );
}
