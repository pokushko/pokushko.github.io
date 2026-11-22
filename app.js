const TRANSLATIONS = {
  en: {
    nav_arch: "Architecture",
    nav_research: "Research & IP",
    nav_services: "Services & Grants",
    nav_contact: "Contact",
    hero_pill: "EVONOVA LABS • VAK 2.3.1 SYSTEM ANALYSIS & CONTROL (SFU)",
    hero_role: "Founder & Lead AI Architect @ EvoNova Labs",
    hero_summary:
      "We engineer 24/7 fault-tolerant multi-agent systems, deterministic AST & microVM sandboxes, and physically constrained industrial digital twins—bridging peer-reviewed research, registered IP, and verified open-source runtimes.",
    cta_audit: "Request AI Resilience Audit",
    cta_grant: "Propose R&D Grant",
    kpi_papers: "Scopus / WoS Papers (2023–2025)",
    kpi_certs: "Rospatent Software Certificates",
    kpi_patents: "FIPS Patent Apps (Pending)",
    kpi_index: "Curated Resilience Index Entries",
    kpi_ci: "Green Automated CI Repos",
    arch_title: "Open-Source Resilience Architecture",
    arch_sub: "Modular Python runtimes and engineering taxonomies tested continuously via GitHub Actions (pytest & ruff).",
    repo_awesome:
      "158 verified tools, benchmarks, papers, and real-world incidents plus a 10-mode Failure Taxonomy mapped to MAST and OWASP Agentic Top 10 (2026).",
    repo_bunker:
      "24/7 chaos engineering & resilience harness providing SQLite WAL journaling, RSS memory ceiling guards, and tri-state circuit breakers.",
    repo_orch:
      "Zero-dependency Python asyncio MAS engine with Kahn topological DAG wave pipelines, timeouts, retries, fault isolation, and consensus reducers.",
    repo_sandbox:
      "Pre-flight Python AST security inspector, prompt-injection sanitizer, and isolated execution runtime against dunder escapes and secret leaks.",
    repo_memory:
      "Dual-store episodic and semantic memory engine combining exponential temporal decay, hybrid cosine scoring, and SQLite ACID persistence.",
    repo_ktk:
      "Industrial cybernetic digital twin prototype for crude oil atmospheric and vacuum distillation units (ELOU-AVT), CASE-IN participant suite.",
    repo_chem:
      "Cheminformatics and RDKit molecular descriptor screening core supporting constraint-preserving autonomous scientific discovery.",
    res_title: "Peer-Reviewed Publications & Registered IP",
    res_sub: "Verified scientific output under VAK Specialty 2.3.1 (Siberian Federal University) and Rospatent / FIPS intellectual property filings.",
    tab_all: "All (14)",
    tab_papers: "Scopus / WoS & Preprint (6)",
    tab_certs: "Rospatent Certificates (4)",
    tab_patents: "FIPS Patent Apps Pending (4)",
    srv_title: "Enterprise Consulting & R&D Grants",
    srv_sub: "Structured engineering engagements for production AI teams, industrial enterprises, and funded R&D consortiums.",
    srv1_title: "1. AI Agent Production Hardening & Chaos Audit",
    srv1_desc:
      "Comprehensive MAST & OWASP Agentic Top 10 failure audit, SQLite/Postgres WAL state durability, tri-state circuit breakers, AST & microVM sandboxing, and fault-injection stress testing.",
    srv2_title: "2. Custom 24/7 Multi-Agent Systems",
    srv2_desc:
      "AsyncIO DAG orchestration, bounded episodic memory with temporal decay, OpenTelemetry GenAI observability, and CI/CD evaluation harnesses engineered for continuous autonomous execution.",
    srv3_title: "3. Industrial Digital Twins & Scientific AI",
    srv3_desc:
      "Cybernetic process twins for continuous manufacturing & energy/petrochemical units, DEA multi-criteria efficiency analysis, and symbolic physical invariant validation.",
    srv4_title: "4. Joint R&D Grants & Academic Consortiums",
    srv4_desc:
      "Co-architecture, mathematical modeling, IP filing, and Scopus/WoS publication delivery for RSF (РНФ), FASIE (ФСИ «Старт»), Skolkovo, and BRICS STI grants under VAK 2.3.1.",
    srv_cta: "Discuss Scope →",
    cnt_title: "Start a Conversation",
    cnt_sub: "Krasnoyarsk (UTC+7) · Remote worldwide for R&D grants, production AI audits, and enterprise engineering.",
  },
  ru: {
    nav_arch: "Архитектура",
    nav_research: "Публикации и РИД",
    nav_services: "Услуги и Гранты",
    nav_contact: "Контакты",
    hero_pill: "EVONOVA LABS • ВАК 2.3.1 СИСТЕМНЫЙ АНАЛИЗ И УПРАВЛЕНИЕ (СФУ)",
    hero_role: "Основатель и главный архитектор ИИ @ EvoNova Labs",
    hero_summary:
      "Проектируем отказоустойчивые 24/7 мультиагентные системы, детерминированные AST/microVM-песочницы и физически ограниченные промышленные цифровые двойники — на стыке Scopus/WoS-науки, патентованного ПО и open-source кода с зелёным CI.",
    cta_audit: "Заказать аудит ИИ-агентов",
    cta_grant: "Предложить НИОКР / Грант",
    kpi_papers: "Статей Scopus / WoS (2023–2025)",
    kpi_certs: "Свидетельств Роспатента",
    kpi_patents: "Заявок на изобретения ФИПС",
    kpi_index: "Пунктов в индексе Resilience",
    kpi_ci: "Репозитория с зелёным CI",
    arch_title: "Открытый стек отказоустойчивости",
    arch_sub: "Модульные Python-библиотеки и инженерные таксономии с непрерывным тестированием в GitHub Actions (pytest и ruff).",
    repo_awesome:
      "158 проверенных инструментов, бенчмарков, статей и реальных инцидентов плюс матрица 10 отказов по стандартам MAST и OWASP Agentic Top 10 (2026).",
    repo_bunker:
      "24/7 хаос-харнесс и защитный контур для автономных агентов: WAL-журнал SQLite, контроль RSS-памяти и трёхфазные автоматические выключатели.",
    repo_orch:
      "Лёгкий asyncio-оркестратор без внешних зависимостей: волны DAG по алгоритму Кана, таймауты, ретраи, изоляция сбоев и редьюсеры консенсуса.",
    repo_sandbox:
      "Пре-флайт AST-инспектор Python, санитайзер промпт-инъекций и изолированный рантайм против dunder-атак и утечки ключей.",
    repo_memory:
      "Двухконтурная эпизодическая и семантическая память агента с экспоненциальным временным затуханием и ACID-персистентностью SQLite.",
    repo_ktk:
      "Промышленный кибернетический цифровой двойник установки ЭЛОУ-АВТ нефтепереработки (проект участника чемпионата CASE-IN).",
    repo_chem:
      "Хемоинформатическое ядро расчёта молекулярных дескрипторов на RDKit для физически согласованных научных агентов.",
    res_title: "Научные публикации и Интеллектуальная собственность",
    res_sub: "Верифицированный научный задел по специальности ВАК 2.3.1 (Сибирский федеральный университет) и охраняемые результаты интеллектуальной деятельности (РИД).",
    tab_all: "Все (14)",
    tab_papers: "Scopus / WoS и Препринт (6)",
    tab_certs: "Свидетельства Роспатента (4)",
    tab_patents: "Заявки ФИПС на экспертизе (4)",
    srv_title: "Заказная разработка, Аудит и Гранты",
    srv_sub: "Чёткие форматы сотрудничества для технологических компаний, промышленности и научных консорциумов.",
    srv1_title: "1. Аудит надёжности и Chaos-тестирование ИИ-агентов",
    srv1_desc:
      "Аудит отказов по матрице MAST и OWASP Agentic Top 10, внедрение WAL-журналирования, выключателей, AST/microVM-изоляции и нагрузочного тестирования.",
    srv2_title: "2. Разработка 24/7 мультиагентных систем под ключ",
    srv2_desc:
      "Асинхронная DAG-оркестрация, ограниченная память с затуханием, трассировка OpenTelemetry GenAI и автоматические регрессионные CI-пайплайны.",
    srv3_title: "3. Промышленные цифровые двойники и научный ИИ",
    srv3_desc:
      "Кибернетическое моделирование непрерывных производств (ТЭК, нефтехимия), оптимизация эффективности методом DEA и проверка физических инвариантов.",
    srv4_title: "4. Совместные гранты и НИОКР (РНФ, ФСИ, Сколково)",
    srv4_desc:
      "Архитектура, математические модели, регистрация РИД в Роспатенте/ФИПС и подготовка публикаций Scopus/WoS по специальности ВАК 2.3.1.",
    srv_cta: "Обсудить задачу →",
    cnt_title: "Связаться напрямую",
    cnt_sub: "Красноярск (UTC+7) · Удалённая работа по всему миру по грантам НИОКР, аудиту и B2B-разработке.",
  },
};

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "en" ? "RU" : "EN";
  }
  try {
    localStorage.setItem("evonova_lang", lang);
  } catch {
    // ignore storage restriction
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let savedLang = "en";
  try {
    const stored = localStorage.getItem("evonova_lang");
    if (stored === "ru" || stored === "en") savedLang = stored;
  } catch {
    // ignore
  }
  applyLanguage(savedLang);

  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const next = document.documentElement.lang === "en" ? "ru" : "en";
      applyLanguage(next);
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const ledgerItems = document.querySelectorAll(".ledger-item");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      ledgerItems.forEach((item) => {
        const cat = item.getAttribute("data-category");
        item.classList.toggle("hidden", filter !== "all" && cat !== filter);
      });
    });
  });
});
