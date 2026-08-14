# Velvet Smooth Dropdown

## What does this do?

The Velvet Smooth Dropdown adds a polished HTML/CSS dropdown menu with soft layered gradients, tactile easing, and keyboard-visible focus states.

## How is it used?

Place the dropdown markup inside a navigation area and include the local stylesheet:

```html
<nav class="velvet-dropdown" aria-label="Product navigation">
  <button class="dropdown-trigger" type="button" aria-haspopup="true">
    Explore library
    <span aria-hidden="true" class="trigger-icon"></span>
  </button>

  <ul class="dropdown-panel" aria-label="Library sections">
    <li><a href="#animations">Animation presets</a></li>
    <li><a href="#components">Component patterns</a></li>
    <li><a href="#tokens">Design tokens</a></li>
  </ul>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users a refined dropdown pattern that feels animated and expressive while remaining dependency-free, responsive, and accessible through hover and focus-within interactions.
