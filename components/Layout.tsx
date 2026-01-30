
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { StaggeredMenu, MenuItem } from './StaggeredMenu';
import { CommandPalette } from './CommandPalette';
import { useUI } from '../context/UIContext';
import { Category, FAQItem } from '../types';

export const Layout: React.FC = () => {
  const { 
    isDarkMode, toggleDarkMode,
    isCommandPaletteOpen, setCommandPaletteOpen 
  } = useUI();
  
  const navigate = useNavigate();

  const handleSelectArticle = (article: FAQItem) => {
    navigate(`/article/${article.id}`);
  };

  const handleSelectCategory = (cat: Category | null) => {
    if (cat) {
      navigate(`/?category=${encodeURIComponent(cat)}`);
    } else {
      navigate('/');
    }
  };

  // Menu Configuration
  const menuItems: MenuItem[] = [
    { label: 'Home', path: '/', ariaLabel: 'Ir para página inicial' },
    { label: 'Minha Lista', path: '/queue', ariaLabel: 'Ver lista de leitura' },
    ...Object.values(Category).map(cat => ({
      label: cat,
      path: `/?category=${encodeURIComponent(cat)}`,
      ariaLabel: `Filtrar por ${cat}`
    }))
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-[var(--selection)] bg-[var(--bg-main)]">
      
      {/* New Global Navigation */}
      <StaggeredMenu 
        items={menuItems}
        onLogoClick={() => navigate('/')}
      />

      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectArticle={handleSelectArticle}
        onToggleTheme={toggleDarkMode}
        isDarkMode={isDarkMode}
        onSelectCategory={handleSelectCategory}
        onSelectQueue={() => { navigate('/queue'); setCommandPaletteOpen(false); }}
      />

      {/* 
        Main Content Area
        - pt: Uses the CSS variable for header height + spacing
        - max-w: Standardized via variable
      */}
      <main className="flex-1 w-full pt-[calc(var(--header-height)+var(--space-md))] pb-[var(--space-lg)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
        <div className="w-full max-w-[var(--max-width-content)] mx-auto px-[var(--space-layout)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
