# css-wobble-focus-modal-product-catalog

A **pure CSS animated quick-view modal** component built for **product catalog interfaces**, featuring a smooth **Wobble-Focus** spring-style entrance animation. Zero JavaScript. Fully accessible. Fully responsive. Supports dark mode.

---

## What does this do?

This component renders a **product catalog grid** where each product card contains a **"Quick View" trigger** that opens a richly-detailed modal with the Wobble-Focus animation:

- **Wobble-Focus entrance** — the modal springs in from a scaled-down, rotated state, overshoots slightly, oscillates, and settles precisely at `scale(1) rotate(0deg)` — driven entirely by `@keyframes ease-wobble-focus`
- **Glassmorphism overlay** — a blurred, semi-transparent backdrop dims the catalog grid while the modal is open
- **Product Catalog content** — the modal displays an SVG product hero, category badge, product title, star rating, feature checklist, price with savings badge, real-time stock indicator, and action buttons
- **Pure CSS state machine** — open/close state is managed via a hidden `<input type="checkbox">` + `<label>` sibling pattern; no JavaScript is used or required
- **Dark mode** — wrap the catalog section in `.ease-catalog--dark` to activate a dark color palette via CSS custom property overrides

---

## How is it used?

### Complete HTML Pattern (one product)

```html
<!-- 1. Hidden checkbox — unique id per product -->
<input type="checkbox" id="modal-toggle-1" class="ease-modal-toggle" aria-hidden="true" />

<!-- 2. Catalog card with quick-view label trigger -->
<article class="ease-product-card" aria-label="Product Name">
  <div class="ease-product-card__image-wrap">
    <img src="product.jpg" alt="Product Name" class="ease-product-card__image" />
    <span class="ease-product-card__badge">−20%</span>
  </div>
  <div class="ease-product-card__body">
    <p class="ease-product-card__category">Category</p>
    <h3 class="ease-product-card__name">Product Name</h3>
    <div class="ease-product-card__rating" aria-label="Rating: 4.8 out of 5">★★★★★
      <span class="ease-product-card__rating-count">(2,341)</span>
    </div>
    <div class="ease-product-card__price-row">
      <span class="ease-product-card__price">$159</span>
      <span class="ease-product-card__price-original">$199</span>
    </div>
    <label for="modal-toggle-1" class="ease-product-card__quick-view"
      role="button" tabindex="0" aria-haspopup="dialog" aria-controls="modal-1">
      ⚡ Quick View
    </label>
  </div>
</article>

<!-- 3. Overlay (clicking closes the modal) -->
<label for="modal-toggle-1" class="ease-modal-overlay" aria-hidden="true"></label>

<!-- 4. Wobble-Focus Modal -->
<section id="modal-1" class="ease-wf-modal"
  role="dialog" aria-modal="true"
  aria-labelledby="modal-1-title" aria-describedby="modal-1-desc">

  <!-- Close X button -->
  <label for="modal-toggle-1" class="ease-wf-modal__close"
    aria-label="Close quick view" tabindex="0">&#x2715;</label>

  <!-- Hero image -->
  <div class="ease-wf-modal__hero">
    <img src="product-large.jpg" alt="" class="ease-wf-modal__hero-img" />
    <span class="ease-wf-modal__hero-badge">−20%</span>
  </div>

  <!-- Body content -->
  <div class="ease-wf-modal__body">
    <p class="ease-wf-modal__category">Category · Subcategory</p>
    <h2 id="modal-1-title" class="ease-wf-modal__title">Product Name</h2>
    <div class="ease-wf-modal__rating" aria-label="Rating: 4.8 out of 5">
      ★★★★★
      <span class="ease-wf-modal__rating-count">4.8 · 2,341 reviews</span>
    </div>
    <p id="modal-1-desc" class="ease-wf-modal__description">
      Product description text…
    </p>
    <ul class="ease-wf-modal__features" aria-label="Key features">
      <li class="ease-wf-modal__feature">Feature one</li>
      <li class="ease-wf-modal__feature">Feature two</li>
    </ul>
    <hr class="ease-wf-modal__divider" />
    <div class="ease-wf-modal__price-row">
      <span class="ease-wf-modal__price">$159</span>
      <span class="ease-wf-modal__price-original">$199</span>
      <span class="ease-wf-modal__price-save">Save $40</span>
    </div>
    <div class="ease-wf-modal__stock" aria-live="polite">
      <span class="ease-wf-modal__stock-dot"></span>
      <span class="ease-wf-modal__stock-text">In stock · Ships in 24h</span>
    </div>
    <div class="ease-wf-modal__actions">
      <button class="ease-wf-modal__btn ease-wf-modal__btn--primary">🛒 Add to Cart</button>
      <label for="modal-toggle-1" class="ease-wf-modal__btn ease-wf-modal__btn--ghost" tabindex="0">
        Close
      </label>
    </div>
  </div>
</section>
```

