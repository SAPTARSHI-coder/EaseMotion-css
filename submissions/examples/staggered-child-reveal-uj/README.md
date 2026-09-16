# Staggered Child Reveal

## What does this do?

It creates a sequential entrance animation utility that reveals child elements one after another using staggered transition/animation delays.

## How is it used?

Apply the `stagger-list-uj` class to the parent list, grid, or flex container holding your child nodes:

```html
<ul class="stagger-list-uj">
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ul>
```

The style sheet automatically configures incremental delay rules for up to 12 children out of the box.

## Why is this useful?

This utility makes it simple to add high-fidelity, sequential entrance wave animations to navigation links, article grids, and list dashboards. It runs on compositor-friendly properties (`transform` translation and `opacity` fade), preserves clean pages without JS overhead, and bypasses animations when the user requests a reduced motion environment.
