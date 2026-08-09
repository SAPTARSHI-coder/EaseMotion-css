# CSS Ripple-Wave Card Grid

A modern, lightweight, pure CSS/HTML showcase layout for SaaS features, featuring smooth ripple-wave hover animations. This example was built to resolve [Issue #59558](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59558).

## Features

- **Pure CSS/HTML**: No JavaScript required for the ripple effects or grid layouts.
- **Responsive**: Fully responsive grid using CSS Grid `repeat(auto-fit, minmax(...))`.
- **Accessible**: Built-in support for `prefers-reduced-motion`, falling back to simple background color changes instead of animations.
- **Customizable**: Easy to theme using CSS Custom Properties (variables).

## Usage

1. Link the `style.css` in your HTML file (along with the main `easemotion.css` if integrating).
2. Use the following HTML structure for your cards:

```html
<div class="ripple-card-grid">
  <div class="ripple-card">
    <div class="ripple-wave"></div>
    <div class="card-content">
      <!-- Your content here -->
    </div>
  </div>
</div>
```

## Customization (CSS Variables)

You can easily tweak colors by modifying the CSS variables in the `:root` selector within `style.css`:

```css
:root {
  --primary-color: #4f46e5;
  --primary-light: rgba(79, 70, 229, 0.1);
  --bg-color: #f9fafb;
  --text-main: #111827;
  --text-muted: #6b7280;
  --card-bg: #ffffff;
}
```
