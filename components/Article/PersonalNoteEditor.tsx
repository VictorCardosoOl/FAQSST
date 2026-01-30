
import React, { useState, useEffect } from 'react';
import { StickyNote, Save, Check, Loader2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

interface PersonalNoteEditorProps {
  initialContent?: string;
  onSave?: (content: string) => void;
}

export const PersonalNoteEditor: React.FC<PersonalNoteEditorProps> = ({ 
  initialContent = '', 
  onSave 
}) => {
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [isDirty, setIsDirty] = useState(false);
  const { showToast } = useToast();

  // Reset state when initialContent changes (article change)
  useEffect(() => {
    setContent(initialContent);
    setIsDirty(false);
    setStatus('idle');
  }, [initialContent]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setIsDirty(true);
    if (status === 'saved') setStatus('idle');
  };

  const handleSave = () => {
    if (!onSave) return;
    
    setStatus('saving');
    // Simulando delay de rede/processamento para melhor UX
    setTimeout(() => {
      onSave(content);
      setIsDirty(false);
      setStatus('saved');
      showToast("Nota pessoal salva com sucesso.", "success");
      setTimeout(() => setStatus('idle'), 2000);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <div className="mt-[var(--space-lg)] bg-[var(--surface-note)] border border-[var(--border)] rounded-xl p-[var(--space-md)] relative group transition-all duration-300 hover:shadow-lg ring-1 ring-transparent focus-within:ring-[var(--border)] no-print">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 type-tiny font-black uppercase tracking-widest text-[var(--text-muted)] select-none">
          <StickyNote size={16} />
          Notas Pessoais
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[var(--text-muted)] opacity-50 hidden sm:inline-block mr-2">
            {isDirty ? 'Não salvo' : 'Sincronizado'}
          </span>
          
          <button 
            onClick={handleSave}
            disabled={!isDirty && status !== 'saved'}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300
              ${status === 'saved' 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                : isDirty 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm' 
                  : 'bg-[var(--border)] text-[var(--text-muted)] opacity-50 cursor-not-allowed'}
            `}
            title="Ctrl + S para salvar"
          >
            {status === 'saving' && <Loader2 size={14} className="animate-spin" />}
            {status === 'saved' && <Check size={14} />}
            {status === 'idle' && <Save size={14} />}
            <span>{status === 'saving' ? 'Salvando...' : status === 'saved' ? 'Salvo!' : 'Salvar Nota'}</span>
          </button>
        </div>
      </div>
      
      <textarea
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Adicione suas anotações privadas e insights sobre este artigo aqui..."
        className="w-full bg-transparent border-0 resize-y min-h-[160px] focus:ring-0 text-[var(--text-body)] font-mono text-sm leading-relaxed placeholder:text-[var(--text-muted)]/40"
      />
    </div>
  );
};
