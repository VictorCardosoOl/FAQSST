
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Sparkles, ArrowLeft, Moon, Sun, ArrowRight,
  X, Tag as TagIcon, Layers, Compass, Menu
} from 'lucide-react';
import { FAQ_DATA } from './constants';
import { Category, FAQItem } from './types';
import { askGemini } from './services/geminiService';

// --- Sub-componentes ---

const Sidebar = ({ currentCat, onSelect, isDarkMode, toggleDark }: any) => (
  <aside className="fixed left-8 top-8 bottom-8 w-64 bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-3xl z-40 flex flex-col p-8 shadow-2xl shadow-black/5 hidden lg:flex">
    <div className="mb-12 flex items-center gap-3">
      <div className="w-9 h-9 bg-[var(--text-main)] rounded-full flex items-center justify-center text-[var(--bg-sidebar)]">
        <Layers size={18} />
      </div>
      <span className="text-xl font-serif font-bold tracking-tighter">TeamWiki</span>
    </div>

    <nav className="flex-1 space-y-1">
      <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4 px-3">Arquivos</p>
      <button 
        onClick={() => onSelect(null)}
        className={`sidebar-link flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${currentCat === null ? 'active bg-stone-50 dark:bg-white/5' : 'text-stone-400 hover:text-[var(--text-main)]'}`}
      >
        <Compass size={16} /> Todos
      </button>
      
      <div className="h-4" />
      <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4 px-3">Módulos</p>
      {Object.values(Category).map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`sidebar-link w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${currentCat === cat ? 'active bg-stone-50 dark:bg-white/5' : 'text-stone-400 hover:text-[var(--text-main)]'}`}
        >
          {cat}
        </button>
      ))}
    </nav>

    <button 
      onClick={toggleDark}
      className="mt-auto flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-[var(--text-main)] transition-colors border-t border-[var(--border)] pt-6"
    >
      {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  </aside>
);

const SearchBar = ({ query, setQuery, onAskAi }: any) => (
  <div className="relative group max-w-2xl stagger-item" style={{animationDelay: '0.1s'}}>
    <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-indigo-500 transition-colors" size={24} />
    <input 
      type="text"
      placeholder="Pesquise ou pergunte à IA..."
      className="w-full bg-transparent border-b border-[var(--border)] py-6 pl-12 focus:border-[var(--text-main)] outline-none text-3xl font-serif italic placeholder:opacity-20"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && onAskAi()}
    />
    {query.length > 3 && (
      <button 
        onClick={onAskAi}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
      >
        Perguntar <Sparkles size={12} />
      </button>
    )}
  </div>
);

