(function () {
  // ──────────────────────────────────
  //  TRANSLATIONS
  // ──────────────────────────────────
  const t = {
    "zh": {
        "page.title": "邬志鹏 — 游戏策划作品集",
        "nav.home": "首页",
        "nav.portfolio": "作品",
        "nav.experience": "经历",
        "nav.about": "关于",
        "hero.greeting": "你好，我是",
        "hero.name": "邬志鹏",
        "hero.title": "游戏策划 · 系统设计 · 关卡设计",
        "hero.tagline": "从玩家体验出发，把系统规则、关卡节奏与叙事想法做成可玩的体验。",
        "hero.hint": "点击或滚动探索",
        "portfolio.label": "作品集",
        "portfolio.heading": "精选作品。",
        "portfolio.item1.name": "《三角洲行动》赛季任务系统策划",
        "portfolio.item1.cat": "系统策划 · 任务与奖励 · 界面原型",
        "portfolio.item1.desc": "以 3×3 安全箱为核心奖励目标，拆解行动计划、收集者、命运契约与赛季目标四大模块。独立完成任务规则、分阶段解锁、奖励机制、界面原型，以及任务、条件、奖励和赛季配置表。",
        "portfolio.item1.cover": "任务 · 解锁 · 奖励",
        "portfolio.item1.link": "查看系统策划案 ↗",
        "portfolio.item2.name": "《what the crayon remembers》",
        "portfolio.item2.cat": "TapTap 聚光灯 Game Jam · UE5 · 玩法与叙事",
        "portfolio.item2.desc": "围绕“涌现”主题，主导核心玩法与关卡叙事设计。以涂鸦与画册为核心交互，设计四段递进式情感关卡，通过蓝、绿、红三阶段色彩复苏与场景解谜，呈现受创儿童重新理解家人与生活的过程。",
        "portfolio.item2.cover": "涂鸦 · 画册 · 色彩复苏",
        "portfolio.item2.link": "查看 Game Jam 策划案 ↗",
        "portfolio.item3.name": "《百诡夜行》",
        "portfolio.item3.cat": "校企合作 · Unity 2D · 关卡策划",
        "portfolio.item3.desc": "负责横版跑酷关卡设计与搭建，围绕移动、跳跃规划玩家路线、平台与障碍配置。设计难度递进与挑战节奏，结合实际游玩体验调整关卡结构，协同程序、美术推进实现与优化。",
        "portfolio.item3.cover": "路线 · 平台 · 挑战节奏",
        "portfolio.item4.name": "《囚城营救》",
        "portfolio.item4.cat": "腾讯游戏创作大赛作品 · Unity 2D · 独立开发",
        "portfolio.item4.desc": "基于《九州缥缈录》世界观，独立完成横版潜入营救游戏的玩法设计、关卡搭建与功能实现。以三条差异化路线、敌人巡逻、限时挑战和隐藏通道构建“潜入—营救—撤离”循环；后续计划接入 AI NPC。",
        "portfolio.item4.alt": "《囚城营救》Unity 2D 游戏演示截图",
        "portfolio.item4.link": "观看游戏演示 ↗",
        "exp.label": "项目经历",
        "exp.heading": "从设计到落地。",
        "exp.item1.date": "2026.10",
        "exp.item1.role": "《what the crayon remembers》",
        "exp.item1.company": "TapTap 2026 聚光灯 Game Jam / 策划",
        "exp.item1.desc": "主导核心玩法与关卡叙事，设计四段情感关卡及三阶段色彩复苏机制。统筹策划方案落地与版本日志更新，协同程序、美术完成梦境场景，将解谜、视觉反馈与情感叙事结合。",
        "exp.item2.date": "2026.09 — 2026.10",
        "exp.item2.role": "《三角洲行动》赛季任务系统策划",
        "exp.item2.company": "个人作品集 / 系统策划",
        "exp.item2.desc": "独立设计主支线任务、阶段解锁、备用支线及多层奖励。定义调查、击败、收集、撤离的完成与失败规则，设计收集者委托分级、随机刷新与锁定机制，以及命运契约周期解锁；输出界面原型、交互状态、配置表与美术需求文档。",
        "exp.item3.date": "2026.09 — 2026.10",
        "exp.item3.role": "《百诡夜行》",
        "exp.item3.company": "校企合作项目 / 关卡策划",
        "exp.item3.desc": "负责 Unity 2D 横版跑酷关卡设计与搭建，规划整体布局、行进路线、平台和障碍，调整难度曲线与挑战节奏，并依据实际游玩体验持续优化关卡。",
        "exp.item4.date": "2026.02 — 2026.06",
        "exp.item4.role": "《囚城营救》",
        "exp.item4.company": "腾讯游戏创作大赛作品 / 独立开发制作人",
        "exp.item4.desc": "独立完成核心玩法设计、关卡搭建及功能实现，设计三条差异化潜入路线，整合巡逻、倒计时与隐藏通道，形成潜入、营救、撤离的完整循环。AI NPC 动态对话与行为反馈为后续计划。",
        "about.label": "关于我",
        "about.heading": "以玩家体验为设计起点。",
        "about.text1": "我是邬志鹏，成都东软学院数字媒体技术专业本科在读，关注游戏系统策划、玩法设计与关卡设计。希望把玩家体验中的问题转化为清晰的规则、可执行的文档和可验证的原型。",
        "about.text2": "长期游玩《王者荣耀》《三角洲行动》《永劫无间》等作品，尤其关注 MOBA、FPS 等竞技品类。我习惯从核心机制、竞技平衡、玩家反馈与成长系统分析设计，思考玩法目标、行为引导和长期留存之间的联系。",
        "about.text3": "能独立撰写系统策划案、关卡设计文档、功能说明及配置表；掌握 C#，熟悉 Unity、UE5 开发流程，并使用 AIGC 工具辅助创作。具备 Maya、Blender、Photoshop 及 Office 工具使用能力，能结合技术与美术资源约束推进设计落地。",
        "about.education.label": "教育背景",
        "about.education.value": "成都东软学院 · 数字媒体技术本科",
        "about.education.date": "2024.09 — 2028.06（预计毕业）",
        "about.location.label": "籍贯",
        "about.location.value": "四川成都",
        "about.focus.label": "专注领域",
        "about.focus.value": "系统策划、玩法设计、关卡策划",
        "about.phone.label": "电话",
        "about.phone.value": "13548094795",
        "about.email.label": "邮箱",
        "about.email.value": "2910140171@qq.com"
    },
    "en": {
        "page.title": "Wu Zhipeng — Game Design Portfolio",
        "nav.home": "Home",
        "nav.portfolio": "Projects",
        "nav.experience": "Experience",
        "nav.about": "About",
        "hero.greeting": "Hello, I'm",
        "hero.name": "Wu Zhipeng",
        "hero.title": "Game Design · Systems Design · Level Design",
        "hero.tagline": "Turning systems, level pacing, and narrative ideas into playable experiences, starting with the player.",
        "hero.hint": "Click or scroll to explore",
        "portfolio.label": "Projects",
        "portfolio.heading": "Selected projects.",
        "portfolio.item1.name": "Delta Force: Seasonal Quest System",
        "portfolio.item1.cat": "Systems Design · Quests & Rewards · UI Prototype",
        "portfolio.item1.desc": "An independent portfolio design centered on a 3×3 secure container reward, covering Action Plans, the Collector, Fate Contracts, and Season Goals. Deliverables include quest rules, staged unlocks, reward systems, UI prototypes, and configuration tables.",
        "portfolio.item1.cover": "Quests · Unlocks · Rewards",
        "portfolio.item1.link": "View systems design document ↗",
        "portfolio.item2.name": "what the crayon remembers",
        "portfolio.item2.cat": "TapTap Spotlight Game Jam · UE5 · Gameplay & Narrative",
        "portfolio.item2.desc": "Led gameplay and level narrative design around the theme of emergence. Drawing and a sketchbook connect four emotional levels, with blue, green, and red color restoration and environmental puzzles reflecting a child reconnecting with family and life.",
        "portfolio.item2.cover": "Drawing · Sketchbook · Color Restoration",
        "portfolio.item2.link": "View Game Jam design document ↗",
        "portfolio.item3.name": "Baigui Yexing",
        "portfolio.item3.cat": "College–Industry Collaboration · Unity 2D · Level Design",
        "portfolio.item3.desc": "Designed and built side-scrolling platforming levels around movement and jumping. Planned routes, platforms, obstacles, difficulty progression, and challenge pacing; iterated through playtesting with programmers and artists.",
        "portfolio.item3.cover": "Routes · Platforms · Challenge Pacing",
        "portfolio.item4.name": "Prison City Rescue",
        "portfolio.item4.cat": "Tencent Game Creation Competition Entry · Unity 2D · Solo Project",
        "portfolio.item4.desc": "A solo side-scrolling stealth rescue game inspired by the world of Novoland: Eagle Flag. Three infiltration routes, enemy patrols, time limits, and hidden passages form an infiltrate–rescue–extract loop. AI NPC integration is planned for future development.",
        "portfolio.item4.alt": "Gameplay screenshot of Prison City Rescue, a Unity 2D game",
        "portfolio.item4.link": "Watch gameplay demo ↗",
        "exp.label": "Project Experience",
        "exp.heading": "From design to play.",
        "exp.item1.date": "2026.10",
        "exp.item1.role": "what the crayon remembers",
        "exp.item1.company": "TapTap 2026 Spotlight Game Jam / Game Designer",
        "exp.item1.desc": "Led gameplay and level narrative design, creating four emotional levels and three stages of color restoration. Coordinated implementation and version logs with programmers and artists, combining dreamlike environments, puzzles, visual feedback, and emotional storytelling.",
        "exp.item2.date": "2026.09 — 2026.10",
        "exp.item2.role": "Delta Force: Seasonal Quest System",
        "exp.item2.company": "Independent Portfolio Project / Systems Designer",
        "exp.item2.desc": "Designed main and side quests, staged unlocks, fallback quests, and layered rewards. Defined completion and failure rules, Collector commission tiers, random refresh and locking, and Fate Contract unlock cycles. Produced UI prototypes, interaction states, configuration tables, and art requirements.",
        "exp.item3.date": "2026.09 — 2026.10",
        "exp.item3.role": "Baigui Yexing",
        "exp.item3.company": "College–Industry Collaboration / Level Designer",
        "exp.item3.desc": "Designed and built Unity 2D side-scrolling platforming levels. Planned layouts, player routes, platforms, and obstacles, refining difficulty progression and challenge pacing through hands-on playtesting.",
        "exp.item4.date": "2026.02 — 2026.06",
        "exp.item4.role": "Prison City Rescue",
        "exp.item4.company": "Tencent Game Creation Competition Entry / Solo Developer",
        "exp.item4.desc": "Independently designed gameplay, built levels, and implemented features. Created three infiltration routes and integrated patrols, countdowns, and hidden passages into a complete rescue loop. Dynamic AI NPC dialogue and behavioral feedback remain planned features.",
        "about.label": "About",
        "about.heading": "Design starts with the player.",
        "about.text1": "I am Wu Zhipeng, an undergraduate studying Digital Media Technology at Chengdu Neusoft University. I focus on game systems, gameplay, and level design, translating player experience into clear rules, actionable documents, and playable prototypes.",
        "about.text2": "I regularly play Honor of Kings, Delta Force, and Naraka: Bladepoint, with a particular interest in competitive MOBA and FPS games. I analyze core mechanics, balance, feedback, and progression, exploring how gameplay goals and player guidance connect to long-term retention.",
        "about.text3": "I write systems and level design documents, feature specifications, and configuration tables. I use C#, Unity, UE5, and AIGC creation tools, alongside Maya, Blender, Photoshop, and Office, adapting designs to technical and art production constraints.",
        "about.education.label": "Education",
        "about.education.value": "Chengdu Neusoft University · Digital Media Technology",
        "about.education.date": "2024.09 — 2028.06 (expected graduation)",
        "about.location.label": "Hometown",
        "about.location.value": "Chengdu, Sichuan",
        "about.focus.label": "Focus",
        "about.focus.value": "Systems, Gameplay & Level Design",
        "about.phone.label": "Phone",
        "about.phone.value": "13548094795",
        "about.email.label": "Email",
        "about.email.value": "2910140171@qq.com"
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
    document.title = t[lang]['page.title'];

    langOptions.forEach((opt) => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
      opt.setAttribute('aria-pressed', String(opt.dataset.lang === lang));
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

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      el.alt = t[lang][el.dataset.i18nAlt];
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
    { root: wrapper, threshold: 0.1 }
  );

  sections.forEach((s) => observer.observe(s));

  function goTo(index) {
    if (index < 0 || index >= total || isTransitioning) return;
    isTransitioning = true;
    sections[index].classList.add('visible');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    sections[index].scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
    setTimeout(() => {
      isTransitioning = false;
    }, 800);
  }

  function updateDots(index) {
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
      if (i === index) d.setAttribute('aria-current', 'page');
      else d.removeAttribute('aria-current');
    });
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
    if (!e.target.closest('.hero')) return;

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
    if (sections[currentIndex].offsetHeight > wrapper.clientHeight + 2) return;
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
  updateDots(0);
})();
