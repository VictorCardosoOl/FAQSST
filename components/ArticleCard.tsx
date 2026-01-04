
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
    className={`group cursor-pointer relative py-12 border-b border-[var(--border)] transition-all duration-700 hover:pl-6 reveal ${featured ? 'md:col-span-2' : ''}`}
  >
    {/* Indicador lateral de hover */}
    <div className="absolute left-0 top-12 bottom-12 w-[1px] bg-[var(--text-main)] scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />

    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
           <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-400">
             {item.category}
           </span>
           <div className="w-6 h-[0.5px] bg-stone-200" />
           <span className="text-[9px] font-medium text-stone-400">
             {item.date}
           </span>
        </div>
        
        <button 
          onClick={onToggleQueue}
          className={`p-2 rounded-full transition-all duration-500 ${
            isInQueue ? 'text-indigo-500' : 'text-stone-300 hover:text-[var(--text-main)]'
          }`}
        >
          {isInQueue ? <Check size={14} /> : <Plus size={14} />}
        </button>
      </div>
      
      <h3 className={`${featured ? 'text-4xl lg:text-5xl' : 'text-2xl'} font-serif font-light leading-tight transition-transform duration-700 max-w-2xl`}>
        {item.question}
      </h3>
      
      <p className="text-sm text-stone-400 font-light leading-relaxed line-clamp-2 max-w-xl">
        {item.answer}
      </p>
      
      <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
        Acessar Documento <ArrowRight size={12} strokeWidth={1.5} />
      </div>
    </div>
  </div>
);
