# Scroll Fade (`ease-scroll-fade`)

A scroll-driven fade-in utility component where elements become visible as they enter the viewport. IntersectionObserver watches every target element; CSS owns 100% of the animation via a toggled `.is-visible` class.

## Technical Composition Breakdown

- **Clean JS/CSS Separation:** JavaScript's only responsibility is observing elements and adding `.is-visible` when `isIntersecting` is true — it never touches `opacity`, `transform`, or any animation property directly. All visual motion lives in CSS transitions on the `.is-visible` state change.
- **Single Observer, All Elements:** One `IntersectionObserver` instance watches every `.ease-scroll-fade*` element on the page regardless of count, with `threshold: 0.15` and `rootMargin: '0px 0px -60px 0px'` so elements trigger when meaningfully in view rather than the instant their first pixel appears.
- **Unobserve After Reveal:** Once an element becomes visible it is immediately unobserved — it stays visible on scroll back (standard UX expectation) and the observer's internal list stays lean as the user scrolls through the page.
- **GPU-Only Animation:** Both `opacity` and `transform` are compositor-layer properties — zero layout or paint work on every frame. `will-change` is declared on the pre-visible state so the browser can promote the layer before the transition fires.
- **Direction Variants:** Four variants ship out of the box — `ease-scroll-fade` (up), `ease-scroll-fade-left`, `ease-scroll-fade-right`, and `ease-scroll-fade-scale` — all sharing the same `.is-visible` toggle and observer, covering the standard content-layout patterns (hero, alternating feature rows, cards).
- **Stagger Helpers:** `.stagger-1` through `.stagger-5` set `--ease-fade-delay` via CSS custom properties, producing cascading group entrances with no extra JS.
- **Per-Instance Overrides:** `--ease-fade-duration`, `--ease-fade-ease`, `--ease-fade-distance`, and `--ease-fade-delay` are all overridable via inline `style` attributes, so individual elements can animate slower, faster, or travel further without any extra class.
- **Reduced Motion Architecture:** The `@media (prefers-reduced-motion: reduce)` block in CSS makes all targets immediately visible with no transition. The JS additionally bails out early when this preference is detected, skipping the observer setup entirely since no class toggle is needed.

## Workspace Tree Map

```
submissions/examples/ease-scroll-fade/
├── demo.html     # Full scrollable page demo: fade-up, left, right, scale, stagger, stats
├── style.css     # Modular scroll-fade utility stylesheet with all four variants
└── README.md     # This file
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**