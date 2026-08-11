# CSS Scale-Hover Modal (Cyberpunk Neon Layouts)

A pure CSS modal implementation that features a dynamic scale-in entrance animation and an interactive scale-on-hover effect, styled with a bold Cyberpunk Neon aesthetic.

## Features
- **Pure CSS / HTML**: Built using the CSS `:target` pseudo-class for state management, eliminating the need for JavaScript.
- **Scale Animations**: Uses a `cubic-bezier` function for a bouncy scale-in entrance, and an interactive scale-up effect when the modal is hovered.
- **Cyberpunk Theme**: Styled with intense neon glows, high contrast colors, and monospaced typography. The modal shifts its neon colors (from blue to pink) on hover.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion` by gracefully falling back to a simple opacity fade.

## Usage

Use an anchor link to target the modal's ID. The modal overlay handles the `:target` state to become visible.

```html
<a href="#neonModal" class="cyber-button">Open Modal</a>

<div id="neonModal" class="cyber-modal-overlay">
  <div class="cyber-modal">
    <h2>Neon Modal</h2>
    <p>Pure CSS Content</p>
    <a href="#" class="cyber-close">Close</a>
  </div>
</div>
```

## CSS Custom Properties
Easily customize the color scheme using the root variables in `style.css`:
- `--neon-pink`: Highlight color on hover (default: `#ff007f`)
- `--neon-blue`: Primary modal border and text color (default: `#00f3ff`)
- `--neon-yellow`: Trigger button color (default: `#fcee0a`)
- `--bg-dark`: Page background (default: `#050505`)
- `--bg-modal`: Modal background (default: `#111`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
