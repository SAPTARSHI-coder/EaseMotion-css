# Blur-Entrance Tooltip — E-Commerce Checkout

A production-quality, pure CSS animated tooltip featuring a smooth **Blur-Entrance** interaction transition, styled to complement a modern **E-Commerce Checkout** interface. Built entirely with HTML5 and CSS3 — zero JavaScript, zero dependencies.

## Overview

This example demonstrates how to build a fully functional, keyboard-accessible tooltip system using only CSS, with a polished blur-entrance animation and a professional e-commerce checkout interface. The tooltip uses CSS transitions and keyframe animations for GPU-accelerated, 60fps performance.

The checkout interface includes a shopping cart summary, billing information, shipping address, payment method selection, coupon code field, order summary, progress indicator, trust badges, and security badges — all styled with EaseMotion-compatible naming conventions.

## Features

- **Pure CSS tooltips** — No JavaScript required. Uses `:hover`, `:focus-visible`, and `:focus-within` pseudo-classes.
- **Blur-Entrance animation** — Tooltips appear with a blur-to-sharp transition, combined with fade, scale, and slight upward movement.
- **Multiple placement examples** — Top-center, bottom-center, left, and right tooltip positions demonstrated throughout the interface.
- **E-Commerce Checkout theme** — Complete checkout flow with cart, forms, payment, order summary, and trust badges.
- **Glassmorphism accents** — Frosted glass effects with `backdrop-filter` on security badges.
- **Clean premium design** — Soft shadows, rounded corners, neutral backgrounds, modern typography, and gradient highlights.
- **Keyboard accessible** — Full keyboard navigation with visible `:focus-visible` states and skip link.
- **ARIA attributes** — Semantic HTML with `role="tooltip"`, `aria-describedby`, `aria-label`, and `aria-hidden`.
- **Responsive design** — Mobile-first breakpoints at 1024px, 768px, and 480px.
- **Reduced motion support** — Respects `prefers-reduced-motion` to disable animations.
- **GPU-friendly** — Only animates `opacity`, `transform`, and `filter: blur()` to maintain 60fps.
- **Configurable CSS variables** — Easily customize tooltip animation timing, colors, sizing, and positioning.

## Folder Structure

```
blur-entrance-tooltip-ecommerce-checkout/
├── demo.html          # Checkout interface + tooltip HTML
├── style.css          # All styles, animations, and responsive rules
└── README.md          # This documentation
```

## Installation

1. Clone or download the EaseMotion CSS repository.
2. Navigate to `submissions/examples/blur-entrance-tooltip-ecommerce-checkout/`.
3. Open `demo.html` directly in any modern browser.

No build tools, package managers, or server required.

## Usage

1. Open `demo.html` directly in any modern browser.
2. Hover over any help icon (question mark circles), trust badges, delivery estimates, or security badges to see the tooltip appear.
3. The tooltip appears with a **blur-entrance** animation:
   - Starts blurred (`filter: blur(6px)`) and transitions into sharp focus.
   - Fades in from `opacity: 0` to `opacity: 1`.
   - Scales up from `scale(0.92)` to `scale(1)`.
   - Slides into position with a slight upward movement.
4. Dismiss the tooltip by moving the cursor away or tabbing to another element.

### Keyboard Navigation

- **Tab** — Move focus through interactive elements (help icons, badges, buttons).
- **Enter / Space** — Activate buttons and interactive elements.
- **Focus indicators** — Visible `:focus-visible` rings on all interactive elements.
- **Skip link** — Press Tab on page load to reveal the "Skip to checkout content" link.

### Tooltip Placement Examples

| Position | Location in Interface |
|----------|----------------------|
| Top-center | Checkout header lock icon, section titles, trust badges, security badge |
| Bottom-center | Header trust badge, order summary shipping/discount info |
| Left | Card number help icon |
| Right | Delivery estimates, CVV help icon |

## Tooltip Customization

All tooltip visual and animation properties are controlled via CSS custom properties on `:root`. Override these in your own stylesheet to customize the look and feel.

### CSS Variables

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--tooltip-duration` | `0.35s` | Duration of the blur-entrance animation |
| `--tooltip-easing` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing curve for the animation |
| `--tooltip-scale` | `0.92` | Scale transform for the closed/initial state |
| `--tooltip-offset` | `10px` | Distance between the trigger and the tooltip |
| `--tooltip-blur` | `6px` | Blur amount for the initial blurred state |
| `--tooltip-radius` | `8px` | Border radius of the tooltip container |
| `--tooltip-shadow` | `0 4px 20px rgba(0,0,0,0.15)` | Box shadow on the tooltip |
| `--tooltip-bg` | `#1a1a2e` | Background color of the tooltip |
| `--tooltip-color` | `#f0f0f5` | Text color of the tooltip |
| `--tooltip-max-width` | `260px` | Maximum width of the tooltip before wrapping |
| `--tooltip-arrow-size` | `6px` | Size of the tooltip arrow |

