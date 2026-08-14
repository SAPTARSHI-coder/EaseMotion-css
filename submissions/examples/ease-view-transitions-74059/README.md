# ease-view-transitions-74059

## What does this do?

Demonstrates **hardware-accelerated, cross-document View Transitions** using only the native CSS `::view-transition` API — no JavaScript routing frameworks, no animation libraries, zero external dependencies.

When a user clicks a product card in `demo.html`, the product image and title **morph smoothly** (position, size, and shape simultaneously) to become the hero elements on `detail.html`. The effect is calculated entirely on the browser's GPU compositor thread at a consistent 60 fps.

## How is it used?

### Step 1 — Opt in both pages (one rule)

```css
/* style.css — applied to EVERY page */
@view-transition {
  navigation: auto;
}
```

### Step 2 — Name shared elements (gallery page)

```html
<!-- demo.html -->
<img
  src="product.jpg"
  class="card-img"
  style="view-transition-name: product-img-1;"
/>
<h2 style="view-transition-name: product-title-1;">Apex Timepiece</h2>
```

### Step 3 — Use the same name on the destination page

```html
<!-- detail.html -->
<img
  id="hero-img"
  class="detail-img"
  style="view-transition-name: product-img-1;"
/>
<h1 id="hero-title" style="view-transition-name: product-title-1;">Apex Timepiece</h1>
```

### Step 4 — Customise animation timing (optional)

```css
/* Override the auto-generated morph for named elements */
::view-transition-old(product-img-1) {
  animation: 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both morph-out;
}
::view-transition-new(product-img-1) {
  animation: 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both morph-in;
}

/* The page root gets a slide transition */
::view-transition-old(root) { animation: 380ms ease both slide-out-left; }
::view-transition-new(root) { animation: 380ms ease both slide-in-right; }
```

### Step 5 — Always honour reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation-duration: 0.01ms !important;
  }
}
```

## Why is it useful?

EaseMotion CSS is built around the idea that **complex motion effects should not require heavy infrastructure**. This submission proves that principle at the architectural level:

- **Zero JS frameworks.** No Next.js, no React Router, no Framer Motion — just HTML files linked with `<a href>` tags.
- **GPU-native.** The browser's compositor thread handles all interpolation, guaranteeing smooth 60 fps even on low-end devices.
- **Progressive enhancement.** Browsers that do not support the View Transitions API fall back to an instant navigation — nothing breaks.
- **Tiny footprint.** The entire opt-in is a single 2-line CSS at-rule. The rest of the stylesheet is purely cosmetic.
- **Accessible.** The `prefers-reduced-motion` media query is respected throughout, in line with EaseMotion's accessibility-first philosophy.

This directly advances EaseMotion's mission: **motion that is beautiful, purposeful, and accessible — with the smallest possible API surface.**

## Files

| File | Purpose |
|---|---|
| `demo.html` | Multi-card product gallery — the "source" of the transition |
| `detail.html` | Single-product detail view — the "destination" of the transition |
| `style.css` | All styling + the `@view-transition` opt-in + `::view-transition-*` overrides |

## Browser support

The cross-document View Transitions API (`@view-transition { navigation: auto }`) is supported in **Chrome/Edge 126+** and **Firefox 131+** (with flag). Safari support is in active development. All other browsers receive an instant page load with no visual errors.
