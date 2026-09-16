# Quantum Energy Shield Dropdown

## What does this do?

The Quantum Energy Shield Dropdown adds a luminous HTML/CSS dropdown menu with glassy shield styling, orbital accents, and smooth reveal behavior.

## How is it used?

Place the dropdown in a navigation area and include the local stylesheet:

```html
<nav class="quantum-dropdown" aria-label="Shield control navigation">
  <button class="quantum-trigger" type="button" aria-haspopup="true">
    Shield controls
    <span class="trigger-orb" aria-hidden="true"></span>
  </button>

  <ul class="quantum-menu" aria-label="Shield control options">
    <li><a href="#calibrate">Calibrate field</a></li>
    <li><a href="#pulse">Pulse barrier</a></li>
    <li><a href="#stabilize">Stabilize core</a></li>
  </ul>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users a high-impact dropdown pattern that stays dependency-free while supporting hover, focus-within, visible keyboard focus, responsive layout, and reduced-motion preferences.
