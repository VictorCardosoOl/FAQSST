
import React, { useState, useMemo, useEffect } from 'react';
import { Menu, X, Sparkles, LayoutGrid } from 'lucide-react';
import { FAQ_DATA } from './constants';
import { Category, FAQItem } from './types';
import { askGemini } from './services/geminiService';

// Importação dos componentes modulares
import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';
import { ArticleCard } from './components/ArticleCard';
import { ArticleView } from './components/ArticleView';
import { FadeInSection } from './components/FadeInSection';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<FAQItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return FAQ_DATA.filter(item => {
      const matchesCat = !selectedCategory || item.category === selectedCategory;
      const matchesSearch = !query || 
        item.question.toLowerCase().includes(query) || 
        item.tags.some(t => t.toLowerCase().includes(query));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAskAi = async () => {
    if (!searchQuery || searchQuery.length < 3) return;
    setLoading(true);
    try {
      const answer = await askGemini(searchQuery);
      setAiAnswer(answer);
    } catch (error) {
      setAiAnswer("Não foi possível acessar a rede neural. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const nav = useMemo(() => {
    if (!selectedArticle) return { prev: null, next: null };
    const idx = filteredArticles.findIndex(a => a.id === selectedArticle.id);
    return {
      prev: idx > 0 ? filteredArticles[idx - 1] : null,
      next: idx < filteredArticles.length - 1 ? filteredArticles[idx + 1] : null
    };
  }, [selectedArticle, filteredArticles]);

  return (
    <div className="flex min-h-screen selection:bg-indigo-500/30 selection:text-indigo-900">
      
      <Sidebar 
        currentCat={selectedCategory} 
        onSelect={(c) => { setSelectedCategory(c); setSelectedArticle(null); }}
        isDarkMode={isDarkMode}
        toggleDark={() => setIsDarkMode(!isDarkMode)}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-6 left-6 p-4 glass bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-2xl shadow-xl z-30 lg:hidden text-[var(--text-main)] active:scale-90 transition-all"
      >
        <Menu size={20} />
      </button>

      <main className={`flex-1 transition-all duration-700 ${isSidebarOpen ? 'lg:pl-72' : 'lg:pl-72'} pr-8 lg:pr-12 pt-12 pb-24`}>
        <div className="max-w-7xl mx-auto">
          
          {!selectedArticle ? (
            <div className="space-y-24">
              <FadeInSection>
                <header className="space-y-12 text-center py-12">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500">Knowledge Network Live</span>
                  </div>
                  
                  <h1 className="text-7xl lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-[var(--text-main)] transition-all">
                    {selectedCategory ? (
                      <span className="serif-italic">{selectedCategory}</span>
                    ) : (
                      <>Wiki<span className="serif-italic">Archive</span></>
                    )}
                  </h1>
                  
                  <SearchBar 
                    query={searchQuery} 
                    setQuery={q => {setSearchQuery(q); setAiAnswer(null);}} 
                    onAskAi={handleAskAi} 
                    loading={loading}
                  />
                </header>
              </FadeInSection>

              {aiAnswer && (
                <FadeInSection>
                  <div className="relative p-1 lg:p-1.5 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                    <div className="relative glass bg-[var(--bg-sidebar)] border border-white/10 p-10 lg:p-16 rounded-[2.4rem]">
                      <button 
                        onClick={() => setAiAnswer(null)} 
                        className="absolute top-8 right-8 text-stone-400 hover:text-stone-600 transition-colors"
                      >
                        <X size={20} />
                      </button>
                      <div className="flex items-center gap-3 text-indigo-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
                        <Sparkles size={16} /> Neural Context Result
                      </div>
                      <p className="text-2xl lg:text-4xl font-serif italic leading-snug text-[var(--text-main)] max-w-5xl">
                        {aiAnswer}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((item, i) => (
                    <FadeInSection key={item.id} delay={i * 50}>
                      <ArticleCard 
                        item={item} 
                        onClick={() => { setSelectedArticle(item); window.scrollTo({top:0, behavior:'smooth'}); }} 
                      />
                    </FadeInSection>
                  ))
                ) : (
                  <div className="col-span-full py-40 text-center">
                    <p className="text-4xl font-serif italic text-stone-300">Arquivo vazio para esta busca.</p>
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
