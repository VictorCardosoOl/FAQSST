
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { FAQ_DATA } from '../constants';
import { useReadingQueue } from '../hooks/useReadingQueue';
import { useToast } from '../context/ToastContext';

export const QueuePage: React.FC = () => {
  const navigate = useNavigate();
  const { queue, toggleQueue } = useReadingQueue();
  const { showToast } = useToast();

  const displayedArticles = useMemo(() => {
    return queue
      .map(id => FAQ_DATA.find(a => a.id === id))
      .filter(Boolean) as typeof FAQ_DATA;
  }, [queue]);

  const handleQueueToggle = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    toggleQueue(id);
    showToast("Removido da lista de leitura", "info");
  };

  return (
    <div className="space-y-[var(--space-lg)]">
      <header className="space-y-[var(--space-md)]">
        <div className="space-y-2">
           <div className="flex items-center gap-3 type-tiny font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] reveal">
             <div className="w-6 h-[1px] bg-[var(--text-muted)] opacity-50" />
             <span>Minha Seleção</span>
           </div>
           
           <h1 className="type-3xl font-serif font-light leading-tight tracking-tight text-[var(--text-main)] reveal">
             <span className="italic">Lista de Leitura</span>
           </h1>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-1 pt-4">
        {displayedArticles.length > 0 ? displayedArticles.map((item) => (
          <ArticleCard 
            key={item.id}
            item={item} 
            onClick={() => { navigate(`/article/${item.id}`); window.scrollTo({top:0, behavior:'smooth'}); }} 
            isInQueue={true}
            onToggleQueue={(e) => handleQueueToggle(e, item.id)}
          />
        )) : (
          <div className="py-12 border-t border-[var(--border)] reveal">
            <p className="text-[var(--text-muted)] font-serif italic type-h2 font-light">
              Sua lista de leitura está vazia. Adicione artigos importantes para ler depois.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
