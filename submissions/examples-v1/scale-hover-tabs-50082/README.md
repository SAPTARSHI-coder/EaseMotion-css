# CSS Scale-Hover Tabs - Dashboard Analytics Layouts

A pure HTML/CSS tab component featuring smooth scale-hover interactions, designed for dark dashboard analytics interface aesthetics.

Related Issue: #50082

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-only tab component where tab triggers scale up on hover and active panels animate in with a scale-slide entrance. Designed for dark, data-focused analytics dashboards with metric badges and monospace typography.

### 2. How is it used?
Use the radio button hack pattern: pair hidden radio inputs with labels as tab triggers, and show/hide panels via CSS sibling selectors. Apply the `.sht` class to the container.

```html
<section class="sht" aria-label="Metrics">
  <div class="sht__list" role="tablist">
    <input type="radio" name="metrics" id="m-1" class="sht__input" checked>
    <label for="m-1" class="sht__trigger" role="tab">Tab 1</label>
    <input type="radio" name="metrics" id="m-2" class="sht__input">
    <label for="m-2" class="sht__trigger" role="tab">Tab 2</label>
  </div>
  <div class="sht__panels">
    <div class="sht__panel" role="tabpanel"><p>Panel 1</p></div>
    <div class="sht__panel" role="tabpanel"><p>Panel 2</p></div>
  </div>
</section>
```

### 3. Why is it useful?
It provides a zero-JS tab component with a dark, data-focused aesthetic and tactile scale-hover feedback. Metric badges show trends at a glance. Ideal for analytics dashboards, monitoring panels, and data visualization UIs.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies. Uses radio button hack for tab switching.
- **Scale-Hover Interaction**: Triggers scale up on hover for tactile feedback.
- **Dark Dashboard Aesthetic**: Dark surfaces, monospace fonts, blue accent, and metric trend badges.
- **Panel Scale-Slide Entrance**: Panels animate in with scale and slide effects.
- **Metric Badges**: Built-in up/warning badge styles for trend indicators.
- **Keyboard Accessible**: Tab navigation via radio inputs; focus-visible outlines.
- **Reduced Motion**: Disables animations when `prefers-reduced-motion` is enabled.
- **Responsive**: Stacks tabs vertically on small screens.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--sht-duration` | Trigger transition duration | `0.25s` |
| `--sht-easing` | Easing curve | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--sht-hover-scale` | Hover scale factor | `1.03` |
| `--sht-panel-duration` | Panel entrance duration | `0.35s` |
| `--sht-bg` | Page background | `#0f1117` |
| `--sht-surface` | Card surface | `#1a1d27` |
| `--sht-accent` | Active tab color | `#3b82f6` |
| `--sht-success` | Positive metric color | `#22c55e` |
| `--sht-warning` | Warning metric color | `#f59e0b` |

---

## Folder Structure

```text
submissions/examples/scale-hover-tabs-50082/
├── demo.html       ← Dashboard demo with Traffic and Revenue tab variants
├── style.css       ← Component styles with dark theme, scale-hover, and CSS custom properties
└── README.md       ← This file
```
