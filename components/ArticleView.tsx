
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FAQItem } from '../types';
import { FadeInSection } from './FadeInSection';

interface ArticleViewProps {
  article: FAQItem;
  onBack: () => void;
  onNavigate: (article: FAQItem | null) => void;
  nav: { prev: FAQItem | null; next: FAQItem | null };
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onNavigate, nav }) => (
  <div className="pt-24 lg:pt-0 animate-reveal">
    <button 
      onClick={onBack}
      className="mb-16 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-stone-400 hover:text-[var(--text-main)] transition-all group"
    >
      <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Voltar ao Acervo
    </button>

    <header className="relative mb-40 lg:mb-64">
      <div className="grid grid-cols-12 items-end">
        <div className="col-span-12 lg:col-span-9 relative z-10 pb-16 lg:pb-40">
          <div className="text-[12px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-10 transition-colors duration-500">{article.category}</div>
          <h1 className="text-6xl lg:text-[10rem] font-serif italic leading-[0.85] tracking-tighter mb-16 transition-colors duration-500">{article.question}</h1>
          <p className="text-2xl lg:text-3xl text-stone-500 font-serif italic max-w-xl leading-relaxed transition-colors duration-500">{article.answer}</p>
        </div>
        <div className="col-span-12 lg:col-span-10 lg:col-start-3 absolute top-0 right-0 h-[65vh] lg:h-[95vh] w-full lg:w-[85%] -z-10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700">
          <img src={article.imageUrl} className="w-full h-full object-cover brightness-[0.85] lg:brightness-100 transition-all duration-700" alt="" />
        </div>
      </div>
      <div className="h-40 lg:h-[50vh]"></div>
    </header>

    <FadeInSection>
      <article className="max-w-4xl mx-auto space-y-20">
         <div className="flex flex-wrap gap-3 justify-center mb-24">
            {article.tags.map(t => (
              <span key={t} className="px-6 py-2.5 border border-[var(--border)] rounded-full text-[11px] font-bold uppercase text-stone-400 transition-colors duration-500">
                # {t}
              </span>
            ))}
         </div>
         
         <div 
          className="article-body serif-content text-[var(--text-main)] transition-colors duration-500" 
          dangerouslySetInnerHTML={{ __html: article.content || article.answer }} 
         />
         
         <footer className="mt-64 pt-32 border-t border-[var(--border)] grid grid-cols-1 lg:grid-cols-2 gap-20 transition-colors duration-500">
            {nav.prev && (
              <button 
                onClick={() => onNavigate(nav.prev)} 
                className="group text-left space-y-6 focus:outline-none"
              >
                <p className="text-[11px] font-bold uppercase text-stone-400 flex items-center gap-3 group-hover:text-indigo-600 transition-colors">
                  <ArrowLeft size={16} /> Artigo Anterior
                </p>
                <h4 className="text-3xl lg:text-4xl font-serif italic group-hover:translate-x-3 transition-transform duration-700 leading-tight">
                  {nav.prev.question}
                </h4>
              </button>
            )}
            {nav.next && (
              <button 
                onClick={() => onNavigate(nav.next)} 
                className="group text-right space-y-6 focus:outline-none lg:col-start-2"
              >
                <p className="text-[11px] font-bold uppercase text-stone-400 flex items-center justify-end gap-3 group-hover:text-indigo-600 transition-colors">
                  Próximo Capítulo <ArrowRight size={16} />
                </p>
                <h4 className="text-3xl lg:text-4xl font-serif italic group-hover:-translate-x-3 transition-transform duration-700 leading-tight">
                  {nav.next.question}
                </h4>
              </button>
            )}
         </footer>
      </article>
    </FadeInSection>
  </div>
);
