# CSS Skew-Active Popover - Minimalist Tech Layouts

A pure HTML/CSS popover component styled for dark, minimalist tech interfaces with smooth skew-active transition animations.

Related Issue: #46457

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-driven popover overlay that un-skews and scales into view when hovering or tabbing into trigger elements. Designed for dark, terminal-inspired minimalist tech layouts with monospace typography and cyan accent highlights.

### 2. How is it used?
Wrap a trigger link and popover container inside a `.sap` parent wrapper and apply direction classes (`sap--top`, `sap--bottom`, `sap--left`, `sap--right`).

```html
<span class="sap sap--top">
  <a href="#" class="sap__trigger" tabindex="0" aria-describedby="pop-1">Trigger</a>
  <span class="sap__popover" role="tooltip" id="pop-1">
    <p class="sap__popover-title">Title</p>
    <p class="sap__popover-body">Description text content.</p>
  </span>
</span>
```

### 3. Why is it useful?
It provides a lightweight, zero-JS popover solution for tech dashboards, admin panels, and monitoring UIs. The skew transition adds directional motion feedback while the dark theme reduces eye strain in low-light environments.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies. Fully static implementation.
- **Skew-Active Reveal**: Popover un-skews from `-10deg` to `0deg` and scales from `0.9` to `1` using spring easing.
- **Dark Tech Aesthetic**: Monospace font stack, dark surfaces, and cyan accent highlights for terminal-style interfaces.
- **Directional Support**: Full positioning for Top, Bottom, Left, and Right with matching directional arrows.
- **Keyboard Accessible**: Triggers are focusable via `tabindex`, popovers appear on `:focus-within` for full keyboard navigation.
- **Reduced Motion**: Disables skew/scale animations when `prefers-reduced-motion` is enabled.
- **Responsive**: Adapts layout on small screens with single-column grid and adjusted popover widths.

---

## Customization

The component is configurable via CSS custom properties:

| Variable | Description | Default |
|----------|-------------|---------|
| `--sap-duration` | Transition duration for popover reveal | `0.35s` |
| `--sap-easing` | Spring easing curve | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--sap-skew-from` | Starting skew angle | `-10deg` |
| `--sap-scale-from` | Starting scale ratio | `0.9` |
| `--sap-bg` | Page background color | `#0a0e17` |
| `--sap-surface` | Card/popover background | `#131a2b` |
| `--sap-accent` | Primary accent color | `#00d4ff` |
| `--sap-border` | Border highlight color | `rgba(0, 212, 255, 0.12)` |

---

## Folder Structure

```text
submissions/examples/skew-active-popover-46457/
├── demo.html       ← Dark tech dashboard demo with API, Node, and DB cards
├── style.css       ← Scoped component styles with CSS custom properties
└── README.md       ← Component documentation (This file)
```
