
import React, { useState } from 'react';
import { Archive, Hash, Bookmark, Sun, Moon, Circle, Pin, PinOff } from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  currentCat: Category | null;
  onSelect: (cat: Category | null) => void;
  isDarkMode: boolean;
  toggleDark: () => void;
  isOpen: boolean;
  onClose: () => void;
  isQueueView?: boolean;
  onSelectQueue?: () => void;
  queueCount?: number;
  onLogoClick?: () => void;
  isPinned: boolean;
  onPinToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentCat, onSelect, isDarkMode, toggleDark, isOpen, onClose, isQueueView, onSelectQueue, queueCount = 0, onLogoClick, isPinned, onPinToggle
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isPinned || isHovered || isOpen;

  return (
    <>
      {/* Overlay Mobile */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose} 
      />
      
      <aside 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed left-0 top-0 bottom-0 glass bg-[var(--bg-island)] border-r border-[var(--border)] z-[70] flex flex-col py-8 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${isExpanded ? 'w-80 px-8' : 'w-24 px-6'}`}
      >
        <div className="mb-10 flex items-center justify-between overflow-hidden">
          <div 
            onClick={onLogoClick}
            className="flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity shrink-0"
          >
            <div className="w-4 h-4 rounded-full bg-[var(--text-main)] shrink-0" />
            <span className={`text-sm font-bold uppercase tracking-[0.4em] text-[var(--text-main)] transition-all duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              TeamWiki
            </span>
          </div>
          
          <button 
            onClick={onPinToggle}
            className={`hidden lg:block text-stone-400 hover:text-[var(--text-main)] transition-all duration-500 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
          >
            {isPinned ? <Pin size={16} strokeWidth={1} /> : <PinOff size={16} strokeWidth={1} />}
          </button>
        </div>

        <nav className="flex-1 space-y-8 overflow-y-auto no-scrollbar">
          <div>
            <p className={`text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-4 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              Navegação
            </p>
            <div className="space-y-2">
              <button 
                onClick={() => { onSelect(null); }}
                className={`flex items-center justify-between w-full text-sm font-medium py-2 transition-colors ${currentCat === null && !isQueueView ? 'text-[var(--text-main)]' : 'text-stone-500 dark:text-stone-400 hover:text-[var(--text-main)]'}`}
              >
                <div className="flex items-center gap-4">
                  <Archive size={18} strokeWidth={1.2} />
                  <span className={`transition-opacity duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Acervo</span>
                </div>
                {isExpanded && currentCat === null && !isQueueView && <Circle size={4} fill="currentColor" />}
              </button>
              
              <button 
                onClick={() => { onSelectQueue?.(); }}
                className={`flex items-center justify-between w-full text-sm font-medium py-2 transition-colors ${isQueueView ? 'text-[var(--text-main)]' : 'text-stone-500 dark:text-stone-400 hover:text-[var(--text-main)]'}`}
              >
                <div className="flex items-center gap-4">
                  <Bookmark size={18} strokeWidth={1.2} />
                  <div className={`flex items-center gap-2 transition-opacity duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                    <span>Minha Lista</span>
                    {queueCount > 0 && <span className="text-[10px] opacity-60">({queueCount})</span>}
                  </div>
                </div>
                {isExpanded && isQueueView && <Circle size={4} fill="currentColor" />}
              </button>
            </div>
          </div>

          <div className="pt-4">
            <p className={`text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-4 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              Módulos
            </p>
            <div className="space-y-1">
              {Object.values(Category).map(cat => (
                <button
                  key={cat}
                  onClick={() => { onSelect(cat); }}
                  className={`flex items-center justify-between w-full text-sm font-light py-2 transition-all ${currentCat === cat ? 'text-[var(--text-main)] font-medium' : 'text-stone-500 dark:text-stone-400 hover:text-[var(--text-main)]'} ${isExpanded && currentCat === cat ? 'translate-x-2' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <Hash size={18} strokeWidth={1} />
                    <span className={`transition-opacity duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>{cat}</span>
                  </div>
                  {isExpanded && currentCat === cat && <div className="w-4 h-[0.5px] bg-[var(--text-main)]" />}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="pt-6 border-t border-[var(--border)]">
          <button 
            onClick={toggleDark}
            className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[var(--text-main)] transition-colors"
          >
            <div className="flex items-center gap-4">
              {isDarkMode ? <Sun size={18} strokeWidth={1.2} /> : <Moon size={18} strokeWidth={1.2} />}
              <span className={`transition-opacity duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
              </span>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};
