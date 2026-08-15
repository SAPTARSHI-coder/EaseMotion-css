# Text Character Bounce Sequence

## What does this do?

It creates a sequential typography bounce animation where individual characters bounce upward one after another when the parent element is hovered.

## How is it used?

Wrap each character of your text inside separate `span` tags and apply the `nav-bounce-chars-uj` class to the parent wrapper:

```html
<nav class="nav-bounce-chars-uj">
  <span>H</span>
  <span>o</span>
  <span>m</span>
  <span>e</span>
</nav>
```

The style sheet natively supports staggered transitions for up to 12 children out of the box.

## Why is this useful?

This effect offers a playful and highly engaging micro-interaction for menus, button triggers, and brand logos. It operates without any JavaScript scripting, runs on compositor-friendly properties (`transform translateY`), and disables all motion when the user requests a reduced motion environment.
