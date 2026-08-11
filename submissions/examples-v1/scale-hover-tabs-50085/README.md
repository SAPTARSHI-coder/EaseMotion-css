# CSS Scale-Hover Tabs - E-Commerce Checkout Layouts

A pure HTML/CSS tab component featuring smooth scale-hover interactions, designed for e-commerce checkout interface aesthetics.

Related Issue: #50085

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-only tab component where tab triggers scale up on hover and active panels animate in with a scale-and-slide entrance. Designed for clean, Apple-inspired e-commerce checkout interfaces.

### 2. How is it used?
Use the radio button hack pattern: pair hidden radio inputs with labels as tab triggers, and show/hide panels via CSS sibling selectors. Apply the `.sht` class to the container.

```html
<section class="sht" aria-label="Checkout">
  <div class="sht__list" role="tablist">
    <input type="radio" name="checkout" id="c-1" class="sht__input" checked>
    <label for="c-1" class="sht__trigger" role="tab">Cart</label>
    <input type="radio" name="checkout" id="c-2" class="sht__input">
    <label for="c-2" class="sht__trigger" role="tab">Pay</label>
  </div>
  <div class="sht__panels">
    <div class="sht__panel" role="tabpanel"><p>Cart content</p></div>
    <div class="sht__panel" role="tabpanel"><p>Payment content</p></div>
  </div>
</section>
```

### 3. Why is it useful?
It provides a zero-JS tab component with tactile scale-hover feedback that feels responsive and modern. The e-commerce checkout styling makes it immediately usable for online store interfaces, order flows, and product configuration panels.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies. Uses radio button hack for tab switching.
- **Scale-Hover Interaction**: Triggers scale up on hover, providing tactile feedback.
- **Panel Scale-In Animation**: Active panels animate in with a scale-and-slide entrance.
- **E-Commerce Aesthetic**: Clean, minimal checkout-inspired design with Apple-like typography.
- **Multiple Variants**: Default (underline) and Steps (pill buttons) styles.
- **Keyboard Accessible**: Tab navigation via radio inputs; focus-visible outlines.
- **Reduced Motion**: Disables scale animations when `prefers-reduced-motion` is enabled.
- **Responsive**: Stacks tabs vertically on small screens with left-border active indicator.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--sht-duration` | Trigger transition duration | `0.3s` |
| `--sht-easing` | Easing curve | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--sht-hover-scale` | Hover scale factor | `1.03` |
| `--sht-panel-duration` | Panel entrance duration | `0.35s` |
| `--sht-slide-y` | Panel slide offset | `8px` |
| `--sht-bg` | Page background | `#f5f5f7` |
| `--sht-surface` | Card surface | `#ffffff` |
| `--sht-accent` | Active tab color | `#0071e3` |
| `--sht-border` | Border color | `#d2d2d7` |

---

## Folder Structure

```text
submissions/examples/scale-hover-tabs-50085/
├── demo.html       ← E-Commerce demo with Cart and Steps tab variants
├── style.css       ← Component styles with scale-hover animation and CSS custom properties
└── README.md       ← This file
```
