import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, Hash, Sun, Moon, Archive, Bookmark, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem, Category } from '../types';
import { FAQ_DATA } from '../constants';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: FAQItem) => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
  onSelectCategory: (cat: Category | null) => void;
  onSelectQueue: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen, onClose, onSelectArticle, onToggleTheme, isDarkMode, onSelectCategory, onSelectQueue
}) => {
  const [inputValue, setInputValue] = useState('');

  // Reset input when opening
  useEffect(() => {
    if (isOpen) setInputValue('');
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-stone-900/20 dark:bg-black/40 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl relative shadow-2xl shadow-stone-900/10 dark:shadow-black/50 rounded-2xl overflow-hidden"
          >
            <Command
              className="w-full bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden"
              loop
            >
              <div className="flex items-center border-b border-stone-200/50 dark:border-white/10 px-5 relative">
                <Search className="w-5 h-5 text-stone-400 dark:text-stone-500 mr-3 shrink-0" strokeWidth={2.5} />
                <Command.Input
                  value={inputValue}
                  onValueChange={setInputValue}
                  placeholder="O que você procura?"
                  className="flex-1 h-16 bg-transparent outline-none text-lg text-[var(--text-main)] placeholder:text-stone-400 font-medium"
                />
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-stone-400 uppercase tracking-widest bg-stone-100 dark:bg-white/5 px-2 py-1 rounded-md border border-stone-200 dark:border-white/5">
                  <span className="text-xs">ESC</span> para fechar
                </div>
                <button onClick={onClose} className="sm:hidden p-2 text-stone-400">
                  <X size={20} />
                </button>
              </div>

              <Command.List className="max-h-[60vh] overflow-y-auto p-3 scroll-py-3">
                <Command.Empty className="py-12 text-center text-stone-500 dark:text-stone-400">
                  <p className="font-serif italic text-lg">Nenhum resultado encontrado.</p>
                </Command.Empty>

                {!inputValue && (
                  <div className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 mb-1">
                    Sugestões Rápidas
                  </div>
                )}

                <Command.Group heading="Navegação">
                  <Command.Item
                    onSelect={() => { onSelectCategory(null); onClose(); }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer text-[var(--text-main)] transition-colors group aria-selected:bg-stone-100 dark:aria-selected:bg-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                      <Archive size={20} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">Biblioteca Completa</span>
                      <span className="text-xs opacity-60">Visualizar todos os documentos</span>
                    </div>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => { onSelectQueue(); onClose(); }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer text-[var(--text-main)] transition-colors group aria-selected:bg-stone-100 dark:aria-selected:bg-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                      <Bookmark size={20} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">Minha Lista de Leitura</span>
                      <span className="text-xs opacity-60">Acessar seus artigos salvos</span>
                    </div>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Artigos e Conhecimento" className="mt-4">
                  {FAQ_DATA.map((item) => (
                    <Command.Item
                      key={item.id}
                      onSelect={() => {
                        onSelectArticle(item);
                        onClose();
                      }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer text-[var(--text-main)] transition-colors group aria-selected:bg-stone-100 dark:aria-selected:bg-white/10"
                    >
                      <div className="mt-1 w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center text-[var(--text-muted)] group-hover:border-[var(--text-main)] group-hover:text-[var(--text-main)] transition-colors shrink-0">
                        <Hash size={14} />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-serif text-lg leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">{item.question}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] uppercase tracking-wider font-bold opacity-50 bg-stone-100 dark:bg-white/10 px-1.5 py-0.5 rounded">{item.category}</span>
                          <span className="text-[10px] opacity-40 truncate max-w-[200px]">{item.answer.substring(0, 60)}...</span>
                        </div>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 self-center">
                        <ArrowRight size={16} className="text-[var(--text-muted)]" />
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Sistema" className="mt-4 border-t border-stone-100 dark:border-white/5 pt-2">
                  <Command.Item
                    onSelect={() => { onToggleTheme(); onClose(); }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-main)] aria-selected:bg-stone-100 dark:aria-selected:bg-white/10"
                  >
                    {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                    <span className="text-xs font-bold uppercase tracking-widest">Alternar para Modo {isDarkMode ? 'Claro' : 'Escuro'}</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
