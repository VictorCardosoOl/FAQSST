import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Sparkles,
  Send,
  Users,
  Info,
  Monitor,
  TrendingUp,
  PiggyBank,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Briefcase,
  Menu,
  X,
  ThumbsUp,
  ThumbsDown,
  Check,
  ArrowRight,
  Filter
} from 'lucide-react';
import { FAQ_DATA } from './constants';
import { Category, FAQItem } from './types';
import { askGemini } from './services/geminiService';

// --- Constants & Config ---

const CATEGORY_META: Record<Category, { icon: React.FC<any>, description: string }> = {
  [Category.COLETIVO]: {
    icon: Briefcase,
    description: "Tratativa de questões internas e suporte."
  },
  [Category.GERAL]: {
    icon: Info,
    description: "Informações gerais e regras do escritório."
  },
  [Category.RH]: {
    icon: Users,
    description: "Férias, benefícios, cultura e RH."
  },
  [Category.TI]: {
    icon: Monitor,
    description: "Suporte técnico, VPN e equipamentos."
  },
  [Category.VENDAS]: {
    icon: TrendingUp,
    description: "Processos comerciais e guias de venda."
  },
  [Category.FINANCEIRO]: {
    icon: PiggyBank,
    description: "Reembolsos, notas fiscais e financeiro."
  }
};

// --- Helper Components ---

const SidebarItem: React.FC<{ 
  icon: React.ElementType; 
  label: string; 
  active: boolean; 
  onClick: () => void 
}> = ({ 
  icon: Icon, 
  label, 
  active, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className={`
      w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
      ${active 
        ? 'bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-sm' 
        : 'text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:shadow-sm'}
    `}
  >
    <Icon size={18} />
    {label}
  </button>
);

const ModuleCard: React.FC<{ 
  title: string; 
  description: string; 
  count: number;
  icon: React.ElementType; 
  onClick: () => void 
}> = ({ 
  title, 
  description, 
  count,
  icon: Icon, 
  onClick 
}) => (
  <button 
    onClick={onClick}
    className="flex flex-col text-left bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
       <Icon size={120} />
    </div>

    <div className="flex items-center justify-between mb-6 w-full z-10">
      <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        <Icon size={24} strokeWidth={2} />
      </div>
      <span className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-lg">
        {count} artigos
      </span>
    </div>
    
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 z-10">{title}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed z-10">{description}</p>
  </button>
);

const ArticleCard: React.FC<{ item: FAQItem, onClick: () => void }> = ({ item, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 transition-all flex flex-col h-full text-left w-full"
    >
      <div className="flex items-start justify-between w-full mb-3">
        <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
          {item.question}
        </h3>
        <ArrowRight size={18} className="text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
      </div>
      
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
        {item.answer}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto w-full">
        {item.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[11px] font-medium px-2 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-md border border-slate-100 dark:border-slate-700">
            #{tag}
          </span>
        ))}
        {item.tags.length > 3 && (
           <span className="text-[10px] px-1 py-1 text-slate-400">+{item.tags.length - 3}</span>
        )}
      </div>
    </button>
  );
};

