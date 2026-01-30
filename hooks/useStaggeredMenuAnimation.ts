
import { useRef, useState, useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const useStaggeredMenuAnimation = (
  open: boolean, 
  position: 'right' | 'left' = 'right', 
  changeMenuColorOnOpen: boolean = true,
  menuButtonColor: string = '#000',
  openMenuButtonColor: string = '#000'
) => {
  // Refs
  const panelRef = useRef<HTMLElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const textInnerRef = useRef<HTMLSpanElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const [textLines, setTextLines] = useState(['Menu', 'Close']);
  const busyRef = useRef(false);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);

  // Initial Setup
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      
      if (!panel || !icon || !textInner) return;

      const preLayers = preContainer ? Array.from(preContainer.querySelectorAll('.sm-prelayer')) : [];
      const offscreen = 100;

      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });
    });
    return () => ctx.revert();
  }, [position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const preContainer = preLayersRef.current;
    if (!panel) return null;

    const layers = preContainer ? Array.from(preContainer.querySelectorAll('.sm-prelayer')) : [];
    
    openTlRef.current?.kill();
    closeTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const footer = panel.querySelector('.sm-footer');

    // Reset positions
    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
    if (footer) gsap.set(footer, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ paused: true });

    // Layers
    layers.forEach((el, i) => {
      tl.fromTo(el, { xPercent: 100 }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    // Panel
    const lastTime = layers.length ? (layers.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layers.length ? 0.08 : 0);
    const panelDuration = 0.65;
    
    tl.fromTo(panel, 
      { xPercent: 100 }, 
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' }, 
      panelInsertTime
    );

    // Items
    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.25;
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.08, from: 'start' } }, itemsStart);
      
      if (numberEls.length) {
        tl.to(numberEls, { duration: 0.6, ease: 'power2.out', '--sm-num-opacity': 1, stagger: { each: 0.08, from: 'start' } }, itemsStart + 0.1);
      }
    }

    // Footer
    if (footer) {
      tl.to(footer, { opacity: 1, y: 0, duration: 0.5, delay: 0.4 });
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => { busyRef.current = false; });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    
    const panel = panelRef.current;
    const preContainer = preLayersRef.current;
    if (!panel) return;

    const layers = preContainer ? Array.from(preContainer.querySelectorAll('.sm-prelayer')) : [];
    const all = [...layers, panel];
    
    closeTweenRef.current?.kill();
    closeTweenRef.current = gsap.to(all, {
      xPercent: 100,
      duration: 0.4,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => { busyRef.current = false; }
    });
  }, []);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    if (icon) {
      gsap.to(icon, { 
        rotate: opening ? 225 : 0, 
        duration: 0.6, 
        ease: 'power4.out', 
        overwrite: 'auto' 
      });
    }
  }, []);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;
    const seq = [currentLabel];
    let last = currentLabel;
    
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);
    setTextLines(seq);

    gsap.set(inner, { yPercent: 0 });
    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;
    
    gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    });
  }, []);

  return {
    refs: { panelRef, preLayersRef, iconRef, textInnerRef, toggleBtnRef },
    textLines,
    playOpen,
    playClose,
    animateIcon,
    animateText
  };
};
