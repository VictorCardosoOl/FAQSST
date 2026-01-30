
import React from 'react';
import { Search, Command } from 'lucide-react';

interface SearchBarProps {
  onClick: () => void;
  query?: string;
  onChange?: (val: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClick, query = "", onChange }) => (
  <div 
    className="relative w-full max-w-xl mx-auto group" 
  >
    <div className="flex items-center justify-between border-b border-[var(--border)] py-1 md:py-1.5 transition-all duration-500 group-focus-within:border-[var(--text-main)] hover:border-[var(--text-main)]">
      <div className="flex items-center gap-4 md:gap-5 flex-1 overflow-hidden">
        <Search size={18} strokeWidth={1} className="text-stone-500 group-hover:text-[var(--text-main)] transition-colors shrink-0" />
        <input 
          type="text"
          value={query}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Filtrar base de conhecimento..."
          className="w-full bg-transparent border-none outline-none text-base font-light text-[var(--text-main)] placeholder:text-stone-600 dark:placeholder:text-stone-300"
          onClick={onClick}
        />
      </div>
      <div className="flex items-center gap-3 md:gap-4 ml-2 pointer-events-none">
        <div className="hidden sm:flex items-center gap-1.5 px-1.5 py-0.5 border border-stone-300 dark:border-stone-700 rounded text-[9px] md:text-[11px] font-bold text-stone-600 dark:text-stone-300">
          <Command size={10} md:size={12} strokeWidth={1.5} /> K
        </div>
      </div>
    </div>
  </div>
);
