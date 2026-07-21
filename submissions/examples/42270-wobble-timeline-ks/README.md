# Wobble Timeline

**Issue:** #42270
**Category:** Timeline / Animation
**Tech Stack:** Pure HTML + CSS — zero JavaScript

---

## Overview

A neumorphism-inspired vertical timeline component featuring four milestone cards. Each timeline indicator (the circular icon node) plays a CSS `@keyframes wobble` animation on page load and again whenever the user hovers over a timeline item — giving a satisfying, playful feedback cue without any JavaScript. Cards use dual `box-shadow` offsets (light top-left, dark bottom-right) to achieve a soft neumorphic appearance. A vertical connecting line ties all items together.

---

## Features

- **Wobble animation** — `@keyframes wobble` rotates and scales the circular indicator through a damped oscillation sequence. Plays on load (staggered per item) and re-triggers on hover or keyboard focus.
- **Neumorphic design** — all cards and indicators use dual `box-shadow` for raised depth; status badges use inset shadows for a pressed-in effect. Entire palette derives from a single base hue (`#e0e5ec`).
- **Staggered entrance** — each item fades up with an incremental `animation-delay` so the timeline builds top to bottom.
- **Semantic HTML** — `<main>`, `<section>`, `<ol>`, `<li>`, `<h1>`, `<h2>`, `<p>`. The list is an `<ol>` because timeline items have an inherent order.
- **Accessible** — decorative indicator icons carry `aria-hidden="true"`; the list is wrapped in a `<main>` with `aria-label`; focus is not trapped or broken.
- **Responsive** — indicator size and card padding adjust at `≤ 480px` via a single media query.
- **Reduced-motion safe** — `@media (prefers-reduced-motion: reduce)` disables all animations and transitions; items render at their final visible state immediately.
- **Zero dependencies** — open `demo.html` directly in any modern browser.

---

## Files

```
submissions/
└── examples/
    └── 42270-wobble-timeline-ks/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--neu-bg` | `#e0e5ec` | Page and card base colour |
| `--neu-light` | `#ffffff` | Light shadow offset (top-left) |
| `--neu-dark` | `#a3b1c6` | Dark shadow offset (bottom-right) |
| `--primary` | `#5b6ee1` | Default accent colour |
| `--text-heading` | `#2d3748` | Heading text colour |
| `--text-body` | `#4a5568` | Body text colour |
| `--text-muted` | `#718096` | Date and muted text colour |
| `--radius` | `16px` | Border-radius for cards |
| `--wobble-duration` | `0.7s` | Duration of the wobble animation |
| `--fade-duration` | `0.5s` | Duration of the fade-up entrance |
| `--easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring easing used on all animations |

**Example — warm cream theme:**

```css
:root {
  --neu-bg:    #f0ebe3;
  --neu-light: #ffffff;
  --neu-dark:  #c9bfb4;
  --primary:   #c2410c;
  --radius:    12px;
}
```

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (> 480px) | Full layout: 3.5rem indicators, comfortable card padding |
| Mobile (≤ 480px) | Indicators shrink to 3rem; card padding reduced; track repositioned |

---

## Accessibility

- **Ordered list** — `<ol>` communicates the sequential nature of the timeline to assistive technologies.
- **Section landmark** — `<main aria-label="Project timeline">` gives screen-reader users a named landmark.
- **Decorative icons** — emoji indicators carry `aria-hidden="true"` so screen readers skip them and read only the text content.
- **Focus** — the component preserves the natural document order. Hover and keyboard focus (`:focus-within`) share the same visual animation behavior where applicable. If interactive elements are added later, provide visible `:focus-visible` styles and appropriate ARIA labels.
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` disables `wobble`, `fade-up`, and all CSS transitions. All items render fully visible immediately.

---

## Usage

Navigate to:

```
submissions/examples/42270-wobble-timeline-ks/
```

Open `demo.html` in any modern browser to preview the component. No server or build step required.

Customize via CSS custom properties in `style.css`. To add more timeline items, duplicate an `<li class="timeline__item">` block and increment the `nth-child` animation-delay rules to maintain the stagger.

---

## Preview

The page renders on a soft grey neumorphic background. A centered timeline section with the heading "Project Timeline" and a subtitle sits above four vertically stacked cards connected by a thin line. Each card contains a circular indicator (emoji icon with a coloured ring outline), a card title, a coloured inset badge (Completed / In Progress / Upcoming), a date, and a description paragraph. On page load the indicators wobble in sequence; hovering any item lifts the card slightly and re-wobbles its indicator.
