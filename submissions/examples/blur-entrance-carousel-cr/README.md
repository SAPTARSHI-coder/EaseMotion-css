# CSS Blur-Entrance Carousel (`blur-entrance-carousel-cr`)

A production-quality, **CSS-only** responsive carousel with a smooth
**blur-entrance** transition — inactive slides sit slightly blurred, dimmed and
scaled down, while the centered or focused slide sharpens, brightens, scales up
and lifts into view. Built for modern accessible dashboards, landing pages and
portfolios.

> **What it does:** A pure HTML + CSS carousel where slides snap horizontally and
> animate from a blurred, low-opacity state into a crisp, focused one.
> **How it's used:** Wrap slides in `.carousel__track` and drop in `.slide-card`
> markup — no JavaScript, no build step.
> **Why it's useful:** It shows off EaseMotion's philosophy of expressive,
> accessible, GPU-friendly motion driven entirely by declarative CSS.

---

## ✨ Feature Overview

- **Pure HTML + CSS** — no JavaScript, no SVG libraries, no external CSS frameworks.
- **CSS Scroll Snap** navigation with **smooth scrolling**.
- **Blur-entrance motion** — opacity up, blur out, subtle scale-up and upward
  `translateY` as a slide becomes active.
- **Scroll-driven animation** via `animation-timeline: view()` where supported,
  with a **`:hover` / `:focus-within` fallback** everywhere else.
- **Glassmorphism UI** — frosted cards, rounded corners, soft shadows.
- **Mobile-first** responsive design (4–6 slides, here 5).
- **Accessible** — keyboard operable, visible focus rings, ARIA labels and
  `prefers-reduced-motion` support.
- **Themeable** through a small set of CSS custom properties.

---

## 📁 Folder Structure

```text
submissions/
└── examples/
    └── blur-entrance-carousel-cr/
        ├── demo.html      # Self-contained demo — open directly in a browser
        ├── style.css      # All carousel styles and animations
        └── README.md      # This file
```

---

## 🎛️ CSS Variables

All knobs live in `:root` and can be overridden anywhere:

| Variable             | Default                              | Purpose                                   |
| -------------------- | ------------------------------------ | ----------------------------------------- |
| `--carousel-gap`     | `1.75rem`                            | Space between slides                      |
| `--carousel-speed`   | `0.6s`                               | Transition / animation duration           |
| `--carousel-easing`  | `cubic-bezier(0.22, 0.61, 0.36, 1)`  | Easing curve for the motion               |
| `--blur-radius`      | `12px`                               | Blur amount on inactive slides            |
| `--active-scale`     | `1`                                  | Scale of the active (centered) slide      |
| `--inactive-scale`   | `0.86`                               | Scale of inactive slides                  |
| `--card-radius`      | `20px`                               | Card corner rounding                      |
| `--card-shadow`      | `0 18px 40px rgba(17,24,39,0.18)`    | Soft card drop shadow                     |
| `--card-background`  | `rgba(255,255,255,0.55)`             | Glassmorphism card surface                |

**Example override:**

```css
:root {
  --carousel-gap: 2.5rem;
  --blur-radius: 18px;
  --active-scale: 1.04;
  --card-radius: 28px;
  --card-background: rgba(255, 255, 255, 0.35);
}
```

---

## ♿ Accessibility Features

- **Semantic HTML** — `main`, `header`, `section`, `ul`/`li`, `article`, real
  headings and anchors.
- **Keyboard accessible** — the scroll track is focusable (`tabindex="0"`) and
  scrollable with arrow keys; every CTA is a native, tabbable link.
- **Visible focus styles** — high-contrast `:focus-visible` outlines on the
  track and buttons; focusing a slide (`:focus-within`) also sharpens it.
- **ARIA labels** — `role="region"`, `aria-roledescription="carousel"`,
  per-slide `aria-label` (e.g. “1 of 5: Realtime Analytics”), and labelled
  image placeholders.
- **Reduced motion** — under `prefers-reduced-motion: reduce`, entrance
  animations, smooth scrolling and transform lifts are disabled; slides stay
  fully sharp and legible.

---

## 🌐 Browser Support

| Feature                              | Support                                                        |
| ------------------------------------ | -------------------------------------------------------------- |
| Scroll Snap / smooth scroll          | All modern browsers (Chrome, Edge, Firefox, Safari)            |
| `:hover` / `:focus-within` entrance  | All modern browsers                                            |
| `backdrop-filter` (glassmorphism)    | Modern Chrome, Edge, Safari, Firefox                           |
| `animation-timeline: view()`         | Chrome/Edge 115+ (progressive enhancement; safely ignored elsewhere) |

The carousel is fully functional without scroll-driven animations — those are an
enhancement layered on top of the `:hover` / `:focus-within` behaviour, so older
browsers still get the complete blur-entrance experience on interaction.

---

## 🚀 Usage Instructions

1. Copy the `blur-entrance-carousel-cr/` folder into your project.
2. Link the stylesheet: `<link rel="stylesheet" href="style.css" />`.
3. Use the markup pattern below — add or remove `.carousel__slide` items
   (4–6 recommended) and update the `aria-label` counts:

```html
<section class="carousel" role="region"
         aria-roledescription="carousel" aria-label="Featured highlights">
  <ul class="carousel__track" tabindex="0"
      aria-label="Slides, use arrow keys to scroll">

    <li class="carousel__slide" aria-roledescription="slide"
        aria-label="1 of 5: Realtime Analytics">
      <article class="slide-card">
        <div class="slide-card__media slide-card__media--indigo"
             role="img" aria-label="Abstract indigo gradient placeholder">
          <span class="slide-card__badge">Dashboard</span>
        </div>
        <div class="slide-card__body">
          <h2 class="slide-card__title">Realtime Analytics</h2>
          <p class="slide-card__text">Short description goes here.</p>
          <a class="slide-card__cta" href="#slide-1">Explore analytics</a>
        </div>
      </article>
    </li>

    <!-- more .carousel__slide items … -->

  </ul>
</section>
```

Media colour variants available out of the box:
`--indigo`, `--teal`, `--violet`, `--amber`, `--rose`
(e.g. `class="slide-card__media slide-card__media--teal"`).

---

## 🖼️ Screenshot

<!-- Screenshot placeholder — replace with an actual capture of demo.html -->

```text
┌───────────────────────────────────────────────────────────┐
│  [ blurred ]     ╔═══════════════╗     [ blurred ]         │
│   dim card       ║   ACTIVE CARD  ║      dim card           │
│   scaled 0.86    ║  crisp • lifted║      scaled 0.86        │
│                  ║  scale 1.0     ║                         │
│                  ╚═══════════════╝                         │
│        ← scroll · swipe · Tab to move between slides →      │
└───────────────────────────────────────────────────────────┘
```

*Open `demo.html` in any modern browser to see the live blur-entrance effect.*
