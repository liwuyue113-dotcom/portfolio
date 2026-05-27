(function () {
  // ──────────────────────────────────
  //  TRANSLATIONS
  // ──────────────────────────────────
  const t = {
    zh: {
      'nav.home': '首页',
      'nav.about': '关于',
      'nav.experience': '经历',
      'nav.portfolio': '作品',

      'hero.greeting': '你好，我是',
      'hero.name': '你的名字',
      'hero.title': '产品设计师 & 创意开发者',
      'hero.tagline': '在设计与技术的交汇处，打造精致的数字体验。',
      'hero.hint': '点击或滚动探索',

      'about.label': '关于我',
      'about.heading': '作品背后的<br>故事。',
      'about.text1': '我是一名多学科设计师和开发者，常驻上海，拥有8年以上创造精致数字产品的经验。',
      'about.text2': '我的工作方式将审美感知与技术精度融为一体——我相信，当设计意图在实现过程中毫发无损地保留下来时，最好的作品才会诞生。',
      'about.text3': '离开办公桌时，我会拍摄城市风景、收集字体设计书籍，或探索生成艺术与代码的交汇之处。',
      'about.location.label': '所在地',
      'about.location.value': '中国 上海',
      'about.focus.label': '专注领域',
      'about.focus.value': '产品设计、创意开发',
      'about.contact.label': '联系方式',
      'about.contact.value': 'hello@yourdomain.com',

      'exp.label': '工作经历',
      'exp.heading': '我留下印记<br>的地方。',
      'exp.item1.date': '2022 — 至今',
      'exp.item1.role': '高级产品设计师',
      'exp.item1.company': 'Acme Inc.',
      'exp.item1.desc': '主导核心产品套件的设计工作。重新设计了旗舰仪表盘，日活跃用户增长 40%。建立了被三个产品团队共同使用的设计系统。',
      'exp.item2.date': '2019 — 2022',
      'exp.item2.role': '产品设计师',
      'exp.item2.company': 'Studio Beta',
      'exp.item2.desc': '为一款覆盖 200 万+ 用户的产品交付了面向消费者的功能。主导从用户研究到高保真原型再到开发交付的完整设计流程。',
      'exp.item3.date': '2017 — 2019',
      'exp.item3.role': 'UI/UX 设计师',
      'exp.item3.company': 'Creative Studio Gamma',
      'exp.item3.desc': '为金融科技、教育和电商领域的客户设计品牌形象与数字体验。按时、按范围交付了 20+ 个项目。',

      'portfolio.label': '作品集',
      'portfolio.heading': '精选<br>作品。',
      'portfolio.item1.name': '仪表盘重设计',
      'portfolio.item1.cat': '产品设计 · 2023',
      'portfolio.item1.desc': '对 SaaS 分析仪表盘的全面改版，聚焦于清晰度、速度和愉悦感。',
      'portfolio.item2.name': '设计系统',
      'portfolio.item2.cat': '设计系统 · 2022',
      'portfolio.item2.desc': '一套可扩展的组件库和 Token 架构，为三个产品团队提供支持。',
      'portfolio.item3.name': '手机银行应用',
      'portfolio.item3.cat': 'UX 设计 · 2021',
      'portfolio.item3.desc': '一款金融科技应用的端到端移动端体验，从用户研究到精致的界面设计。',
      'portfolio.item4.name': '品牌形象设计',
      'portfolio.item4.cat': '品牌设计 · 2020',
      'portfolio.item4.desc': '一家教育创业公司的视觉识别系统和规范指南，包括 Logo、字体和应用物料。'
    },

    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.portfolio': 'Portfolio',

      'hero.greeting': "Hello, I'm",
      'hero.name': 'Your Name',
      'hero.title': 'Product Designer & Creative Developer',
      'hero.tagline': 'Crafting digital experiences at the intersection of design and technology.',
      'hero.hint': 'Click or scroll to explore',

      'about.label': 'About',
      'about.heading': 'The story behind<br>the work.',
      'about.text1': "I'm a multidisciplinary designer and developer based in Shanghai, with over 8 years of experience creating thoughtful digital products.",
      'about.text2': 'My approach bridges aesthetic sensibility with technical precision — I believe the best work emerges when design intent survives implementation intact.',
      'about.text3': "When I'm not at the desk, you'll find me photographing urban landscapes, collecting typography books, or exploring the intersection of generative art and code.",
      'about.location.label': 'Location',
      'about.location.value': 'Shanghai, China',
      'about.focus.label': 'Focus',
      'about.focus.value': 'Product Design, Creative Development',
      'about.contact.label': 'Contact',
      'about.contact.value': 'hello@yourdomain.com',

      'exp.label': 'Experience',
      'exp.heading': "Where I've<br>made an impact.",
      'exp.item1.date': '2022 — Present',
      'exp.item1.role': 'Senior Product Designer',
      'exp.item1.company': 'Acme Inc.',
      'exp.item1.desc': 'Leading design for the core product suite. Redesigned the flagship dashboard, growing daily active users by 40%. Established the design system used across three product teams.',
      'exp.item2.date': '2019 — 2022',
      'exp.item2.role': 'Product Designer',
      'exp.item2.company': 'Studio Beta',
      'exp.item2.desc': 'Shipped consumer-facing features for a product reaching 2M+ users. Drove the end-to-end design process from research through high-fidelity prototypes and developer handoff.',
      'exp.item3.date': '2017 — 2019',
      'exp.item3.role': 'UI/UX Designer',
      'exp.item3.company': 'Creative Studio Gamma',
      'exp.item3.desc': 'Designed brand identities and digital experiences for clients across fintech, education, and e-commerce. Delivered 20+ projects on time and within scope.',

      'portfolio.label': 'Portfolio',
      'portfolio.heading': 'Selected<br>works.',
      'portfolio.item1.name': 'Dashboard Redesign',
      'portfolio.item1.cat': 'Product Design · 2023',
      'portfolio.item1.desc': 'Complete overhaul of a SaaS analytics dashboard, focusing on clarity, speed, and delight.',
      'portfolio.item2.name': 'Design System',
      'portfolio.item2.cat': 'Systems · 2022',
      'portfolio.item2.desc': 'A scalable component library and token architecture powering three product teams.',
      'portfolio.item3.name': 'Mobile Banking App',
      'portfolio.item3.cat': 'UX Design · 2021',
      'portfolio.item3.desc': 'End-to-end mobile experience for a fintech app, from user research to polished UI.',
      'portfolio.item4.name': 'Brand Identity',
      'portfolio.item4.cat': 'Branding · 2020',
      'portfolio.item4.desc': 'Visual identity and guidelines for an education startup, including logo, typography, and collateral.'
    }
  };

  // ──────────────────────────────────
  //  LANGUAGE SWITCHING
  // ──────────────────────────────────
  const STORAGE_KEY = 'portfolio-lang';
  const toggle = document.querySelector('.lang-toggle');
  const langOptions = [...toggle.querySelectorAll('.lang-option')];

  function getInitialLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'zh' || stored === 'en') return stored;
    // Default to browser preference, fallback to zh
    const nav = navigator.language || '';
    return nav.startsWith('zh') ? 'zh' : 'en';
  }

  function setLanguage(lang) {
    // Update document
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update toggle button state
    langOptions.forEach((opt) => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Set text for data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (t[lang][key]) {
        el.textContent = t[lang][key];
      }
    });

    // Set HTML for data-i18n-html elements (handles <br> tags in headings)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (t[lang][key]) {
        el.innerHTML = t[lang][key];
      }
    });

    // Set aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.dataset.i18nAria;
      if (t[lang][key]) {
        el.setAttribute('aria-label', t[lang][key]);
      }
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Click individual lang option
  langOptions.forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage(opt.dataset.lang);
    });
  });

  // ──────────────────────────────────
  //  SECTION NAVIGATION
  // ──────────────────────────────────
  const wrapper = document.querySelector('.sections-wrapper');
  const sections = [...document.querySelectorAll('.section')];
  const dots = [...document.querySelectorAll('.nav-dot')];
  const total = sections.length;

  let currentIndex = 0;
  let isTransitioning = false;
  let mouseDownY = 0;
  let mouseMoved = false;
  let touchStartY = 0;
  let touchHandled = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.index, 10);
          currentIndex = idx;
          updateDots(idx);
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((s) => observer.observe(s));

  function goTo(index) {
    if (index < 0 || index >= total || isTransitioning) return;
    isTransitioning = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      isTransitioning = false;
    }, 800);
  }

  function updateDots(index) {
    dots.forEach((d) => d.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(dot.dataset.index, 10);
      goTo(idx);
    });
  });

  document.addEventListener('mousedown', (e) => {
    mouseDownY = e.clientY;
    mouseMoved = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (Math.abs(e.clientY - mouseDownY) > 8) {
      mouseMoved = true;
    }
  });

  document.addEventListener('click', (e) => {
    if (mouseMoved || touchHandled) return;
    if (e.target.closest('.lang-toggle')) return;
    if (e.target.closest('.nav-dot')) return;
    if (e.target.closest('a')) return;

    const next = currentIndex + 1;
    if (next < total) {
      goTo(next);
    } else {
      goTo(0);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'j') {
      e.preventDefault();
      goTo(currentIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'k') {
      e.preventDefault();
      goTo(currentIndex - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(total - 1);
    }
  });

  document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    touchHandled = false;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const delta = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(delta) > 60) {
      touchHandled = true;
      if (delta > 0) {
        goTo(currentIndex + 1);
      } else {
        goTo(currentIndex - 1);
      }
    }
  });

  // ──────────────────────────────────
  //  INIT
  // ──────────────────────────────────
  setLanguage(getInitialLang());
  sections[0].classList.add('visible');
})();
