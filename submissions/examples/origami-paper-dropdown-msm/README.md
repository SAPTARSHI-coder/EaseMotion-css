# Origami Paper Fold Dropdown

## What does this do?

This submission adds a pure HTML and CSS dropdown menu with an origami paper fold reveal style.

## How is it used?

Copy the menu markup from `demo.html` and link the stylesheet:

```html
<nav class="origami-dropdown" aria-label="Origami navigation">
  <button class="origami-trigger" type="button">Open menu</button>
  <ul class="origami-menu">
    <li><a href="#">Folded dashboard</a></li>
  </ul>
</nav>
```

The demo is self-contained and works by opening `demo.html` directly in a browser. It requires no JavaScript, CDN, remote image, framework, or build tool.

## Why is it useful?

EaseMotion CSS benefits from small, expressive UI patterns that can be understood quickly. This dropdown demonstrates a paper-fold inspired reveal using transform origins, layered shadows, accessible focus behavior, and reduced-motion support while staying lightweight.

## Accessibility Notes

- Uses semantic navigation, button, list, and link elements.
- The menu opens on hover and `:focus-within` for keyboard access.
- The trigger and menu links include visible focus states.
- Decorative fold marks are hidden from assistive technology.
