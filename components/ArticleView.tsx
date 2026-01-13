import React, { useMemo, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Loader2, Share2, Clock } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';
import { SEOHead } from './SEOHead';

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
        <div className="flex justify-center py-32">
          <Loader2 className="animate-spin text-[var(--text-muted)]" size={32} />
        </div>
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

            {/* Footer Navigation */}
            <motion.footer
              variants={itemVariants}
              className="mt-24 pt-12 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 no-print"
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