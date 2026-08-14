# Basic Theme Preference Row

## What it does

This submission adds a CSS-only theme preference row for appearance settings,
profile pages, account dashboards, and personalization screens.

It shows a theme marker, theme name, helper text, display mode, sync behavior,
and selected or suggested state in one compact reusable row.

## How to use it

Add the base row class with a theme marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-theme-preference-row">
  <span class="theme-mark is-light" aria-hidden="true">LT</span>
  <div class="theme-copy">
    <strong>Light theme</strong>
    <p>Bright interface mode for daytime reading.</p>
  </div>
  <span class="theme-mode">Light</span>
  <span class="theme-sync">Manual</span>
  <span class="theme-state is-light">Selected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
appearance and profile settings interfaces. Developers can reuse the same row
pattern in theme pickers, account settings, personalization panels, and user
preference screens while keeping the implementation lightweight and CSS-only.

## Included features

- Light, dark, and system theme examples
- Theme marker badges
- Display mode metadata
- Sync behavior metadata
- Theme preference state styling
- Long text truncation for compact settings panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the theme preference row
- `README.md` - usage and contribution context
