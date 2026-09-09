# Diamond Facet Edge Dropdown

## What does this do?

This submission adds a pure HTML and CSS dropdown menu with sharp diamond facet edge styling.

## How is it used?

Copy the dropdown markup from `demo.html` and include `style.css`:

```html
<nav class="facet-dropdown" aria-label="Diamond facet navigation">
  <button class="facet-trigger" type="button">Open menu</button>
  <ul class="facet-menu">
    <li><a href="#">Facet overview</a></li>
  </ul>
</nav>
```

The example works by opening `demo.html` directly in a browser. It does not require JavaScript, remote fonts, images, frameworks, CDNs, or build tools.

## Why is it useful?

EaseMotion CSS benefits from polished interaction examples that remain lightweight. This dropdown pairs crisp geometric surfaces with smooth transform motion, keyboard-accessible focus states, dark mode compatibility, and reduced-motion support.

## Accessibility Notes

- Uses semantic navigation, button, list, and link elements.
- The menu opens with hover and `:focus-within` for keyboard access.
- The trigger and menu links include visible focus states.
- Decorative prism facets are hidden from assistive technology.
