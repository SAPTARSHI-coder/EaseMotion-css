# Slide-Right Modal — Product Catalog

A pure CSS animated **Slide-Right Modal** styled for a **Product Catalog** interface, built entirely with HTML and CSS following the EaseMotion CSS framework philosophy.

> **One sentence:** A CSS-only quick-view modal that slides in from the right with smooth GPU-friendly animations, styled as a modern product catalog with filtering, product cards, and responsive layout.

---

## Features

- **CSS-only Modal** — Uses the `:target` pseudo-class technique (no JavaScript required)
- **Slide-Right Animation** — Smooth 60fps transition using `transform` and `opacity` only
- **Product Catalog UI** — Navigation header, hero section, filter sidebar, product grid, and footer
- **6 Product Cards** — Each with image placeholder, title, category, price, rating, wishlist, and quick view
- **Modal Quick View** — Full product details including specs, quantity selector, description, and action buttons
- **Responsive Design** — Mobile-first breakpoints at 1024px, 768px, and 480px
- **Accessible** — Skip link, ARIA attributes, `:focus-visible`, keyboard navigation, semantic HTML
- **Reduced Motion Support** — Respects `prefers-reduced-motion` system preference
- **Custom Properties** — Fully themeable via CSS custom properties
- **Modern UI** — Glassmorphism header, soft shadows, rounded corners, gradient accents

---

## Folder Structure

```
submissions/examples/slide-right-modal-product-catalog/
├── demo.html
├── style.css
└── README.md
```

---

## Installation

1. Clone the EaseMotion CSS repository:
   ```bash
   git clone https://github.com/SAPTARSHI-coder/EaseMotion-css.git
   ```

2. Navigate to the example:
   ```bash
   cd EaseMotion-css/submissions/examples/slide-right-modal-product-catalog
   ```

3. Open `demo.html` directly in any modern browser:
   ```bash
   open demo.html
   ```

No build tools, package managers, or server required.

---

## Usage

The modal system works through the CSS `:target` pseudo-class. Each product card has a **Quick View** link that targets a modal ID:

```html
<!-- Trigger link -->
<a href="#modal-product-1" class="product-card__quick-view">Quick View</a>

<!-- Modal overlay with matching ID -->
<div id="modal-product-1" class="modal-overlay" role="dialog" aria-modal="true">
  <div class="modal">
    <a href="#" class="modal__close" aria-label="Close">✕</a>
    <div class="modal__content">
      <!-- Product details here -->
    </div>
  </div>
</div>
```

**How it works:**
1. Clicking "Quick View" sets the URL fragment to `#modal-product-1`
2. CSS activates the `.modal-overlay:target` state, showing the backdrop and sliding in the modal
3. Clicking the close button (which links to `#`) removes the fragment and hides the modal
4. Clicking the backdrop (outside the modal) also closes it via the same mechanism

---

## Component Customization

### CSS Custom Properties

All visual and animation properties are driven by CSS custom properties. Override them in your own stylesheet to customize the component:

| Variable | Default | Description |
|---|---|---|
| `--modal-duration` | `0.4s` | Modal slide animation duration |
| `--modal-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Modal slide easing curve |
| `--modal-distance` | `420px` | Distance the modal slides from the right |
| `--modal-scale` | `0.95` | Scale during animation |
| `--overlay-opacity` | `0.6` | Backdrop overlay opacity |
| `--modal-radius` | `1rem` | Modal border radius |
| `--modal-shadow` | `0 25px 60px -12px rgba(0, 0, 0, 0.35)` | Modal box shadow |
| `--backdrop-blur` | `8px` | Backdrop blur amount |
| `--primary-color` | `#6c5ce7` | Primary brand color |
| `--surface-color` | `#ffffff` | Surface/card background |
| `--border-radius` | `0.75rem` | Global border radius |
| `--card-shadow` | `0 4px 20px rgba(0,0,0,0.06)` | Default card shadow |

