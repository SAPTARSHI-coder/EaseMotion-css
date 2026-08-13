# Dark Mode Border Glow-Up Tint

Closes #57021

### What does this do?
Adds a smooth border-color and glow transition to a container on hover, shifting from a dull default border to a glowing indigo accent.

### How is it used?
```html
<div class="ease-dark-card ease-border-glow">
  ...
</div>
```

### Why is it useful?
It's a single, composable utility class that adds modern visual hierarchy to layout boxes on hover without triggering layout reflow (only `border-color` and `box-shadow` are animated). It also respects `prefers-reduced-motion` for accessibility.
