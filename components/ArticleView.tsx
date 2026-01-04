
import React, { useMemo, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Printer, Copy, Check, ChevronRight } from 'lucide-react';
import { marked } from 'marked';
import { FAQItem } from '../types';
import { FadeInSection } from './FadeInSection';

interface ArticleViewProps {
  article: FAQItem;
  onBack: () => void;
  onNavigate: (article: FAQItem | null) => void;
  nav: { prev: FAQItem | null; next: FAQItem | null };
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onNavigate, nav }) => {
  const [copied, setCopied] = React.useState(false);

  const htmlContent = useMemo(() => {
    return marked.parse(article.content || article.answer);
  }, [article.content, article.answer]);

  const handlePrint = () => window.print();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Efeito para adicionar botões de cópia em blockquotes injetados pelo marked
  useEffect(() => {
    const quotes = document.querySelectorAll('blockquote');
    quotes.forEach(quote => {
      if (quote.querySelector('.copy-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'copy-btn absolute top-4 right-4 p-2 bg-white dark:bg-white/10 border border-[var(--border)] rounded-lg text-stone-400 hover:text-indigo-500 transition-all no-print';
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
      btn.onclick = () => handleCopy(quote.innerText);
      quote.style.position = 'relative';
      quote.appendChild(btn);
    });
  }, [htmlContent]);

  return (
    <div className="pt-24 lg:pt-0 animate-reveal article-view-container">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 no-print">
        <button onClick={onBack} className="hover:text-indigo-500 transition-colors">Acervo</button>
        <ChevronRight size={10} />
        <span className="text-stone-300 dark:text-stone-600">{article.category}</span>
        <ChevronRight size={10} />
        <span className="text-indigo-500 truncate max-w-[200px]">{article.question}</span>
      </nav>

      <div className="flex items-center justify-between mb-16 no-print">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-stone-400 hover:text-[var(--text-main)] transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Voltar ao Acervo
        </button>

        <button 
          onClick={handlePrint}
          className="flex items-center gap-3 px-6 py-3 border border-[var(--border)] rounded-full text-[11px] font-bold uppercase tracking-widest text-stone-400 hover:text-indigo-600 hover:border-indigo-200 transition-all group"
        >
          <Printer size={16} className="group-hover:scale-110 transition-transform" /> Imprimir Processo
        </button>
      </div>

      <header className="relative mb-40 lg:mb-64">
        <div className="grid grid-cols-12 items-end">
          <div className="col-span-12 lg:col-span-9 relative z-10 pb-16 lg:pb-40">
            <div className="text-[12px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-10">{article.category}</div>
            <h1 className="text-6xl lg:text-[9rem] font-serif italic leading-[0.85] tracking-tighter mb-16">{article.question}</h1>
            <p className="text-2xl lg:text-3xl text-stone-500 font-serif italic max-w-xl leading-relaxed">{article.answer}</p>
          </div>
          <div className="col-span-12 lg:col-span-10 lg:col-start-3 absolute top-0 right-0 h-[65vh] lg:h-[95vh] w-full lg:w-[85%] -z-10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700">
            <img src={article.imageUrl} className="w-full h-full object-cover brightness-[0.85] lg:brightness-100" alt="" />
          </div>
        </div>
      </header>

      <FadeInSection>
        <article className="max-w-4xl mx-auto">
           <div className="flex flex-wrap gap-3 justify-center mb-24 no-print">
              {article.tags.map(t => (
                <span key={t} className="px-6 py-2.5 border border-[var(--border)] rounded-full text-[11px] font-bold uppercase text-stone-400">
                  # {t}
                </span>
              ))}
           </div>
           
           <div 
            className="article-content-render serif-content transition-all duration-500" 
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
           />
           
           <footer className="mt-64 pt-32 border-t border-[var(--border)] grid grid-cols-1 lg:grid-cols-2 gap-20 no-print">
              {nav.prev && (
                <button onClick={() => onNavigate(nav.prev)} className="group text-left space-y-6">
                  <p className="text-[11px] font-bold uppercase text-stone-400 flex items-center gap-3 group-hover:text-indigo-600 transition-colors">
                    <ArrowLeft size={16} /> Anterior
                  </p>
                  <h4 className="text-3xl font-serif italic group-hover:translate-x-3 transition-transform">{nav.prev.question}</h4>
                </button>
              )}
              {nav.next && (
                <button onClick={() => onNavigate(nav.next)} className="group text-right space-y-6 lg:col-start-2">
                  <p className="text-[11px] font-bold uppercase text-stone-400 flex items-center justify-end gap-3 group-hover:text-indigo-600 transition-colors">
                    Próximo <ArrowRight size={16} />
                  </p>
                  <h4 className="text-3xl font-serif italic group-hover:-translate-x-3 transition-transform">{nav.next.question}</h4>
                </button>
              )}
           </footer>
        </article>
      </FadeInSection>

      {/* Floating feedback for copy */}
      <div className={`fixed bottom-12 right-12 z-50 flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-2xl transition-all duration-500 transform ${copied ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <Check size={16} /> <span className="text-xs font-bold uppercase tracking-widest">Copiado para área de transferência</span>
      </div>
    </div>
  );
};
