
import React from 'react';
import { Plus, Check, ArrowRight } from 'lucide-react';
import { FAQItem } from '../types';
import { FadeInSection } from './FadeInSection';

interface ArticleCardProps {
  item: FAQItem;
  onClick: () => void;
  isInQueue: boolean;
  onToggleQueue: (e: React.MouseEvent) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ item, onClick, isInQueue, onToggleQueue, featured }) => (
  <FadeInSection>
    <div 
      onClick={onClick}
      className={`group cursor-pointer relative py-[var(--space-md)] border-b border-[var(--border)] transition-all duration-700 lg:hover:pl-4`}
    >
      {/* Indicador de Hover Lateral */}
      <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-[var(--text-main)] scale-y-0 lg:group-hover:scale-y-100 transition-transform duration-700 origin-top z-10" />

      <div className="space-y-[var(--space-sm)]">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <span className="type-tiny font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">
                 {item.category}
               </span>
               <div className="w-5 h-[0.5px] bg-[var(--border)]" />
               <span className="type-tiny font-medium text-[var(--text-muted)] tracking-widest opacity-70">
                 {item.date}
               </span>
            </div>
            
            <button 
              onClick={onToggleQueue}
              className={`p-2 rounded-full transition-all duration-500 z-20 ${
                isInQueue ? 'text-indigo-600 bg-indigo-50/80 dark:bg-indigo-900/30' : 'text-stone-500 hover:text-[var(--text-main)] hover:bg-stone-100 dark:hover:bg-white/5'
              }`}
            >
              {isInQueue ? <Check size={16} /> : <Plus size={16} />}
            </button>
          </div>
          
          <div className="max-w-4xl space-y-2">
            <h3 className={`${featured ? 'type-h1' : 'type-h2'} font-serif font-light leading-tight text-[var(--text-main)] transition-transform duration-700 group-hover:translate-x-1`}>
              {item.question}
            </h3>
            
            <p className={`text-[var(--text-muted)] font-light leading-relaxed line-clamp-2 transition-colors duration-500 group-hover:text-[var(--text-main)] ${featured ? 'type-body' : 'type-small'} max-w-3xl`}>
              {item.answer}
            </p>
          </div>
          
          <div className="flex items-center gap-2.5 type-tiny font-black uppercase tracking-[0.15em] text-[var(--text-muted)] opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-1 lg:group-hover:translate-y-0 pt-2">
            Explorar Diretriz <ArrowRight size={12} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  </FadeInSection>
);
