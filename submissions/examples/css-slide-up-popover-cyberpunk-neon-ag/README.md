# CSS Slide-Up Popover (Cyberpunk Neon Layouts)

A pure CSS showcase for a sleek slide-up popover animation, styled with a modern Cyberpunk Neon aesthetic. 

## Features
- **Pure CSS / HTML**: No JavaScript required. Uses `:hover` and `:focus-within` for interactions.
- **Smooth Animations**: Utilizes `cubic-bezier` for a dynamic and smooth slide-up effect.
- **Cyberpunk Theme**: Styled with neon glows, sharp borders, and monospaced typography.
- **Accessible**: Fully supports `prefers-reduced-motion` by gracefully degrading to a simple opacity fade, respecting user settings.

## Usage

Simply wrap your trigger element and your popover content in a relative container.

```html
<div class="popover-container">
  <button class="cyber-button">Hover Me</button>
  <div class="popover-content">
    <h3 class="popover-title">Neon Popover</h3>
    <p class="popover-text">This is pure CSS!</p>
  </div>
</div>
```

## CSS Custom Properties
You can easily customize the theme by changing the root variables in `style.css`:
- `--neon-pink`: Button glow and border color (default: `#ff007f`)
- `--neon-blue`: Popover glow and highlight color (default: `#00f3ff`)
- `--bg-dark`: Background color for the page (default: `#09090b`)
- `--text-light`: Default text color (default: `#e0e0e0`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
