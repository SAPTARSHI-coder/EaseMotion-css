# CSS 3D Flip Popover for Glassmorphism UI Layouts

## What does this do?

A pure CSS popover component with 3D flip animations and glassmorphism styling. Popovers flip in with a smooth rotateY transform using elastic cubic-bezier easing, styled with backdrop-filter blur and semi-transparent backgrounds for a glassmorphism aesthetic.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<article class="fp-card">
  <input type="checkbox" id="fp-1" class="fp-toggle">
  <label for="fp-1" class="fp-label">
    <span aria-hidden="true">&#9670;</span> Click Me
  </label>
  <div class="fp-flip-container">
    <div class="fp-popover">
      <div class="fp-popover-icon cyan" aria-hidden="true">&#9670;</div>
      <h3>Popover Title</h3>
      <p>Popover content goes here.</p>
    </div>
  </div>
  <div class="fp-card-icon cyan" aria-hidden="true">&#9670;</div>
  <div class="fp-card-title">Card Title</div>
  <div class="fp-card-desc">Card description</div>
</article>
```

### Available icon color classes

- `.fp-popover-icon.cyan` / `.fp-card-icon.cyan` — Cyan accent
- `.fp-popover-icon.violet` / `.fp-card-icon.violet` — Violet accent
- `.fp-popover-icon.rose` / `.fp-card-icon.rose` — Rose accent
- `.fp-popover-icon.emerald` / `.fp-card-icon.emerald` — Emerald accent

### CSS Custom Properties

```css
:root {
  --flip-duration: 0.6s;
  --flip-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --glass-bg: rgba(255, 255, 255, 0.06);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  --accent-cyan: #22d3ee;
  --accent-violet: #a78bfa;
  --accent-rose: #fb7185;
  --accent-emerald: #34d399;
}
```

Override any of these variables to customize timing, easing, and theme.

## Features

- **3D Flip Animation**: Popovers flip in with rotateY transform
- **Elastic Easing**: Bouncy cubic-bezier(0.34, 1.56, 0.64, 1) timing
- **Glassmorphism Styling**: backdrop-filter blur, semi-transparent backgrounds
- **Pure CSS**: Checkbox hack for toggle — zero JavaScript
- **Four Color Themes**: Cyan, violet, rose, emerald
- **Responsive Design**: Adapts across desktop, tablet, and mobile
- **Accessibility**: Full `prefers-reduced-motion` support, ARIA attributes
- **Semantic HTML**: Proper roles and labels

## Tech Stack

- HTML5
- CSS3 (3D Transforms, Transitions, CSS Custom Properties, Checkbox Hack, Backdrop Filter)
- No JavaScript required
