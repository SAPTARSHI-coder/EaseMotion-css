# CSS Glitch-Flicker Popover (Cyberpunk Neon Layouts)

A pure CSS showcase for a chaotic, high-energy glitch and flicker popover animation, styled with a modern Cyberpunk Neon aesthetic. 

## Features
- **Pure CSS / HTML**: No JavaScript required. Uses `:hover` and `:focus-within` for interactions.
- **Glitch Animation**: Utilizes `@keyframes` with `clip-path`, `transform: skewX()`, and `opacity` to create a realistic digital glitch effect upon opening, along with an occasional random flicker.
- **Cyberpunk Theme**: Styled with neon glows, sharp borders, and monospaced typography.
- **Accessible**: Fully supports `prefers-reduced-motion` by gracefully disabling the chaotic glitch animation and degrading to a simple opacity fade, respecting user settings.

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
- `--neon-pink`: Popover glow, title, and border color (default: `#ff007f`)
- `--neon-blue`: Secondary accent color (default: `#00f3ff`)
- `--neon-yellow`: Button glow and border color (default: `#fcee0a`)
- `--bg-dark`: Background color for the page (default: `#0a0a0c`)
- `--text-light`: Default text color (default: `#e0e0e0`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