const ArticleCard = ({ item, onClick, index }: any) => (
  <article 
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    className="group flex flex-col lg:flex-row gap-12 items-center cursor-pointer stagger-item border-b border-[var(--border)] pb-20"
    style={{animationDelay: `${0.2 + (index * 0.1)}s`}}
  >
    <div className="w-full lg:w-1/2 aspect-[16/10] overflow-hidden rounded-sm bg-stone-100 dark:bg-stone-900">
      <img 
        src={item.imageUrl} 
        alt={item.question}
        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
      />
    </div>
    <div className="flex-1 space-y-6">
      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
        <span className="text-indigo-600">{item.category}</span>
        <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
        <span>{item.date}</span>
      </div>
      <h3 className="text-5xl font-serif leading-tight group-hover:italic transition-all duration-500">{item.question}</h3>
      <p className="text-stone-500 text-lg font-serif italic line-clamp-2 max-w-md">{item.answer}</p>
      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group-hover:gap-6 transition-all">
        Explorar Documento <ArrowRight size={14} />
      </div>
    </div>
  </article>
);

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<FAQItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const filteredArticles = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCat = !selectedCategory || item.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = !query || item.question.toLowerCase().includes(query) || item.tags.some(t => t.toLowerCase().includes(query));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAskAi = async () => {
    if (!searchQuery) return;
    setLoading(true);
    const answer = await askGemini(searchQuery);
    setAiAnswer(answer);
    setLoading(false);
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
    <div className="flex min-h-screen bg-[var(--bg-main)]">
      <Sidebar 
        currentCat={selectedCategory} 
        onSelect={(c: any) => { setSelectedCategory(c); setSelectedArticle(null); }}
        isDarkMode={isDarkMode}
        toggleDark={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="flex-1 lg:ml-80 p-8 lg:p-24 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          
          {!selectedArticle ? (
            <section className="animate-reveal">
              <header className="mb-24 space-y-12">
                <h2 className="text-8xl font-serif italic tracking-tighter stagger-item">
                  {selectedCategory || "Knowledge Archive"}
                </h2>
                <SearchBar query={searchQuery} setQuery={setSearchQuery} onAskAi={handleAskAi} />
              </header>

              {aiAnswer && (
                <div className="mb-24 p-12 bg-[var(--bg-sidebar)] border border-indigo-100 dark:border-white/5 rounded-[2.5rem] relative stagger-item shadow-2xl shadow-indigo-500/5">
                  <div className="absolute top-0 left-12 w-1 h-full bg-indigo-600"></div>
                  <button onClick={() => setAiAnswer(null)} className="absolute top-8 right-8 text-stone-300 hover:text-stone-500"><X size={20} /></button>
                  <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Sparkles size={14} /> Resposta Inteligente
                  </p>
                  <p className="text-3xl font-serif italic leading-snug text-[var(--text-main)] max-w-4xl">"{aiAnswer}"</p>
                </div>
              )}

              <div className="space-y-32">
                {filteredArticles.map((item, i) => (
                  <ArticleCard key={item.id} item={item} index={i} onClick={() => { setSelectedArticle(item); window.scrollTo({top: 0, behavior: 'smooth'}); }} />
                ))}
              </div>
            </section>
          ) : (
            <section className="animate-reveal pb-32">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="mb-16 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-[var(--text-main)] group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Voltar à Coleção
              </button>

              <header className="relative mb-40">
                <div className="grid grid-cols-12 items-end">
                  <div className="col-span-12 lg:col-span-8 relative z-10 pb-12 lg:pb-32">
                    <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-600 mb-8">{selectedArticle.category}</div>
                    <h1 className="text-7xl lg:text-[8.5rem] font-serif italic leading-[0.85] tracking-tighter mb-12">{selectedArticle.question}</h1>
                    <p className="text-2xl text-stone-500 font-serif italic max-w-lg leading-relaxed">{selectedArticle.answer}</p>
                  </div>
                  <div className="col-span-12 lg:col-span-9 lg:col-start-4 absolute top-0 right-0 h-[85vh] w-full lg:w-3/4 -z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img src={selectedArticle.imageUrl} className="w-full h-full object-cover contrast-[1.1]" alt="Hero" />
                  </div>
                </div>
                <div className="h-40 lg:h-[40vh]"></div>
              </header>

              <div className="max-w-3xl mx-auto space-y-12">
                 <div className="flex flex-wrap gap-2 justify-center mb-16">
                    {selectedArticle.tags.map(t => <span key={t} className="px-4 py-1.5 border border-[var(--border)] rounded-full text-[10px] font-bold uppercase text-stone-400"># {t}</span>)}
                 </div>
                 <div className="article-body serif-content" dangerouslySetInnerHTML={{ __html: selectedArticle.content || selectedArticle.answer }} />
                 
                 <footer className="mt-40 pt-20 border-t border-[var(--border)] grid grid-cols-2 gap-12">
                    <div 
                      onClick={() => nav.prev && setSelectedArticle(nav.prev)}
                      className={`group cursor-pointer ${!nav.prev && 'opacity-0 pointer-events-none'}`}
                    >
                      <p className="text-[10px] font-bold uppercase text-stone-400 mb-4 flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                        <ArrowLeft size={14} /> Anterior
                      </p>
                      <h4 className="text-3xl font-serif italic group-hover:translate-x-2 transition-transform">{nav.prev?.question}</h4>
                    </div>
                    <div 
                      onClick={() => nav.next && setSelectedArticle(nav.next)}
                      className={`group cursor-pointer text-right ${!nav.next && 'opacity-0 pointer-events-none'}`}
                    >
                      <p className="text-[10px] font-bold uppercase text-stone-400 mb-4 flex items-center justify-end gap-2 group-hover:text-indigo-600 transition-colors">
                        Próximo <ArrowRight size={14} />
                      </p>
                      <h4 className="text-3xl font-serif italic group-hover:-translate-x-2 transition-transform">{nav.next?.question}</h4>
                    </div>
                 </footer>
              </div>
            </section>
          )}
        </div>
      </main>

      <style>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .stagger-item { opacity: 0; animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
