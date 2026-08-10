# CSS Tada-Click Tabs - Neumorphic Soft Layouts

A pure HTML/CSS tab component featuring a celebratory tada animation on click, designed for neumorphic soft interface aesthetics.

Related Issue: #50208

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-only tab component where tab triggers play a tada (shake + scale) animation on click and keyboard focus, providing celebratory tactile feedback. Panels slide in with a smooth entrance. Designed for soft neumorphic interfaces with inset/outset shadow styling.

### 2. How is it used?
Use the radio button hack pattern: pair hidden radio inputs with labels as tab triggers, and show/hide panels via CSS sibling selectors. Apply the `.tct` class to the container.

```html
<section class="tct" aria-label="Settings">
  <div class="tct__list" role="tablist">
    <input type="radio" name="settings" id="s-1" class="tct__input" checked>
    <label for="s-1" class="tct__trigger" role="tab">Tab 1</label>
    <input type="radio" name="settings" id="s-2" class="tct__input">
    <label for="s-2" class="tct__trigger" role="tab">Tab 2</label>
  </div>
  <div class="tct__panels">
    <div class="tct__panel" role="tabpanel"><p>Panel 1</p></div>
    <div class="tct__panel" role="tabpanel"><p>Panel 2</p></div>
  </div>
</section>
```

### 3. Why is it useful?
It provides a zero-JS tab component with a playful tada animation that delights users on interaction. The neumorphic soft theme makes it immediately usable for settings panels, dashboards, and admin interfaces where tactile, soft UI aesthetics enhance the experience.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies. Uses radio button hack for tab switching.
- **Tada Animation**: Triggers shake and scale on click with a celebratory bounce-back.
- **Neumorphic Soft Theme**: Soft inset/outset shadow styling with muted accent colors.
- **Panel Entrance**: Active panels animate in with a scale-and-slide entrance.
- **Keyboard Accessible**: Tada fires on `:focus-visible` for keyboard users.
- **Reduced Motion**: Disables tada animation when `prefers-reduced-motion` is enabled.
- **Responsive**: Stacks tabs vertically on small screens.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--tct-duration` | Tada animation duration | `0.5s` |
| `--tct-easing` | Tada easing curve | `cubic-bezier(0.36, 0.07, 0.19, 0.97)` |
| `--tct-rotate-peak` | Max rotation angle | `3deg` |
| `--tct-scale-peak` | Peak scale factor | `1.08` |
| `--tct-panel-duration` | Panel entrance duration | `0.35s` |
| `--tct-bg` | Page background | `#e0e5ec` |
| `--tct-surface` | Card surface | `#e0e5ec` |
| `--tct-accent` | Active tab color | `#6c63ff` |
| `--tct-shadow-out` | Outset shadow | `6px 6px 12px #b8bec7, -6px -6px 12px #ffffff` |
| `--tct-shadow-in` | Inset shadow | `inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff` |

---

## Folder Structure

```text
submissions/examples/tada-click-tabs-50208/
├── demo.html       ← Neumorphic Soft demo with Profile Settings and Analytics tabs
├── style.css       ← Component styles with tada animation and CSS custom properties
└── README.md       ← This file
```
