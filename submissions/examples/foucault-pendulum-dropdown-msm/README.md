# Foucault Pendulum Swing Dropdown

## What does this do?

This submission adds a pure HTML and CSS dropdown menu with a Foucault pendulum swing-inspired interaction style.

## How is it used?

Copy the menu structure from `demo.html` and include the stylesheet:

```html
<nav class="pendulum-dropdown" aria-label="Pendulum navigation">
  <button class="pendulum-trigger" type="button">Open menu</button>
  <ul class="pendulum-menu">
    <li><a href="#">Orbit overview</a></li>
  </ul>
</nav>
```

The example is self-contained and works by opening `demo.html` directly in a browser. It requires no JavaScript, CDN, framework, image, or build tooling.

## Why is it useful?

EaseMotion CSS values motion that feels expressive without becoming heavy. This component demonstrates a dropdown menu with accessible hover and keyboard focus behavior, a pendulum-inspired reveal, smooth hardware-friendly transforms, and reduced-motion support.

## Accessibility Notes

- Uses semantic navigation, button, list, and link elements.
- The dropdown opens on hover and `:focus-within` for keyboard users.
- The trigger and links include visible `:focus-visible` states.
- Decorative pendulum and orbit graphics are hidden from assistive technology.
