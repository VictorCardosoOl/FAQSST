
import React, { useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface ArticleContentProps {
  content?: string;
  fallback?: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content, fallback }) => {
  const htmlContent = useMemo(() => {
    const rawText = content || fallback || '';
    const rawMarkup = marked.parse(rawText) as string;
    
    // Configuração Enterprise de Sanitização
    // Proíbe explicitamente tags e atributos perigosos
    return DOMPurify.sanitize(rawMarkup, { 
      USE_PROFILES: { html: true },
      FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'link', 'style'],
      FORBID_ATTR: ['onerror', 'onload', 'onclick']
    });
  }, [content, fallback]);

  return (
    <article 
      className="prose prose-stone dark:prose-invert max-w-none text-[var(--text-body)]"
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
};
