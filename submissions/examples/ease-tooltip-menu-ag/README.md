# CSS Interactive Tooltip Menu

A tooltip system that reveals contextual action buttons using pure CSS hover/focus interactions.

## What does this do?

Creates interactive tooltips that show contextual buttons or information when triggered by hover or focus events. Uses pure CSS with no JavaScript required.

## How is it used?

```html
<!-- Basic Tooltip Menu -->
<div class="tooltip-menu">
  <button class="tooltip-trigger">Actions</button>
  <div class="tooltip-content">
    <button>Edit</button>
    <button>Delete</button>
    <button>Share</button>
  </div>
</div>

<!-- Tooltip Positions -->
<div class="tooltip-menu tooltip-menu--top">...</div>
<div class="tooltip-menu tooltip-menu--left">...</div>
<div class="tooltip-menu tooltip-menu--right">...</div>

<!-- Icon Tooltip -->
<div class="tooltip-menu tooltip-menu--icon">
  <span class="tooltip-trigger">ℹ</span>
  <span class="tooltip-content">Information text</span>
</div>
```

## Why is it useful?

- Pure CSS, no JavaScript needed
- Multiple positioning options
- Contextual action menus
- Smooth reveal animations
- Accessible focus states
- Great for dense UI interfaces
