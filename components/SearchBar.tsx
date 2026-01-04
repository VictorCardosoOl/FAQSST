
import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  onAskAi: () => void;
  loading?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, onAskAi, loading }) => (
  <div className="relative group w-full max-w-2xl mx-auto">
    <div className={`absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-1000 group-focus-within:duration-200`}></div>
    <div className="relative bg-[var(--bg-main)] border border-[var(--border)] rounded-2xl overflow-hidden flex items-center transition-all duration-500 group-focus-within:border-indigo-500/50 shadow-sm group-focus-within:shadow-xl">
      <div className="pl-6 text-stone-400">
        <Search size={20} />
      </div>
      <input 
        type="text"
        placeholder="Pesquise o conhecimento ou consulte a IA..."
        className="w-full bg-transparent py-5 px-4 outline-none text-lg font-light placeholder:text-stone-300 transition-all"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onAskAi()}
      />
      {query.length > 2 && (
        <button 
          onClick={onAskAi}
          disabled={loading}
          className="mr-3 px-4 py-2 bg-[var(--text-main)] text-[var(--bg-main)] rounded-xl text-[10px] font-black uppercase tracking-tighter flex items-center gap-2 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? '...' : <><Sparkles size={12} /> Consultar IA</>}
        </button>
      )}
    </div>
  </div>
);
