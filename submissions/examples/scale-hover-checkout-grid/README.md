# CSS Scale-Hover Card Grid — E-Commerce Checkout Layout

A pure CSS/HTML showcase for **EaseMotion CSS** featuring a scale-hover product card grid built for e-commerce checkout and cart-review pages.

---

## Live Preview

Open `demo.html` in any modern browser — no build step, no dependencies, no JavaScript required.

---

## What's Included

```
submissions/examples/scale-hover-checkout-grid/
├── demo.html     — Full checkout page showcase
├── style.css     — All animations and styles
└── README.md     — This file
```

---

## The Signature Interaction: Peel Tag

Rather than a generic `scale()` hover, each product card is built like a **shelf tag with a perforated tear-line** separating the product image from its price stub. On hover, three things happen together:

1. The whole card lifts and scales (`scale(1.035) translateY(-4px)`)
2. The **price tag rotates and pops upward** (`tagPop` keyframe), as if being peeled off like a coupon
3. The product image gets a subtle zoom (`scale(1.06)`) inside its fixed frame

This gives the grid a tactile, physical feel appropriate for a checkout page where people are reviewing real items before paying.

```css
@keyframes tagPop {
  0%   { transform: rotate(0deg) translateY(0); }
  100% { transform: rotate(-3deg) translateY(-6px); }
}

.product-card:hover .price-tag {
  animation: tagPop 0.32s var(--ease-spring) forwards;
}
```

---

## Animations Overview

### 1. `cardScaleIn` — Grid entrance
Cards fade and scale in from 92%, staggered by 80ms per card.

```css
@keyframes cardScaleIn {
  0%   { opacity: 0; transform: scale(0.92) translateY(14px); }
  100% { opacity: 1; transform: scale(1)    translateY(0); }
}
```

### 2. `tagPop` — Signature price tag peel
See above. Triggered only on card hover.

### 3. `checkPop` + `checkRing` — Added-to-cart confirmation
A checkmark badge pops in with a spring overshoot while a ring ripples outward and fades — used when an item is confirmed in cart (toggle `.added-badge.show` in your JS/backend logic).

```css
@keyframes checkPop {
  0%   { transform: scale(0);   opacity: 0; }
  60%  { transform: scale(1.25); opacity: 1; }
  100% { transform: scale(1);    opacity: 1; }
}
```

### 4. `stepFill` — Checkout progress bar
Each connector line between step dots fills based on a `--fill` custom property set inline per step.

```html
<div class="step-line" style="--fill:100%"></div>
```

### 5. `qtyBump` — Quantity stepper feedback
A quick scale bump on the quantity number when incremented/decremented (add `.bump` class via JS on change, remove after animation ends).

### 6. `totalShimmer` — Order total gradient sweep
On hovering the summary card, the total price runs a one-shot gradient sweep across the text using `background-clip: text`.

### 7. `tagShine` — Stock ribbon shine
The "Low stock" / "New" ribbons in the top-left of each card get a diagonal light sweep on card hover.

### 8. `sectionFadeUp` — Page section reveal
Used for nav, step track, and page title on load.

---

## CSS Custom Properties

| Token | Value | Usage |
|-------|-------|-------|
| `--paper` | `#FAF7F2` | Page background |
| `--paper-raised` | `#FFFFFF` | Card surfaces |
| `--paper-sunken` | `#F1ECE2` | Image placeholders, inputs |
| `--ink-900` | `#1C1917` | Primary text |
| `--ink-700` | `#3F3A34` | Secondary text |
| `--ink-500` | `#6B6459` | Muted text |
| `--ink-300` | `#A79E90` | Faint text, disabled |
| `--line` | `#E8E1D4` | Card borders |
| `--line-strong` | `#D8CEBB` | Emphasized borders, dots |
| `--forest` | `#0F6156` | Trust/primary accent |
| `--coral` | `#FF6B4A` | Checkout CTA |
| `--mint` | `#2FBF71` | Success / added state |
| `--gold` | `#C99A2E` | "New" ribbon |
| `--font-display` | `'Fraunces'` | Headings, product names, prices |
| `--font-body` | `'Inter'` | UI text, labels |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Card lift, tag pop, buttons |
| `--ease-snap` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard transitions |
| `--card-scale` | `1.035` | Hover scale amount — tune for subtler/bolder lift |

