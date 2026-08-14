# Basic App Version Badge

## What it does

This submission adds a simple CSS-only app version badge for settings pages,
release notes, documentation cards, admin dashboards, and changelog summaries.

It helps users quickly identify stable, beta, and deprecated release states in
a compact visual format.

## How to use it

Add the base badge class with a release-state modifier:

```html
<span class="basic-app-version-badge is-stable">v2.4.1</span>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common product interfaces. The badge can be placed inside cards, release rows,
settings panels, and changelog sections while staying lightweight and CSS-only.

## Included features

- Stable, beta, and deprecated release variants
- Compact pill badge layout
- Built-in status dot
- Release row examples
- Subtle hover lift on rows
- Responsive stacking on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the app version badge
- `README.md` - usage and contribution context
