# Animated Counter Component

**Category:** Components — Dashboard & Metrics
**Folder:** `submissions/examples/animated-counter-component/`

---

## Feature Overview

The Animated Counter Component adds responsive count-up statistics for dashboards, SaaS landing pages, and product marketing pages. It includes:

- `ease-counter` — base counter card styling
- `ease-counter-fast` — fast count-up speed variant
- `ease-counter-slow` — slow count-up speed variant
- `ease-counter-bounce` — bounce finish animation for high-impact metrics

The design is theme-friendly, mobile-responsive, and accessible to users who prefer reduced motion.

---

## Installation / Usage

Use the component inside `submissions/examples/animated-counter-component/` and open `demo.html` directly in a browser.

```html
<link rel="stylesheet" href="style.css" />
```

### Example markup

```html
<div class="ease-counter ease-counter-fast" data-target="1260" data-suffix="K" aria-label="1,260 thousand views">
  <div class="ease-counter-inner">
    <p class="ease-counter-value"><span class="ease-counter-value-number">0</span><span class="ease-counter-suffix">K</span></p>
    <p class="ease-counter-meta">Fast animated stat for landing pages.</p>
  </div>
</div>
```

---

## Available Classes

| Class | Description |
| --- | --- |
| `ease-counter` | Base counter card container with responsive layout and theming. |
| `ease-counter-fast` | Faster count-up duration for quick metric reveals. |
| `ease-counter-slow` | Slower count-up duration for emphasis and dramatic reveals. |
| `ease-counter-bounce` | Adds a bounce entrance animation to the number value. |

---

## Examples

- **Basic counter** — standard animated metric display
- **Fast counter** — quickly animates a high-frequency stat
- **Slow counter** — draws attention with a longer count-up duration
- **Bounce counter** — adds motion-rich bounce timing for featured numbers
- **Dashboard statistics** — metric cards for analytics dashboards
- **SaaS landing metrics** — landing page numbers for product performance

---

## Accessibility Notes

- Uses `aria-label` on counter containers to expose final metric values clearly to assistive technology.
- Detects `prefers-reduced-motion: reduce` and disables JavaScript animation, showing final values immediately.
- Uses responsive typography and card spacing for mobile and desktop layouts.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

This component uses native browser APIs and CSS features that are widely supported across modern browsers.