### Dark Mode

Wrap the catalog section with `.ease-catalog--dark`:

```html
<section class="ease-demo-section ease-catalog--dark">
  <!-- product cards and modals here -->
</section>
```

---

## Class Reference

### Catalog Card Classes

| Class | Element | Description |
|---|---|---|
| `ease-product-card` | `<article>` | Base product card with hover lift |
| `ease-product-card__image-wrap` | `<div>` | Image container with aspect-ratio |
| `ease-product-card__image` | `<img>` | Product image (scales on card hover) |
| `ease-product-card__badge` | `<span>` | Sale / status badge (top-left) |
| `ease-product-card__badge--new` | modifier | Green "NEW" badge |
| `ease-product-card__badge--hot` | modifier | Amber "HOT" badge |
| `ease-product-card__wish` | `<span>` | Wishlist icon (top-right) |
| `ease-product-card__body` | `<div>` | Card text content area |
| `ease-product-card__category` | `<p>` | Category label (accent coloured) |
| `ease-product-card__name` | `<h3>` | Product name |
| `ease-product-card__rating` | `<div>` | Star rating row |
| `ease-product-card__rating-count` | `<span>` | Review count |
| `ease-product-card__price-row` | `<div>` | Price container |
| `ease-product-card__price` | `<span>` | Current price |
| `ease-product-card__price-original` | `<span>` | Crossed-out original price |
| `ease-product-card__quick-view` | `<label>` | Quick-view trigger (opens modal) |

### Modal Classes

| Class | Element | Description |
|---|---|---|
| `ease-modal-toggle` | `<input type="checkbox">` | **Required.** Hidden state driver |
| `ease-modal-overlay` | `<label>` | Full-screen backdrop (click to close) |
| `ease-wf-modal` | `<section>` | **Required.** Modal shell |
| `ease-wf-modal__close` | `<label>` | ✕ close button (top-right of hero) |
| `ease-wf-modal__hero` | `<div>` | Product hero image container |
| `ease-wf-modal__hero-img` | `<img>` | Large product image |
| `ease-wf-modal__hero-badge` | `<span>` | Hero badge (sale / new / hot) |
| `ease-wf-modal__hero-badge--new` | modifier | Green badge variant |
| `ease-wf-modal__hero-badge--hot` | modifier | Amber badge variant |
| `ease-wf-modal__body` | `<div>` | Modal body padding container |
| `ease-wf-modal__category` | `<p>` | Category / breadcrumb line |
| `ease-wf-modal__title` | `<h2>` | Product title |
| `ease-wf-modal__rating` | `<div>` | Star rating row |
| `ease-wf-modal__rating-count` | `<span>` | Review count text |
| `ease-wf-modal__description` | `<p>` | Product description paragraph |
| `ease-wf-modal__features` | `<ul>` | Checklist of key features |
| `ease-wf-modal__feature` | `<li>` | Individual feature (✓ icon via CSS) |
| `ease-wf-modal__divider` | `<hr>` | Horizontal rule separator |
| `ease-wf-modal__price-row` | `<div>` | Price container |
| `ease-wf-modal__price` | `<span>` | Current price (large) |
| `ease-wf-modal__price-original` | `<span>` | Struck-through original price |
| `ease-wf-modal__price-save` | `<span>` | Green "Save $X" pill |
| `ease-wf-modal__stock` | `<div>` | Stock indicator row |
| `ease-wf-modal__stock--low` | modifier | Amber pulse — low stock warning |
| `ease-wf-modal__stock-dot` | `<span>` | Coloured indicator dot |
| `ease-wf-modal__stock-text` | `<span>` | Stock status text |
| `ease-wf-modal__actions` | `<div>` | Button row |
| `ease-wf-modal__btn` | `<button>` / `<label>` | Base action button |
| `ease-wf-modal__btn--primary` | modifier | Indigo filled CTA |
| `ease-wf-modal__btn--secondary` | modifier | Accent-outlined secondary |
| `ease-wf-modal__btn--ghost` | modifier | Ghost / close button |

### Dark Mode Wrapper

| Class | Element | Description |
|---|---|---|
| `ease-catalog--dark` | section or div | Activates dark palette for cards and modals |

---

## CSS Custom Properties

All animation parameters and visual values are exposed as CSS custom properties and can be overridden globally (`<root>`) or scoped per element.

