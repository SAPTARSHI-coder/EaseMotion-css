# Pulsating Wave Dropdown

## What does this do?

The Pulsating Wave Dropdown adds a pure HTML/CSS navigation menu with soft pulse rings around the trigger and ripple feedback on each menu item.

## How is it used?

Place the dropdown in a navigation area and include the local stylesheet:

```html
<nav class="pulse-dropdown" aria-label="Pulsating wave navigation">
  <button class="pulse-trigger" type="button" aria-haspopup="true">
    Signal menu
    <span class="pulse-caret" aria-hidden="true"></span>
  </button>

  <ul class="pulse-menu" aria-label="Pulsating wave navigation">
    <li><a href="#pulse">Pulse channel</a></li>
    <li><a href="#echo">Echo pattern</a></li>
    <li><a href="#beacon">Beacon loop</a></li>
  </ul>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users an energetic dropdown pattern that communicates interactivity through motion while staying dependency-free, responsive, keyboard-friendly, dark-mode compatible, and respectful of reduced-motion preferences.
