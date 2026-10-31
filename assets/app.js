(() => {
  const repositoryBase = new URL('../', document.currentScript.src);
  const path = window.location.pathname;
  const pathWithinRepository = path.startsWith(repositoryBase.pathname)
    ? path.slice(repositoryBase.pathname.length)
    : path.replace(/^\/+/, '');
  const pathSegments = pathWithinRepository.split('/').filter(Boolean);
  const locale = pathSegments[0] === 'pt' || pathSegments[0] === 'es' ? pathSegments[0] : 'en';
  const contentSegments = locale === 'en' ? pathSegments : pathSegments.slice(1);
  const contentPath = contentSegments.length ? contentSegments.join('/') : 'index.html';
  const languageGlobe = '<svg class="language-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12S9.6 18.5 12 21"></path></svg>';

  const pageHref = (page, targetLocale = locale) => {
    const localePrefix = targetLocale === 'en' ? '' : `${targetLocale}/`;
    const pagePath = page === 'index.html' ? '' : page;
    return new URL(`${localePrefix}${pagePath}`, repositoryBase).pathname;
  };

  const labels = {
    en: {
      nav: 'Primary navigation',
      explore: 'Explore',
      library: 'Research Library',
      peptides: 'Peptides',
      supplements: 'Supplements',
      biomarkers: 'Biomarkers',
      comparisons: 'Comparisons',
      membership: 'Membership',
      open: 'Open navigation',
      close: 'Close navigation',
      language: 'Select language'
    },
    pt: {
      nav: 'Navegação principal',
      explore: 'Explorar',
      library: 'Biblioteca',
      peptides: 'Peptídeos',
      supplements: 'Suplementos',
      biomarkers: 'Biomarcadores',
      comparisons: 'Comparações',
      membership: 'Assinatura',
      open: 'Abrir navegação',
      close: 'Fechar navegação',
      language: 'Selecionar idioma'
    },
    es: {
      nav: 'Navegación principal',
      explore: 'Explorar',
      library: 'Biblioteca',
      peptides: 'Péptidos',
      supplements: 'Suplementos',
      biomarkers: 'Biomarcadores',
      comparisons: 'Comparaciones',
      membership: 'Membresía',
      open: 'Abrir navegación',
      close: 'Cerrar navegación',
      language: 'Seleccionar idioma'
    }
  }[locale];

  const currentFile = contentPath.split('/').pop();
  const activeAttr = (file) => currentFile === file ? ' aria-current="page"' : '';
  const homeHref = pageHref('index.html');
  const languageHref = {
    en: pageHref(contentPath, 'en'),
    pt: pageHref(contentPath, 'pt'),
    es: pageHref(contentPath, 'es')
  };

  const existingHeader = document.querySelector('.site-header');
  if (existingHeader) {
    existingHeader.innerHTML = `
      <a class="brand" href="${homeHref}" aria-label="WellMax home">
        <span class="brand-mark">W</span><span>WellMax</span>
      </a>
      <nav class="main-nav" aria-label="${labels.nav}">
        <a href="${pageHref('explore.html')}"${activeAttr('explore.html')}>${labels.explore}</a>
        <a href="${pageHref('library.html')}"${activeAttr('library.html')}>${labels.library}</a>
        <a href="${pageHref('peptides.html')}"${activeAttr('peptides.html')}>${labels.peptides}</a>
        <a href="${pageHref('supplements.html')}"${activeAttr('supplements.html')}>${labels.supplements}</a>
        <a href="${pageHref('biomarkers.html')}"${activeAttr('biomarkers.html')}>${labels.biomarkers}</a>
        <a href="${pageHref('comparisons.html')}"${activeAttr('comparisons.html')}>${labels.comparisons}</a>
      </nav>
      <div class="header-actions">
        <div class="language-menu" data-language-menu>
          <button class="language-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="${labels.language}">
            ${languageGlobe}
            <span>${locale.toUpperCase()}</span><span aria-hidden="true">▾</span>
          </button>
          <div class="language-dropdown" role="menu" hidden>
            <a class="${locale === 'en' ? 'active' : ''}" href="${languageHref.en}" data-language="en" role="menuitem">🇺🇸 English</a>
            <a class="${locale === 'pt' ? 'active' : ''}" href="${languageHref.pt}" data-language="pt" role="menuitem">🇧🇷 Português</a>
            <a class="${locale === 'es' ? 'active' : ''}" href="${languageHref.es}" data-language="es" role="menuitem">🇪🇸 Español</a>
          </div>
        </div>
        <button class="menu-toggle" type="button" aria-label="${labels.open}" aria-expanded="false">☰</button>
      </div>`;
  }

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? labels.close : labels.open);
    });
    navigation.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const languageMenus = Array.from(document.querySelectorAll('[data-language-menu]'));
  languageMenus.forEach((menu) => {
    const button = menu.querySelector('.language-button');
    const dropdown = menu.querySelector('.language-dropdown');
    if (!button || !dropdown) return;

    const closeMenu = () => {
      dropdown.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    };

    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = dropdown.hidden;
      dropdown.hidden = !willOpen;
      button.setAttribute('aria-expanded', String(willOpen));
      menu.classList.toggle('open', willOpen);
    });

    dropdown.querySelectorAll('[data-language]').forEach((link) => {
      link.addEventListener('click', () => {
        try { window.localStorage.setItem('wellmax-language', link.dataset.language || 'en'); } catch (_) {}
        closeMenu();
      });
    });

    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        button.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target)) closeMenu();
    });
  });

  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const searchInput = document.querySelector('#librarySearch');
  const resultCount = document.querySelector('#resultCount');
  const cards = Array.from(document.querySelectorAll('[data-search]'));
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  let activeFilter = 'all';

  const applyFilters = () => {
    const term = normalize(searchInput?.value ?? '');
    let visible = 0;
    cards.forEach((card) => {
      const searchableText = normalize(card.getAttribute('data-search') ?? card.textContent ?? '');
      const category = card.getAttribute('data-category') ?? 'all';
      const matches = (!term || searchableText.includes(term)) && (activeFilter === 'all' || category === activeFilter);
      card.classList.toggle('hidden', !matches);
      if (matches) visible += 1;
    });
    document.querySelectorAll('[data-group]').forEach((group) => {
      group.classList.toggle('hidden', !group.querySelector('[data-search]:not(.hidden)'));
    });
    document.querySelector('#libraryEmpty')?.classList.toggle('hidden', visible > 0);
    if (resultCount) {
      const one = resultCount.dataset.labelOne || 'result';
      const many = resultCount.dataset.labelMany || 'results';
      resultCount.textContent = `${visible} ${visible === 1 ? one : many}`;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      applyFilters();
    });
  });
  searchInput?.addEventListener('input', applyFilters);
  applyFilters();

  const slides = Array.from(document.querySelectorAll('.highlight-slide'));
  const dots = Array.from(document.querySelectorAll('[data-carousel-dot]'));
  const previous = document.querySelector('.carousel-arrow.previous');
  const next = document.querySelector('.carousel-arrow.next');
  const carousel = document.querySelector('.highlights-carousel');
  let currentSlide = 0;
  let carouselTimer;

  const showSlide = (index) => {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentSlide;
      slide.hidden = !active;
      slide.classList.toggle('active', active);
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === currentSlide;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  };

  const stopCarousel = () => window.clearInterval(carouselTimer);
  const startCarousel = () => {
    stopCarousel();
    if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      carouselTimer = window.setInterval(() => showSlide(currentSlide + 1), 6500);
    }
  };

  previous?.addEventListener('click', () => { showSlide(currentSlide - 1); startCarousel(); });
  next?.addEventListener('click', () => { showSlide(currentSlide + 1); startCarousel(); });
  dots.forEach((dot) => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.carouselDot)); startCarousel(); }));
  carousel?.addEventListener('mouseenter', stopCarousel);
  carousel?.addEventListener('mouseleave', startCarousel);
  carousel?.addEventListener('focusin', stopCarousel);
  carousel?.addEventListener('focusout', startCarousel);
  showSlide(0);
  startCarousel();

  const exploreInput = document.querySelector('#exploreSearch');
  const exploreButton = document.querySelector('#exploreSearchButton');
  const exploreCards = Array.from(document.querySelectorAll('[data-explore]'));
  const exploreCount = document.querySelector('#exploreResultCount');

  const filterExplore = () => {
    const term = normalize(exploreInput?.value ?? '');
    let visible = 0;
    exploreCards.forEach((card) => {
      const value = normalize(card.getAttribute('data-explore') ?? card.textContent ?? '');
      const matches = !term || value.includes(term);
      card.classList.toggle('hidden', !matches);
      if (matches) visible += 1;
    });
    if (exploreCount) exploreCount.textContent = `${visible} ${visible === 1 ? 'area' : 'areas'}`;
  };

  exploreInput?.addEventListener('input', filterExplore);
  exploreButton?.addEventListener('click', filterExplore);
  filterExplore();
})();
