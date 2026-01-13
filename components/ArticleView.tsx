import React, { useMemo, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';
import { SEOHead } from './SEOHead';
import { ArticleSkeleton } from './ArticleSkeleton';
import { FAQ_DATA } from '../constants';

interface ArticleViewProps {
  article: FAQItem;
  onBack: () => void;
  onNavigate: (article: FAQItem | null) => void;
  nav: { prev: FAQItem | null; next: FAQItem | null };
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onNavigate, nav }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    const loadContent = async () => {
      try {
        if (typeof article.content === 'function') {
          const module = await article.content();
          if (mounted) setContent(module.default);
        } else {
          if (mounted) setContent(article.content || article.answer);
        }
      } catch (err) {
        console.error("Failed to load article content", err);
        if (mounted) setContent(article.answer); // Fallback
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    loadContent();

    return () => { mounted = false; };
  }, [article]);

  const htmlContent = useMemo(() => {
    if (!content) return '';
    const rawHtml = marked.parse(content) as string;
    return DOMPurify.sanitize(rawHtml);
  }, [content]);

  const relatedArticles = useMemo(() => {
    if (!article.tags || article.tags.length === 0) return [];

    return FAQ_DATA
      .filter(item => item.id !== article.id)
      .map(item => ({
        item,
        score: item.tags.filter(tag => article.tags.includes(tag)).length
      }))
      .filter(match => match.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(match => match.item);
  }, [article]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <SEOHead
        title={`${article.question} | SST FAQ`}
        description={article.answer.substring(0, 150)}
      />

      {/* Navigation Top */}
      <nav className="sticky top-0 z-10 w-full bg-[var(--bg-island)]/80 backdrop-blur-md border-b border-[var(--border)] mb-12 no-print transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] opacity-60 hidden sm:block">
              {article.category}
            </span>
          </div>
        </div>
      </nav>

      {isLoading ? (
        <ArticleSkeleton />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={article.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-4xl mx-auto px-6"
          >
            {/* Editorial Header */}
            <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-current opacity-40" />
                <span>Leitura Rápida</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-[var(--text-main)] mb-8"
              >
                {article.question}
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="relative inline-block"
              >
                <p className="text-xl md:text-2xl text-[var(--text-muted)] font-serif italic leading-relaxed max-w-2xl mx-auto">
                  {article.answer}
                </p>
                <div className="absolute -top-4 -left-8 text-6xl text-[var(--text-muted)] opacity-10 font-serif">“</div>
              </motion.div>
            </header>

            {/* Main Content */}
            <motion.div
              variants={itemVariants}
              className="article-content-render"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <motion.div variants={itemVariants} className="mt-24 pt-12 border-t border-[var(--border)] no-print">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-8">Conteúdo Relacionado</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map(related => (
                    <button
                      key={related.id}
                      onClick={() => onNavigate(related)}
                      className="group flex flex-col items-start text-left p-6 rounded-2xl bg-[var(--bg-island)] border border-[var(--border)]/50 hover:border-[var(--text-main)] transition-all duration-300"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-3">{related.category}</span>
                      <h4 className="font-serif text-lg leading-tight mb-2 group-hover:underline decoration-1 underline-offset-4">{related.question}</h4>
                      <p className="text-sm text-[var(--text-muted)] line-clamp-2">{related.answer}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Footer Navigation */}
            <motion.footer
              variants={itemVariants}
              className="mt-16 pt-12 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 no-print"
            >
              {nav.prev ? (
                <button
                  onClick={() => onNavigate(nav.prev)}
                  className="group text-left space-y-3 hover:bg-[var(--bg-island)] p-6 -ml-6 rounded-2xl transition-all duration-300"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Anterior
                  </span>
                  <h4 className="text-xl font-serif text-[var(--text-main)] leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {nav.prev.question}
                  </h4>
                </button>
              ) : <div />}

              {nav.next && (
                <button
                  onClick={() => onNavigate(nav.next)}
                  className="group text-right md:text-right space-y-3 hover:bg-[var(--bg-island)] p-6 -mr-6 rounded-2xl transition-all duration-300"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2 justify-end">
                    Próximo
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <h4 className="text-xl font-serif text-[var(--text-main)] leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {nav.next.question}
                  </h4>
                </button>
              )}
            </motion.footer>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};