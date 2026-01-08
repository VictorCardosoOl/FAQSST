
import React from 'react';
import { Search, Command, Sparkles } from 'lucide-react';

interface SearchBarProps {
  onClick: () => void;
  onAskAi: () => void;
  loading?: boolean;
  query?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClick, onAskAi, loading, query = "" }) => (
  <div 
    className="relative w-full max-w-xl mx-auto cursor-pointer group px-1" 
    onClick={onClick}
  >
    <div className="flex items-center justify-between border-b border-[var(--border)] py-2 md:py-3 transition-all duration-500 group-hover:border-[var(--text-main)]">
      <div className="flex items-center gap-4 md:gap-6 flex-1 overflow-hidden">
        <Search size={18} md:size={20} strokeWidth={1} className="text-stone-300 group-hover:text-[var(--text-main)] transition-colors shrink-0" />
        <span className="text-base md:text-lg font-light text-stone-400 tracking-tight truncate">
          Buscar diretrizes...
        </span>
      </div>
      <div className="flex items-center gap-3 md:gap-5 ml-2">
        <div className="hidden sm:flex items-center gap-2 px-2 py-1 border border-[var(--border)] rounded text-[10px] md:text-[12px] font-bold text-stone-400">
          <Command size={12} md:size={14} strokeWidth={1.5} /> K
        </div>
        {query.length > 2 && (
          <button 
            onClick={(e) => { e.stopPropagation(); onAskAi(); }}
            disabled={loading}
            className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] hover:text-indigo-500 disabled:opacity-30 transition-colors whitespace-nowrap"
          >
            {loading ? '...' : 'Neural Search'}
          </button>
        )}
      </div>
    </div>
  </div>
);
