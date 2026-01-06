
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
      className={`group cursor-pointer relative py-8 border-b border-[var(--border)] transition-all duration-700 lg:hover:pl-6 mb-4`}
    >
      {/* Indicador de Hover Lateral */}
      <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[var(--text-main)] scale-y-0 lg:group-hover:scale-y-100 transition-transform duration-700 origin-top z-10" />

      <div className="space-y-6">
        {/* Layout para Artigo em Destaque (Featured) */}
        {featured && item.imageUrl && (
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm mb-8 bg-stone-100 dark:bg-stone-900">
            <img 
              src={item.imageUrl} 
              alt={item.question}
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s] ease-out pointer-events-none"
              style={{ transformOrigin: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
                 {item.category}
               </span>
               <div className="w-6 h-[0.5px] bg-stone-200 dark:bg-stone-800" />
               <span className="text-[10px] font-medium text-stone-400 tracking-widest">
                 {item.date}
               </span>
            </div>
            
            <button 
              onClick={onToggleQueue}
              className={`p-2 rounded-full transition-all duration-500 z-20 ${
                isInQueue ? 'text-indigo-500 bg-indigo-50/50' : 'text-stone-300 hover:text-[var(--text-main)] hover:bg-stone-100 dark:hover:bg-white/5'
              }`}
            >
              {isInQueue ? <Check size={18} /> : <Plus size={18} />}
            </button>
          </div>
          
          <div className="max-w-4xl space-y-3">
            <h3 className={`${featured ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-3xl'} font-serif font-light leading-[1.2] transition-transform duration-700 group-hover:translate-x-1`}>
              {item.question}
            </h3>
            
            <p className={`text-stone-500 dark:text-stone-400 font-light leading-relaxed line-clamp-2 transition-colors duration-500 group-hover:text-[var(--text-main)] ${featured ? 'text-lg md:text-xl max-w-3xl' : 'text-base max-w-2xl'}`}>
              {item.answer}
            </p>
          </div>
          
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-2 lg:group-hover:translate-y-0">
            Explorar Diretriz <ArrowRight size={14} strokeWidth={1} />
          </div>
        </div>
      </div>
    </div>
  </FadeInSection>
);
