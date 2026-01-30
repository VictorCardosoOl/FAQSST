
import React from 'react';
import { FAQItem } from '../types';
import { FadeInSection } from './FadeInSection';
import { ArticleTopBar } from './Article/ArticleTopBar';
import { ArticleHeader } from './Article/ArticleHeader';
import { ArticleContent } from './Article/ArticleContent';
import { PersonalNoteEditor } from './Article/PersonalNoteEditor';
import { ArticleNavigation } from './Article/ArticleNavigation';

interface ArticleViewProps {
  article: FAQItem;
  onBack: () => void;
  onNavigate: (article: FAQItem | null) => void;
  nav: { prev: FAQItem | null; next: FAQItem | null };
  onUpdateNote?: (content: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ 
  article, 
  onBack, 
  onNavigate, 
  nav, 
  onUpdateNote 
}) => {

  return (
    <div className="reveal w-full max-w-[var(--max-width-reading)] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <ArticleTopBar 
        category={article.category}
        nav={nav}
        onBack={onBack}
        onNavigate={onNavigate}
      />

      <ArticleHeader article={article} />

      <FadeInSection className="pb-24 grid grid-cols-1 gap-[var(--space-lg)]">
        
        <ArticleContent 
          content={article.content} 
          fallback={article.answer} 
        />

        <PersonalNoteEditor 
          initialContent={article.notes} 
          onSave={onUpdateNote} 
        />
        
        <ArticleNavigation 
          nav={nav} 
          onNavigate={(target) => onNavigate(target)} 
        />

      </FadeInSection>
    </div>
  );
};
