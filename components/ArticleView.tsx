
import React, { useMemo, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Tag, StickyNote, Save, Check, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { FAQItem } from '../types';
import { FadeInSection } from './FadeInSection';
import { useToast } from '../context/ToastContext';

interface ArticleViewProps {
  article: FAQItem;
  onBack: () => void;
  onNavigate: (article: FAQItem | null) => void;
  nav: { prev: FAQItem | null; next: FAQItem | null };
  onUpdateNote?: (content: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onNavigate, nav, onUpdateNote }) => {
  const [noteContent, setNoteContent] = useState(article.notes || '');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [isNoteDirty, setIsNoteDirty] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    setNoteContent(article.notes || '');
    setIsNoteDirty(false);
    setSaveStatus('idle');
  }, [article.id, article.notes]);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteContent(e.target.value);
    setIsNoteDirty(true);
    if (saveStatus === 'saved') setSaveStatus('idle');
  };

  const handleSaveNote = () => {
    if (onUpdateNote) {
      setSaveStatus('saving');
      setTimeout(() => {
        onUpdateNote(noteContent);
        setIsNoteDirty(false);
        setSaveStatus('saved');
        showToast("Nota pessoal salva com sucesso.", "success");
        setTimeout(() => setSaveStatus('idle'), 2000);
      }, 400);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 's') {
      e.preventDefault();
      handleSaveNote();
    }
  };

  const htmlContent = useMemo(() => {
    const rawMarkup = marked.parse(article.content || article.answer) as string;
    // SECURITY: Sanitizing HTML to prevent XSS
    return DOMPurify.sanitize(rawMarkup);
  }, [article.content, article.answer]);

  return (
    <div className="reveal w-full max-w-[85ch] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Top Nav */}
      <nav className="flex items-center justify-between mb-[var(--space-lg)] no-print">
        <button 
          onClick={onBack} 
          className="group flex items-center gap-2 type-tiny font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Lista
        </button>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => nav.prev && onNavigate(nav.prev)}
            disabled={!nav.prev}
            className={`p-2 rounded-full border border-[var(--border)] transition-all ${
              nav.prev 
                ? 'hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            title={nav.prev ? `Anterior: ${nav.prev.question}` : 'Sem artigo anterior'}
          >
            <ChevronLeft size={14} />
          </button>

          <span className="type-tiny font-black uppercase tracking-[0.2em] px-3 py-1 bg-[var(--border)] rounded-full text-[var(--text-body)]">
            {article.category}
          </span>

          <button 
            onClick={() => nav.next && onNavigate(nav.next)}
            disabled={!nav.next}
            className={`p-2 rounded-full border border-[var(--border)] transition-all ${
              nav.next 
                ? 'hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            title={nav.next ? `Próximo: ${nav.next.question}` : 'Sem próximo artigo'}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </nav>

      <header className="mb-[var(--space-lg)] space-y-[var(--space-md)] pb-[var(--space-md)] border-b border-[var(--border)]">
        <div className="space-y-[var(--space-sm)]">
          <h1 className="type-display font-serif font-medium leading-[1.05] tracking-tight text-[var(--text-main)]">
            {article.question}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 type-tiny font-medium text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{article.date}</span>
            </div>
            {article.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]"></span>
                <Tag size={14} />
                <div className="flex gap-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="hover:text-[var(--text-main)] transition-colors cursor-default">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="type-h2 text-[var(--text-muted)] font-serif italic leading-relaxed max-w-2xl opacity-90">
           {article.answer}
        </p>
      </header>

      <FadeInSection className="pb-24 grid grid-cols-1 gap-[var(--space-lg)]">
        
        <article 
          className="prose prose-stone dark:prose-invert max-w-none text-[var(--text-body)]"
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />

        <div className="mt-[var(--space-lg)] bg-[var(--surface-note)] border border-[var(--border)] rounded-xl p-[var(--space-md)] relative group transition-all duration-300 hover:shadow-lg no-print ring-1 ring-transparent focus-within:ring-[var(--border)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 type-tiny font-black uppercase tracking-widest text-[var(--text-muted)] select-none">
              <StickyNote size={16} />
              Notas Pessoais
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[var(--text-muted)] opacity-50 hidden sm:inline-block mr-2">
                {isNoteDirty ? 'Não salvo' : 'Sincronizado'}
              </span>
              
              <button 
                onClick={handleSaveNote}
                disabled={!isNoteDirty && saveStatus !== 'saved'}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300
                  ${saveStatus === 'saved' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                    : isNoteDirty 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm' 
                      : 'bg-[var(--border)] text-[var(--text-muted)] opacity-50 cursor-not-allowed'}
                `}
                title="Ctrl + S para salvar"
              >
                {saveStatus === 'saving' && <Loader2 size={14} className="animate-spin" />}
                {saveStatus === 'saved' && <Check size={14} />}
                {saveStatus === 'idle' && <Save size={14} />}
                
                <span>
                  {saveStatus === 'saving' ? 'Salvando...' : 
                   saveStatus === 'saved' ? 'Salvo!' : 
                   'Salvar Nota'}
                </span>
              </button>
            </div>
          </div>
          
          <textarea
            value={noteContent}
            onChange={handleNoteChange}
            onKeyDown={handleKeyDown}
            placeholder="Adicione suas anotações privadas e insights sobre este artigo aqui..."
            className="w-full bg-transparent border-0 resize-y min-h-[160px] focus:ring-0 text-[var(--text-body)] type-small leading-relaxed placeholder:text-[var(--text-muted)]/40 font-mono text-sm"
            aria-label="Editor de notas pessoais"
          />
        </div>
        
        <footer className="mt-[var(--space-lg)] pt-[var(--space-md)] border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-md)] no-print">
          {nav.prev ? (
            <button 
              onClick={() => onNavigate(nav.prev)} 
              className="group text-left space-y-2 hover:bg-stone-50 dark:hover:bg-white/5 p-4 -ml-4 rounded-xl transition-colors"
            >
              <span className="type-tiny font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2">
                <ArrowLeft size={12} /> Anterior
              </span>
              <h4 className="type-body font-serif text-[var(--text-main)] opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
                {nav.prev.question}
              </h4>
            </button>
          ) : <div />}

          {nav.next && (
            <button 
              onClick={() => onNavigate(nav.next)} 
              className="group text-right space-y-2 hover:bg-stone-50 dark:hover:bg-white/5 p-4 -mr-4 rounded-xl transition-colors"
            >
              <span className="type-tiny font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2 justify-end">
                Próximo <ArrowRight size={12} />
              </span>
              <h4 className="type-body font-serif text-[var(--text-main)] opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
                {nav.next.question}
              </h4>
            </button>
          )}
        </footer>
      </FadeInSection>
    </div>
  );
};
