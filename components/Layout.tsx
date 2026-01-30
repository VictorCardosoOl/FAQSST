
import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { CommandPalette } from './CommandPalette';
import { useUI } from '../context/UIContext';
import { useReadingQueue } from '../hooks/useReadingQueue';
import { Category, FAQItem } from '../types';
import { FAQ_DATA } from '../constants';

export const Layout: React.FC = () => {
  const { 
    isSidebarOpen, toggleSidebar, closeSidebar, 
    isSidebarPinned, toggleSidebarPin, 
    isDarkMode, toggleDarkMode,
    isCommandPaletteOpen, setCommandPaletteOpen 
  } = useUI();
  
  const { queue } = useReadingQueue();
  const navigate = useNavigate();
  const location = useLocation();

  const getCategoryFromPath = (): Category | null => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    // Simple verification if string matches enum value
    const found = Object.values(Category).find(c => c === cat);
    return found || null;
  };

  const isQueueView = location.pathname === '/queue';
  const currentCategory = isQueueView ? null : getCategoryFromPath();

  const handleSelectCategory = (cat: Category | null) => {
    if (cat) {
      navigate(`/?category=${encodeURIComponent(cat)}`);
    } else {
      navigate('/');
    }
    closeSidebar();
  };

  const handleSelectArticle = (article: FAQItem) => {
    navigate(`/article/${article.id}`);
    closeSidebar();
  };

  return (
    <div className="flex min-h-screen selection:bg-[var(--selection)] bg-[var(--bg-main)]">
      <Sidebar 
        currentCat={currentCategory} 
        onSelect={handleSelectCategory}
        isDarkMode={isDarkMode}
        toggleDark={toggleDarkMode}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        isQueueView={isQueueView}
        onSelectQueue={() => { navigate('/queue'); closeSidebar(); }}
        queueCount={queue.length}
        onLogoClick={() => navigate('/')}
        isPinned={isSidebarPinned}
        onPinToggle={toggleSidebarPin}
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

      <main 
        className={`
          flex-1 w-full min-h-screen transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
          pt-[var(--space-md)] pb-[var(--space-lg)]
          ${isSidebarPinned ? 'lg:ml-80' : 'lg:ml-24'}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-[var(--space-layout)]">
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden fixed top-4 right-4 z-40 p-2.5 glass bg-[var(--bg-island)] border border-[var(--border)] rounded-full shadow-lg text-[var(--text-main)]"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          <Outlet />
        </div>
      </main>
    </div>
  );
};
