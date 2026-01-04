
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FAQItem } from '../types';

interface ArticleCardProps {
  item: FAQItem;
  onClick: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ item, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg-main)] transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="aspect-[16/9] overflow-hidden">
      <img 
        src={item.imageUrl} 
        alt="" 
        className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110 group-hover:rotate-1"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-60"></div>
    </div>
    
    <div className="p-8 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-500">{item.category}</span>
        <span className="text-[9px] font-medium text-stone-400 uppercase tracking-widest">{item.date}</span>
      </div>
      
      <h3 className="text-3xl font-serif font-bold group-hover:italic transition-all duration-500 leading-tight">
        {item.question}
      </h3>
      
      <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2">
        {item.answer}
      </p>
      
      <div className="pt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest group-hover:text-indigo-500 transition-colors">
        Explorar Conteúdo <ArrowUpRight size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </div>
  </div>
);
