
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
    className="relative w-full max-w-xl mx-auto cursor-pointer group" 
    onClick={onClick}
  >
    <div className="flex items-center justify-between border-b border-[var(--border)] py-4 transition-all duration-500 group-hover:border-[var(--text-main)]">
      <div className="flex items-center gap-6">
        <Search size={20} strokeWidth={1} className="text-stone-300 group-hover:text-[var(--text-main)] transition-colors" />
        <span className="text-lg font-light text-stone-400 tracking-tight">Consulte as diretrizes e processos...</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] rounded text-[12px] font-bold text-stone-400">
          <Command size={14} strokeWidth={1.5} /> K
        </div>
        {query.length > 2 && (
          <button 
            onClick={(e) => { e.stopPropagation(); onAskAi(); }}
            disabled={loading}
            className="text-[12px] font-black uppercase tracking-[0.2em] hover:text-indigo-500 disabled:opacity-30 transition-colors"
          >
            {loading ? 'Consultando...' : 'Neural Search'}
          </button>
        )}
      </div>
    </div>
  </div>
);
