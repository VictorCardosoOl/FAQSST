
import React from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { FAQItem } from '../../types';

interface ArticleTopBarProps {
  category: string;
  nav: { prev: FAQItem | null; next: FAQItem | null };
  onBack: () => void;
  onNavigate: (article: FAQItem | null) => void;
}

export const ArticleTopBar: React.FC<ArticleTopBarProps> = ({ category, nav, onBack, onNavigate }) => {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 mb-[var(--space-lg)] no-print">
      <button 
        onClick={onBack} 
        className="group flex items-center gap-2 type-tiny font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Voltar para Lista
      </button>

      <div className="flex items-center gap-3 ml-auto sm:ml-0">
        <button 
          onClick={() => nav.prev && onNavigate(nav.prev)}
          disabled={!nav.prev}
          className={`p-2 rounded-full border border-[var(--border)] transition-all ${
            nav.prev 
              ? 'hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] cursor-pointer' 
              : 'opacity-30 cursor-not-allowed'
          }`}
          title={nav.prev ? `Anterior: ${nav.prev.question}` : 'Sem artigo anterior'}
        >
          <ChevronLeft size={14} />
        </button>

        <span className="type-tiny font-black uppercase tracking-[0.2em] px-3 py-1 bg-[var(--border)] rounded-full text-[var(--text-body)]">
          {category}
        </span>

        <button 
          onClick={() => nav.next && onNavigate(nav.next)}
          disabled={!nav.next}
          className={`p-2 rounded-full border border-[var(--border)] transition-all ${
            nav.next 
              ? 'hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] cursor-pointer' 
              : 'opacity-30 cursor-not-allowed'
          }`}
          title={nav.next ? `Próximo: ${nav.next.question}` : 'Sem próximo artigo'}
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </nav>
  );
};