### Example Customization

```css
:root {
  --tooltip-duration: 0.5s;
  --tooltip-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --tooltip-scale: 0.85;
  --tooltip-blur: 8px;
  --tooltip-bg: #2d3436;
  --tooltip-color: #ffffff;
  --tooltip-max-width: 300px;
  --tooltip-radius: 12px;
  --tooltip-offset: 14px;
}
```

## Animation Explanation

### Keyframes

1. **`blurEntrance`**
   - **Start:** `opacity: 0; filter: blur(6px); transform: scale(0.92)`
   - **End:** `opacity: 1; filter: blur(0); transform: scale(1)`
   - The tooltip transitions from a blurred, faded, slightly smaller state into sharp, full-opacity focus.

2. **`blurExit`**
   - **Start:** `opacity: 1; filter: blur(0); transform: scale(1)`
   - **End:** `opacity: 0; filter: blur(6px); transform: scale(0.92)`
   - Reverse of blur-entrance for smooth dismissal.

3. **`tooltipFade`**
   - Simple opacity fade from 0 to 1.

4. **`tooltipFloat`**
   - Subtle upward movement from `translateY(4px)` to `translateY(0)`.

### Performance

- **GPU-accelerated:** Only `opacity`, `transform`, and `filter: blur()` are animated — these trigger compositing only, not layout or paint.
- **`will-change`:** Not explicitly set to avoid GPU memory overuse; the browser handles compositing efficiently for these properties.
- **No layout thrashing:** Width, height, top, left, and margin are never animated.
- **60fps target:** All animations are designed to run at 60 frames per second on modern devices.

## Accessibility

- **Skip link** — Hidden skip-to-content link becomes visible on focus.
- **ARIA** — Tooltips use `role="tooltip"`, `aria-describedby` on triggers, and `aria-label` on icon-only buttons.
- **Focus management** — Visible `:focus-visible` outlines with 2px solid primary color.
- **Reduced motion** — The `@media (prefers-reduced-motion: reduce)` query disables all animations and transitions, showing tooltips instantly.
- **Color contrast** — All text/background combinations meet WCAG AA standards.
- **Screen reader labels** — All icons use `aria-hidden="true"` with text alternatives provided via `aria-label`.
- **Semantic HTML** — Proper heading hierarchy (`h1`, `h2`), `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, and `<footer>` elements.
- **Keyboard navigation** — All interactive elements are reachable and operable via keyboard.

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| ≤ 1024px | Grid switches to single column; order summary moves below forms. |
| ≤ 768px | Reduced padding; header wraps; 3-column forms become 2-column; tooltip max-width reduced to 200px. |
| ≤ 480px | Single column forms; cart items stack; progress steps compact; tooltip max-width reduced to 180px; coupon field stacks vertically. |

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| Flexbox | 29+ | 28+ | 9+ | 12+ |
| `backdrop-filter` | 76+ | 103+ | 9+ | 17+ |
| `prefers-reduced-motion` | 74+ | 63+ | 10.1+ | 79+ |
| `:focus-visible` | 86+ | 85+ | 15.4+ | 86+ |
| CSS Custom Properties | 49+ | 31+ | 9.1+ | 15+ |
| `filter: blur()` | 18+ | 35+ | 6+ | 12+ |
| `:focus-within` | 60+ | 52+ | 10.1+ | 79+ |

## Performance Considerations

- **GPU compositing:** By animating only `opacity`, `transform`, and `filter`, the browser keeps tooltips on their own composite layers and avoids layout recalculations.
- **No repaint triggers:** No animating of `color`, `background`, `border-color`, or other paint-inducing properties in animation keyframes.
- **`pointer-events: none`:** Applied to tooltips to prevent hover interference and reduce event handling overhead.
- **`visibility` toggle:** Used alongside opacity to ensure tooltips are truly hidden from the accessibility tree and layout when not shown.
- **Mobile considerations:** Tooltip max-width and font-size are reduced at smaller breakpoints to ensure readability without overflow.

## Future Improvements

- **Tooltip delay** — A `transition-delay` could be added to prevent tooltips from appearing during quick mouse passes.
- **Rich tooltip content** — Support for images, icons, or formatted lists within tooltips.
- **Click-to-toggle** — A checkbox hack could be used for click-based tooltip toggling on touch devices.
- **CSS `:has()`** — Future browsers could use `:has()` selectors for more intuitive tooltip triggering without adjacent sibling selectors.
- **Dark/Light theme toggle** — A CSS-only theme toggle could be added using a checkbox hack.
- **Tooltip groups** — Multiple tooltips in close proximity could use staggered animation delays.
- **Direction-aware positioning** — Tooltips could automatically flip to the opposite side when near viewport edges using CSS `@container` queries.

---

**Built for EaseMotion CSS** — Pure CSS animation framework. No JavaScript. No dependencies. Just smooth, accessible, production-ready UI.