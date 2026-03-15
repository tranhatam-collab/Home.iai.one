(function () {
  "use strict";

  const STORAGE_KEY = "home_iai_lang";
  const doc = document.documentElement;
  const body = document.body;

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
      statusLabel3: "Flagship Platform"
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
      statusLabel3: "Flagship Platform"
    }
  };

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langLabel = document.querySelector("[data-lang-label]");

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "en" ? "en" : "vi";
    } catch (_) {
      return "vi";
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
  }

  function setLang(lang) {
    const nextLang = lang === "en" ? "en" : "vi";
    const dict = i18n[nextLang];

    doc.lang = nextLang;
    saveLang(nextLang);

    if (langLabel) {
      langLabel.textContent = nextLang.toUpperCase();
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key || !Object.prototype.hasOwnProperty.call(dict, key)) return;
      el.textContent = dict[key];
    });

    updateHomeMeta(nextLang);
  }

  function updateHomeMeta(lang) {
    if ((body.dataset.page || "").toLowerCase() !== "home") return;

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

  function toggleMenu(force) {
    if (!menuToggle || !mobileMenu) return;

    const shouldOpen =
      typeof force === "boolean"
        ? force
        : !mobileMenu.classList.contains("is-open");

    mobileMenu.classList.toggle("is-open", shouldOpen);
    menuToggle.classList.toggle("is-active", shouldOpen);
    menuToggle.setAttribute("aria-expanded", String(shouldOpen));
    body.style.overflow = shouldOpen ? "hidden" : "";
  }

  function initMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener("click", function () {
      toggleMenu();
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        toggleMenu(false);
      });
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        toggleMenu(false);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) {
        toggleMenu(false);
      }
    });
  }

  function initLanguage() {
    setLang(getSavedLang());

    if (!langToggle) return;

    langToggle.addEventListener("click", function () {
      const next = getSavedLang() === "vi" ? "en" : "vi";
      setLang(next);
    });
  }

  function initYear() {
    document.querySelectorAll("#year").forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function animateCounter(el) {
    const target = Number(el.getAttribute("data-count") || "0");
    if (!Number.isFinite(target)) return;

    const duration = 1200;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function initCounters() {
    const counters = Array.from(document.querySelectorAll("[data-count]"));
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
      { threshold: 0.45 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  function initReveal() {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
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

  function initInternalAnchorOffset() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();

        const headerOffset = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 10;

        window.scrollTo({
          top: top,
          behavior: "smooth"
        });

        if (mobileMenu && mobileMenu.classList.contains("is-open")) {
          toggleMenu(false);
        }
      });
    });
  }

  function initActiveDesktopNav() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".desktop-nav a, .mobile-nav a").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const normalized = href.replace("./", "");
      if (
        normalized === currentPath ||
        (currentPath === "" && normalized === "index.html")
      ) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function initExternalButtonsSafety() {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      const rel = (link.getAttribute("rel") || "").trim();
      if (!/\bnoopener\b/.test(rel)) {
        link.setAttribute("rel", (rel ? rel + " " : "") + "noopener");
      }
    });
  }

  function boot() {
    initLanguage();
    initMenu();
    initYear();
    initCounters();
    initReveal();
    initInternalAnchorOffset();
    initActiveDesktopNav();
    initExternalButtonsSafety();
    updateHeaderState();

    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
