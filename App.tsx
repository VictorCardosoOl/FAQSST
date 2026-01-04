
import React, { useState, useMemo, useEffect } from 'react';
import { Menu, X, Sparkles, Command, ChevronUp, ChevronDown, Bookmark } from 'lucide-react';
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
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const { queue, toggleQueue, moveItem } = useReadingQueue();

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
      setAiAnswer("Falha na conexão neural com a base de dados.");
    } finally {
      setLoading(false);
    }
  };

  const nav = useMemo(() => {
    if (!selectedArticle) return { prev: null, next: null };
    const articles = viewMode === 'QUEUE' 
      ? displayedArticles 
      : (selectedCategory ? FAQ_DATA.filter(a => a.category === selectedCategory) : FAQ_DATA);
    
    const idx = articles.findIndex(a => a.id === selectedArticle.id);
    return {
      prev: idx > 0 ? articles[idx - 1] : null,
      next: idx < articles.length - 1 ? articles[idx + 1] : null
    };
  }, [selectedArticle, selectedCategory, viewMode, displayedArticles]);

  return (
    <div className="flex min-h-screen selection:bg-indigo-500/30 selection:text-indigo-900 transition-colors duration-500">
      
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
      />

      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectArticle={(a) => { 
          setSelectedArticle(a); 
          setViewMode('HOME'); 
          setSearchQuery(''); 
        }}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setViewMode('HOME');
          setSelectedArticle(null);
        }}
        onSelectQueue={() => {
          setViewMode('QUEUE');
          setSelectedCategory(null);
          setSelectedArticle(null);
        }}
      />

      {/* Floating CMD+K Label */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
        <button 
          onClick={() => setIsCommandPaletteOpen(true)}
          className="flex items-center gap-3 px-5 py-3 glass bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-indigo-500 transition-all shadow-xl"
        >
          <Command size={14} /> Abrir Comandos <span className="opacity-40">⌘K</span>
        </button>
      </div>

      <main className="flex-1 lg:pl-72 pr-8 lg:pr-12 pt-12 pb-24 transition-all duration-700">
        <div className="max-w-7xl mx-auto">
          
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden mb-8 p-3 glass bg-[var(--bg-sidebar)] rounded-2xl border border-[var(--border)] text-stone-500"
          >
            <Menu size={24} />
          </button>

          {!selectedArticle ? (
            <div className="space-y-24">
              <FadeInSection>
                <header className="space-y-12 text-center py-12">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500">TeamWiki Engine v2.5 Online</span>
                  </div>
                  
                  <h1 className="text-7xl lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-[var(--text-main)]">
                    {viewMode === 'QUEUE' ? (
                      <span className="italic flex items-center justify-center gap-6">
                        <Bookmark className="lg:w-24 lg:h-24 text-indigo-500" /> Fila
                      </span>
                    ) : selectedCategory ? (
                      <span className="italic">{selectedCategory}</span>
                    ) : (
                      <>Wiki<span className="italic">Archive</span></>
                    )}
                  </h1>
                  
                  {viewMode === 'HOME' && (
                    <SearchBar 
                      onClick={() => setIsCommandPaletteOpen(true)}
                      query={searchQuery}
                      onAskAi={handleAskAi} 
                      loading={loading}
                    />
                  )}

                  {viewMode === 'QUEUE' && (
                    <p className="text-stone-400 font-serif italic text-2xl">Sua curadoria personalizada de leitura.</p>
                  )}
                </header>
              </FadeInSection>

              {aiAnswer && (
                <FadeInSection>
                  <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20">
                    <div className="glass bg-[var(--bg-sidebar)] p-10 lg:p-16 rounded-[2.4rem] relative">
                      <button onClick={() => setAiAnswer(null)} className="absolute top-8 right-8 text-stone-400 hover:text-stone-600">
                        <X size={20} />
                      </button>
                      <div className="flex items-center gap-3 text-indigo-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
                        <Sparkles size={16} /> Neural Result
                      </div>
                      <p className="text-2xl lg:text-4xl font-serif italic leading-snug text-[var(--text-main)] max-w-5xl">
                        {aiAnswer}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {displayedArticles.length > 0 ? (
                  displayedArticles.map((item, i) => (
                    <div key={item.id} className="relative group/card-wrapper">
                      {viewMode === 'QUEUE' && (
                        <div className="absolute -left-14 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 opacity-0 group-hover/card-wrapper:opacity-100 transition-all duration-300 hidden xl:flex">
                          <button 
                            onClick={() => moveItem(item.id, 'UP')}
                            className="p-2 hover:bg-stone-100 dark:hover:bg-white/10 rounded-full text-stone-400 hover:text-indigo-500 transition-colors"
                            title="Mover para cima"
                          >
                            <ChevronUp size={20} />
                          </button>
                          <span className="text-[10px] font-bold text-stone-300">{i + 1}º</span>
                          <button 
                            onClick={() => moveItem(item.id, 'DOWN')}
                            className="p-2 hover:bg-stone-100 dark:hover:bg-white/10 rounded-full text-stone-400 hover:text-indigo-500 transition-colors"
                            title="Mover para baixo"
                          >
                            <ChevronDown size={20} />
                          </button>
                        </div>
                      )}
                      <FadeInSection delay={i * 50}>
                        <ArticleCard 
                          item={item} 
                          onClick={() => { setSelectedArticle(item); window.scrollTo({top:0, behavior:'smooth'}); }} 
                          isInQueue={queue.includes(item.id)}
                          onToggleQueue={(e) => {
                            e.stopPropagation();
                            toggleQueue(item.id);
                          }}
                        />
                      </FadeInSection>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-stone-300 font-serif italic text-3xl">
                      {viewMode === 'QUEUE' ? "Ainda não há artigos em sua fila." : "Nenhum resultado encontrado no acervo."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <ArticleView 
              article={selectedArticle} 
              onBack={() => { setSelectedArticle(null); }} 
              onNavigate={setSelectedArticle}
              nav={nav}
            />
          )}
        </div>
      </main>
    </div>
  );
}
