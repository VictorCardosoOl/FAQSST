import React, { useMemo, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { marked } from 'marked';
import { Link } from 'react-router-dom';
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
  const [content, setContent] = useState<string | React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    const loadContent = async () => {
      try {
        if (typeof article.content === 'function') {
          const module = await article.content();
          // The data can be a JSON chunk with a "content" string OR a React Component
          const rawContent = module.default.content;
          if (mounted) setContent(() => rawContent); // Use callback to safe set function or value
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
    if (!content || typeof content !== 'string') return '';
    const rawHtml = marked.parse(content) as string;
    return DOMPurify.sanitize(rawHtml);
  }, [content]);

  // ... (Related Articles) restored below
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
            className="max-w-6xl mx-auto px-6"
          >
            {/* Editorial Header */}
            <header className="mb-20 md:mb-28 text-center max-w-4xl mx-auto">
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
              className="article-content-render prose prose-lg prose-slate max-w-none
                prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-gray-900
                prose-p:leading-8 prose-p:text-gray-600 prose-p:font-light
                prose-strong:font-semibold prose-strong:text-gray-800
                prose-blockquote:border-l-2 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-li:marker:text-gray-400 prose-img:rounded-lg prose-img:shadow-sm"
            >
              {typeof content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              ) : (
                content && React.createElement(content as React.ComponentType)
              )}
            </motion.div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <motion.div variants={itemVariants} className="mt-24 pt-12 border-t border-[var(--border)] no-print">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-8">Conteúdo Relacionado</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map(related => (
                    <Link
                      key={related.id}
                      to={`/artigo/${related.id}`}
                      className="group flex flex-col items-start text-left p-8 rounded-2xl bg-gray-50/50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-500"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600/60 mb-4">{related.category}</span>
                      <h4 className="font-serif text-xl leading-tight mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">{related.question}</h4>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed font-light">{related.answer}</p>
                    </Link>
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
                <Link
                  to={`/artigo/${nav.prev.id}`}
                  className="group text-left space-y-3 hover:bg-[var(--bg-island)] p-6 -ml-6 rounded-2xl transition-all duration-300 block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Anterior
                  </span>
                  <h4 className="text-xl font-serif text-[var(--text-main)] leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {nav.prev.question}
                  </h4>
                </Link>
              ) : <div />}

              {nav.next && (
                <Link
                  to={`/artigo/${nav.next.id}`}
                  className="group text-right md:text-right space-y-3 hover:bg-[var(--bg-island)] p-6 -mr-6 rounded-2xl transition-all duration-300 block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2 justify-end">
                    Próximo
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <h4 className="text-xl font-serif text-[var(--text-main)] leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {nav.next.question}
                  </h4>
                </Link>
              )}
            </motion.footer>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};