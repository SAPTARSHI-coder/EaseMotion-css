# Rotate-Click Modal — Dashboard Analytics

A production-quality, pure CSS animated modal featuring a **Rotate-Click** opening/closing interaction, embedded within a modern **Dashboard Analytics** interface. Built entirely with HTML5 and CSS3 — zero JavaScript, zero dependencies.

## Overview

This example demonstrates how to build a fully functional, keyboard-accessible modal using only CSS (no JavaScript), with a polished rotate-click animation and a professional dark-themed dashboard. The modal uses the **checkbox hack** for state management and GPU-accelerated CSS animations for smooth, 60fps performance.

The dashboard includes KPIs, analytics chart placeholders, a glassmorphism UI, and a top navigation bar — all styled with EaseMotion-compatible naming conventions.

## Features

- **Pure CSS modal** — No JavaScript required. Uses the checkbox `:checked` pseudo-class.
- **Rotate-Click animation** — The modal opens with a combined scale + rotate transform and reverses on close.
- **Dashboard Analytics theme** — Includes KPI cards, chart placeholders, sidebar, and top navigation.
- **Glassmorphism** — Frosted glass effects with backdrop-filter and translucent backgrounds.
- **Dark theme** — Modern, eye-friendly dark color palette with smooth gradients.
- **Keyboard accessible** — Full keyboard navigation with visible focus states and skip link.
- **ARIA attributes** — Semantic HTML with `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`.
- **Responsive design** — Mobile-first breakpoints at 1024px, 768px, and 480px.
- **Reduced motion support** — Respects `prefers-reduced-motion` to disable animations.
- **GPU-friendly** — Only animates `transform` and `opacity` to maintain 60fps.
- **Configurable CSS variables** — Easily customize animation timing, colors, spacing, and more.

## Folder Structure

```
rotate-click-modal-dashboard-analytics/
├── demo.html          # Dashboard layout + modal HTML
├── style.css          # All styles, animations, and responsive rules
└── README.md          # This documentation
```

## Usage

1. Open `demo.html` directly in any modern browser.
2. Click the **Generate Report** button (the CTA) to open the modal.
3. The modal appears with a **rotate-click** animation:
   - The dialog scales up from 85% and rotates from -12° to 0°.
   - The overlay fades in from transparent to 60% opacity.
4. Close the modal by:
   - Clicking the **✕** close button.
   - Clicking the overlay backdrop.
   - Clicking the **Cancel** button.
   - Pressing the **Tab** key to focus the close button and pressing **Enter/Space**.

### Keyboard Navigation

- **Tab** — Move focus through interactive elements.
- **Enter / Space** — Activate buttons, links, and the modal trigger.
- **Escape** — Not supported (no JS). Close via the Cancel button or backdrop click.
- **Focus indicators** — Visible `:focus-visible` rings on all interactive elements.

## Customization

All visual and animation properties are controlled via CSS custom properties on `:root`. Override these in your own stylesheet to customize the look and feel.

### CSS Variables

| Variable               | Default Value                         | Description                              |
|------------------------|---------------------------------------|------------------------------------------|
| `--modal-duration`     | `0.5s`                                | Duration of modal open/close animation   |
| `--modal-easing`       | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve for modal animation         |
| `--modal-scale`        | `0.85`                                | Scale transform for closed state         |
| `--modal-rotate`       | `12deg`                               | Rotation angle for closed state          |
| `--overlay-opacity`    | `0.6`                                 | Maximum overlay background opacity       |
| `--modal-radius`       | `1.25rem`                             | Border radius of the modal container     |
| `--modal-shadow`       | `0 2rem 6rem rgba(0,0,0,0.5)`        | Box shadow on the modal                  |
| `--background-blur`    | `12px`                                | Backdrop-filter blur amount              |
| `--primary-color`      | `#6c5ce7`                             | Primary brand color (purple)             |
| `--surface-color`      | `#1a1b2e`                             | Main background color                    |
| `--surface-alt`        | `#222340`                             | Sidebar/alternative background           |
| `--surface-card`       | `#252748`                             | Card/input background                    |
| `--text-primary`       | `#f0f0f5`                             | Primary text color                       |
| `--text-secondary`     | `#a0a3bd`                             | Secondary/muted text                     |
| `--border-color`       | `#2e3055`                             | Border and divider color                 |
| `--success-color`      | `#00cec9`                             | Positive trend indicator                 |
| `--danger-color`       | `#ff6b6b`                             | Negative trend indicator                 |
| `--warning-color`      | `#fdcb6e`                             | Warning/neutral indicator                |

### Example Customization

```css
:root {
  --primary-color: #e17055;
  --modal-duration: 0.6s;
  --modal-rotate: 15deg;
  --modal-scale: 0.8;
  --surface-color: #0d1117;
}
```

## Accessibility

