
import React, { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUI } from '../context/UIContext';
import { Moon, Sun } from 'lucide-react';
import { useStaggeredMenuAnimation } from '../hooks/useStaggeredMenuAnimation';
import './StaggeredMenu.css';

export interface MenuItem {
  label: string;
  path?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
  logoLabel?: string;
  onLogoClick?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  items,
  logoLabel = "TEAMWIKI",
  onLogoClick
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useUI();

  // Custom Hook handles all GSAP logic
  const { 
    refs, 
    textLines, 
    playOpen, 
    playClose, 
    animateIcon, 
    animateText 
  } = useStaggeredMenuAnimation(open);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    
    if (target) {
      playOpen();
    } else {
      playClose();
    }
    animateIcon(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateText]);

  const handleItemClick = (item: MenuItem) => {
    if (item.path) {
      navigate(item.path);
    }
    if (item.onClick) {
      item.onClick();
    }
    toggleMenu();
  };

  return (
    <div className={`staggered-menu-wrapper ${open ? 'fixed-wrapper' : ''}`}>
      {/* Decorative Pre-layers */}
      <div ref={refs.preLayersRef} className="sm-prelayers" aria-hidden="true">
        <div className="sm-prelayer" style={{ background: isDarkMode ? '#1a1a1a' : '#f5f5f5' }} />
        <div className="sm-prelayer" style={{ background: isDarkMode ? '#262626' : '#e5e5e5' }} />
      </div>

      <header className="staggered-menu-header">
        <div className="sm-logo" onClick={() => { onLogoClick?.(); if(open) toggleMenu(); }}>
           <span className="sm-logo-text">{logoLabel}</span>
        </div>

        <button
          ref={refs.toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span className="sm-toggle-textWrap" aria-hidden="true">
            <span ref={refs.textInnerRef} className="sm-toggle-textInner">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line" key={i}>{l}</span>
              ))}
            </span>
          </span>
          <span ref={refs.iconRef} className="sm-icon" aria-hidden="true">
            <span className="sm-icon-line" />
            <span className="sm-icon-line sm-icon-line-v" />
          </span>
        </button>
      </header>

      <aside ref={refs.panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering="true">
            {items.map((item, idx) => (
              <li className="sm-panel-itemWrap" key={idx}>
                <a 
                  className="sm-panel-item" 
                  onClick={() => handleItemClick(item)}
                  aria-label={item.ariaLabel}
                >
                  <span className="sm-panel-itemLabel">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="sm-footer">
            <button className="sm-footer-btn" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <div className="sm-footer-btn">
              © 2025 TeamWiki Inc.
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