---

## EaseMotion CSS Classes

### Card structure

| Class | Purpose |
|-------|---------|
| `.product-card` | Root card — handles hover scale, lift, shadow |
| `.card-media` | Image container with zoom-on-hover |
| `.card-perf` | Decorative perforated tear-line divider |
| `.card-body` | Name, variant, price, and quantity zone |
| `.price-tag` | Wraps the price — this is what "pops" on hover |
| `.card-remove` | Corner remove button, fades in on hover |
| `.stock-ribbon` | `.low` or `.new` — corner status label |

### Sidebar

| Class | Purpose |
|-------|---------|
| `.summary-card` | Sticky order summary container |
| `.summary-total-value` | Gradient-shimmer total on hover |
| `.checkout-btn` | Primary CTA with spring hover lift |

### Utility

| Class | Purpose |
|-------|---------|
| `.qty-stepper` | Quantity +/− control |
| `.added-badge.show` | Toggle to reveal the checkmark confirmation |

---

## Usage: Reusing the Card Grid

```html
<div class="card-grid">
  <article class="product-card">
    <div class="card-media">
      <span class="stock-ribbon low">Low stock</span>
      <img src="product.jpg" alt="Product name" />
    </div>

    <div class="card-perf" aria-hidden="true"></div>

    <div class="card-body">
      <div class="card-name">Product Name</div>
      <div class="card-variant">Variant details</div>
      <div class="card-footer">
        <div class="price-tag">
          <span class="price-now">$00</span>
        </div>
        <div class="qty-stepper">
          <button class="qty-btn">−</button>
          <span class="qty-val">1</span>
          <button class="qty-btn">+</button>
        </div>
      </div>
    </div>
  </article>
</div>
```

To trigger the "added to cart" confirmation, toggle the class on the badge element:

```js
badgeEl.classList.add('show');
```

---

## Accessibility

- **`prefers-reduced-motion`**: All animations and the card hover transform are disabled/neutralized when the user has this preference set.
- **ARIA labels**: Remove buttons, quantity steppers, and the step track all include descriptive `aria-label`/`role` attributes.
- **Focus states**: All interactive controls (buttons, inputs) rely on visible native focus rings — no `outline: none` is used anywhere.
- **Alt text**: Every product image includes descriptive alt text.
- **Semantic HTML**: `<article>` for each card, `<aside>` for the summary, proper heading hierarchy (`h1` → `h2`).

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| iOS Safari 14+ | ✅ Full |

Uses `aspect-ratio`, `backdrop-filter` (progressive enhancement — nav still works without it), and `background-clip: text` for the total shimmer (falls back to solid color in unsupported browsers).

---

## Responsive Breakpoints

| Breakpoint | Layout change |
|------------|---------------|
| `< 900px` | Sidebar drops below main column, no longer sticky |
| `< 600px` | Card grid → 1 column; step labels hidden (dots only); nav secure-text hidden |

---

## Performance Notes

- Zero JavaScript required for any visual effect — the "added to cart" state is a single class toggle your app logic can drive
- All hover motion uses `transform`/`opacity`/`box-shadow`, avoiding layout-triggering properties
- Images use `loading="lazy"` and `object-fit: cover` inside a fixed `aspect-ratio` box to prevent layout shift
- Animation delays use `animation-fill-mode: both` to avoid flash-before-entrance

---

## License

Part of the **EaseMotion CSS** open-source project.  
Submitted as part of GSSoC '26.