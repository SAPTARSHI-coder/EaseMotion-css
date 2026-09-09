# Zoom-Out Modal for Creative Portfolio Layouts

**Issue:** #34134
**Category:** Modal / Animation / Portfolio
**Tech Stack:** Pure HTML + CSS — zero JavaScript

---

## Overview

A CSS-only modal component designed for creative portfolio and freelance landing pages. The modal opens with a smooth Zoom-Out entrance animation powered by a dedicated `@keyframes zoom-out` rule — starting slightly enlarged and transparent, then easing into its natural size and full opacity. The frosted dark overlay fades in simultaneously. All open/close behaviour is driven by a hidden `<input type="checkbox">` and CSS `:checked` sibling selectors — no JavaScript.

The demo includes a fully styled portfolio hero section with a monogram avatar, staggered fade-up entrance animations, portfolio statistics, and a "View Featured Project" trigger — giving realistic context for how the modal fits into a live portfolio.

---

## Features

- **Pure HTML & CSS** — zero JavaScript, zero external libraries, no build step required.
- **Zoom-Out animation** — `@keyframes zoom-out` animates the modal from `scale(1.08), opacity: 0` to `scale(1), opacity: 1` using a spring-like `cubic-bezier(0.22, 1, 0.36, 1)` easing. Plays once every time the modal opens.
- **Creative portfolio theme** — dark gradient background, warm orange accent palette, monogram avatar, portfolio stats, tech stack pills, and project meta rows match a modern freelance/portfolio aesthetic.
- **Staggered hero entrance** — avatar, role, name, tagline, stats, and trigger fade up in sequence on page load.
- **Responsive** — `clamp()` for modal width and heading size; layout adapts cleanly across desktop, tablet, and mobile.
- **Keyboard accessible** — all interactive controls carry `tabindex="0"` and are reachable via `Tab`, with prominent `:focus-visible` rings.
- **CSS Custom Properties** — eight variables cover animation, overlay, card geometry, brand color, and background.
- **No JavaScript** — open/close handled entirely by a hidden checkbox and CSS `:checked` selectors.
- **Reduced-motion safe** — `@media (prefers-reduced-motion: reduce)` disables all animations and transitions; modal appears instantly.

---

## Files

```
submissions/
└── examples/
    └── 34134-zoom-out-modal-creative-portfolio-layouts-ks/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## CSS Custom Properties

Override any of these on `:root` to theme the component:

| Variable | Default | Description |
|---|---|---|
| `--modal-duration` | `0.4s` | Duration of the zoom animation and overlay fade |
| `--modal-scale` | `1.08` | Initial scale of the modal before the zoom-out plays |
| `--modal-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Spring-like easing for the zoom animation |
| `--overlay-opacity` | `0.78` | Opacity of the dark backdrop overlay |
| `--modal-radius` | `20px` | Border-radius of the modal card |
| `--modal-shadow` | layered box-shadow | Depth shadow applied to the modal card |
| `--primary-color` | `#f97316` | Brand accent used for buttons, tags, and focus rings |
| `--background-gradient` | dark navy gradient | Full-page background gradient |

**Example — teal creative theme:**

```css
:root {
  --primary-color:       #0d9488;
  --background-gradient: linear-gradient(135deg, #0a0f0d 0%, #0f2027 100%);
  --modal-radius:        16px;
  --modal-duration:      0.35s;
}
```

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (> 600px) | Centered modal, `max-width: 540px`, two-column footer with note and actions side by side |
| Tablet (≤ 600px) | Reduced horizontal padding; footer stacks vertically; action buttons stretch full-width |
| Mobile (≤ 400px) | Compact padding; smaller avatar and title; close button repositioned |

Modal width uses `clamp(300px, 92vw, 540px)` to fluidly adapt between all screen sizes.

---

## Accessibility

- **Semantic HTML** — uses `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<h1>`, `<h2>`, `<p>`, and `<div>` purposefully. No unnecessary wrappers.
- **Keyboard accessibility** — every interactive element has `tabindex="0"` and is reachable via `Tab`.
- **Visible focus styles** — `:focus-visible` rings use a 3px contrasting orange outline with a 3–4px offset on all interactive elements, meeting WCAG 2.1 SC 2.4.7.
- **ARIA attributes** — the modal carries `role="dialog"` and `aria-modal="true"`; `aria-labelledby` references the `<h2>` project title; `aria-describedby` references the subtitle. Interactive labels carry descriptive `aria-label` values. Decorative elements use `aria-hidden="true"`.
- **prefers-reduced-motion** — `@media (prefers-reduced-motion: reduce)` strips all `animation` and `transition` rules. The modal renders at its final state immediately with no motion, and hover lift transforms are disabled.

---

## Usage

Navigate to:

```
submissions/examples/34134-zoom-out-modal-creative-portfolio-layouts-ks/
```

Open `demo.html` in any modern browser to preview the Zoom-Out Modal component.

Customize the component by editing the CSS custom properties in `style.css` to adjust animation timing, scale, easing, colors, overlay opacity, border radius, shadow, and overall visual appearance.

---

## Preview

The page renders as a dark creative portfolio landing page: a deep navy gradient fills the viewport with a centered layout containing an orange monogram avatar, a role badge, a large bold heading with an orange gradient accent, a tagline, a frosted-glass stats row (projects, years, clients), and a pill CTA button. All elements enter in a staggered fade-up sequence.

Clicking **View Featured Project →** opens a white modal card over a frosted dark overlay. The card zooms from slightly enlarged to natural size. Inside: an orange eyebrow tag, a bold project title ("Lumina — Design System"), a subtitle, a project description, a tech stack row of orange pill badges (Figma, CSS Custom Properties, Storybook, React, TypeScript), project meta (year, role, duration), and a footer with a note on the left and two pill buttons on the right.
