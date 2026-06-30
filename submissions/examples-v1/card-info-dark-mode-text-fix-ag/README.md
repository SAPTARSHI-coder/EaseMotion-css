# Card Info Dark Mode Text Fix (Issue #14078)

## What does this do?

Adds a dark mode `color` override to `.ease-card-info` using a lighter primary tint (`#c4c0f9`) that maintains sufficient WCAG contrast on dark backgrounds.

## How is it used?

```html
<div class="ease-card ease-card-info">
  <h2>Info</h2>
  <p>Content</p>
</div>
```

## Why is it useful?

The hardcoded `#4b44cc` (dark purple) used in light mode fails WCAG contrast requirements when displayed on dark backgrounds. The fix provides a lighter tint of the same hue that correctly passes contrast checks when the user prefers a dark color scheme.
