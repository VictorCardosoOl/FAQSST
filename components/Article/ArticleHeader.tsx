
import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { FAQItem } from '../../types';

interface ArticleHeaderProps {
  article: FAQItem;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  return (
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
              <div className="flex gap-2 flex-wrap">
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
  );
};
