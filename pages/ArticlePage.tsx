
import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArticleView } from '../components/ArticleView';
import { FAQ_DATA } from '../constants';
import { useArticleNotes } from '../hooks/useArticleNotes';

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getNote, updateNote } = useArticleNotes();

  // Scroll to top when ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const article = useMemo(() => FAQ_DATA.find(a => a.id === id), [id]);

  const activeArticleWithNotes = useMemo(() => {
    if (!article) return null;
    return {
      ...article,
      notes: getNote(article.id)
    };
  }, [article, getNote]);

  const nav = useMemo(() => {
    if (!article) return { prev: null, next: null };
    const idx = FAQ_DATA.findIndex(a => a.id === article.id);
    return {
      prev: idx > 0 ? FAQ_DATA[idx - 1] : null,
      next: idx < FAQ_DATA.length - 1 ? FAQ_DATA[idx + 1] : null
    };
  }, [article]);

  const handleNavigate = (target: typeof article) => {
    if (target) {
      navigate(`/article/${target.id}`);
    }
  };

  if (!activeArticleWithNotes) {
    return (
      <div className="py-20 text-center">
        <h2 className="type-h1 font-serif">Artigo não encontrado</h2>
        <button onClick={() => navigate('/')} className="mt-4 underline">Voltar ao início</button>
      </div>
    );
  }

  return (
    <ArticleView 
      article={activeArticleWithNotes} 
      onBack={() => navigate(-1)} 
      onNavigate={handleNavigate} 
      nav={nav}
      onUpdateNote={(content) => updateNote(activeArticleWithNotes.id, content)}
    />
  );
};
