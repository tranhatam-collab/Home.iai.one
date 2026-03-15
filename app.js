(function () {
  "use strict";

  const STORAGE_KEY = "home_iai_lang";

  const i18n = {
    vi: {
      heroEyebrow: "SYSTEM PORTAL",
      heroTitle: "Cổng điều hướng trung tâm cho toàn bộ hệ IAI.",
      heroLead:
        "HOME.IAI.ONE không thay thế Charter, không vận hành ecosystem và không đóng vai trò platform. Đây là bản đồ hệ thống giúp người dùng nhìn thấy rõ Charter, Ecosystem, Community và Infrastructure của IAI trước khi đi vào chi tiết.",
      heroPrimary: "Hiểu cấu trúc hệ",
      heroSecondary: "Đọc Charter",
      metric1: "Lớp hệ thống cốt lõi",
      metric2: "Vai trò domain trung tâm",
      metric3: "Đường đi vào hệ",
      statusLabel1: "Root",
      statusLabel2: "Primary Link",
      statusLabel3: "Flagship Platform",

      whyEyebrow: "WHY THIS SYSTEM EXISTS",
      whyTitle: "Vì con người cần một cách nhìn có cấu trúc trước khi tham gia bất kỳ hệ nào",
      whyLead:
        "Trong thời đại bất ổn, AI tăng tốc và niềm tin xã hội phân mảnh, việc thiếu ranh giới, thiếu định nghĩa và thiếu bản đồ hệ thống khiến người dùng dễ hiểu sai mọi thứ. HOME tồn tại để làm rõ cấu trúc trước khi mời ai đó bước vào.",

      layersEyebrow: "THE 4 LAYERS OF IAI",
      layersTitle: "Toàn hệ IAI chỉ nên được hiểu đúng khi nhìn theo từng lớp",
      layersLead:
        "Nếu trộn Charter, Ecosystem, Community và Infrastructure thành một khối, toàn bộ hệ sẽ bị hiểu sai. HOME phải làm rõ ranh giới giữa các lớp này.",
      layer1Title: "Charter Layer",
      layer1Text:
        "IAI.ONE giữ nguyên tắc, ranh giới, ngôn ngữ chung và chuẩn minh bạch. Đây là tầng gốc.",
      layer2Title: "Portal Layer",
      layer2Text:
        "HOME.IAI.ONE là nơi nhìn thấy toàn hệ, hiểu toàn hệ và đi vào đúng cửa.",
      layer3Title: "Infrastructure Layer",
      layer3Text:
        "Các platform như Flow tồn tại để phục vụ vận hành, automation, workflow và hạ tầng kỹ thuật.",
      layer4Title: "Ecosystem Layer",
      layer4Text:
        "Đây là nơi các ecosystem, community groups và local nodes vận hành trong thực tế.",

      pathsEyebrow: "ENTRY PATHS",
      pathsTitle: "Mỗi người nên vào hệ theo đúng vai trò của mình",
      pathsLead:
        "HOME không chỉ hiển thị link. Nó phải phân luồng để người xem không đi sai cửa ngay từ đầu.",
      path1Title: "Observer",
      path1Text:
        "Người mới cần hiểu hệ trước, không cam kết, không bị kéo vào sớm.",
      path2Title: "Participant",
      path2Text:
        "Người muốn tham gia cộng đồng cần hiểu Participation, Community và Ecosystem.",
      path3Title: "Builder",
      path3Text:
        "Người xây hệ cần hiểu Charter, Boundaries và cách các lớp liên kết với nhau.",
      path4Title: "Developer",
      path4Text:
        "Người phát triển công nghệ nên đi vào Flow như lớp platform hạ tầng, không nhầm nó là Charter.",
      path5Title: "Partner",
      path5Text:
        "Đối tác cần thấy rõ ranh giới giữa protocol, ecosystem và các platform chuyên biệt.",

      platformsEyebrow: "CORE PLATFORMS",
      platformsTitle: "Các platform không thay thế Charter. Chúng phục vụ hệ",
      platformsLead:
        "Đây là các lớp hạ tầng hoặc bề mặt công cụ đang giúp hệ hiển thị, tổ chức hoặc vận hành rõ ràng hơn.",
      flowCardText:
        "Nền tảng orchestration cho AI workflows, agents, runtime và data pipelines ở production scale.",
      iaiCardText:
        "Charter site công bố bản chất, nguyên tắc, ranh giới và cấu trúc của hệ IAI.",
      homeCardText:
        "System portal giúp người dùng nhìn toàn cảnh hệ và đi vào đúng lớp phù hợp.",

      ecosystemEyebrow: "ECOSYSTEM MAP",
      ecosystemTitle:
        "Bản đồ tổng thể giữa Charter, Portal, Platform và Community",
      ecosystemLead:
        "Đây không phải sơ đồ ảo. Đây là cách toàn hệ nên được hiểu để tránh mọi nhầm lẫn về vai trò.",
      ecosystemCenter: "Charter, Portal, Community and Infrastructure",

      boundariesEyebrow: "BOUNDARIES",
      boundariesTitle: "Một hệ đúng phải dám nói rõ mình không phải gì",
      boundariesLead:
        "HOME phải nhắc lại ranh giới cốt lõi để người dùng không đọc sai bản chất của hệ.",
      boundary1Title: "Not a Financial System",
      boundary1Text:
        "IAI không phải hệ tài chính, không phải nền tảng đầu tư và không hứa hẹn lợi nhuận.",
      boundary2Title: "Not an Operator of Projects",
      boundary2Text:
        "IAI không trực tiếp vận hành dự án, không quản lý con người và không giữ tài sản thay cho ecosystem.",
      boundary3Title: "Not a Belief System",
      boundary3Text:
        "IAI không phải hệ niềm tin, không phải phong trào và không thay thế trách nhiệm cá nhân.",
      boundary4Title: "Understanding Before Participation",
      boundary4Text:
        "Mọi người nên hiểu cấu trúc hệ trước khi nghĩ đến tham gia, xây dựng hay tích hợp.",
      boundary5Title: "Clear Roles Across Layers",
      boundary5Text:
        "Charter là Charter. Portal là Portal. Platform là Platform. Ecosystem là Ecosystem.",
      boundary6Title: "Responsibility Over Hype",
      boundary6Text:
        "Hệ được giữ bằng ranh giới, trách nhiệm và tính bền vững, không phải bằng hưng phấn ngắn hạn.",

      ctaEyebrow: "NEXT ACTION",
      ctaTitle: "Hiểu đúng hệ trước. Sau đó mới đi vào đúng lớp.",
      ctaText:
        "Nếu cần gốc định nghĩa, đọc IAI.ONE. Nếu cần bản đồ hệ, dùng Home. Nếu cần platform orchestration, mở Flow.",

      footerLead:
        "HOME.IAI.ONE là portal trung tâm của toàn bộ hệ IAI, nơi Charter, Ecosystem, Community và Infrastructure được nhìn thấy như một cấu trúc rõ ràng thay vì một tập hợp mơ hồ.",
      footerMeta: "System Portal for Responsible Co-Existence"
    },

    en: {
      heroEyebrow: "SYSTEM PORTAL",
      heroTitle: "The central navigation gateway for the full IAI system.",
      heroLead:
        "HOME.IAI.ONE does not replace the Charter, does not operate the ecosystem, and is not itself a platform. It is a system map that helps people clearly see the Charter, Ecosystem, Community, and Infrastructure of IAI before entering details.",
      heroPrimary: "Understand the system",
      heroSecondary: "Read the Charter",
      metric1: "Core system layers",
      metric2: "Central domain roles",
      metric3: "Entry paths",
      statusLabel1: "Root",
      statusLabel2: "Primary Link",
      statusLabel3: "Flagship Platform",

      whyEyebrow: "WHY THIS SYSTEM EXISTS",
      whyTitle:
        "Because people need a structured view before entering any serious system",
      whyLead:
        "In an era of instability, accelerating AI, and fragmented trust, the absence of boundaries, definitions, and system maps makes everything easy to misunderstand. HOME exists to clarify structure before anyone steps in.",

      layersEyebrow: "THE 4 LAYERS OF IAI",
      layersTitle: "The IAI system should only be understood correctly in layers",
      layersLead:
        "If Charter, Ecosystem, Community, and Infrastructure are mixed into one vague block, the whole system will be misunderstood. HOME exists to make the boundaries between those layers visible.",
      layer1Title: "Charter Layer",
      layer1Text:
        "IAI.ONE holds principles, boundaries, shared language, and transparency standards. This is the root layer.",
      layer2Title: "Portal Layer",
      layer2Text:
        "HOME.IAI.ONE is where the whole system can be seen, understood, and entered correctly.",
      layer3Title: "Infrastructure Layer",
      layer3Text:
        "Platforms such as Flow exist to support operations, automation, workflows, and technical infrastructure.",
      layer4Title: "Ecosystem Layer",
      layer4Text:
        "This is where ecosystems, community groups, and local nodes operate in real life.",

      pathsEyebrow: "ENTRY PATHS",
      pathsTitle: "Each person should enter the system through the right role",
      pathsLead:
        "HOME should do more than show links. It should route people so they do not enter through the wrong door from the start.",
      path1Title: "Observer",
      path1Text:
        "A newcomer should understand the system first, with no early commitment and no pressure.",
      path2Title: "Participant",
      path2Text:
        "Someone who wants to join community life should first understand Participation, Community, and Ecosystem.",
      path3Title: "Builder",
      path3Text:
        "A builder should understand the Charter, Boundaries, and the way system layers connect.",
      path4Title: "Developer",
      path4Text:
        "A developer should enter Flow as the infrastructure platform layer, not confuse it with the Charter.",
      path5Title: "Partner",
      path5Text:
        "A partner should clearly see the boundaries between protocol, ecosystem, and specialized platforms.",

      platformsEyebrow: "CORE PLATFORMS",
      platformsTitle: "Platforms do not replace the Charter. They serve the system",
      platformsLead:
        "These are infrastructure or tool surfaces that help the wider system become more visible, organized, and operational.",
      flowCardText:
        "An orchestration platform for AI workflows, agents, runtime, and data pipelines at production scale.",
      iaiCardText:
        "The Charter site that publishes the nature, principles, boundaries, and structure of the IAI system.",
      homeCardText:
        "The system portal that helps people see the whole structure and enter the right layer.",

      ecosystemEyebrow: "ECOSYSTEM MAP",
      ecosystemTitle:
        "A full map between Charter, Portal, Platform, and Community",
      ecosystemLead:
        "This is not a decorative diagram. It is how the full system should be understood to avoid role confusion.",
      ecosystemCenter: "Charter, Portal, Community and Infrastructure",

      boundariesEyebrow: "BOUNDARIES",
      boundariesTitle: "A serious system must clearly say what it is not",
      boundariesLead:
        "HOME should restate the core boundaries so people do not misread the nature of the system.",
      boundary1Title: "Not a Financial System",
      boundary1Text:
        "IAI is not a financial system, not an investment platform, and does not promise returns.",
      boundary2Title: "Not an Operator of Projects",
      boundary2Text:
        "IAI does not directly operate projects, manage people, or hold assets on behalf of the ecosystem.",
      boundary3Title: "Not a Belief System",
      boundary3Text:
        "IAI is not a belief system, not a movement, and does not replace personal responsibility.",
      boundary4Title: "Understanding Before Participation",
      boundary4Text:
        "People should understand the system structure before thinking about participation, building, or integration.",
      boundary5Title: "Clear Roles Across Layers",
      boundary5Text:
        "Charter is Charter. Portal is Portal. Platform is Platform. Ecosystem is Ecosystem.",
      boundary6Title: "Responsibility Over Hype",
      boundary6Text:
        "The system is held by boundaries, responsibility, and durability, not by short-term excitement.",

      ctaEyebrow: "NEXT ACTION",
      ctaTitle: "Understand the system first. Then enter the right layer.",
      ctaText:
        "If you need the root definition, read IAI.ONE. If you need the system map, use Home. If you need the orchestration platform, open Flow.",

      footerLead:
        "HOME.IAI.ONE is the central portal of the wider IAI system, where Charter, Ecosystem, Community, and Infrastructure are seen as a clear structure rather than a vague collection.",
      footerMeta: "System Portal for Responsible Co-Existence"
    }
  };

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langLabel = document.querySelector("[data-lang-label]");
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  const counters = Array.from(document.querySelectorAll("[data-count]"));
  const scrollButtons = Array.from(document.querySelectorAll("[data-scroll]"));

  function getSavedLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "vi";
  }

  function setLang(lang) {
    const dict = i18n[lang] || i18n.vi;
    localStorage.setItem(STORAGE_KEY, lang);
    doc.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    if (langLabel) {
      langLabel.textContent = lang.toUpperCase();
    }

    updateMeta(lang);
  }

  function updateMeta(lang) {
    const title =
      lang === "en"
        ? "HOME.IAI.ONE — System Portal for Charter, Ecosystem, Community and Infrastructure"
        : "HOME.IAI.ONE — System Portal for Charter, Ecosystem, Community and Infrastructure";

    const description =
      lang === "en"
        ? "HOME.IAI.ONE is the central system portal of IAI, connecting Charter, Ecosystem, Community, and Infrastructure into a clear map with the right entry paths."
        : "HOME.IAI.ONE là system portal trung tâm của toàn bộ hệ IAI: nơi kết nối Charter, Ecosystem, Community và Infrastructure thành một bản đồ rõ ràng, có trách nhiệm và có thể đi vào đúng cửa.";

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (metaDescription) metaDescription.setAttribute("content", description);
    if (ogTitle) ogTitle.setAttribute("content", title);
    if (ogDescription) ogDescription.setAttribute("content", description);
    if (twitterTitle) twitterTitle.setAttribute("content", title);
    if (twitterDescription) twitterDescription.setAttribute("content", description);
  }

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  }

  function toggleMenu(forceState) {
    if (!menuToggle || !mobileMenu) return;

    const isOpen =
      typeof forceState === "boolean"
        ? forceState
        : !mobileMenu.classList.contains("is-open");

    mobileMenu.classList.toggle("is-open", isOpen);
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    body.style.overflow = isOpen ? "hidden" : "";
  }

  function initMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener("click", () => toggleMenu());

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        toggleMenu(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) {
        toggleMenu(false);
      }
    });
  }

  function initLanguage() {
    setLang(getSavedLang());

    if (!langToggle) return;

    langToggle.addEventListener("click", () => {
      const next = getSavedLang() === "vi" ? "en" : "vi";
      setLang(next);
    });
  }

  function initReveal() {
    if (!revealEls.length) return;

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  function animateCounter(el) {
    const target = Number(el.getAttribute("data-count") || "0");
    if (!Number.isFinite(target)) return;

    const duration = 1200;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = String(value);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  function initCounters() {
    if (!counters.length) return;

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.4
      }
    );

    counters.forEach((el) => observer.observe(el));
  }

  function initScrollButtons() {
    if (!scrollButtons.length) return;

    scrollButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selector = button.getAttribute("data-scroll");
        if (!selector) return;

        const target = document.querySelector(selector);
        if (!target) return;

        const headerOffset = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 10;

        window.scrollTo({
          top,
          behavior: "smooth"
        });
      });
    });
  }

  function initYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initMenu();
    initReveal();
    initCounters();
    initScrollButtons();
    initYear();
    updateHeaderState();

    window.addEventListener("scroll", updateHeaderState, { passive: true });
  });
})();
