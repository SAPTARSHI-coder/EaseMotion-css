# Dark Mode Toggle with Smooth Theme Transition

A pure CSS dark mode toggle component with smooth theme transition and sun/moon icon morph animation.

## Classes & Elements

| Selector                  | Purpose                                   |
| ------------------------- | ----------------------------------------- |
| `#ease-dark-toggle`       | Hidden checkbox that controls theme state |
| `.ease-dark-toggle-label` | Clickable label wrapping the toggle       |
| `.ease-toggle-track`      | The toggle switch track                   |
| `.ease-toggle-icon-wrap`  | Wraps sun/moon icons                      |
| `.ease-toggle-sun`        | Sun icon (visible in light mode)          |
| `.ease-toggle-moon`       | Moon icon (visible in dark mode)          |

## Usage

```html
<!-- Add checkbox anywhere in <body> -->
<input type="checkbox" id="ease-dark-toggle" />

<!-- Toggle button -->
<label class="ease-dark-toggle-label" for="ease-dark-toggle">
  <div class="ease-toggle-icon-wrap">
    <span class="ease-toggle-icon ease-toggle-sun">☀️</span>
    <span class="ease-toggle-icon ease-toggle-moon">🌙</span>
  </div>
  <div class="ease-toggle-track"></div>
</label>
```

## CSS Variables

```css
:root {
  --ease-bg: #ffffff;
  --ease-text: #0f172a;
  --ease-surface: #f1f5f9;
  --ease-border: #e2e8f0;
  --ease-toggle-bg: #e2e8f0;
  --ease-transition: 0.4s ease;
}
```

## Features

- Pure CSS, no JavaScript
- Uses checkbox hack + :has() selector
- Smooth 0.4s transition on all theme colors
- Sun → Moon icon morph animation
- Fully customizable via CSS variables
- Respects existing CSS variable system
