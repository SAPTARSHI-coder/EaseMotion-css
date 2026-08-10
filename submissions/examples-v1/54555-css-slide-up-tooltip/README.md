# CSS Slide-Up Tooltip for Creative Portfolio Layouts

## What does this do?

A pure CSS tooltip component with slide-up animations. Tooltips slide in from below with elastic cubic-bezier easing. Built for creative portfolio layouts with full `prefers-reduced-motion` support.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<article class="su-card">
  <input type="checkbox" id="su-1" class="su-trigger">
  <label for="su-1" class="su-label"><span aria-hidden="true">&#9670;</span> Click Me</label>
  <div class="su-tooltip fuchsia" role="tooltip">Tooltip text here</div>
</article>
```

### Available tooltip color classes

- `.su-tooltip.fuchsia` — Fuchsia accent
- `.su-tooltip.cyan` — Cyan accent
- `.su-tooltip.amber` — Amber accent
- `.su-tooltip.lime` — Lime accent

### CSS Custom Properties

```css
:root {
  --accent-fuchsia: #d946ef;
  --accent-cyan: #06b6d4;
  --accent-amber: #f59e0b;
  --accent-lime: #84cc16;
}
```

## Features

- **Slide-Up Animation**: Tooltips slide up with elastic cubic-bezier easing
- **Pure CSS**: Checkbox hack for toggle — zero JavaScript
- **CSS Arrow**: Pure CSS triangle arrow
- **Four Color Themes**: Fuchsia, cyan, amber, lime
- **Hover Scale**: Labels scale up on hover
- **Responsive**: Adapts to all viewport sizes
- **Accessible**: `role="tooltip"`, `prefers-reduced-motion` support

## Tech Stack

- HTML5
- CSS3 (Transitions, CSS Custom Properties, Checkbox Hack)
- No JavaScript required
