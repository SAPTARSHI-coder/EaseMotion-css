# Basic Resource Link Row

## What it does

This submission adds a simple CSS-only resource link row for documentation links, reference lists, support articles, release notes, and quick resource sections.

It aligns a small resource marker, link title, description, and right-side cue in one compact row.

## How to use it

Add the utility class to a link row:

```html
<a class="basic-resource-link-row" href="#">
  <span class="resource-icon" aria-hidden="true">D</span>
  <span class="resource-copy">
    <strong>Documentation guide</strong>
    <span>Read setup instructions and usage notes.</span>
  </span>
  <span class="resource-cue" aria-hidden="true">Open</span>
</a>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across documentation pages, dashboard help panels, cards, settings sections, and onboarding screens. It stays lightweight with semantic links and CSS-only styling.

## Included features

- Resource marker, title, description, and cue layout
- Hover and keyboard focus styling
- Divider support between rows
- Text truncation for long descriptions
- Responsive small-screen behavior
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the resource link row
- `README.md` - usage and contribution context
