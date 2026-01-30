
import React, { useState, useMemo, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { FAQ_DATA } from './constants';
import { Category, FAQItem } from './types';
import { askGemini } from './services/geminiService';
import { useReadingQueue } from './hooks/useReadingQueue';
import { useArticleNotes } from './hooks/useArticleNotes';

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
  
  // Layout States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Custom Hooks
  const { queue, toggleQueue } = useReadingQueue();
  const { notes, updateNote, getNote } = useArticleNotes();

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedArticle(null);
    setViewMode('HOME');
    setSearchQuery('');
    setAiAnswer(null);
    setIsSidebarOpen(false);
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

  // Inject Notes into the selected article for the View
  const activeArticleWithNotes = useMemo(() => {
    if (!selectedArticle) return null;
    return {
      ...selectedArticle,
      notes: getNote(selectedArticle.id)
    };
  }, [selectedArticle, getNote]);

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
    <div className="flex min-h-screen selection:bg-[var(--selection)] bg-[var(--bg-main)]">
      <Sidebar 
        currentCat={selectedCategory} 
        onSelect={(c) => { 
          setSelectedCategory(c); 
          setSelectedArticle(null); 
          setViewMode('HOME');
          setSearchQuery('');
          setIsSidebarOpen(false);
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
          setIsSidebarOpen(false);
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

      {/* Main Layout - Logic for Pinned Sidebar spacing */}
      <main 
        className={`
          flex-1 w-full min-h-screen transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
          pt-[var(--space-md)] pb-[var(--space-lg)]
          ${isSidebarPinned ? 'lg:ml-80' : 'lg:ml-24'}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-[var(--space-layout)]">
          
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="lg:hidden fixed top-4 right-4 z-40 p-2.5 glass bg-[var(--bg-island)] border border-[var(--border)] rounded-full shadow-lg text-[var(--text-main)]"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {!activeArticleWithNotes ? (
            <div className="space-y-[var(--space-lg)]">
              <header className="space-y-[var(--space-md)]">
                <div className="space-y-2">
                   <div className="flex items-center gap-3 type-tiny font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] reveal">
                     <div className="w-6 h-[1px] bg-[var(--text-muted)] opacity-50" />
                     <span>Arquivos 2025</span>
                   </div>
                   
                   <h1 className="type-3xl font-serif font-light leading-tight tracking-tight text-[var(--text-main)] reveal">
                     {viewMode === 'QUEUE' ? (
                       <span className="italic">Minha Lista</span>
                     ) : selectedCategory ? (
                       <span>{selectedCategory}</span>
                     ) : (
                       <>Gestão de <span className="italic font-normal">Processos</span></>
                     )}
                   </h1>
                </div>
                
                {viewMode === 'HOME' && (
                  <div className="reveal" style={{ animationDelay: '100ms' }}>
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
                <FadeInSection className="max-w-4xl">
                  <div className="border-l-[3px] border-[var(--text-main)] pl-6 py-4 relative bg-stone-50 dark:bg-white/5 rounded-r-sm shadow-sm transition-all duration-500">
                    <button onClick={() => setAiAnswer(null)} className="absolute top-2 right-2 text-stone-400 hover:text-[var(--text-main)] transition-colors">
                      <X size={16} />
                    </button>
                    <div className="flex items-center gap-2 text-[var(--text-body)] font-bold text-[9px] uppercase tracking-[0.2em] mb-2">
                      <Sparkles size={10} strokeWidth={1} /> TeamWiki AI
                    </div>
                    <p className="type-h2 font-serif font-light italic leading-snug text-[var(--text-body)]">
                      "{aiAnswer}"
                    </p>
                  </div>
                </FadeInSection>
              )}

              <div className="grid grid-cols-1 gap-1 pt-4">
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
                <div className="py-12 border-t border-[var(--border)] reveal">
                  <p className="text-[var(--text-muted)] font-serif italic type-h2 font-light">
                    Nenhum documento encontrado em nossa biblioteca.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <ArticleView 
              article={activeArticleWithNotes} 
              onBack={() => setSelectedArticle(null)} 
              onNavigate={setSelectedArticle} 
              nav={nav}
              onUpdateNote={(content) => updateNote(activeArticleWithNotes.id, content)}
            />
          )}
        </div>
      </main>
    </div>
  );
}
