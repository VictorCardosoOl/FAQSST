
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FAQItem } from '../../types';

interface ArticleNavigationProps {
  nav: { prev: FAQItem | null; next: FAQItem | null };
  onNavigate: (article: FAQItem) => void;
}

export const ArticleNavigation: React.FC<ArticleNavigationProps> = ({ nav, onNavigate }) => {
  return (
    <footer className="mt-[var(--space-lg)] pt-[var(--space-md)] border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-md)] no-print">
      {nav.prev ? (
        <button 
          onClick={() => onNavigate(nav.prev!)} 
          className="group text-left space-y-2 hover:bg-stone-50 dark:hover:bg-white/5 p-4 -ml-4 rounded-xl transition-colors"
        >
          <span className="type-tiny font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2">
            <ArrowLeft size={12} /> Anterior
          </span>
          <h4 className="type-body font-serif text-[var(--text-main)] opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
            {nav.prev.question}
          </h4>
        </button>
      ) : <div />}

      {nav.next && (
        <button 
          onClick={() => onNavigate(nav.next!)} 
          className="group text-right space-y-2 hover:bg-stone-50 dark:hover:bg-white/5 p-4 -mr-4 rounded-xl transition-colors"
        >
          <span className="type-tiny font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2 justify-end">
            Próximo <ArrowRight size={12} />
          </span>
          <h4 className="type-body font-serif text-[var(--text-main)] opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
            {nav.next.question}
          </h4>
        </button>
      )}
    </footer>
  );
};
