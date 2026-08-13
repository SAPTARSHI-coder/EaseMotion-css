# Retro Arcade Pixel Dropdown

## What does this do?

The Retro Arcade Pixel Dropdown adds a blocky HTML/CSS dropdown menu with pixel borders, neon colors, and scanline-inspired atmosphere.

## How is it used?

Place the dropdown in a navigation area and include the local stylesheet:

```html
<nav class="pixel-dropdown" aria-label="Arcade navigation">
  <button class="pixel-trigger" type="button" aria-haspopup="true">
    Select stage
    <span class="pixel-caret" aria-hidden="true"></span>
  </button>

  <ul class="pixel-menu" aria-label="Arcade stages">
    <li><a href="#level-one">Neon rooftops</a></li>
    <li><a href="#level-two">Laser tunnel</a></li>
    <li><a href="#level-three">Pixel fortress</a></li>
  </ul>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users a playful dropdown style that remains dependency-free while supporting hover, focus-within, visible keyboard focus, responsive layout, and reduced-motion preferences.
