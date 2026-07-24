# Fade-Out Modal for Product Catalog (sou)

## 📌 What does this do?

A pure CSS animated modal that fades in with a subtle scale-and-lift transition, designed for product catalog and e-commerce layouts — perfect for quick-view product details without leaving the shopping grid.

---

## 🛠️ How is it used?

Wrap product cards in anchor links pointing to unique modal IDs. Each product opens its own modal with a smooth fade-in effect. No JavaScript — powered by the CSS `:target` pseudo-class.

### HTML Usage

```html
<!-- Product Card Trigger -->
<a href="#fade-catalog-sou-1" class="product-card-sou">
  <div class="product-img-sou">👟</div>
  <h3>Runner Pro X</h3>
  <p class="product-price-sou">$129.00</p>
</a>

<!-- Product Modal -->
<div id="fade-catalog-sou-1" class="fade-catalog-overlay-sou" role="dialog" aria-modal="true">
  <div class="fade-catalog-modal-sou">
    <a href="#" class="fade-catalog-close-sou" aria-label="Close">&times;</a>
    <div class="fade-catalog-img-sou">👟</div>
    <div class="fade-catalog-body-sou">
      <span class="fade-catalog-tag-sou">Bestseller</span>
      <h2>Runner Pro X</h2>
      <p>Product description here.</p>
      <div class="fade-catalog-price-row-sou">
        <span class="fade-catalog-price-sou">$129.00</span>
        <a href="#" class="btn-catalog-sou">Add to Cart</a>
      </div>
    </div>
  </div>
</div>
```

### 🎨 Customization via CSS Variables

| CSS Variable | Default | Purpose |
|---|---|---|
| `--fade-catalog-duration-sou` | `0.45s` | Fade animation duration |
| `--fade-catalog-easing-sou` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing curve |
| `--fade-catalog-scale-sou` | `1` | Final scale factor |
| `--fade-catalog-bg-sou` | `#ffffff` | Modal background |
| `--fade-catalog-accent-sou` | `#ec4899` | Primary accent color |
| `--fade-catalog-overlay-sou` | `rgba(17,24,39,0.7)` | Backdrop color |
| `--fade-catalog-radius-sou` | `16px` | Border radius |

**Example — override defaults:**

```css
:root {
  --fade-catalog-duration-sou: 0.7s;
  --fade-catalog-accent-sou: #10b981;
}
```

---

## 💡 Why is it useful?

This component brings a modern **quick-view product experience** to e-commerce sites using pure CSS:

- ✅ **Zero JavaScript** — powered by CSS `:target`.
- ✅ **E-commerce ready** — includes product image, tag/badge, price, and CTA slots.
- ✅ **Multiple modals** — supports several product modals on one page.
- ✅ **Fully accessible** — ARIA attributes, keyboard focus states, `prefers-reduced-motion` support.
- ✅ **Highly customizable** — 10+ CSS variables for timing, colors, and radius.
- ✅ **Backdrop blur** — modern glass-morphism effect for a polished look.

Perfect for online stores, product catalogs, portfolio grids, and any layout where users benefit from a smooth, contextual detail view.
