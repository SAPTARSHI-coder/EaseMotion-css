# Glitch Dark Mode Toggle

A responsive, pure CSS **Glitch Dark Mode Toggle** featuring a futuristic space-inspired design with a subtle glitch animation for modern dashboards, landing pages, and sci-fi themed interfaces.

## Features

- 🎨 Pure CSS (No JavaScript)
- 🌌 Space-inspired interface design
- ⚡ Glitch animation on toggle
- 🌙 Animated dark mode toggle
- 📱 Fully responsive
- ♿ Keyboard accessible
- 🎯 Uses EaseMotion CSS variables with fallback values
- 🛡️ Supports `prefers-reduced-motion`

## Files

```text
glitch-dark-mode-toggle-amna/
├── demo.html
├── style.css
└── README.md
```

## Preview

The demo includes:

- Space-themed UI card
- CSS-only dark mode toggle
- Smooth thumb transition
- Glitch sweep animation
- Animated sun and moon icons
- Responsive layout

## Usage

```html
<input
  type="checkbox"
  id="theme-toggle"
  class="toggle-input"
/>

<label for="theme-toggle" class="toggle-track">
  <span class="toggle-thumb">
    <span class="icon sun">☀</span>
    <span class="icon moon">🌙</span>
  </span>
</label>
```

## Customization

Customize the appearance using CSS variables.

```css
:root {
  --toggle-bg: #060816;
  --primary: #6d7cff;
  --secondary: #9d4edd;
  --radius: 20px;
  --transition: 320ms;
}
```

## Accessibility

- Uses semantic checkbox and label elements
- Keyboard accessible with `:focus-visible`
- Responsive across desktop and mobile devices
- Respects `prefers-reduced-motion`

## Browser Support

Compatible with modern browsers supporting:

- CSS Custom Properties
- CSS Keyframes
- CSS Transitions
- Flexbox
- `prefers-reduced-motion`

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS's animation-first philosophy by providing a reusable, lightweight, and customizable dark mode toggle built entirely with CSS. The space-inspired visuals, glitch animation, and responsive design make it suitable for integration into modern interfaces while remaining accessible and easy to extend.