# CSS Scale-Hover Tabs - Marketing Landing Page Layouts

A pure HTML/CSS tab component featuring smooth scale-hover interactions, designed for marketing landing page interface aesthetics.

Related Issue: #50083

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-only tab component where tab triggers scale up on hover with a gradient active state, and panels animate in with a scale-blur entrance. Designed for vibrant, conversion-focused marketing landing pages.

### 2. How is it used?
Use the radio button hack pattern: pair hidden radio inputs with labels as tab triggers, and show/hide panels via CSS sibling selectors. Apply the `.sht` class to the container.

```html
<section class="sht" aria-label="Features">
  <div class="sht__list" role="tablist">
    <input type="radio" name="features" id="f-1" class="sht__input" checked>
    <label for="f-1" class="sht__trigger" role="tab">Tab 1</label>
    <input type="radio" name="features" id="f-2" class="sht__input">
    <label for="f-2" class="sht__trigger" role="tab">Tab 2</label>
  </div>
  <div class="sht__panels">
    <div class="sht__panel" role="tabpanel"><p>Panel 1</p></div>
    <div class="sht__panel" role="tabpanel"><p>Panel 2</p></div>
  </div>
</section>
```

### 3. Why is it useful?
It provides a zero-JS tab component with eye-catching gradient active states and scale-hover feedback that drives engagement. Perfect for marketing landing pages, pricing tables, and feature comparison sections.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies. Uses radio button hack for tab switching.
- **Scale-Hover Interaction**: Triggers scale up on hover for tactile, engaging feedback.
- **Gradient Active State**: Active tab gets a purple-to-pink gradient with glow shadow.
- **Panel Scale-Blur Entrance**: Panels animate in with scale, blur, and slide effects.
- **Multiple Variants**: Default (pill) and underline styles included.
- **Keyboard Accessible**: Tab navigation via radio inputs; focus-visible outlines.
- **Reduced Motion**: Disables all animations when `prefers-reduced-motion` is enabled.
- **Responsive**: Stacks tabs vertically on small screens.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--sht-duration` | Trigger transition duration | `0.3s` |
| `--sht-easing` | Easing curve | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--sht-hover-scale` | Hover scale factor | `1.04` |
| `--sht-panel-duration` | Panel entrance duration | `0.4s` |
| `--sht-slide-y` | Panel slide offset | `10px` |
| `--sht-bg` | Page background | `#fafafa` |
| `--sht-surface` | Card surface | `#ffffff` |
| `--sht-accent` | Active tab color | `#7c3aed` |
| `--sht-gradient` | Active tab gradient | `linear-gradient(135deg, #7c3aed, #ec4899)` |

---

## Folder Structure

```text
submissions/examples/scale-hover-tabs-50083/
├── demo.html       ← Marketing demo with Pricing and Features tab variants
├── style.css       ← Component styles with gradient scale-hover and CSS custom properties
└── README.md       ← This file
```
