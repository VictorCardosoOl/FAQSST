
import React from 'react';
import { Command } from 'cmdk';
import { Search, Hash, Sun, Moon, Sparkles, Archive, Bookmark, X } from 'lucide-react';
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <Command className="relative w-full max-w-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between px-4">
          <Command.Input placeholder="O que você deseja buscar ou fazer?" />
          <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-600">
            <X size={16} />
          </button>
        </div>

        <Command.List className="p-2 max-h-[60vh] overflow-y-auto">
          <Command.Empty className="p-8 text-center text-sm text-stone-400">
            Nenhum conhecimento ou comando encontrado.
          </Command.Empty>

          <Command.Group heading="Artigos Recomendados">
            {FAQ_DATA.map((item) => (
              <Command.Item
                key={item.id}
                onSelect={() => {
                  onSelectArticle(item);
                  onClose();
                }}
              >
                <Hash size={16} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold">{item.question}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">{item.category}</span>
                </div>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Navegação Inteligente">
            <Command.Item onSelect={() => { onSelectCategory(null); onClose(); }}>
              <Archive size={16} />
              <span>Acervo Completo</span>
            </Command.Item>
            <Command.Item onSelect={() => { onSelectQueue(); onClose(); }}>
              <Bookmark size={16} />
              <span>Minha Lista de Leitura</span>
            </Command.Item>
            {Object.values(Category).map((cat) => (
              <Command.Item key={cat} onSelect={() => { onSelectCategory(cat); onClose(); }}>
                <Hash size={16} />
                <span>Navegar em: {cat}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Interface e Sistema">
            <Command.Item onSelect={() => { onToggleTheme(); onClose(); }}>
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              <span>Alternar para Modo {isDarkMode ? 'Claro' : 'Escuro'}</span>
            </Command.Item>
          </Command.Group>
        </Command.List>

        <div className="bg-stone-50 dark:bg-black/20 px-5 py-3 flex items-center justify-between text-[10px] text-stone-400 font-bold uppercase tracking-widest border-t border-[var(--border)] rounded-b-xl">
          <div className="flex gap-4">
            <span>↑↓ Navegar</span>
            <span>↵ Selecionar</span>
          </div>

        </div>
      </Command>
    </div>
  );
};
