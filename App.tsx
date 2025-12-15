import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MessageSquare, 
  ChevronRight, 
  BookOpen, 
  Menu, 
  X,
  Sparkles,
  Send,
  Users,
  Info,
  Monitor,
  TrendingUp,
  PiggyBank,
  FileText,
  LayoutGrid,
  ChevronLeft,
  Moon,
  Briefcase
} from 'lucide-react';
import { FAQ_DATA } from './constants';
import { Category, FAQItem } from './types';
import { askGemini } from './services/geminiService';

// --- Constants & Config ---

const CATEGORY_META: Record<Category, { icon: React.FC<any>, description: string }> = {
  [Category.COLETIVO]: {
    icon: Briefcase,
    description: "Módulo destinado ao tratamento de questões internas relacionadas ao suporte."
  },
  [Category.GERAL]: {
    icon: Info,
    description: "Informações gerais sobre o funcionamento e regras básicas do escritório."
  },
  [Category.RH]: {
    icon: Users,
    description: "Tudo sobre férias, benefícios, cultura e gestão de pessoas."
  },
  [Category.TI]: {
    icon: Monitor,
    description: "Suporte técnico, senhas, VPN e configuração de equipamentos."
  },
  [Category.VENDAS]: {
    icon: TrendingUp,
    description: "Processos comerciais, tabelas de preços e guias de venda."
  },
  [Category.FINANCEIRO]: {
    icon: PiggyBank,
    description: "Reembolsos, notas fiscais e processos financeiros."
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
      w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
      ${active 
        ? 'bg-slate-100 text-slate-900' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
    `}
  >
    <Icon size={18} />
    {label}
  </button>
);

const ModuleCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  onClick: () => void 
}> = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick 
}) => (
  <button 
    onClick={onClick}
    className="flex flex-col text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group h-full"
  >
    <div className="mb-4 text-slate-700 group-hover:text-blue-600 transition-colors">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </button>
);

const ArticleCard: React.FC<{ item: FAQItem, onClick: () => void }> = ({ item, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full text-left w-full"
    >
      <h3 className="font-bold text-slate-900 mb-3 text-base leading-snug group-hover:text-blue-600 transition-colors">{item.question}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
        {item.answer}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto border-t border-slate-50 pt-4 w-full">
        {item.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            #{tag}
          </span>
        ))}
      </div>
    </button>
  );
};

// --- Main App ---

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<FAQItem | null>(null); // New State for Article View
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // AI State
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);

  // Constants for view logic
  const isSearching = searchQuery.length > 0;
  // Show grid if no category selected AND not searching AND not viewing a specific article
  const showGrid = !selectedCategory && !isSearching && !selectedArticle;

  // Filter Logic
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
    setSelectedArticle(null); // Reset article view
    setSearchQuery(''); 
    setIsMobileMenuOpen(false);
  };

  const handleArticleClick = (item: FAQItem) => {
    setSelectedArticle(item);
  };

  const handleBackToModule = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="flex h-screen bg-white text-slate-800 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-slate-50 border-r border-slate-200 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 flex flex-col
        `}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="text-lg font-bold text-slate-900">TeamWiki</span>
          </div>

          <div className="space-y-1">
            <SidebarItem 
              icon={LayoutGrid} 
              label="Todos os Módulos" 
              active={selectedCategory === null} 
              onClick={() => handleSidebarClick(null)} 
            />
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
        
        <div className="mt-auto p-6 border-t border-slate-200">
           <div className="flex items-center justify-between text-slate-400 mb-4">
              <span className="text-xs">© 2024 TeamWiki</span>
              <Moon size={16} />
           </div>
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative min-w-0">
        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 bg-white">
           <button onClick={() => setIsMobileMenuOpen(true)}>
             <Menu className="text-slate-600" />
           </button>
           <span className="font-bold text-slate-900">TeamWiki</span>
           <div className="w-6" /> {/* spacer */}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 md:px-12 py-8 md:py-12">
          
          {/* VIEW 1: HOME GRID */}
          {showGrid && (
            <>
              <div className="max-w-5xl mx-auto mb-12 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Base de Conhecimento
                </h1>
                <p className="text-slate-500 text-lg">
                  Navegue pelos módulos para encontrar guias, soluções e respostas.
                </p>
              </div>

              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                 {Object.values(Category).map((cat) => {
                   const meta = CATEGORY_META[cat];
                   return (
                     <ModuleCard 
                        key={cat}
                        title={cat}
                        description={meta.description}
                        icon={meta.icon}
                        onClick={() => setSelectedCategory(cat)}
                     />
                   );
                 })}
                 <ModuleCard 
                    title="Assistente IA"
                    description="Use nossa inteligência artificial para responder perguntas complexas."
                    icon={Sparkles}
                    onClick={() => setShowAiModal(true)}
                 />
              </div>
            </>
          )}

          {/* VIEW 2: ARTICLE DETAIL (FULL SCREEN) */}
          {selectedArticle && (
             <div className="max-w-4xl mx-auto pb-24 animate-fadeIn">
                <button 
                  onClick={handleBackToModule}
                  className="mb-6 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm"
                >
                  <ChevronLeft size={16} /> Voltar para {selectedArticle.category}
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-8 md:p-12">
                   {/* Render Content HTML safely */}
                   <div 
                     className="article-content"
                     dangerouslySetInnerHTML={{ __html: selectedArticle.content || `<p>${selectedArticle.answer}</p>` }} 
                   />
                </div>
             </div>
          )}

          {/* VIEW 3: MODULE LIST (Articles Grid) */}
          {!showGrid && !selectedArticle && (
            <div className="max-w-7xl mx-auto pb-24 animate-fadeIn">
              
              {/* Breadcrumbs & Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <button onClick={() => { setSelectedCategory(null); setSearchQuery(''); }} className="hover:text-slate-600 transition-colors">Início</button>
                  <span>/</span>
                  <span className="font-medium text-slate-600">
                    {selectedCategory || "Busca"}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  {selectedCategory && (
                     <button 
                       onClick={() => setSelectedCategory(null)}
                       className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors md:hidden"
                     >
                       <ChevronLeft size={24} />
                     </button>
                  )}
                  <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                     {selectedCategory || "Resultados da Busca"}
                  </h1>
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
                <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 mb-3">
                    <Search className="text-slate-400" size={24} />
                  </div>
                  <h3 className="text-slate-900 font-medium">Nenhum resultado encontrado</h3>
                  <button 
                    onClick={() => { setShowAiModal(true); }}
                    className="mt-4 text-blue-600 font-medium hover:underline text-sm"
                  >
                    Perguntar ao Assistente IA
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Floating Search Bar (Bottom centered) */}
        {!selectedArticle && (
          <div className="absolute bottom-6 left-0 right-0 px-4 flex justify-center pointer-events-none">
            <div className="w-full max-w-2xl bg-white rounded-full shadow-lg border border-slate-200 p-2 flex items-center pointer-events-auto ring-1 ring-slate-100">
              
              {/* Left pill part: Filter indicator */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mr-2 flex-shrink-0">
                  <Search size={16} className="text-slate-500" />
                  <span>{selectedCategory || "Todos os Módulos"}</span>
              </div>

              {/* Mobile icon */}
              <div className="sm:hidden pl-3 text-slate-400">
                  <Search size={20} />
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-6 bg-slate-200 mx-1"></div>

              {/* Input */}
              <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar artigos..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 px-4 py-2"
              />

              {/* AI Action Button (Small) */}
              <button 
                  onClick={() => setShowAiModal(true)}
                  className="p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors ml-2"
                  title="Assistente IA"
              >
                  <Sparkles size={16} className="text-yellow-400" />
              </button>
            </div>
          </div>
        )}

      </main>

      {/* AI Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[85vh] animate-fadeIn">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-2xl">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                   <Sparkles size={20} />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900">Assistente Inteligente</h3>
                   <p className="text-xs text-slate-500">Baseado no seu conteúdo</p>
                 </div>
               </div>
               <button onClick={() => setShowAiModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X size={20} />
               </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow bg-white">
              {!aiAnswer && !isAiLoading && (
                <div className="text-center py-8">
                  <p className="text-slate-500 text-sm">Como posso ajudar você hoje?</p>
                </div>
              )}
              
              {isAiLoading && (
                 <div className="space-y-3">
                    <div className="h-4 bg-slate-100 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-slate-100 rounded w-1/2 animate-pulse"></div>
                 </div>
              )}

              {aiAnswer && (
                 <div className="prose prose-sm prose-slate max-w-none">
                    <p className="whitespace-pre-wrap leading-relaxed">{aiAnswer}</p>
                 </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl">
               <form onSubmit={handleAskAI} className="relative">
                 <input 
                   className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                   placeholder="Digite sua pergunta..."
                   value={aiQuestion}
                   onChange={(e) => setAiQuestion(e.target.value)}
                   autoFocus
                 />
                 <button 
                   type="submit" 
                   disabled={!aiQuestion.trim() || isAiLoading}
                   className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                 >
                   <Send size={18} />
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
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}