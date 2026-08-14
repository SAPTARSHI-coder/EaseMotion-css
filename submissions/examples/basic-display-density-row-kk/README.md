# Basic Display Density Row

## What it does

This submission adds a CSS-only display density row for dashboards, admin
settings, tables, and account preference screens.

It shows a density shortcut, density name, helper text, row size, usage context,
and selected or available state in one compact reusable row.

## How to use it

Add the base row class with optional `is-selected` state:

```html
<article class="basic-display-density-row is-selected">
  <span class="density-icon" aria-hidden="true">CF</span>
  <div class="density-copy">
    <strong>Comfortable</strong>
    <p>Balanced spacing for everyday dashboard workflows.</p>
  </div>
  <span class="density-size">44 px rows</span>
  <span class="density-use">Default</span>
  <span class="density-state">Selected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
dashboard settings. Developers can reuse the same row in table preferences,
admin panels, account settings, and product configuration screens while keeping
the implementation lightweight and CSS-only.

## Included features

- Compact, comfortable, and spacious examples
- Density shortcut icon block
- Row size metadata pill
- Usage context pill
- Selected and available state styling
- Subtle hover slide interaction
- Selected side accent
- Long text truncation for compact layouts
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the display density row
- `README.md` - usage and contribution context
