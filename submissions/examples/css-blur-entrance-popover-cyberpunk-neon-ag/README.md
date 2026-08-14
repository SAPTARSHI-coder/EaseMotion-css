# CSS Blur-Entrance Popover (Cyberpunk Neon Layouts)

A pure CSS showcase for a sleek blur-entrance popover animation, styled with a modern Cyberpunk Neon aesthetic. 

## Features
- **Pure CSS / HTML**: No JavaScript required. Uses `:hover` and `:focus-within` for interactions.
- **Smooth Animations**: Transitions the `filter: blur()` property along with opacity for a modern "focus-in" entrance effect.
- **Cyberpunk Theme**: Styled with neon glows, sharp borders, and monospaced typography.
- **Accessible**: Fully supports `prefers-reduced-motion` by gracefully disabling the blur animation and degrading to a simple opacity fade, respecting user settings.

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
- `--neon-pink`: Highlight color (default: `#ff007f`)
- `--neon-blue`: Popover glow and border color (default: `#00f3ff`)
- `--neon-purple`: Button glow and border color (default: `#b026ff`)
- `--bg-dark`: Background color for the page (default: `#09090b`)
- `--text-light`: Default text color (default: `#e0e0e0`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
