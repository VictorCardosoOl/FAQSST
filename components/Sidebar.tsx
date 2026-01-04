
import React from 'react';
import { Layers, Compass, Sun, Moon, X, Archive, Hash } from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  currentCat: Category | null;
  onSelect: (cat: Category | null) => void;
  isDarkMode: boolean;
  toggleDark: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentCat, onSelect, isDarkMode, toggleDark, isOpen, onClose 
}) => (
  <>
    <div 
      className={`fixed inset-0 bg-black/20 backdrop-blur-md z-40 lg:hidden transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    />
    
    <aside className={`fixed left-4 top-4 bottom-4 w-60 glass bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-[2rem] z-50 flex flex-col p-6 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-[calc(100%+2rem)]'}`}>
      <div className="mb-10 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--text-main)] rounded-lg flex items-center justify-center text-[var(--bg-main)] shadow-lg">
            <Layers size={16} />
          </div>
          <span className="text-lg font-serif font-bold tracking-tight">TeamWiki</span>
        </div>
        <button onClick={onClose} className="lg:hidden p-2 text-stone-400 hover:text-stone-900">
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 space-y-8 overflow-y-auto px-1">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4 px-3">Explorar</p>
          <button 
            onClick={() => { onSelect(null); onClose(); }}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm transition-all group ${currentCat === null ? 'bg-stone-100 dark:bg-white/10 text-[var(--text-main)]' : 'text-stone-400 hover:text-[var(--text-main)] hover:bg-stone-50 dark:hover:bg-white/5'}`}
          >
            <Archive size={16} className={currentCat === null ? 'text-indigo-500' : 'group-hover:text-indigo-500'} />
            <span className="font-medium">Acervo Geral</span>
          </button>
        </div>
        
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4 px-3">Arquivos</p>
          <div className="space-y-1">
            {Object.values(Category).map(cat => (
              <button
                key={cat}
                onClick={() => { onSelect(cat); onClose(); }}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-xs transition-all group ${currentCat === cat ? 'bg-stone-100 dark:bg-white/10 text-[var(--text-main)]' : 'text-stone-400 hover:text-[var(--text-main)] hover:bg-stone-50 dark:hover:bg-white/5'}`}
              >
                <Hash size={14} className={currentCat === cat ? 'text-indigo-500' : 'opacity-40 group-hover:opacity-100 transition-opacity'} />
                <span className="font-medium">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-6 border-t border-[var(--border)] mt-4">
        <button 
          onClick={toggleDark}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-[var(--text-main)] hover:bg-stone-50 dark:hover:bg-white/5 transition-all"
        >
          {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </aside>
  </>
);