- **Skip link** — Hidden skip-to-content link becomes visible on focus.
- **ARIA** — The modal uses `role="dialog"`, `aria-modal="true"`, `aria-labelledby` (title), and `aria-describedby` (description).
- **Focus management** — Visible `:focus-visible` outlines with 2px solid primary color.
- **Reduced motion** — The `@media (prefers-reduced-motion: reduce)` query disables all animations and transitions.
- **Color contrast** — All text/background combinations meet WCAG AA standards (e.g., `#a0a3bd` on `#1a1b2e` = 5.9:1 contrast ratio).
- **Hidden checkbox** — The modal toggle input is `hidden` with `aria-hidden="true"` to remove it from the accessibility tree.
- **Screen reader labels** — All icons use `aria-hidden="true"` with text alternatives provided via `aria-label`.

## Responsive Behavior

| Breakpoint | Changes                                                                 |
|------------|-------------------------------------------------------------------------|
| ≤ 1024px   | Sidebar hidden; KPI grid becomes 2 columns; Analytics stack vertically. |
| ≤ 768px    | Topbar stacks vertically; KPI becomes single column; CTA is full-width. |
| ≤ 480px    | Smaller chart heights; reduced font sizes; compact spacing.             |

The modal itself is **mobile-first**: `width: min(90vw, 520px)` ensures it scales on small screens and caps at 520px on larger ones.

## Animation Explanation

### Keyframes

1. **`rotateClickOpen`**
   - **Start:** `opacity: 0; transform: scale(0.85) rotate(-12deg)`
   - **End:** `opacity: 1; transform: scale(1) rotate(0deg)`
   - **Easing:** Overshoot cubic-bezier for a bouncy, elastic feel.

2. **`rotateClickClose`**
   - **Start:** `opacity: 1; transform: scale(1) rotate(0deg)`
   - **End:** `opacity: 0; transform: scale(0.85) rotate(12deg)`
   - **Note:** The reverse rotation direction makes the closing feel distinct from opening.

3. **`overlayFadeIn`**
   - Fades the overlay background from transparent to `rgba(0,0,0, 0.6)`.

4. **`overlayFadeOut`**
   - Fades the overlay background back to transparent.

### Performance

- **GPU-accelerated:** Only `transform` and `opacity` are animated — these trigger compositing only, not layout or paint.
- **`will-change`:** Applied to elements that animate (`modal`, `kpi__card`, `cta-button`, `sidebar__link`, `chart__bar`) to hint the browser to prepare GPU layers.
- **No layout thrashing:** Width, height, top, left, and margin are never animated.
- **60fps target:** All animations are designed to run at 60 frames per second on modern devices.

## Browser Compatibility

| Feature                  | Chrome | Firefox | Safari | Edge | IE   |
|--------------------------|--------|---------|--------|------|------|
| CSS Grid                 | 57+    | 52+     | 10.1+  | 16+  | No   |
| Flexbox                  | 29+    | 28+     | 9+     | 12+  | 11†  |
| `backdrop-filter`        | 76+    | 103+    | 9+     | 17+  | No   |
| `conic-gradient`         | 69+    | 83+     | 12.1+  | 79+  | No   |
| `prefers-reduced-motion` | 74+    | 63+     | 10.1+  | 79+  | No   |
| `:focus-visible`         | 86+    | 85+     | 15.4+  | 86+  | No   |
| CSS Custom Properties    | 49+    | 31+     | 9.1+   | 15+  | No   |
| `:checked` + `~`         | All    | All     | All    | All  | 9+   |

† Partial Flexbox support in IE 11.

## Performance Considerations

- **GPU compositing:** By animating only `transform` and `opacity`, the browser keeps the modal on its own composite layer and avoids layout recalculations.
- **`will-change` usage:** Applied sparingly only to elements that transform (modal, cards, buttons). Overuse can consume GPU memory.
- **`backdrop-filter`:** While performant on modern devices, it can be expensive on older hardware. The glassmorphism effect degrades gracefully — the UI remains functional without it.
- **No repaint triggers:** No animating of `color`, `background`, `border-color`, or other paint-inducing properties in animation keyframes.
- **Mobile considerations:** Chart heights are reduced at 480px breakpoint to minimize rendering overhead on small screens.

## Future Improvements

- **Escape key support** — Could be added with a small JavaScript listener for `keydown` on the overlay.
- **Focus trap** — A CSS-only focus trap is not possible; a minimal JS focus trap would improve keyboard UX.
- **Multiple modals** — The checkbox hack supports one modal per page. Multiple modals would require separate toggles.
- **CSS `:has()`** — Future browsers could use `:has()` selectors for more intuitive modal toggling without the checkbox hack.
- **Animated chart bars** — The bar chart heights could animate on page load using `animation` or `transition`.
- **Dark/Light theme toggle** — A CSS-only theme toggle could be added using another checkbox hack.
- **Modal scroll locking** — `overflow: hidden` on `<body>` when modal is open requires JavaScript.

---

**Built for EaseMotion CSS** — Pure CSS animation framework. No JavaScript. No dependencies. Just smooth, accessible, production-ready UI.