const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const canUseLucide = window.lucide && typeof window.lucide.createIcons === "function";

if (canUseLucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 2,
    },
  });
}

const revealTargets = document.querySelectorAll(
  ".slow-practice article, .nature-gallery figure, .protocol-card, .risk-card, .protective-panel, .prevention-card, .program-library, .prevention-application article, .solution-card, .readiness-card, .timeline article, .resource-grid article, .supporter-panel article, .evidence-grid article, .download-grid a, .pilot-board article"
);

if ("IntersectionObserver" in window) {
  const reveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          reveal.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    reveal.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
