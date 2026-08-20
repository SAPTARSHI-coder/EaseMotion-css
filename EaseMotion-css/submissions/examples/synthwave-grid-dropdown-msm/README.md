# Synthwave Grid Line Dropdown

## What does this do?

This submission adds a pure HTML and CSS dropdown menu with neon synthwave grid line styling.

## How is it used?

Copy the menu markup from `demo.html` and link the included stylesheet:

```html
<nav class="synth-dropdown" aria-label="Synthwave navigation">
  <button class="synth-dropdown-trigger" type="button">Open menu</button>
  <ul class="synth-dropdown-menu">
    <li><a href="#">Neon dashboard</a></li>
  </ul>
</nav>
```

The demo is self-contained and works by opening `demo.html` directly in a browser. It uses no JavaScript, external assets, frameworks, or build tooling.

## Why is it useful?

EaseMotion CSS benefits from expressive, accessible UI examples that remain lightweight. This dropdown demonstrates a dark-mode-friendly menu with keyboard-visible focus states, smooth transform transitions, hardware-accelerated motion, and a reduced-motion fallback.

## Accessibility Notes

- Uses semantic navigation, button, list, and link elements.
- The dropdown appears on hover and focus-within so keyboard users can access it.
- Links and the trigger include clear `:focus-visible` states.
- Decorative neon grid layers are hidden from assistive technology.