| Variable | Default | Description |
|---|---|---|
| `--wf-duration` | `0.78s` | Total Wobble-Focus animation duration |
| `--wf-easing` | `cubic-bezier(0.22,1,0.36,1)` | Spring-style easing function |
| `--wf-scale-start` | `0.80` | Initial scale of the modal (enter from) |
| `--wf-scale-overshoot` | `1.07` | Overshoot scale peak (spring energy) |
| `--wf-rotate-start` | `-8deg` | Initial rotation on entrance |
| `--wf-rotate-mid` | `4deg` | Rotation at overshoot peak |
| `--wf-overlay-blur` | `10px` | Backdrop blur strength |
| `--wf-overlay-color` | `rgba(10,14,30,0.55)` | Overlay background color |
| `--wf-modal-width` | `min(92vw, 520px)` | Modal maximum width |
| `--wf-modal-radius` | `20px` | Modal corner radius |
| `--wf-modal-padding` | `2rem` | Modal body padding |
| `--wf-accent` | `#4f46e5` | Brand accent color (indigo) |
| `--wf-star` | `#f59e0b` | Star rating color (amber) |

### Timing Override Example

```css
/* Slower, more theatrical wobble */
:root {
  --wf-duration:        1.1s;
  --wf-scale-overshoot: 1.10;
  --wf-rotate-start:   -12deg;
}

/* Instant open for a specific modal (e.g. on slow devices) */
#modal-fast {
  --wf-duration: 0.4s;
}
```

---

## Keyframe Animation

### `@keyframes ease-wobble-focus`

| Step | Transform | Effect |
|---|---|---|
| `0%` | `scale(0.80) rotate(-8deg)` | Modal starts small and tilted; opacity 0 |
| `22%` | `scale(1.07) rotate(4deg)` | Overshoots — spring energy peak |
| `42%` | `scale(0.96) rotate(-2.5deg)` | First rebound |
| `62%` | `scale(1.025) rotate(1.5deg)` | Second oscillation |
| `80%` | `scale(0.994) rotate(-0.6deg)` | Near-settling micro-wobble |
| `100%` | `scale(1) rotate(0deg)` | Fully settled, opacity 1 |

---

## Accessibility

This component is built accessibility-first:

- **`role="dialog"` + `aria-modal="true"`** on all modals so screen readers understand modal context
- **`aria-labelledby`** links the modal to its `<h2>` product title
- **`aria-describedby`** links the modal to its description paragraph
- **`aria-haspopup="dialog"`** on the Quick View trigger signals dialog intent to AT
- **`aria-controls`** maps the trigger to its modal `id`
- **`aria-label`** on the close button (`"Close quick view"`) provides clear labelling
- **`aria-live="polite"`** on stock indicators for dynamic content announcements
- **`tabindex="0"`** on all `<label>` interactive elements for keyboard focus
- **`focus-visible`** ring on all interactive elements (buttons, labels, close)
- **`prefers-reduced-motion`** — all animations and transitions are completely disabled; the modal opens instantly with no motion for users who have configured this OS preference

```css
@media (prefers-reduced-motion: reduce) {
  .ease-wf-modal,
  .ease-modal-overlay { animation: none !important; transition: none !important; }

  .ease-modal-toggle:checked ~ .ease-wf-modal {
    transform: translate(-50%, -50%) scale(1) !important;
  }
}
```

---

## Why is it useful?

Product quick-view modals are a staple of e-commerce — seen on Shopify, Amazon, ASOS, and Etsy — yet almost always require JavaScript. This component proves the pattern is achievable with **zero JavaScript**:

1. **Zero-JS** — the entire open/close state machine uses CSS `:checked` sibling combinators
2. **Wobble-Focus aesthetic** — the spring animation conveys confidence and quality, matching premium catalog brand aesthetics
3. **Fully composable** — works with any image, badge, price, or feature set by simply swapping inner content
4. **EaseMotion token aligned** — uses the same speed, easing, color, shadow and spacing philosophy as the rest of the library
5. **Production-ready accessibility** — ARIA roles, keyboard navigation, and reduced-motion compliance out of the box
6. **Dark mode ready** — a single wrapper class switches the entire palette via CSS custom properties

---

## Browser Support

| Browser | Version | Status |
|---|---|---|
| Chrome | 105+ | ✅ Full support |
| Firefox | 110+ | ✅ Full support |
| Safari | 15.4+ | ✅ Full support |
| Edge | 105+ | ✅ Full support |

> `backdrop-filter` requires Chrome 76+, Firefox 103+, Safari 9+. A solid `rgba()` fallback is included via the `--wf-overlay-color` variable for unsupported browsers.
