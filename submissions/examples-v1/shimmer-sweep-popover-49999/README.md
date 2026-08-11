# CSS Shimmer Sweep Popover - SaaS Showcase Layouts

A pure HTML/CSS popover component featuring a smooth shimmer sweep light animation, designed for modern SaaS showcase interfaces.

Related Issue: #49999

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-driven popover overlay with a shimmer sweep light effect that glides across the panel on hover or keyboard focus. Designed for clean, modern SaaS showcase layouts with gradient accents and soft shadows.

### 2. How is it used?
Wrap a trigger element and popover container inside a `.ssp` parent wrapper and apply direction classes (`ssp--top`, `ssp--bottom`, `ssp--left`, `ssp--right`).

```html
<span class="ssp ssp--top">
  <a href="#" class="ssp__trigger" tabindex="0" aria-describedby="pop-1">Trigger</a>
  <span class="ssp__popover" role="tooltip" id="pop-1">
    <p class="ssp__popover-title">Title</p>
    <p class="ssp__popover-body">Description text.</p>
  </span>
</span>
```

### 3. Why is it useful?
It provides a polished, zero-JS popover with a premium shimmer sweep animation that adds visual depth and motion feedback. Ideal for SaaS landing pages, product showcases, and marketing sites where subtle animation elevates the user experience.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies.
- **Shimmer Sweep Animation**: A translucent light bar glides across the popover and trigger on hover, creating a premium feel.
- **SaaS Aesthetic**: Clean white surfaces, gradient accents, soft shadows, and modern typography.
- **Directional Support**: Top, Bottom, Left, and Right positioning with matching arrows.
- **Keyboard Accessible**: Triggers are focusable; popovers appear on `:focus-within` for full keyboard navigation.
- **Reduced Motion**: Disables shimmer animation when `prefers-reduced-motion` is enabled.
- **Responsive**: Single-column layout on small screens.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--ssp-duration` | Popover transition duration | `0.4s` |
| `--ssp-easing` | Transition easing curve | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ssp-shimmer-speed` | Shimmer sweep animation speed | `1.2s` |
| `--ssp-shimmer-color` | Shimmer highlight color | `rgba(255, 255, 255, 0.15)` |
| `--ssp-shimmer-width` | Width of the shimmer bar | `60px` |
| `--ssp-bg` | Page background | `#f4f6fb` |
| `--ssp-surface` | Card/popover background | `#ffffff` |
| `--ssp-accent` | Primary accent color | `#6366f1` |
| `--ssp-gradient` | Icon gradient | `linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)` |

---

## Folder Structure

```text
submissions/examples/shimmer-sweep-popover-49999/
├── demo.html       ← SaaS showcase demo with Analytics, Team, and Deploy cards
├── style.css       ← Component styles with shimmer sweep animation and CSS custom properties
└── README.md       ← This file
```
