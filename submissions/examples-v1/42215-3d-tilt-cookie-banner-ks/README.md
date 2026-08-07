# 3D Tilt Cookie Banner

**Issue:** #42215
**Category:** Cookie Banner / Animation
**Tech Stack:** Pure HTML + CSS — zero JavaScript

---

## Overview

A modern, startup-inspired cookie consent banner with a subtle CSS-only 3D tilt effect on hover. The banner uses `perspective` on the `<body>` and `rotateX` / `rotateY` transforms on the banner wrapper to create a convincing depth illusion without any JavaScript. A spring-like `cubic-bezier` easing makes the tilt feel physical and satisfying. The design uses a deep purple-on-dark palette common in modern SaaS and startup landing pages.

---

## Features

- **CSS-only 3D tilt** — `rotateX`, `rotateY`, and `scale` applied on hover or keyboard focus (`:focus-within`) with a spring easing.
- **Startup aesthetic** — dark background, purple accent, gradient shimmer overlay, and a top accent line give the banner a polished product feel.
- **Three action controls** — "Accept All" primary button, "Decline" secondary button, and a "Manage Preferences" text link, each with distinct hover and `:focus-visible` states.
- **CSS Custom Properties** — all colours, geometry, shadows, tilt angles, and animation timing are exposed as variables on `:root`.
- **Accessible** — `<aside role="region">` with `aria-label` and `aria-describedby`; all three controls are `<button>` elements with descriptive `aria-label`; decorative cookie icon carries `aria-hidden="true"`.
- **Keyboard accessible** — full keyboard navigation using the Tab key with visible `:focus-visible` focus rings on every interactive element.
- **Reduced-motion safe** — `@media (prefers-reduced-motion: reduce)` disables the tilt transform and all transitions.
- **Responsive** — action buttons stack full-width at ≤ 480px; card padding reduces on small screens.
- **Zero dependencies** — open `demo.html` directly in any modern browser.

---

## Folder Structure

```
submissions/
└── examples/
    └── 42215-3d-tilt-cookie-banner-ks/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Usage

Navigate to:

```
submissions/examples/42215-3d-tilt-cookie-banner-ks/
```

Open `demo.html` in any modern browser. Hover over the banner to trigger the 3D tilt effect. No server or build step required.

To embed in an existing page, copy the `.cookie-banner` HTML block and link `style.css`. Adjust the CSS custom properties on `:root` to match your project's colour palette.

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (> 480px) | Buttons in a single row; "Manage Preferences" pushed to the right |
| Mobile (≤ 480px) | All three controls stack full-width; padding reduced |

---

## Accessibility

- **Landmark** — the banner uses `<aside role="region" aria-label="Cookie consent">` so screen-reader users can identify and navigate to it.
- **Description** — `aria-describedby="cookie-desc"` links the banner to its description paragraph for assistive technologies.
- **Interactive controls** — the primary and secondary actions use native `<button>` elements, while "Manage Preferences" is a semantic `<a>` link. All controls include descriptive accessible labels.
- **Focus styles** — every interactive element has a visible `:focus-visible` ring using a 3px contrasting purple outline, meeting WCAG 2.1 SC 2.4.7.
- **Decorative content** — the cookie emoji uses `aria-hidden="true"` so screen readers skip it.
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` removes the tilt transform and all CSS transitions, ensuring users who are sensitive to motion see a static, fully functional banner.

---

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--primary` | `#6d28d9` | Primary button background and accent colour |
| `--primary-hover` | `#5b21b6` | Primary button hover state |
| `--page-bg` | `#0f0a1e` | Page background colour |
| `--banner-bg` | `#1a1035` | Banner card background |
| `--banner-border` | `rgba(109,40,217,0.25)` | Banner card border colour |
| `--text-heading` | `#f5f3ff` | Banner title colour |
| `--text-body` | `#c4b5fd` | Description text colour |
| `--text-muted` | `#7c6fa0` | Muted / secondary text |
| `--radius` | `20px` | Banner card border-radius |
| `--radius-btn` | `10px` | Button border-radius |
| `--duration` | `0.35s` | Base transition / animation duration |
| `--tilt-x` | `4deg` | Hover tilt on the X axis |
| `--tilt-y` | `-6deg` | Hover tilt on the Y axis |
| `--tilt-scale` | `1.02` | Hover scale factor |

**Example — light theme:**

```css
:root {
  --page-bg:      #f8fafc;
  --banner-bg:    #ffffff;
  --banner-border: rgba(99, 102, 241, 0.2);
  --text-heading: #1e1b4b;
  --text-body:    #4338ca;
  --primary:      #4f46e5;
  --radius:       16px;
}
```
