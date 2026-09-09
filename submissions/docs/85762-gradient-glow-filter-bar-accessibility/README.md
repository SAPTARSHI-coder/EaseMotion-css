# Gradient Glow Filter Bar Header — Accessibility Setup

## Overview

This guide documents an accessible gradient-glow filter bar header.

The component combines filter controls with a visual glow while keeping native form semantics.

## Markup

```html
<section class="filter-bar" aria-labelledby="filter-title">
  <h2 id="filter-title">Filter results</h2>
  <label>Category <select><option>All</option></select></label>
  <button type="button">Apply</button>
</section>
```

## Accessibility

Use labels for every form control.

Use native `select`, `input`, and `button` elements where possible.

Keep the heading visible to establish context.

Ensure keyboard focus remains visible against the glow.

Do not communicate filter state through color alone.

## Custom Properties

```css
.filter-bar {
  --filter-surface: #111827;
  --filter-accent: #a78bfa;
  --filter-glow: rgb(167 139 250 / 35%);
}
```

Override values at a theme scope without changing markup.

## Responsive Behavior

Wrap controls when horizontal space becomes limited.

Keep labels and controls together on narrow screens.

Avoid fixed widths that cause horizontal scrolling.

## Reduced Motion

Glow transitions are decorative and should be disabled when motion is reduced.

Filtering itself must remain functional without animation.

## Testing

Test keyboard navigation, focus visibility, zoom, contrast, and narrow layouts.

Verify each control has a readable label.

## Files

`README.md` documents accessibility setup.

`demo.html` is the standalone example.

`style.css` contains responsive styling.
