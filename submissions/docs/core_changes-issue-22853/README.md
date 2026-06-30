# ease-list-group — List Group Component

## What does this do?

Adds a list group component to EaseMotion CSS — displays lists of items with optional badges, icons, active states, and disabled states. Includes variants for flush (borderless), numbered (with CSS counters), and actionable list groups with staggered entrance animations.

## How is it used?

Open `demo.html` directly in a browser. The page demonstrates all list group variants with interactive hover effects and entrance animations powered by EaseMotion CSS utility classes.

```html
<ul class="ease-list-group">
  <li class="ease-list-group-item">Item</li>
  <li class="ease-list-group-item ease-list-group-active">Active</li>
  <li class="ease-list-group-item ease-list-group-disabled">Disabled</li>
</ul>
```

## Why is it useful?

List groups are essential for categorization menus, settings pages, directory listings, and feature lists. This component provides a consistent, accessible, and animated list group pattern that integrates with existing EaseMotion design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`, etc.).

Fixes #22853
