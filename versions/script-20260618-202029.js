const canUseLucide = window.lucide && typeof window.lucide.createIcons === "function";

if (canUseLucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 2,
    },
  });
}

const cards = document.querySelectorAll(
  ".path-card, .library-grid article, .video-rail a, .evidence-grid article, .timeline article, .prevention-stack article"
);

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        reveal.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

cards.forEach((card) => {
  card.classList.add("reveal");
  reveal.observe(card);
});