**Example customization:**
```css
:root {
  --modal-duration: 0.6s;
  --modal-distance: 600px;
  --primary-color: #ff6b6b;
  --backdrop-blur: 12px;
  --modal-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}
```

---

## Accessibility

- **Skip Link** — First focusable element, allows keyboard users to skip to main content
- **Semantic HTML** — Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **ARIA Attributes** — `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-label`, `aria-describedby`, `aria-hidden`, `aria-live="polite"`
- **Keyboard Navigation** — All interactive elements are focusable and operable via keyboard
- **`:focus-visible`** — Custom focus ring only appears for keyboard users, not mouse users
- **Screen Reader Support** — `sr-only` utility class, descriptive labels on all controls
- **High Contrast** — Sufficient color contrast ratios throughout the design

---

## Responsive Behavior

| Breakpoint | Changes |
|---|---|
| **≤ 1024px** | Product grid goes from 3 to 2 columns; hero visual shrinks |
| **≤ 768px** | Single column layout; sidebar hidden; nav hidden; modal becomes full-width with stacked content |
| **≤ 480px** | Single column product grid; action buttons stack vertically; specs single column |

The modal adapts at each breakpoint:
- On tablet, the image section stacks above details
- On mobile, specs collapse to a single column and action buttons stack vertically

---

## Animation Overview

### Keyframes

| Animation | Type | Description |
|---|---|---|
| `slideRightIn` | Transform + Opacity | Modal slides in from right to its final position |
| `slideRightOut` | Transform + Opacity | Modal slides back off-screen to the right |
| `overlayFadeIn` | Opacity | Backdrop fades in |
| `overlayFadeOut` | Opacity | Backdrop fades out |

### Performance Optimizations

- **GPU-composited properties only** — Animates `transform` and `opacity` exclusively
- **No layout thrashing** — Avoids `width`, `height`, `top`, `left`, `margin` in animations
- **`will-change` friendly** — Browsers automatically promote composited layers for transforms
- **Transition-based reverse animation** — The modal uses CSS `transition` (not `animation`) for the slide effect, which allows smooth reversal when `:target` is removed

---

## Browser Compatibility

| Browser | Support |
|---|---|
| Chrome / Edge 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 15+ | ✅ Full |
| Opera 76+ | ✅ Full |
| Samsung Internet 15+ | ✅ Full |

Requires support for:
- CSS Custom Properties (CSS Variables)
- CSS Grid
- Flexbox
- `backdrop-filter` (with `-webkit-` prefix for Safari)
- `:target` pseudo-class

---

## Performance Optimizations

- **Minimal repaint/reflow** — Only `transform` and `opacity` are animated
- **CSS Grid layout** — Efficient product grid rendering
- **Flexbox** — Used for component-level layouts
- **Mobile-first** — Base styles optimized for small screens first
- **No JavaScript** — Zero runtime overhead
- **No external requests** — Self-contained, no CDN or font imports
- **Reduced motion** — Complete animation freeze when user prefers reduced motion

---

## Future Improvements

- Add CSS-only hamburger menu for mobile navigation
- Implement a CSS-only filter toggle for mobile sidebar
- Add more modal animation variants (zoom, fade, slide-up)
- Include CSS-only tabbed product information (description, reviews, shipping)
- Add a CSS-only image gallery carousel within the modal
- Implement a CSS-only color/size selector for product variants
- Expand the product catalog with pagination

---

## EaseMotion CSS Integration

This example follows the EaseMotion CSS contribution guidelines:
- **Animation-first** — Smooth, performant, and meaningful motion
- **CSS-only** — No JavaScript dependencies
- **Self-contained** — Opens directly in a browser
- **Production quality** — Well-commented, organized code
- **Accessible** — Inclusive design for all users
- **Customizable** — CSS custom properties for theming

---

*Created for submission to the EaseMotion CSS framework.*