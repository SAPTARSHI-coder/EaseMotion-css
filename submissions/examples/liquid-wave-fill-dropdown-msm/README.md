# Liquid Wave Fill Dropdown

## What does this do?

The Liquid Wave Fill Dropdown adds a pure HTML/CSS navigation menu where animated wave layers rise through the trigger and menu items on hover or focus.

## How is it used?

Place the dropdown in a navigation area and include the local stylesheet:

```html
<nav class="wave-dropdown" aria-label="Liquid wave navigation">
  <button class="wave-trigger" type="button" aria-haspopup="true">
    Explore tides
    <span class="wave-caret" aria-hidden="true"></span>
  </button>

  <ul class="wave-menu" aria-label="Liquid wave navigation">
    <li><a href="#current">Ocean current</a></li>
    <li><a href="#lagoon">Glass lagoon</a></li>
    <li><a href="#reef">Coral reef</a></li>
  </ul>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users an expressive dropdown pattern that feels fluid and premium while remaining dependency-free, keyboard-friendly, responsive, dark-mode compatible, and respectful of reduced-motion preferences.
