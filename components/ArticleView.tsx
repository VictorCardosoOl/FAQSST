import React, { useMemo, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

interface ArticleViewProps {
  article: FAQItem;
  onBack: () => void;
  onNavigate: (article: FAQItem | null) => void;
  nav: { prev: FAQItem | null; next: FAQItem | null };
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onNavigate, nav }) => {
  const htmlContent = useMemo(() => {
    const rawHtml = marked.parse(article.content || article.answer) as string;
    return DOMPurify.sanitize(rawHtml);
  }, [article.content, article.answer]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  return (
    <div className="min-h-screen">
      <nav className="flex items-center gap-6 mb-12 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] no-print">
        <button
          onClick={onBack}
          className="hover:text-[var(--text-main)] transition-colors flex items-center gap-2 group"
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Voltar
        </button>
        <div className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
        <span className="text-[var(--text-main)] opacity-60 truncate max-w-[200px]">{article.category}</span>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <header className="mb-10 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] tracking-tight text-[var(--text-main)]"
            >
              {article.question}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border-l-2 border-[var(--text-main)] pl-6 py-1"
            >
              <p className="text-xl md:text-2xl text-[var(--text-muted)] font-serif italic leading-relaxed">
                {article.answer}
              </p>
            </motion.div>
          </header>

          <div className="pb-16">
            <div
              className="article-content-render text-lg md:text-xl font-normal leading-loose text-[var(--text-body)] space-y-6 prose prose-lg dark:prose-invert prose-stone max-w-none prose-headings:font-serif prose-headings:font-light prose-p:text-stone-600 dark:prose-p:text-stone-300 prose-a:text-[var(--text-main)] hover:prose-a:opacity-80 transition-opacity"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            <footer className="mt-16 pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-8 no-print">
              {nav.prev && (
                <button
                  onClick={() => onNavigate(nav.prev)}
                  className="group text-left space-y-2 hover:bg-stone-50 dark:hover:bg-white/5 p-4 -ml-4 rounded-xl transition-colors duration-200"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2">
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    Anterior
                  </span>
                  <div>
                    <h4 className="text-lg font-serif font-light text-[var(--text-main)] line-clamp-2 leading-tight">
                      {nav.prev.question}
                    </h4>
                  </div>
                </button>
              )}
              {nav.next && (
                <button
                  onClick={() => onNavigate(nav.next)}
                  className="group text-right sm:col-start-2 space-y-2 hover:bg-stone-50 dark:hover:bg-white/5 p-4 -mr-4 rounded-xl transition-colors duration-200"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex items-center gap-2 justify-end">
                    Próximo
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div>
                    <h4 className="text-lg font-serif font-light text-[var(--text-main)] line-clamp-2 leading-tight">
                      {nav.next.question}
                    </h4>
                  </div>
                </button>
              )}
            </footer>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};