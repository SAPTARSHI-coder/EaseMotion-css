# Gradient Glow Filter Bar Header — Theming Configuration

## Overview

This guide documents theme configuration for a gradient-glow filter bar header.

The component exposes surface, accent, border, glow, spacing, and radius values as CSS custom properties.

## Markup

Use a semantic section with a heading and native filter controls.

```html
<section class="filter-bar"><h2>Filter results</h2><select><option>All</option></select><button>Apply</button></section>
```

## Theme Variables

```css
.filter-bar {
  --filter-surface: #111827;
  --filter-accent: #a78bfa;
  --filter-border: rgb(167 139 250 / 30%);
  --filter-glow: rgb(167 139 250 / 35%);
}
```

Override these variables in a theme scope rather than duplicating selectors.

## Variants

Create modifiers for intentional visual variants such as compact or high-contrast modes.

Keep the base class responsible for layout and the modifier responsible for theme changes.

## Accessibility

Keep native form controls and labels.

Maintain visible focus indicators.

Ensure theme colors provide sufficient contrast.

Do not communicate filter state using color alone.

## Responsive Behavior

Allow controls to wrap and stack on small screens.

Avoid fixed widths and heights that cause overflow.

## Reduced Motion

Glow transitions are decorative and must respect `prefers-reduced-motion`.

The filtering interface must work without animation.

## Testing

Test each theme at mobile and desktop widths.

Check keyboard navigation, focus, contrast, zoom, and reduced motion.

## Files

`README.md` documents theming.

`demo.html` shows the configured component.

`style.css` contains the theme implementation.
