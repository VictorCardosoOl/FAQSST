
import React, { useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { ArticleCard } from '../components/ArticleCard';
import { FAQ_DATA } from '../constants';
import { useReadingQueue } from '../hooks/useReadingQueue';
import { Category } from '../types';
import { useUI } from '../context/UIContext';
import { useToast } from '../context/ToastContext';

export const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setCommandPaletteOpen } = useUI();
  const { queue, toggleQueue } = useReadingQueue();
  const { showToast } = useToast();
  
  const [localQuery, setLocalQuery] = useState('');

  const selectedCategory = searchParams.get('category');
  const isQueueView = location.pathname === '/queue'; // Not strictly working here without useLocation, handled by route usually

  const displayedArticles = useMemo(() => {
    const query = localQuery.toLowerCase();
    return FAQ_DATA.filter(item => {
      const matchesCat = !selectedCategory || item.category === selectedCategory;
      const matchesSearch = !query || 
        item.question.toLowerCase().includes(query) || 
        item.tags.some(t => t.toLowerCase().includes(query));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, localQuery]);

  const handleQueueToggle = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const isAdding = !queue.includes(id);
    toggleQueue(id);
    if (isAdding) {
      showToast("Adicionado à lista de leitura", "success");
    }
  };

  return (
    <div className="space-y-[var(--space-lg)]">
      <header className="space-y-[var(--space-md)]">
        <div className="space-y-2">
           <div className="flex items-center gap-3 type-tiny font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] reveal">
             <div className="w-6 h-[1px] bg-[var(--text-muted)] opacity-50" />
             <span>Arquivos 2025</span>
           </div>
           
           <h1 className="type-3xl font-serif font-light leading-tight tracking-tight text-[var(--text-main)] reveal">
             {selectedCategory ? (
               <span>{selectedCategory}</span>
             ) : (
               <>Gestão de <span className="italic font-normal">Processos</span></>
             )}
           </h1>
        </div>
        
        <div className="reveal" style={{ animationDelay: '100ms' }}>
          <SearchBar 
            onClick={() => setCommandPaletteOpen(true)}
            query={localQuery}
            onChange={setLocalQuery}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-1 pt-4">
        {displayedArticles.map((item, i) => (
          <ArticleCard 
            key={item.id}
            item={item} 
            onClick={() => { navigate(`/article/${item.id}`); window.scrollTo({top:0, behavior:'smooth'}); }} 
            isInQueue={queue.includes(item.id)}
            onToggleQueue={(e) => handleQueueToggle(e, item.id)}
            featured={i === 0 && !selectedCategory && !localQuery}
          />
        ))}
      </div>

      {displayedArticles.length === 0 && (
        <div className="py-12 border-t border-[var(--border)] reveal">
          <p className="text-[var(--text-muted)] font-serif italic type-h2 font-light">
            Nenhum documento encontrado em nossa biblioteca.
          </p>
        </div>
      )}
    </div>
  );
};
