import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  ChevronRight, 
  ArrowLeft, 
  Moon, 
  Sun, 
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { FAQ_DATA } from './constants';
import { Category, FAQItem } from './types';
import { askGemini } from './services/geminiService';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(Category.COLETIVO);
  const [selectedArticle, setSelectedArticle] = useState<FAQItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);

  // Toggle Dark Mode
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Derived Data: Available tags for current category
  const tags = useMemo(() => {
    const set = new Set<string>();
    FAQ_DATA.filter(i => i.category === selectedCategory).forEach(i => i.tags.forEach(t => set.add(t)));
    return Array.from(set);
  }, [selectedCategory]);

  // Filtered List
  const articles = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCat = !selectedCategory || item.category === selectedCategory;
      const matchesTag = !selectedTag || item.tags.includes(selectedTag);
      const query = searchQuery.toLowerCase();
      const matchesSearch = !query || item.question.toLowerCase().includes(query);
      return matchesCat && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  // Navigation: Prev/Next
  const nav = useMemo(() => {
    if (!selectedArticle) return { prev: null, next: null };
    const idx = articles.findIndex(a => a.id === selectedArticle.id);
    return {
      prev: idx > 0 ? articles[idx - 1] : null,
      next: idx < articles.length - 1 ? articles[idx + 1] : null
    };
  }, [selectedArticle, articles]);

  const handleAskAI = async () => {
    if (!searchQuery) return;
    setIsAiLoading(true);
    try {
      const resp = await askGemini(searchQuery);
      setAiAnswer(resp);
    } catch (e) {
      setAiAnswer("Erro ao consultar assistente.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[var(--bg-main)]">
      
      {/* Sidebar - Fixa e Minimalista */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-[var(--bg-sidebar)] border-r border-[var(--border)] z-30 flex flex-col p-8">
        <div className="mb-16">
          <h1 className="text-2xl font-serif font-bold tracking-tighter">
            Knowledge<span className="text-indigo-600">.</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-2">Archive v1.0</p>
        </div>

        <nav className="flex-1 space-y-6">
          <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Módulos</div>
          {Object.values(Category).map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setSelectedArticle(null); setSelectedTag(null); }}
              className={`sidebar-link block w-full text-left text-sm font-medium hover:text-indigo-600 ${selectedCategory === cat ? 'active' : 'text-[var(--text-muted)]'}`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-[var(--border)] space-y-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 ml-72 p-12 md:p-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Top Bar: Busca e Filtros */}
          {!selectedArticle && (
            <div className="mb-20 animate-fadeIn">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                <div className="flex-1 max-w-xl">
                  <h2 className="text-5xl font-serif mb-6">{selectedCategory}</h2>
                  <div className="relative group">
                    <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={20} />
                    <input 
                      type="text"
                      placeholder="Pesquisar artigos ou perguntar à IA..."
                      className="w-full bg-transparent border-b border-[var(--border)] py-4 pl-10 focus:border-[var(--text-main)] outline-none text-xl font-serif italic"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button onClick={handleAskAI} className="absolute right-0 top-1/2 -translate-y-1/2 text-indigo-600 hover:text-indigo-800 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                        Perguntar IA <Sparkles size={12} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${!selectedTag ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-[var(--border)] text-slate-400 hover:border-slate-400'}`}
                >
                  Todos
                </button>
                {tags.map(t => (
                  <button 
                    key={t}
                    onClick={() => setSelectedTag(t)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${selectedTag === t ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-[var(--border)] text-slate-400 hover:border-slate-400'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* AI Answer Box */}
          {aiAnswer && !selectedArticle && (
            <div className="mb-12 p-8 bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-indigo-900 rounded-lg animate-fadeIn relative">
              <button onClick={() => setAiAnswer(null)} className="absolute top-4 right-4 text-slate-300 hover:text-slate-500"><X size={16} /></button>
              <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles size={14} /> Inteligência Artificial
              </div>
              <p className="text-lg font-serif italic leading-relaxed text-[var(--text-main)]">"{aiAnswer}"</p>
            </div>
          )}

          {/* Listagem de Artigos (Estilo K-News/Editorial) */}
          {!selectedArticle ? (
            <div className="grid grid-cols-1 gap-12">
              {articles.map((item, i) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className="group cursor-pointer border-b border-[var(--border)] pb-12 flex flex-col md:flex-row gap-10 items-start hover:opacity-80 transition-opacity"
                >
                  <div className="w-full md:w-80 aspect-[4/3] image-reveal bg-slate-100 dark:bg-zinc-900">
                    <img 
                      src={item.imageUrl || 'https://images.unsplash.com/photo-1497366216548-37526070297c'} 
                      className="w-full h-full object-cover" 
                      alt={item.question}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                      <span>{item.date || 'Set 2024'}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span>{item.category}</span>
                    </div>
                    <h3 className="text-3xl font-serif mb-4 group-hover:italic transition-all">{item.question}</h3>
                    <p className="text-slate-500 line-clamp-2 max-w-xl text-sm leading-relaxed">{item.answer}</p>
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                      Explorar Artigo <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Artigo Individual (Estilo Cosse/Editorial) */
            <div className="animate-fadeIn pb-32">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="mb-16 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <ArrowLeft size={14} /> Voltar para {selectedCategory}
              </button>

              <div className="max-w-3xl">
                <div className="mb-12">
                   <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4">{selectedArticle.category}</div>
                   <h1 className="text-6xl font-serif italic mb-8 leading-tight">{selectedArticle.question}</h1>
                   <div className="flex gap-4">
                      {selectedArticle.tags.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase border border-[var(--border)] px-3 py-1 rounded-full text-slate-400">#{t}</span>
                      ))}
                   </div>
                </div>

                <div className="w-full aspect-video mb-16 bg-slate-100 overflow-hidden">
                  <img src={selectedArticle.imageUrl} className="w-full h-full object-cover" />
                </div>

                <div 
                  className="article-body serif-content"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content || `<p>${selectedArticle.answer}</p>` }}
                />

                {/* Article Navigation */}
                <div className="mt-24 pt-12 border-t border-[var(--border)] grid grid-cols-2 gap-8">
                  <div className="group cursor-pointer" onClick={() => nav.prev && setSelectedArticle(nav.prev)}>
                    {nav.prev && (
                      <div className="text-left">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                          <ArrowLeft size={12} /> Anterior
                        </div>
                        <div className="font-serif text-xl group-hover:italic transition-all">{nav.prev.question}</div>
                      </div>
                    )}
                  </div>
                  <div className="group cursor-pointer text-right" onClick={() => nav.next && setSelectedArticle(nav.next)}>
                    {nav.next && (
                      <div className="text-right">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center justify-end gap-2">
                          Próximo <ArrowRight size={12} />
                        </div>
                        <div className="font-serif text-xl group-hover:italic transition-all">{nav.next.question}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

function X({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
}