# Elastic Bounce Popover (E-Commerce Checkout)

## Overview
A pure CSS **Elastic Bounce Popover** component styled for E-Commerce Checkout interfaces. It provides an elastic spring physics entrance animation (`@keyframes ease-elastic-bounce`) while remaining lightweight, responsive, and accessible.

---

## Folder Structure
```text
submissions/examples/elastic-bounce-popover-ecommerce-checkout-ag/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

```html
<div class="popover-wrapper popover-top">
  <button type="button" class="trigger-button" aria-describedby="popover-shipping-info">
    <span>Policy Info</span>
  </button>

  <div id="popover-shipping-info" class="ease-popover-bounce" role="tooltip">
    <div class="popover-arrow"></div>
    <div class="popover-header">
      <span class="popover-tag success">Guaranteed</span>
      <h3 class="popover-title">Shipping Policy</h3>
    </div>
    <p class="popover-content">Orders ship same-day via express courier.</p>
    <div class="popover-footer">
      <span class="footer-label">Carrier: FedEx Express</span>
    </div>
  </div>
</div>
```

---

## CSS Custom Properties

| Property | Default Value | Description |
|---|---|---|
| `--popover-bg` | `#ffffff` | Background color |
| `--popover-border` | `1px solid var(--ease-color-neutral-200)` | Border style |
| `--popover-radius` | `var(--ease-radius-lg)` | Border radius |
| `--popover-shadow` | `var(--ease-shadow-xl)` | Box shadow elevation |
| `--popover-duration` | `0.45s` | Animation duration |
| `--popover-timing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic timing function |
| `--popover-offset` | `10px` | Offset distance from trigger |
| `--popover-max-width` | `270px` | Maximum width |
| `--popover-arrow-size` | `7px` | Arrow size |
| `--popover-scale-start` | `0.75` | Initial scale transform |

---

## Accessibility

- Semantic HTML using `role="tooltip"` and `aria-describedby`.
- Fully accessible via keyboard focus (`:focus-within`) and mouse hover (`:hover`).
- Supports `@media (prefers-reduced-motion: reduce)` to substitute elastic scaling with a simple fade.
