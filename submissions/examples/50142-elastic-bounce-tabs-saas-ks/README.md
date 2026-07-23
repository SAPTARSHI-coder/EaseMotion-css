# Elastic Bounce Tabs — SaaS Showcase Layout

**Issue:** #50142
**Category:** Tabs / Animation / SaaS
**Tech Stack:** Pure HTML + CSS — zero JavaScript

---

## Features

- **Elastic Bounce animation** — the active tab scales to `var(--bounce-scale)` and lifts with `translateY(-4px)` using a spring `cubic-bezier(0.34, 1.56, 0.64, 1)` easing. The animated underline scales in simultaneously. The icon bounces independently.
- **Four SaaS panels** — Overview (feature grid), Analytics (KPI stats + CSS bar chart), Security (status checklist), Pricing (plan cards with featured highlight).
- **CSS-only tab switching** — hidden `<input type="radio">` elements + `:checked ~` sibling selectors. Zero JavaScript.
- **Panel entrance animation** — `@keyframes panel-enter` fades and slides each panel up on activation using the same spring easing.
- **Hover interactions** — inactive tabs gently lift and tint on hover with a soft accent shadow.
- **Keyboard accessible** — radio inputs have `tabindex` and receive `:focus-visible` outline rings. All interactive elements are reachable by keyboard.
- **CSS Custom Properties** — all animation, colour, spacing, and geometry values exposed on `:root`.
- **Reduced-motion safe** — `@media (prefers-reduced-motion: reduce)` disables all animations and transitions.
- **Responsive** — tabs collapse to icon-only at ≤ 400px; feature grid and pricing grid reflow at ≤ 640px.
- **Zero dependencies** — open `demo.html` directly in any modern browser.

---

## Customization

All visual and animation values are CSS custom properties set on `:root`. Override any to theme the component:

| Variable | Default | Description |
|---|---|---|
| `--animation-duration` | `0.55s` | Duration of the elastic bounce animation |
| `--animation-easing` | spring cubic-bezier | Spring easing for tab bounce and panel entrance |
| `--bounce-scale` | `1.06` | Scale of the active tab label |
| `--accent-color` | `#6366f1` | Primary accent — active tab, underline, buttons |
| `--background-color` | `#f8fafc` | Page background |
| `--surface-color` | `#ffffff` | Tab/panel card background |
| `--text-color` | `#1e293b` | Primary text colour |
| `--tab-radius` | `12px` | Border-radius of tab labels |
| `--panel-radius` | `16px` | Border-radius of the panel card |
| `--shadow` | soft indigo | Hover card shadow |
| `--transition-speed` | `0.28s` | Speed of colour and background transitions |

**Example — teal dark theme:**

```css
:root {
    --accent-color:      #0d9488;
    --background-color:  #0f172a;
    --surface-color:     #1e293b;
    --text-color:        #e2e8f0;
    --bounce-scale:      1.07;
    --panel-radius:      12px;
}
```

---

## Browser Support

Works in all modern browsers supporting CSS custom properties and the general sibling combinator (`~`):

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

The `:focus-visible` pseudo-class is used for keyboard focus rings (progressive enhancement in older browsers).

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (> 640px) | Full horizontal tabs with icon + text; multi-column grids |
| Tablet (≤ 640px) | Reduced padding; pricing/feature grids collapse to single column |
| Mobile (≤ 400px) | Tab text hidden (icons only); feature grid single column |

---

## Accessibility

- **Keyboard navigation** — `<input type="radio">` elements carry `tabindex` and are navigable via `Tab`. `Space` / arrow keys select tabs.
- **Focus rings** — `:focus-visible` outline on radio inputs (via adjacent sibling selector) and all buttons/CTAs.
- **Semantic HTML** — `<main>`, `<section>`, `<header>`, `<h1>`, `<h2>`, `<ul>`, `<li>`. Panel sections use `role="tabpanel"` with `aria-labelledby`. Nav uses `role="tablist"`.
- **Decorative icons** — emoji icons carry `aria-hidden="true"`.
- **Reduced motion** — all animations disabled when `prefers-reduced-motion: reduce` is set.

---

## Folder Structure

```
submissions/
└── examples/
    └── 50142-elastic-bounce-tabs-saas-ks/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Author

Contributed for GSSoC 2026 — EaseMotion CSS Issue #50142.
