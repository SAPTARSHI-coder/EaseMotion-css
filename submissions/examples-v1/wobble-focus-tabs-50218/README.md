# CSS Wobble-Focus Tabs - SaaS Showcase Layouts

A pure HTML/CSS tab component featuring a playful wobble animation on focus and click, designed for SaaS showcase interface aesthetics.

Related Issue: #50218

---

## Repository Standard Answers

### 1. What does this do?
It renders a CSS-only tab component where tab triggers wobble (rotate back and forth) on click and keyboard focus, providing playful tactile feedback. Panels slide in with a scale-entrance animation.

### 2. How is it used?
Use the radio button hack pattern: pair hidden radio inputs with labels as tab triggers, and show/hide panels via CSS sibling selectors. Apply the `.wft` class to the container.

```html
<section class="wft" aria-label="Features">
  <div class="wft__list" role="tablist">
    <input type="radio" name="features" id="f-1" class="wft__input" checked>
    <label for="f-1" class="wft__trigger" role="tab">Tab 1</label>
    <input type="radio" name="features" id="f-2" class="wft__input">
    <label for="f-2" class="wft__trigger" role="tab">Tab 2</label>
  </div>
  <div class="wft__panels">
    <div class="wft__panel" role="tabpanel"><p>Panel 1</p></div>
    <div class="wft__panel" role="tabpanel"><p>Panel 2</p></div>
  </div>
</section>
```

### 3. Why is it useful?
It provides a zero-JS tab component with a fun, engaging wobble animation that draws attention on interaction. Ideal for SaaS landing pages, product showcases, and onboarding flows where playful motion enhances the experience.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript dependencies. Uses radio button hack for tab switching.
- **Wobble Animation**: Triggers rotate back and forth on click and keyboard focus for playful feedback.
- **Gradient Active State**: Active tab gets a blue-to-indigo gradient with glow shadow.
- **Panel Scale Entrance**: Panels animate in with scale and slide effects.
- **Keyboard Accessible**: Wobble fires on `:focus-visible` for keyboard users.
- **Reduced Motion**: Disables wobble animation when `prefers-reduced-motion` is enabled.
- **Responsive**: Stacks tabs vertically on small screens.

---

## Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `--wft-duration` | Wobble animation duration | `0.5s` |
| `--wft-easing` | Wobble easing curve | `cubic-bezier(0.36, 0.07, 0.19, 0.97)` |
| `--wft-wobble-amount` | Max rotation angle | `3deg` |
| `--wft-panel-duration` | Panel entrance duration | `0.35s` |
| `--wft-bg` | Page background | `#f8fafc` |
| `--wft-surface` | Card surface | `#ffffff` |
| `--wft-accent` | Active tab color | `#0ea5e9` |
| `--wft-gradient` | Active tab gradient | `linear-gradient(135deg, #0ea5e9, #6366f1)` |

---

## Folder Structure

```text
submissions/examples/wobble-focus-tabs-50218/
├── demo.html       ← SaaS demo with Product Features and Analytics tabs
├── style.css       ← Component styles with wobble animation and CSS custom properties
└── README.md       ← This file
```
