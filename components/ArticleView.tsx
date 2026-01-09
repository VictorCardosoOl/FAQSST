import React, { useMemo, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
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
    const rawHtml = marked.parse(article.content || article.answer) as string;
    return DOMPurify.sanitize(rawHtml);
  }, [article.content, article.answer]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  return (
    <div className="reveal">
      <nav className="flex items-center gap-6 mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)] no-print">
        <button onClick={onBack} className="hover:text-[var(--text-main)] transition-colors underline decoration-stone-400 underline-offset-4">Voltar</button>
        <div className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
        <span className="text-[var(--text-main)] truncate max-w-[200px]">{article.category}</span>
      </nav>

      <header className="mb-12 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light leading-[1.1] tracking-tight text-[var(--text-main)]">
          {article.question}
        </h1>

        <div className="border-t border-[var(--border)] pt-8 max-w-4xl">
          <p className="text-xl md:text-3xl text-[var(--text-muted)] font-serif italic leading-relaxed">
            {article.answer}
          </p>
        </div>
      </header>

      <FadeInSection className="max-w-4xl pb-24">
        <div
          className="article-content-render text-lg md:text-[1.35rem] font-normal leading-relaxed text-[var(--text-body)] space-y-8 prose dark:prose-invert prose-stone max-w-none prose-p:mb-8"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <footer className="mt-20 pt-10 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-12 no-print">
          {nav.prev && (
            <button onClick={() => onNavigate(nav.prev)} className="group text-left space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2.5">
                <ArrowLeft size={14} /> Anterior
              </span>
              <h4 className="text-xl font-serif font-light group-hover:translate-x-2 transition-transform duration-700 text-[var(--text-main)] line-clamp-2">
                {nav.prev.question}
              </h4>
            </button>
          )}
          {nav.next && (
            <button onClick={() => onNavigate(nav.next)} className="group text-right sm:col-start-2 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2.5 justify-end">
                Próximo <ArrowRight size={14} />
              </span>
              <h4 className="text-xl font-serif font-light group-hover:-translate-x-2 transition-transform duration-700 text-[var(--text-main)] line-clamp-2">
                {nav.next.question}
              </h4>
            </button>
          )}
        </footer>
      </FadeInSection>
    </div>
  );
};