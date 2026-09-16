# Basic Reading Time Pill

## What it does

This submission adds a simple CSS-only reading time pill for blogs,
documentation cards, tutorials, changelogs, newsletters, and article previews.

It helps users quickly understand the estimated reading effort before opening
long-form content.

## How to use it

Add the base pill class with optional state modifiers:

```html
<span class="basic-reading-time-pill">
  <span class="pill-icon" aria-hidden="true">3</span>
  <span class="pill-copy">Quick read</span>
  <strong>3 min</strong>
</span>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
documentation, product blogs, tutorial cards, and knowledge-base layouts. The
hover motion on preview cards keeps the pattern animation-friendly while the
pill itself remains lightweight and easy to reuse.

## Included features

- Compact reading time pill layout
- Quick read, deep dive, and guide variants
- Circular time marker
- Article preview examples
- Subtle hover lift on cards
- Responsive single-column layout on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the reading time pill
- `README.md` - usage and contribution context
