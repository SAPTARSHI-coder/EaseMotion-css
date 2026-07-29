# CSS Jello-Hover Tabs - Dashboard Analytics Layouts

A pure HTML/CSS tab component featuring a rubbery jello animation on hover, designed for dashboard analytics interface aesthetics.

Related Issue: #50228

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-only tab component where tab triggers deform with a squishy, rubbery jello effect on hover and keyboard focus, providing playful tactile feedback. Panels slide in with a scale-entrance animation. Designed for dark-themed dashboard analytics interfaces.

### 2. How is it used?
Use the radio button hack pattern: pair hidden radio inputs with labels as tab triggers, and show/hide panels via CSS sibling selectors. Apply the `.jht` class to the container.

```html
<section class="jht" aria-label="Analytics">
  <div class="jht__list" role="tablist">
    <input type="radio" name="stats" id="s-1" class="jht__input" checked>
    <label for="s-1" class="jht__trigger" role="tab">Tab 1</label>
    <input type="radio" name="stats" id="s-2" class="jht__input">
    <label for="s-2" class="jht__trigger" role="tab">Tab 2</label>
  </div>
  <div class="jht__panels">
    <div class="jht__panel" role="tabpanel"><p>Panel 1</p></div>
    <div class="jht__panel" role="tabpanel"><p>Panel 2</p></div>
  </div>
</section>
```

### 3. Why is it useful?
It provides a zero-JS tab component with a fun, engaging jello animation that draws attention on interaction. The dark dashboard theme makes it immediately usable for analytics panels, data dashboards, and monitoring interfaces where playful motion enhances the experience.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies. Uses radio button hack for tab switching.
- **Jello Animation**: Triggers squish and deform on hover with a rubbery bounce-back effect.
- **Dashboard Theme**: Dark analytics-inspired design with glowing accent colors.
- **Panel Scale-In Animation**: Active panels animate in with a scale-and-slide entrance.
- **Multiple Variants**: Default (pill tabs) and Analytics (underline tabs) styles.
- **Keyboard Accessible**: Jello fires on `:focus-visible` for keyboard users.
- **Reduced Motion**: Disables jello animation when `prefers-reduced-motion` is enabled.
- **Responsive**: Stacks tabs vertically on small screens.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--jht-duration` | Jello animation duration | `0.45s` |
| `--jht-easing` | Jello easing curve | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `--jht-jello-scale-x` | Horizontal squish factor | `1.15` |
| `--jht-jello-scale-y` | Vertical squish factor | `0.88` |
| `--jht-panel-duration` | Panel entrance duration | `0.3s` |
| `--jht-bg` | Page background | `#0f172a` |
| `--jht-surface` | Card surface | `#1e293b` |
| `--jht-accent` | Active tab color | `#38bdf8` |
| `--jht-accent-glow` | Active tab glow | `rgba(56, 189, 248, 0.25)` |

---

## Folder Structure

```text
submissions/examples/jello-hover-tabs-50228/
├── demo.html       ← Dashboard Analytics demo with Overview and Users tabs
├── style.css       ← Component styles with jello animation and CSS custom properties
└── README.md       ← This file
```
