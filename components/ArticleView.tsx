
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
      <nav className="flex items-center gap-8 mb-12 text-xs font-bold uppercase tracking-[0.4em] text-stone-400 no-print">
        <button onClick={onBack} className="hover:text-[var(--text-main)] transition-colors underline decoration-stone-200 underline-offset-8">Voltar</button>
        <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
        <span className="text-[var(--text-main)] truncate max-w-[150px]">{article.category}</span>
      </nav>

      <header className="mb-16 space-y-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-tight">
          {article.question}
        </h1>
        
        <div className="border-t border-[var(--border)] pt-12 max-w-4xl">
           <p className="text-2xl md:text-3xl text-stone-400 font-serif italic leading-relaxed">
             {article.answer}
           </p>
        </div>
      </header>

      <FadeInSection className="max-w-4xl pb-40">
        <div className="article-content-render text-xl font-light leading-relaxed text-stone-600 dark:text-stone-300 space-y-12" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        
        <footer className="mt-32 pt-20 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-12 no-print">
          {nav.prev && (
            <button onClick={() => onNavigate(nav.prev)} className="group text-left space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-300 group-hover:text-[var(--text-main)] transition-colors flex items-center gap-4">
                <ArrowLeft size={16} /> Anterior
              </span>
              <h4 className="text-2xl font-serif font-light group-hover:translate-x-4 transition-transform duration-700">
                {nav.prev.question}
              </h4>
            </button>
          )}
          {nav.next && (
            <button onClick={() => onNavigate(nav.next)} className="group text-right sm:col-start-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-300 group-hover:text-[var(--text-main)] transition-colors flex items-center gap-4 justify-end">
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
