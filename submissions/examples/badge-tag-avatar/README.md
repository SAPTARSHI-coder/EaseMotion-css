# Badge, Tag, and Avatar Group Components

## What does this do?
A small set of reusable UI components for badges, pill-style tags, and stacked avatar groups. It provides visual, lightweight elements without relying on JavaScript.

## How is it used?
Add the appropriate classes to your HTML elements:

### Badges
```html
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-info">Info</span>
```

### Tags
```html
<span class="tag">Animation</span>
<span class="tag">CSS Utility</span>
```

### Avatar Group
```html
<div class="avatar-group">
  <img class="avatar" src="avatar-url.jpg" alt="User">
  <span class="avatar avatar-more">+3</span>
</div>
```

## Why is it useful?
Badges, tags, and avatar groups are common UI patterns used in dashboards, cards, profile sections, task lists, and documentation examples. They fit EaseMotion CSS because they are human-readable, composable, and easy to combine with existing utility classes. 

They also support the project’s goal of adding useful CSS-only components without needing JavaScript or heavy framework-specific code.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
