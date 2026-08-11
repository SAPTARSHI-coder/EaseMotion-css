# CSS Elastic-Slide Tooltip for Accessible Web Layouts

## What does this do?

A pure CSS tooltip component with elastic-slide animations. Tooltips slide in with a bouncy, spring-like easing curve using `cubic-bezier(0.34, 1.56, 0.64, 1)`. Built for accessible web layouts with full `prefers-reduced-motion` support.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<article class="es-tooltip-card">
  <input type="checkbox" id="tip-1" class="es-trigger">
  <label for="tip-1" class="es-label">
    <span aria-hidden="true">&#9670;</span> Click Me
  </label>
  <div class="es-tooltip indigo" role="tooltip">Tooltip text here</div>
</article>
```

### Available tooltip color classes

- `.es-tooltip.indigo` — Indigo accent
- `.es-tooltip.teal` — Teal accent
- `.es-tooltip.amber` — Amber accent
- `.es-tooltip.pink` — Pink accent

### CSS Custom Properties

```css
:root {
  --bg-primary: #0b0b12;
  --bg-surface: #131320;
  --bg-panel: #1b1b2c;
  --text-primary: #ededf4;
  --text-secondary: #7a7a8c;
  --border-color: #26263a;
  --accent-indigo: #6366f1;
  --accent-teal: #14b8a6;
  --accent-amber: #f59e0b;
  --accent-pink: #ec4899;
  --tooltip-bg: #1e1e32;
  --tooltip-border: #333350;
}
```

Override any of these variables to customize the theme.

## Features

- **Elastic Slide Animation**: Tooltips slide in with bouncy cubic-bezier easing
- **Scale + Translate**: Combined transform for smooth entrance
- **Pure CSS**: Checkbox hack for toggle — zero JavaScript
- **CSS Arrow**: Pure CSS triangle arrow using border trick
- **Four Color Themes**: Indigo, teal, amber, pink
- **Hover Scale**: Labels scale up on hover for feedback
- **Responsive Design**: Adapts across desktop, tablet, and mobile
- **Accessibility**: `role="tooltip"`, full `prefers-reduced-motion` support
- **Semantic HTML**: Proper ARIA labels and roles

## Tech Stack

- HTML5
- CSS3 (Transitions, CSS Custom Properties, Checkbox Hack)
- No JavaScript required
