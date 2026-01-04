
import React from 'react';
import { Search, Command, Sparkles } from 'lucide-react';

interface SearchBarProps {
  onClick: () => void;
  onAskAi: () => void;
  loading?: boolean;
  query?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClick, onAskAi, loading, query = "" }) => (
  <div className="relative group w-full max-w-2xl mx-auto cursor-pointer" onClick={onClick}>
    <div className={`absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
    <div className="relative bg-[var(--bg-main)] border border-[var(--border)] rounded-2xl overflow-hidden flex items-center transition-all duration-500 group-hover:border-indigo-500/50 shadow-sm group-hover:shadow-xl">
      <div className="pl-6 text-stone-400">
        <Search size={20} />
      </div>
      <div className="w-full py-5 px-4 text-lg font-light text-stone-300 flex items-center justify-between">
        <span>Busque conhecimento ou comandos...</span>
        <div className="flex items-center gap-2 pr-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-[10px] font-bold text-stone-400">
            <Command size={10} /> K
          </div>
        </div>
      </div>
      {query.length > 2 && (
        <button 
          onClick={(e) => { e.stopPropagation(); onAskAi(); }}
          disabled={loading}
          className="mr-3 px-4 py-2 bg-[var(--text-main)] text-[var(--bg-main)] rounded-xl text-[10px] font-black uppercase tracking-tighter flex items-center gap-2 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? '...' : <><Sparkles size={12} /> IA</>}
        </button>
      )}
    </div>
  </div>
);
