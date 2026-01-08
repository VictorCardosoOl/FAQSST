
import React, { useMemo } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
      <nav className="flex items-center gap-8 mb-8 text-xs font-bold uppercase tracking-[0.4em] text-stone-500 dark:text-stone-400 no-print">
        <button onClick={onBack} className="hover:text-[var(--text-main)] transition-colors underline decoration-stone-300 underline-offset-8">Voltar</button>
        <div className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700" />
        <span className="text-[var(--text-main)] truncate max-w-[150px]">{article.category}</span>
      </nav>

      <header className="mb-10 space-y-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight text-[var(--text-main)]">
          {article.question}
        </h1>
        
        <div className="border-t border-[var(--border)] pt-8 max-w-4xl">
           <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 font-serif italic leading-relaxed">
             {article.answer}
           </p>
        </div>
      </header>

      <FadeInSection className="max-w-4xl pb-20">
        <div 
          className="article-content-render text-xl md:text-[1.25rem] font-light leading-relaxed text-[var(--text-body)] space-y-6 prose dark:prose-invert prose-stone max-w-none" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
        
        <footer className="mt-20 pt-12 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-12 no-print">
          {nav.prev && (
            <button onClick={() => onNavigate(nav.prev)} className="group text-left space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-[var(--text-main)] transition-colors flex items-center gap-3">
                <ArrowLeft size={14} /> Anterior
              </span>
              <h4 className="text-xl font-serif font-light group-hover:translate-x-2 transition-transform duration-700 text-[var(--text-main)]">
                {nav.prev.question}
              </h4>
            </button>
          )}
          {nav.next && (
            <button onClick={() => onNavigate(nav.next)} className="group text-right sm:col-start-2 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-[var(--text-main)] transition-colors flex items-center gap-3 justify-end">
                Próximo <ArrowRight size={14} />
              </span>
              <h4 className="text-xl font-serif font-light group-hover:-translate-x-2 transition-transform duration-700 text-[var(--text-main)]">
                {nav.next.question}
              </h4>
            </button>
          )}
        </footer>
      </FadeInSection>
    </div>
  );
};
