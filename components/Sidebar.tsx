
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
      <div className={`fixed inset-0 bg-black/5 dark:bg-black/40 z-40 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      
      <aside 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed left-0 top-0 bottom-0 glass bg-[var(--bg-island)] border-r border-[var(--border)] z-50 flex flex-col py-10 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'lg:translate-x-0'} ${isExpanded ? 'w-80 px-10' : 'w-24 px-8'}`}
      >
        <div className="mb-12 flex items-center justify-between">
          <div 
            onClick={onLogoClick}
            className="flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity overflow-hidden"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[var(--text-main)] shrink-0" />
            <span className={`text-[14px] font-bold uppercase tracking-[0.4em] transition-all duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              TeamWiki
            </span>
          </div>
          
          <button 
            onClick={onPinToggle}
            className={`hidden lg:block text-stone-300 hover:text-[var(--text-main)] transition-all duration-500 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
          >
            {isPinned ? <Pin size={16} strokeWidth={1.5} /> : <PinOff size={16} strokeWidth={1.5} />}
          </button>
        </div>

        <nav className="flex-1 space-y-10 overflow-hidden">
          <div>
            <p className={`text-[12px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-6 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              Navegação
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => { onSelect(null); onClose(); }}
                className={`flex items-center justify-between w-full text-[14px] font-medium transition-colors ${currentCat === null && !isQueueView ? 'text-[var(--text-main)]' : 'text-stone-400 hover:text-[var(--text-main)]'}`}
              >
                <div className="flex items-center gap-4">
                  <Archive size={18} strokeWidth={1.2} className="shrink-0" />
                  <span className={`transition-opacity duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Acervo</span>
                </div>
                {isExpanded && currentCat === null && !isQueueView && <Circle size={4} fill="currentColor" />}
              </button>
              
              <button 
                onClick={() => { onSelectQueue?.(); onClose(); }}
                className={`flex items-center justify-between w-full text-[14px] font-medium transition-colors ${isQueueView ? 'text-[var(--text-main)]' : 'text-stone-400 hover:text-[var(--text-main)]'}`}
              >
                <div className="flex items-center gap-4">
                  <Bookmark size={18} strokeWidth={1.2} className="shrink-0" />
                  <div className={`flex items-center gap-2 transition-opacity duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                    <span>Minha Lista</span>
                    {queueCount > 0 && <span className="text-[11px] opacity-40">({queueCount})</span>}
                  </div>
                </div>
                {isExpanded && isQueueView && <Circle size={4} fill="currentColor" />}
              </button>
            </div>
          </div>

          <div className="pt-6">
            <p className={`text-[12px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-6 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              Processos
            </p>
            <div className="space-y-4">
              {Object.values(Category).map(cat => (
                <button
                  key={cat}
                  onClick={() => { onSelect(cat); onClose(); }}
                  className={`flex items-center justify-between w-full text-[13px] font-light transition-all ${currentCat === cat ? 'text-[var(--text-main)]' : 'text-stone-400 hover:text-[var(--text-main)]'} ${isExpanded ? (currentCat === cat ? 'translate-x-2' : 'hover:translate-x-1') : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <Hash size={18} strokeWidth={1} className="shrink-0" />
                    <span className={`transition-opacity duration-500 whitespace-nowrap ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>{cat}</span>
                  </div>
                  {isExpanded && currentCat === cat && <div className="w-4 h-[0.5px] bg-[var(--text-main)]" />}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="pt-8 border-t border-[var(--border)]">
          <button 
            onClick={toggleDark}
            className="w-full flex items-center justify-between text-[12px] font-bold uppercase tracking-widest text-stone-400 hover:text-[var(--text-main)] transition-colors"
          >
            <div className="flex items-center gap-4">
              {isDarkMode ? <Sun size={18} strokeWidth={1.5} className="shrink-0" /> : <Moon size={18} strokeWidth={1.5} className="shrink-0" />}
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
