
import React, { useMemo } from 'react';
import { Printer, Share2, ArrowLeft, ArrowRight } from 'lucide-react';
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
  const htmlContent = useMemo(() => {
    return marked.parse(article.content || article.answer);
  }, [article.content, article.answer]);

  return (
    <div className="reveal">
      <nav className="flex items-center gap-8 mb-12 text-[12px] font-bold uppercase tracking-[0.5em] text-stone-400 no-print">
        <button onClick={onBack} className="hover:text-[var(--text-main)] transition-colors underline decoration-stone-200 underline-offset-8">Voltar</button>
        <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
        <span className="text-[var(--text-main)]">{article.category}</span>
      </nav>

      <header className="mb-16 space-y-12">
        <h1 className="text-5xl lg:text-7xl font-serif font-light leading-tight tracking-tight">
          {article.question}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[var(--border)] pt-12">
          <div className="lg:col-span-8">
             <p className="text-2xl lg:text-3xl text-stone-400 font-serif italic leading-relaxed">
               {article.answer}
             </p>
          </div>
          <div className="lg:col-span-4 no-print">
             <div className="flex flex-col gap-6 text-[12px] font-bold uppercase tracking-widest bg-stone-50 dark:bg-white/5 p-6 border border-[var(--border)]">
                <div className="flex justify-between border-b border-[var(--border)] pb-3">
                  <span className="opacity-40">Publicação</span>
                  <span>{article.date}</span>
                </div>
                <div className="flex gap-4">
                   <button onClick={() => window.print()} className="flex-1 py-4 border border-[var(--border)] hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] transition-all flex items-center justify-center gap-3">
                     <Printer size={16} strokeWidth={1} /> PDF
                   </button>
                   <button className="p-4 border border-[var(--border)] hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] transition-all">
                     <Share2 size={16} strokeWidth={1} />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </header>

      <FadeInSection className="max-w-4xl pb-40">
        <div className="article-content-render text-xl font-light leading-relaxed text-stone-600 dark:text-stone-300 space-y-8" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        
        <footer className="mt-32 pt-20 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-2 gap-24 no-print">
          {nav.prev && (
            <button onClick={() => onNavigate(nav.prev)} className="group text-left space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-widest text-stone-300 group-hover:text-[var(--text-main)] transition-colors flex items-center gap-4">
                <ArrowLeft size={16} /> Anterior
              </span>
              <h4 className="text-2xl font-serif font-light group-hover:translate-x-4 transition-transform duration-700">
                {nav.prev.question}
              </h4>
            </button>
          )}
          {nav.next && (
            <button onClick={() => onNavigate(nav.next)} className="group text-right md:col-start-2 space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-widest text-stone-300 group-hover:text-[var(--text-main)] transition-colors flex items-center gap-4 justify-end">
                Próximo <ArrowRight size={16} />
              </span>
              <h4 className="text-2xl font-serif font-light group-hover:-translate-x-4 transition-transform duration-700">
                {nav.next.question}
              </h4>
            </button>
          )}
        </footer>
      </FadeInSection>
    </div>
  );
};
