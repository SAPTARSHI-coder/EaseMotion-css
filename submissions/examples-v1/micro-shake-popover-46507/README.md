# CSS Micro Shake Popover - Modern SaaS Layouts

A pure HTML/CSS popover component featuring a smooth micro shake interaction transition, designed for modern SaaS interface aesthetics.

Related Issue: #46507

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-driven popover overlay with a micro shake animation on both the trigger button and popover panel. When hovering or tabbing into a trigger, a subtle horizontal shake with slight rotation fires, providing tactile motion feedback before the popover reveals.

### 2. How is it used?
Wrap a trigger element and popover container inside a `.msp` parent wrapper and apply direction classes (`msp--top`, `msp--bottom`, `msp--left`, `msp--right`).

```html
<span class="msp msp--top">
  <a href="#" class="msp__trigger" tabindex="0" aria-describedby="pop-1">Trigger</a>
  <span class="msp__popover" role="tooltip" id="pop-1">
    <p class="msp__popover-title">Title</p>
    <p class="msp__popover-body">Description text.</p>
  </span>
</span>
```

### 3. Why is it useful?
It provides a lightweight, zero-JS popover with a distinctive micro shake animation that draws attention without being disruptive. Ideal for SaaS dashboards, pricing tables, and feature showcases where subtle motion enhances usability.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies.
- **Micro Shake Animation**: A subtle horizontal shake with slight rotation fires on hover/focus, creating tactile motion feedback.
- **Modern SaaS Aesthetic**: Clean white surfaces, purple accent, soft shadows, and modern typography.
- **Directional Support**: Top, Bottom, Left, and Right positioning with matching arrows.
- **Keyboard Accessible**: Triggers are focusable; popovers appear on `:focus-within` for full keyboard navigation.
- **Reduced Motion**: Disables shake animation when `prefers-reduced-motion` is enabled.
- **Responsive**: Single-column layout on small screens.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--msp-duration` | Shake animation duration | `0.35s` |
| `--msp-easing` | Shake easing curve | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--msp-shake-amount` | Horizontal shake distance | `3px` |
| `--msp-shake-rotation` | Rotation during shake | `1deg` |
| `--msp-reveal-duration` | Popover reveal duration | `0.3s` |
| `--msp-reveal-easing` | Popover reveal easing | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--msp-bg` | Page background | `#f8fafc` |
| `--msp-surface` | Card/popover background | `#ffffff` |
| `--msp-accent` | Primary accent color | `#8b5cf6` |

---

## Folder Structure

```text
submissions/examples/micro-shake-popover-46507/
├── demo.html       ← SaaS demo with Plans, Features, and Usage cards
├── style.css       ← Component styles with micro shake animation and CSS custom properties
└── README.md       ← This file
```
