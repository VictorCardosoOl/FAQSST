
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
    className="relative w-full max-w-lg mx-auto cursor-pointer group" 
    onClick={onClick}
  >
    <div className="flex items-center justify-between border-b border-[var(--border)] py-4 transition-all duration-500 group-hover:border-[var(--text-main)]">
      <div className="flex items-center gap-6">
        <Search size={16} strokeWidth={1} className="text-stone-300 group-hover:text-[var(--text-main)] transition-colors" />
        <span className="text-sm font-light text-stone-400 tracking-tight">Acesse a inteligência global...</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 px-2 py-1 border border-[var(--border)] rounded text-[9px] font-medium text-stone-400">
          <Command size={10} strokeWidth={1.5} /> K
        </div>
        {query.length > 2 && (
          <button 
            onClick={(e) => { e.stopPropagation(); onAskAi(); }}
            disabled={loading}
            className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 disabled:opacity-30 transition-colors"
          >
            {loading ? 'Pensando...' : 'Busca Neural'}
          </button>
        )}
      </div>
    </div>
  </div>
);
