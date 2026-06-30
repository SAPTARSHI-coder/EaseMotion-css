# Animated Search Bar Component

## What does this do?

Creates an expandable search bar component that smoothly transitions from a compact search icon into a full-width input field. It includes focus animations, an animated suggestion dropdown, recent search history support, and a polished no-results state.

## How is it used?

Use the `.search-container` wrapper with a `.search-trigger` and `.search-input`. The `.search-suggestions` list will appear smoothly when the container is focused.

```html
<div class="search-container">
  <button class="search-trigger">
    <i class="icon-search"></i>
  </button>

  <input type="search" class="search-input" placeholder="Search..." />

  <ul class="search-suggestions">
    <li>Recent Search 1</li>
    <li>Recent Search 2</li>
    <li>Suggested Result</li>
  </ul>
</div>
```

## Why is it useful?

This feature aligns with EaseMotion CSS's animation-first philosophy by providing a common UI pattern enhanced through smooth, reusable motion effects. It combines multiple animation patterns—expansion, focus transitions, dropdown reveals, and state changes—into a composable utility that developers can easily integrate without complex custom implementations.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effects.

## Contribution Notes

- Class naming handled by contributor
- Maintainer will rename to ease-\* convention before merging
