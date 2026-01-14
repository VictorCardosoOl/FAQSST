const sidebarStates = ['sidebar-estado-expandido', 'sidebar-estado-recolhido', 'sidebar-estado-flutuante'];

function setSidebarState(state) {
    document.body.classList.remove(...sidebarStates);
    document.body.classList.add(state);
    localStorage.setItem('sidebarState', state);
    window.dispatchEvent(new Event('resize'));
}

 function initSidebar(callbacks) {
    const sidebarElement = document.getElementById('sidebar');
    if (!sidebarElement) return;

    // --- ENCONTRAR ELEMENTOS NO HTML ---
    const toggleBtn = document.getElementById('sidebar-toggle');
    const navSection = document.getElementById('nav-section');
    const navSectionHeader = document.getElementById('nav-section-header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuOverlay = document.getElementById('sidebar-overlay');
    const homeLink = sidebarElement.querySelector('[data-action="go-home"]');
    const sidebarNav = document.getElementById('sidebar-nav');

    // --- CONFIGURAR EVENTOS ---
    if (toggleBtn) {
        toggleBtn.addEventListener('click', e => {
            e.stopPropagation();
            const currentState = sidebarStates.find(s => document.body.classList.contains(s)) || sidebarStates[0];
            const nextState = sidebarStates[(sidebarStates.indexOf(currentState) + 1) % sidebarStates.length];
            setSidebarState(nextState);
        });
    }

    if (navSectionHeader) {
        navSectionHeader.addEventListener('click', () => {
            const isCollapsed = navSection.classList.toggle('collapsed');
            localStorage.setItem('sidebarNavCollapsed', isCollapsed);
        });
    }
    
    if (sidebarNav) {
        sidebarNav.addEventListener('click', e => {
            const navLink = e.target.closest('.sidebar-nav-link');
            if (navLink) {
                e.preventDefault();
                callbacks.onNavLinkClick(navLink.dataset.categoryId);
                // Fecha o menu mobile ao clicar em um link
                if (window.innerWidth <= 1024) {
                    sidebarElement.classList.remove('visible');
                    mobileMenuOverlay.classList.remove('visible');
                }
            }
        });
    }
    
    if (homeLink) {
        homeLink.addEventListener('click', e => {
            e.preventDefault();
            callbacks.onHomeClick();
        });
    }

    if (mobileMenuButton && mobileMenuOverlay) {
        mobileMenuButton.addEventListener('click', () => {
            sidebarElement.classList.toggle('visible');
            mobileMenuOverlay.classList.toggle('visible');
        });
        mobileMenuOverlay.addEventListener('click', () => {
            sidebarElement.classList.remove('visible');
            mobileMenuOverlay.classList.remove('visible');
        });
    }

    // --- RESTAURAR ESTADOS SALVOS ---
    if (localStorage.getItem('sidebarNavCollapsed') === 'true') {
        navSection?.classList.add('collapsed');
    }
    const savedState = localStorage.getItem('sidebarState');
    setSidebarState(savedState || sidebarStates[0]);

    return { themeToggleBtn: document.getElementById('theme-toggle') };
}

 function updateActiveLink(activeCategoryId) {
    const sidebarNav = document.getElementById('sidebar-nav');
    const navSection = document.getElementById('nav-section');
    if (!sidebarNav || !navSection) return;

    sidebarNav.querySelectorAll('.sidebar-nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.categoryId === activeCategoryId);
    });

    if (activeCategoryId && navSection.classList.contains('collapsed')) {
        navSection.classList.remove('collapsed');
        localStorage.setItem('sidebarNavCollapsed', 'false');
    }
}