// --- Main App ---

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<FAQItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Article Feedback State
  const [feedbackGiven, setFeedbackGiven] = useState<'yes' | 'no' | null>(null);

  // AI State
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);

  // Constants for view logic
  const isSearching = searchQuery.length > 0;
  // We only show the grid if we are not searching globally AND not viewing an article
  const showHomeGrid = !selectedCategory && !selectedArticle;

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle "Copy to Clipboard" buttons inside HTML content
  useEffect(() => {
    if (!selectedArticle) return;

    const contentDiv = document.querySelector('.article-content');
    if (!contentDiv) return;

    const handleCopyClick = async (e: Event) => {
      const target = (e.target as HTMLElement).closest('.copy-btn');
      if (!target) return;

      const textToCopy = target.getAttribute('data-copy');
      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          
          const originalContent = target.innerHTML;
          target.classList.add('copied');
          target.innerHTML = `<span class="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copiado!</span>`;
          
          setTimeout(() => {
            target.classList.remove('copied');
            target.innerHTML = originalContent;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy', err);
        }
      }
    };

    contentDiv.addEventListener('click', handleCopyClick);
    return () => contentDiv.removeEventListener('click', handleCopyClick);
  }, [selectedArticle]);


  // Logic: Calculate Article Counts per Module
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.values(Category).forEach(cat => counts[cat] = 0);
    
    FAQ_DATA.forEach(item => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });
    return counts;
  }, []);

  // Filter Logic
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      // If we are in "Home" (no category selected), we only show results if searching.
      // If we are in a Category, we filter by that category AND the search query.
      
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = !query || 
                            item.question.toLowerCase().includes(query) || 
                            item.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Logic: Previous / Next Navigation
  const navigationData = useMemo(() => {
    if (!selectedArticle) return null;
    
    // We navigate within the currently filtered list (contextual navigation)
    const currentIndex = filteredFAQs.findIndex(item => item.id === selectedArticle.id);
    
    if (currentIndex === -1) return null;

    return {
      prev: currentIndex > 0 ? filteredFAQs[currentIndex - 1] : null,
      next: currentIndex < filteredFAQs.length - 1 ? filteredFAQs[currentIndex + 1] : null
    };
  }, [selectedArticle, filteredFAQs]);


  // AI Handler
  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    setIsAiLoading(true);
    setAiAnswer(null);

    try {
      const answer = await askGemini(aiQuestion);
      setAiAnswer(answer);
    } catch (err) {
      setAiAnswer("Desculpe, ocorreu um erro.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSidebarClick = (cat: Category | null) => {
    setSelectedCategory(cat);
    setSelectedArticle(null);
    setSearchQuery(''); 
    setIsMobileMenuOpen(false);
  };

  const handleArticleClick = (item: FAQItem) => {
    setSelectedArticle(item);
    setFeedbackGiven(null);
    // Scroll to top
    const container = document.getElementById('main-scroll-container');
    if(container) container.scrollTo(0,0);
  };

  const handleBackToModule = () => {
    setSelectedArticle(null);
    setFeedbackGiven(null);
  };

  return (
    <div className={`flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans overflow-hidden selection:bg-blue-100 selection:text-blue-900`}>
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-72 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 flex flex-col shadow-[1px_0_20px_rgba(0,0,0,0.02)]
        `}
      >
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
              T
            </div>
            <div>
               <span className="block text-lg font-bold text-slate-900 dark:text-white leading-tight">TeamWiki</span>
               <span className="text-xs text-slate-500 font-medium">Knowledge Base</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">Menu</div>
            <SidebarItem 
              icon={LayoutGrid} 
              label="Todos os Módulos" 
              active={selectedCategory === null} 
              onClick={() => handleSidebarClick(null)} 
            />
            
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-4 px-4">Categorias</div>
            {Object.values(Category).map((cat) => (
              <SidebarItem 
                key={cat}
                icon={CATEGORY_META[cat].icon}
                label={cat}
                active={selectedCategory === cat}
                onClick={() => handleSidebarClick(cat)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800">
           <button 
             onClick={() => setIsDarkMode(!isDarkMode)} 
             className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors text-sm text-slate-500 dark:text-slate-400"
           >
              <span className="flex items-center gap-2">
                {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
              </span>
              <div className={`w-8 h-4 rounded-full relative transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-slate-300'}`}>
                 <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-200 ${isDarkMode ? 'left-4.5 translate-x-0.5' : 'left-0.5'}`}></div>
              </div>
           </button>
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative min-w-0 bg-white dark:bg-slate-900">
        
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-4">
                <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-slate-500">
                    <Menu />
                </button>
                
                {/* Breadcrumbs */}
                <nav className="hidden md:flex items-center text-sm">
                    <button 
                        onClick={() => handleSidebarClick(null)}
                        className={`hover:text-slate-900 dark:hover:text-white transition-colors ${!selectedCategory ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-500'}`}
                    >
                        Início
                    </button>
                    {selectedCategory && (
                        <>
                            <span className="mx-2 text-slate-300">/</span>
                            <span className={`font-semibold ${!selectedArticle ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                                {selectedCategory}
                            </span>
                        </>
                    )}
                </nav>
            </div>

            <div className="flex items-center gap-3">
                 <button 
                    onClick={() => setShowAiModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-500/10"
                >
                    <Sparkles size={16} className="text-yellow-400 dark:text-blue-600" />
                    <span className="hidden sm:inline">Assistente IA</span>
                </button>
            </div>
        </header>

        {/* Scrollable Content */}
        <div id="main-scroll-container" className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-slate-950/50 scroll-smooth">
          <div className="max-w-7xl mx-auto px-6 py-10 md:px-12 md:py-12">

            {/* VIEW 1: HOME GRID */}
            {showHomeGrid && (
              <div className="animate-fadeIn">
                <div className="mb-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                    Como podemos ajudar?
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
                    Explore os módulos abaixo para encontrar processos, guias e respostas para o seu dia a dia.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                  {Object.values(Category).map((cat) => {
                    const meta = CATEGORY_META[cat];
                    return (
                      <ModuleCard 
                          key={cat}
                          title={cat}
                          description={meta.description}
                          icon={meta.icon}
                          count={categoryCounts[cat] || 0}
                          onClick={() => setSelectedCategory(cat)}
                      />
                    );
                  })}
                  <ModuleCard 
                      title="Assistente IA"
                      description="Não encontrou o que procura? Pergunte à nossa Inteligência Artificial."
                      count={0}
                      icon={Sparkles}
                      onClick={() => setShowAiModal(true)}
                  />
                </div>
              </div>
            )}

            {/* VIEW 2: ARTICLE DETAIL */}
            {selectedArticle && (
              <div className="max-w-4xl mx-auto pb-24 animate-fadeIn">
                  <button 
                    onClick={handleBackToModule}
                    className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors">
                        <ChevronLeft size={16} /> 
                    </div>
                    Voltar para {selectedArticle.category}
                  </button>

                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    
                    {/* Header */}
                    <div className="px-8 pt-10 md:px-12 md:pt-12 pb-6 border-b border-slate-50 dark:border-slate-800/50">
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase rounded-full tracking-wider border border-blue-100 dark:border-blue-800">
                          {selectedArticle.category}
                        </span>
                        {selectedArticle.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase rounded-full tracking-wider border border-slate-100 dark:border-slate-700">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                        {selectedArticle.question}
                      </h1>
                    </div>

                    {/* Content */}
                    <div 
                      className="article-content px-8 py-8 md:px-12 md:py-12"
                      dangerouslySetInnerHTML={{ __html: selectedArticle.content || `<p>${selectedArticle.answer}</p>` }} 
                    />

                    {/* Feedback */}
                    <div className="bg-slate-50 dark:bg-black/20 px-8 py-10 md:px-12 border-t border-slate-200 dark:border-slate-800 text-center">
                        {!feedbackGiven ? (
                          <div className="flex flex-col items-center gap-4">
                            <p className="text-slate-600 dark:text-slate-400 font-medium">Este artigo foi útil?</p>
                            <div className="flex gap-4">
                              <button 
                                onClick={() => setFeedbackGiven('yes')}
                                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all shadow-sm"
                              >
                                <ThumbsUp size={18} /> Sim
                              </button>
                              <button 
                                onClick={() => setFeedbackGiven('no')}
                                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all shadow-sm"
                              >
                                <ThumbsDown size={18} /> Não
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2 animate-fadeIn">
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                              <Check size={24} />
                            </div>
                            <p className="text-slate-900 dark:text-white font-semibold">Obrigado pelo seu feedback!</p>
                          </div>
                        )}
                    </div>

                    {/* Navigation Footer (Prev/Next) */}
                    {(navigationData?.prev || navigationData?.next) && (
                      <div className="grid grid-cols-2 border-t border-slate-200 dark:border-slate-800 divide-x divide-slate-200 dark:divide-slate-800">
                         <div className="p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            {navigationData.prev ? (
                               <button onClick={() => handleArticleClick(navigationData.prev!)} className="w-full text-left group">
                                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-2">
                                     <ChevronLeft size={14} /> Anterior
                                  </div>
                                  <div className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                                     {navigationData.prev.question}
                                  </div>
                               </button>
                            ) : (
                              <div className="text-slate-300 dark:text-slate-700 text-sm italic">Início do módulo</div>
                            )}
                         </div>
                         <div className="p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-right">
                            {navigationData.next ? (
                               <button onClick={() => handleArticleClick(navigationData.next!)} className="w-full text-right group">
                                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-2 justify-end">
                                     Próximo <ChevronRight size={14} />
                                  </div>
                                  <div className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                                     {navigationData.next.question}
                                  </div>
                               </button>
                            ) : (
                              <div className="text-slate-300 dark:text-slate-700 text-sm italic">Fim do módulo</div>
                            )}
                         </div>
                      </div>
                    )}
                  </div>
              </div>
            )}

            {/* VIEW 3: MODULE LIST (Articles Grid) */}
            {selectedCategory && !selectedArticle && (
              <div className="max-w-7xl mx-auto pb-24 animate-fadeIn">
                
                {/* Module Header & Search Filter */}
                <div className="mb-10">
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                           <button 
                             onClick={() => handleSidebarClick(null)}
                             className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors md:hidden"
                           >
                             <ChevronLeft size={20} />
                           </button>
                           <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                              {selectedCategory}
                           </h1>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400">
                           {filteredFAQs.length} {filteredFAQs.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
                        </p>
                      </div>

                      {/* Filter Search Input */}
                      <div className="relative w-full md:w-96">
                         <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search size={18} />
                         </div>
                         <input 
                           type="text"
                           placeholder={`Buscar em ${selectedCategory}...`}
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                           className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm text-slate-900 dark:text-white"
                         />
                         {searchQuery && (
                           <button 
                             onClick={() => setSearchQuery('')}
                             className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                           >
                             <X size={16} />
                           </button>
                         )}
                      </div>
                   </div>
                </div>

                {/* Articles Grid */}
                {filteredFAQs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredFAQs.map(item => (
                      <ArticleCard key={item.id} item={item} onClick={() => handleArticleClick(item)} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 mb-4">
                      <Filter className="text-slate-400" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Nenhum artigo encontrado</h3>
                    <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                       Não encontramos resultados para "{searchQuery}" neste módulo.
                    </p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Limpar filtro
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </main>

      {/* AI Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[85vh] animate-fadeIn border border-slate-200 dark:border-slate-700">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50 rounded-t-2xl">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-md shadow-blue-500/20">
                   <Sparkles size={20} />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900 dark:text-white leading-tight">Assistente Inteligente</h3>
                   <p className="text-xs text-slate-500 dark:text-slate-400">Powered by Gemini</p>
                 </div>
               </div>
               <button onClick={() => setShowAiModal(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <X size={20} />
               </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow bg-white dark:bg-slate-900">
              {!aiAnswer && !isAiLoading && (
                <div className="text-center py-12">
                   <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                      <Sparkles size={24} />
                   </div>
                  <p className="text-slate-900 dark:text-white font-medium mb-1">Como posso ajudar?</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Faça uma pergunta sobre os processos da empresa.</p>
                </div>
              )}
              
              {isAiLoading && (
                 <div className="space-y-4 max-w-sm mx-auto py-8">
                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-4/6 animate-pulse"></div>
                 </div>
              )}

              {aiAnswer && (
                 <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 mb-4">
                       <p className="text-xs font-bold text-blue-600 dark:text-blue-300 uppercase tracking-wider mb-1">Resposta</p>
                       <p className="whitespace-pre-wrap leading-relaxed text-slate-700 dark:text-slate-200">{aiAnswer}</p>
                    </div>
                 </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 rounded-b-2xl">
               <form onSubmit={handleAskAI} className="relative">
                 <input 
                   className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 pr-12 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                   placeholder="Digite sua pergunta..."
                   value={aiQuestion}
                   onChange={(e) => setAiQuestion(e.target.value)}
                   autoFocus
                 />
                 <button 
                   type="submit" 
                   disabled={!aiQuestion.trim() || isAiLoading}
                   className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg transition-all hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 shadow-md shadow-blue-600/20"
                 >
                   <Send size={16} />
                 </button>
               </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}