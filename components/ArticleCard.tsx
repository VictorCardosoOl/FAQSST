
import React from 'react';
import { Plus, Check, ArrowRight } from 'lucide-react';
import { FAQItem } from '../types';

interface ArticleCardProps {
  item: FAQItem;
  onClick: () => void;
  isInQueue: boolean;
  onToggleQueue: (e: React.MouseEvent) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ item, onClick, isInQueue, onToggleQueue, featured }) => (
  <div 
    onClick={onClick}
    className={`group cursor-pointer relative py-8 border-b border-[var(--border)] transition-all duration-700 lg:hover:pl-6 reveal`}
  >
    <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[var(--text-main)] scale-y-0 lg:group-hover:scale-y-100 transition-transform duration-700 origin-top" />

    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
           <span className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">
             {item.category}
           </span>
           <div className="w-6 h-[0.5px] bg-stone-200" />
           <span className="text-xs font-medium text-stone-400">
             {item.date}
           </span>
        </div>
        
        <button 
          onClick={onToggleQueue}
          className={`p-2 rounded-full transition-all duration-500 ${
            isInQueue ? 'text-indigo-500 bg-indigo-50/50' : 'text-stone-300 hover:text-[var(--text-main)]'
          }`}
        >
          {isInQueue ? <Check size={18} /> : <Plus size={18} />}
        </button>
      </div>
      
      <h3 className={`${featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-serif font-light leading-snug transition-transform duration-700 max-w-4xl`}>
        {item.question}
      </h3>
      
      <p className="text-base text-stone-500 font-light leading-relaxed line-clamp-2 max-w-3xl">
        {item.answer}
      </p>
      
      <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-2 lg:group-hover:translate-y-0">
        Acessar <ArrowRight size={14} strokeWidth={1} />
      </div>
    </div>
  </div>
);
