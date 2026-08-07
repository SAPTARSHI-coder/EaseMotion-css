# 3D Perspective Tilt Animated Tabs — EaseMotion CSS

A pure CSS animated Tabs component featuring an interactive 3D Perspective Tilt transition effect, designed for Interactive Interface aesthetics with zero JavaScript dependencies.

---

## 1. What does this component do?

Provides a smooth 3D perspective depth tilt interaction when hovering over tabs, moving between active states, and switching tab content panels.

---

## 2. How is it used?

Include the semantic radio input and tab label structure:

```html
<div class="tabs-container">
  <input type="radio" name="perspective-tabs" id="tab-analytics" class="tab-radio" checked>
  <input type="radio" name="perspective-tabs" id="tab-workflows" class="tab-radio">

  <nav class="tabs-nav" aria-label="Tab Navigation">
    <label for="tab-analytics" class="tab-label" tabindex="0">Analytics</label>
    <label for="tab-workflows" class="tab-label" tabindex="0">Workflows</label>
    <div class="tab-glider" aria-hidden="true"></div>
  </nav>

  <div class="tab-panels">
    <article class="tab-panel panel-analytics">Analytics Content</article>
    <article class="tab-panel panel-workflows">Workflows Content</article>
  </div>
</div>
```

---

## 3. Why is it useful?

Demonstrates high-performance 60fps 3D motion capabilities using pure CSS transforms and CSS custom properties while maintaining full keyboard accessibility and reduced-motion fallback.

---

## 4. Custom CSS Properties

Customize motion behavior using CSS custom variables:

| Custom Property | Default | Description |
| --- | --- | --- |
| `--tabs-perspective` | `1000px` | 3D perspective view depth |
| `--tabs-tilt-x` | `8deg` | X-axis tilt rotation on interaction |
| `--tabs-tilt-y` | `-6deg` | Y-axis tilt rotation on interaction |
| `--tabs-scale` | `1.03` | Hover elevation scale factor |
| `--tabs-depth` | `14px` | Z-axis elevation translate depth |
| `--tabs-duration` | `300ms` | Transition duration (uses `--ease-speed-medium`) |
| `--tabs-easing` | `cubic-bezier(0, 0, 0.2, 1)` | Transition timing curve (uses `--ease-ease-out`) |

---

## 5. Accessibility & Reduced Motion

- **Keyboard Focus**: Native `<input type="radio">` controls paired with accessible `<label tabindex="0">` elements support keyboard navigation with custom `:focus-visible` outlines.
- **Reduced Motion**: Automatically disables 3D rotations and perspective shifts under `@media (prefers-reduced-motion: reduce)`, preserving instant state switching.
