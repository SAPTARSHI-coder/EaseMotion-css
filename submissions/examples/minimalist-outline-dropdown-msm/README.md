# Minimalist Outline Dropdown

## What does this do?

The Minimalist Outline Dropdown adds a crisp HTML/CSS dropdown menu with hairline borders, restrained movement, and clean focus states.

## How is it used?

Place the dropdown inside a navigation area and include the local stylesheet:

```html
<nav class="outline-dropdown" aria-label="Documentation navigation">
  <button class="outline-trigger" type="button" aria-haspopup="true">
    Documentation
    <span class="arrow" aria-hidden="true"></span>
  </button>

  <ul class="outline-menu" aria-label="Documentation sections">
    <li><a href="#start">Start guide</a></li>
    <li><a href="#patterns">Patterns</a></li>
    <li><a href="#api">API notes</a></li>
  </ul>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users a lightweight dropdown pattern that feels precise, accessible, and easy to adapt without JavaScript or external dependencies.
