# Aria Vance — Motion Graphics Designer Portfolio

A premium, award-quality single-page portfolio for a Motion Graphics Designer, built entirely with semantic **HTML5**, modern **CSS**, and the **EaseMotion CSS** animation library. No frameworks, no JavaScript, no build step — open `demo.html` in any modern browser and you're live.

---

## Project Overview

This portfolio is designed to feel at home alongside award-winning sites like **Cuberto**, **Framer**, **Ordinary Folk** and **Buck Design**. It tells a complete story — from a cinematic hero to a real, usable commission inquiry form — in a single immersive scroll, with every interaction quietly animated through EaseMotion utility classes.

The deliverable is intentionally **three files only** so it can be dropped into any host (GitHub Pages, Netlify, Vercel, plain Apache, S3) without modification.

---

## Features

- **Full-screen cinematic hero** with animated reel mockup, floating software badges (Ae · C4D · Bl · Pr), gradient orbs and a subtle grid overlay.
- **Featured Projects** — 6 premium project cards (Nike, Spotify, Netflix, Samsung, Adobe MAX, Red Bull) in a responsive CSS Grid with play buttons, categories, descriptions and tech stacks.
- **Creative Process** — a 5-step animated timeline covering Discovery → Storyboarding → Animation → Sound Design → Delivery.
- **Tools Section** — six glassmorphic cards for the daily toolbox (After Effects, Cinema 4D, Blender, Premiere Pro, Photoshop, Illustrator).
- **Clients Strip** — animated logo-style cards for Adobe, Netflix, Spotify, Samsung, Nike, Red Bull, Intel, ASUS.
- **Testimonials** — three rich quote cards with gradient avatars and ratings.
- **Commission Inquiry Form** — name, email, budget, timeline and project description fields inside a hero gradient card.
- **Large CTA Footer** — quick links, social column, newsletter form and a giant final call-to-action.
- **Dark premium theme** with glassmorphism, soft tri-color gradients (purple · cyan · orange), large display typography and generous whitespace.
- **Fully responsive** across mobile, tablet, laptop and desktop.

---

## Folder Structure

```
submissions/
└── examples/
    └── portfolio-motion-designer/
        ├── demo.html      # Semantic single-page HTML
        ├── style.css      # All visual styles & layouts (no @keyframes)
        └── README.md      # This file
```

---

## Responsive Support

| Device     | Breakpoint            | Behaviour                                                |
| ---------- | --------------------- | -------------------------------------------------------- |
| Mobile     | `≤ 560px`             | Single-column layouts, condensed nav, stacked stats      |
| Tablet     | `561px – 900px`       | Two-column grids for projects, tools, clients, footer    |
| Laptop     | `901px – 1280px`      | Three-column tool/testimonial grids, full nav restored   |
| Desktop    | `≥ 1281px`            | Six-column project grid with hero + wide feature cards   |

All breakpoints are handled with native CSS media queries; no JavaScript involved.

---

## EaseMotion Classes Showcased

Every animation, transition and hover effect on the page is delegated to existing **`ease-*`** utility classes. The CSS file contains **zero `@keyframes` rules**. The following EaseMotion classes are used throughout the markup:

**Entrance animations**

- `ease-fade-up`
- `ease-fade-down`
- `ease-fade-left`
- `ease-fade-right`
- `ease-scale-in`

**Looping accents**

- `ease-float`
- `ease-pulse`
- `ease-bounce`

**Hover states**

- `ease-hover-lift`
- `ease-hover-grow`
- `ease-hover-glow`
- `ease-hover-shadow`
- `ease-hover-rotate`
- `ease-hover-underline`


---

## Browser Compatibility

Tested and rendering correctly on the latest two versions of:

- Chrome / Chromium / Edge
- Firefox
- Safari (macOS & iOS)
- Brave / Arc / Opera

Uses only widely-supported CSS features: custom properties, grid, flex, `backdrop-filter`, `aspect-ratio` and `clamp()`.

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**