# Morphing Shape Dropdown

## What does this do?

The Morphing Shape Dropdown adds a fluid HTML/CSS dropdown menu with soft blob-like corners and shape-shifting hover and focus transitions.

## How is it used?

Place the dropdown in a navigation area and include the local stylesheet:

```html
<nav class="morph-dropdown" aria-label="Creative navigation">
  <button class="morph-trigger" type="button" aria-haspopup="true">
    Creative tools
    <span class="morph-symbol" aria-hidden="true"></span>
  </button>

  <ul class="morph-menu" aria-label="Creative tools">
    <li><a href="#sketch">Sketch flows</a></li>
    <li><a href="#blend">Blend layers</a></li>
    <li><a href="#export">Export motion</a></li>
  </ul>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users a playful dropdown pattern that feels organic and animated while staying dependency-free, responsive, keyboard-friendly, and respectful of reduced-motion preferences.
