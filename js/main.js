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
      'hero.name': '李雾月',
      'hero.title': 'AI游戏系统工程师 & AI玩法开发工程师',
      'hero.tagline': '探索游戏设计的边界，用 AI 智能体赋予虚拟世界生命。',
      'hero.hint': '点击或滚动探索',

      'about.label': '关于我',
      'about.heading': '在游戏与 AI<br>之间探索。',
      'about.text1': '我目前专注于游戏策划与 AI Agent 开发两个方向，期待将二者融合——让智能体进入游戏世界，创造真正有回应、有记忆、有灵魂的虚拟角色。',
      'about.text2': '我相信未来最好的游戏体验不止于精美的画面与精巧的关卡，更在于世界对玩家的每一次选择都能做出独特而真实的回应。',
      'about.text3': '现居成都，热爱探索叙事驱动型游戏、沉浸式模拟和一切能让人"忘记时间"的交互体验。如果你也在关注 AI × 游戏的方向，欢迎交流。',
      'about.location.label': '所在地',
      'about.location.value': '四川成都',
      'about.focus.label': '专注领域',
      'about.focus.value': '游戏策划、AI Agent 开发',
      'about.phone.label': '电话',
      'about.phone.value': '13548094795',
      'about.email.label': '邮箱',
      'about.email.value': '2910140171@qq.com',

      'exp.label': '项目经历',
      'exp.heading': '近期在做<br>的事情。',
      'exp.item1.date': '2026.05 — 至今',
      'exp.item1.role': '叙事驱动型游戏原型 Demo',
      'exp.item1.company': '独立开发',
      'exp.item1.desc': '设计并实现核心玩法循环与多分支叙事框架，搭建角色情感关系网与对话系统，预留 AI Agent 接入接口，持续打磨玩法与叙事体验。',
      'exp.item2.date': '2026.05 — 2026.06',
      'exp.item2.role': 'RAG智能穿搭助手',
      'exp.item2.company': '独立开发',
      'exp.item2.desc': '基于 LangChain LCEL + ChromaDB 搭建 RAG 检索链路，完成文档解析、分块、嵌入、检索全流程，Streamlit 前后端一体化部署，支持多轮对话与知识库管理。',
      'exp.item3.date': '2026.04 — 至今',
      'exp.item3.role': 'AI-Interview 智能模拟面试系统',
      'exp.item3.company': '独立开发',
      'exp.item3.desc': '基于 FastAPI + LangChain Agent + RAG 的 AI 模拟面试系统，集成简历解析、岗位匹配、智能出题、AI 评分全流程，Docker Compose 全栈部署。',

      'portfolio.label': '作品集',
      'portfolio.heading': '精选<br>作品。',
      'portfolio.item1.name': '叙事驱动型游戏原型 Demo',
      'portfolio.item1.cat': '游戏开发 · 叙事设计',
      'portfolio.item1.desc': '独立开发的叙事驱动型游戏原型，聚焦角色情感关系网与多线叙事结构。完成核心玩法循环与分支剧情框架设计，预留 AI Agent 接入 NPC 系统的动态叙事接口，探索从固定脚本到智能叙事的范式演进。',
      'portfolio.item2.name': 'AI-Interview — 智能模拟面试系统',
      'portfolio.item2.cat': 'AI Agent · RAG · 全栈',
      'portfolio.item2.desc': '基于 LangChain Tool Calling Agent + RAG 的 AI 模拟面试系统。围绕简历解析、岗位匹配、RAG 出题、AI 评分、面试报告构建完整闭环，FastAPI + PostgreSQL + pgvector + Celery + Docker 全栈部署。',
      'portfolio.item3.name': 'RAG智能穿搭助手',
      'portfolio.item3.cat': 'RAG · LLM · 全栈',
      'portfolio.item3.desc': '基于 LangChain LCEL + ChromaDB 的 RAG 智能穿搭推荐系统。完成文档解析、递归分块、向量嵌入与语义检索全链路，配合结构化 Prompt 约束 qwen3-max 输出质量，Streamlit 前后端一体化部署。'
    },

    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Timeline',
      'nav.portfolio': 'Projects',

      'hero.greeting': "Hello, I'm",
      'hero.name': 'Li Wuyue',
      'hero.title': 'AI Game Systems Engineer & AI Gameplay Developer',
      'hero.tagline': 'Exploring the frontiers of game design, breathing life into virtual worlds with AI agents.',
      'hero.hint': 'Click or scroll to explore',

      'about.label': 'About',
      'about.heading': 'Exploring between<br>games and AI.',
      'about.text1': "I'm currently focused on game design and AI agent development, with the goal of merging the two — bringing intelligent agents into game worlds to create virtual characters that truly respond, remember, and feel alive.",
      'about.text2': 'I believe the best gaming experiences go beyond stunning visuals and clever level design — they emerge when the world responds uniquely and authentically to every player choice.',
      'about.text3': "Based in Chengdu, I'm passionate about narrative-driven games, immersive sims, and any interactive experience that makes you lose track of time. If you're also exploring the intersection of AI and games, let's connect.",
      'about.location.label': 'Location',
      'about.location.value': 'Chengdu, Sichuan',
      'about.focus.label': 'Focus',
      'about.focus.value': 'Game Design, AI Agent Development',
      'about.phone.label': 'Phone',
      'about.phone.value': '13548094795',
      'about.email.label': 'Email',
      'about.email.value': '2910140171@qq.com',

      'exp.label': 'Timeline',
      'exp.heading': "What I'm<br>building.",
      'exp.item1.date': '2026.05 — Present',
      'exp.item1.role': 'Narrative-Driven Game Prototype',
      'exp.item1.company': 'Solo Project',
      'exp.item1.desc': 'Designing and implementing core gameplay loops with a multi-branch narrative framework, building character relationship networks and dialogue systems, with AI Agent integration architecture for dynamic storytelling.',
      'exp.item2.date': '2026.05 — 2026.06',
      'exp.item2.role': 'RAG Smart Outfit Assistant',
      'exp.item2.company': 'Solo Project',
      'exp.item2.desc': 'Built a RAG retrieval pipeline with LangChain LCEL + ChromaDB, covering document parsing, chunking, embedding, and semantic retrieval. Streamlit-based full-stack deployment with multi-turn dialogue and knowledge base management.',
      'exp.item3.date': '2026.04 — Present',
      'exp.item3.role': 'AI-Interview Mock Interview System',
      'exp.item3.company': 'Solo Project',
      'exp.item3.desc': 'An AI-powered mock interview system built with FastAPI + LangChain Agent + RAG, integrating resume parsing, job matching, intelligent question generation, and AI scoring. Full-stack deployment with Docker Compose.',

      'portfolio.label': 'Projects',
      'portfolio.heading': 'Selected<br>projects.',
      'portfolio.item1.name': 'Narrative-Driven Game Prototype',
      'portfolio.item1.cat': 'Game Dev · Narrative Design',
      'portfolio.item1.desc': 'An independently developed narrative-driven game prototype focused on character emotional relationship networks and multi-threaded storytelling, with AI Agent integration for dynamic NPC narrative control.',
      'portfolio.item2.name': 'AI-Interview — Mock Interview System',
      'portfolio.item2.cat': 'AI Agent · RAG · Full-Stack',
      'portfolio.item2.desc': 'An AI mock interview system with LangChain Tool Calling Agent + RAG, covering resume parsing, job matching, question generation, AI scoring, and reports. FastAPI + PostgreSQL + pgvector + Celery + Docker.',
      'portfolio.item3.name': 'RAG Smart Outfit Assistant',
      'portfolio.item3.cat': 'RAG · LLM · Full-Stack',
      'portfolio.item3.desc': 'A RAG-based outfit recommendation system with LangChain LCEL + ChromaDB. Full pipeline from document parsing, recursive chunking, vector embedding to semantic retrieval, with structured prompts for qwen3-max generation.'
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
    const nav = navigator.language || '';
    return nav.startsWith('zh') ? 'zh' : 'en';
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    langOptions.forEach((opt) => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (t[lang][key]) {
        el.textContent = t[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (t[lang][key]) {
        el.innerHTML = t[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.dataset.i18nAria;
      if (t[lang][key]) {
        el.setAttribute('aria-label', t[lang][key]);
      }
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  langOptions.forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage(opt.dataset.lang);
    });
  });

  // ──────────────────────────────────
  //  SECTION NAVIGATION
  // ──────────────────────────────────
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
