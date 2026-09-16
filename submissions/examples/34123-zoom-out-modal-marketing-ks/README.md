# Zoom-Out Modal for Marketing Landing Page Layouts

**Issue:** #34123
**Category:** Modal / Animation / Marketing
**Tech Stack:** Pure HTML + CSS — zero JavaScript

---

## Overview

A polished, CSS-only modal component designed for modern SaaS and marketing landing pages. The modal opens with a smooth Zoom-Out entrance animation powered by a dedicated `@keyframes zoom-out` rule — starting slightly enlarged and transparent, then easing into its final size and full opacity. The dark frosted overlay fades in simultaneously. All open/close behaviour is driven by a hidden `<input type="checkbox">` and CSS `:checked` sibling selectors, requiring no JavaScript.

The demo includes a fully styled hero section with staggered fade-up entrance animations, providing realistic context for how the modal fits into a production marketing layout.

---

## Features

- **Pure HTML & CSS** — zero JavaScript, zero external libraries, no build step required.
- **Smooth Zoom-Out modal animation** — `@keyframes zoom-out` animates the modal from `scale(1.09), opacity: 0` to `scale(1), opacity: 1` using a spring-like `cubic-bezier` easing. Plays once every time the modal opens.
- **Marketing landing page themed UI** — deep gradient background, gradient heading text, pill buttons, eyebrow tag, feature list, and footer social-proof note match modern SaaS design conventions.
- **Responsive design** — `clamp()` for modal width and heading size; layout adapts from desktop to tablet to mobile.
- **Keyboard accessible** — all interactive controls are reachable via `Tab` with prominent `:focus-visible` rings.
- **CSS Custom Properties** — eight variables cover animation, overlay, card geometry, brand color, and background, making the entire theme adjustable from `:root`.
- **No JavaScript** — open/close is handled entirely by a hidden checkbox and CSS `:checked` selectors.

---

## Files

```
submissions/
└── examples/
    └── 34123-zoom-out-modal-marketing-ks/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## CSS Custom Properties

Override any of these on `:root` to theme the component:

| Variable | Default | Description |
|---|---|---|
| `--modal-duration` | `0.38s` | Duration of the zoom animation and overlay fade |
| `--modal-scale` | `1.09` | Initial scale of the modal before the zoom-out plays |
| `--modal-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Spring-like easing for the zoom animation |
| `--overlay-opacity` | `0.72` | Opacity of the dark backdrop overlay |
| `--modal-radius` | `18px` | Border-radius of the modal card |
| `--modal-shadow` | layered box-shadow | Depth shadow applied to the modal card |
| `--primary-color` | `#6d28d9` | Brand accent used for buttons, tags, and focus rings |
| `--background-gradient` | dark purple gradient | Full-page background gradient |

**Example — blue SaaS theme:**

```css
:root {
  --primary-color:       #2563eb;
  --background-gradient: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
  --modal-radius:        14px;
  --modal-duration:      0.3s;
}
```

---

## Responsive Design

| Breakpoint | Behavior |
|---|---|
| Desktop (> 600px) | Centered modal, `max-width: 520px`, two-column footer with note and action buttons side by side |
| Tablet (≤ 600px) | Reduced horizontal padding; footer stacks vertically; action buttons stretch full-width |
| Mobile (≤ 400px) | Tight padding on all sections; smaller title font size; close button repositioned for thumb reach |

Modal width uses `clamp(300px, 92vw, 520px)` to fluidly adapt between all screen sizes without abrupt layout shifts.

---

## Accessibility

- **Semantic HTML** — page uses `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<h1>`, `<h2>`, `<ul>`, `<li>`, and `<p>`. No unnecessary wrappers.
- **Keyboard accessibility** — all interactive elements carry `tabindex="0"` and are reachable via the `Tab` key.
- **Visible focus styles** — every interactive element has a `:focus-visible` ring with a 3px contrasting indigo outline and a 3–4px offset, meeting WCAG 2.1 SC 2.4.7 (Focus Visible).
- **ARIA attributes** — the modal carries `role="dialog"` and `aria-modal="true"`; `aria-labelledby` references the `<h2>` title; `aria-describedby` references the subtitle paragraph; interactive labels carry descriptive `aria-label` values.
- **prefers-reduced-motion support** — `@media (prefers-reduced-motion: reduce)` removes all `animation` and `transition` declarations. The modal renders at its final visual state immediately with no motion, and hover lift transforms are disabled.

---

## Preview

The page renders as a marketing landing page: a deep purple-to-midnight gradient fills the viewport with a centered hero section containing a pill tag ("Now in Public Beta"), a large bold heading with a purple gradient text accent, a short subheading, and a pill CTA button. All four elements enter in a staggered fade-up sequence on load.

Clicking the trigger opens a white modal card over a frosted dark overlay. The card zooms smoothly from slightly enlarged to its natural size. Inside the modal: a purple eyebrow tag, a bold heading, a subtitle, a four-item feature list with dot markers, and a footer with a social-proof note on the left and two pill buttons (ghost cancel + purple primary CTA) on the right.

---

## Usage

Navigate to:

```
submissions/examples/34123-zoom-out-modal-marketing-ks/
```

Open `demo.html` in any modern browser to preview the Zoom-Out Modal component.

Customize the component by editing the CSS custom properties in `style.css` to adjust animation timing, scale, easing, colors, overlay opacity, border radius, shadow, and overall visual appearance.
