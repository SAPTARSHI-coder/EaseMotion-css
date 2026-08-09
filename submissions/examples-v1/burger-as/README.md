# Burger

### What does this do?

It shows a stacked cheeseburger on a board. It bobs gently on its own, and hovering or focusing it pulls the burger apart: the top bun lifts, the lettuce, tomato and cheese each follow by a smaller amount, so the stack fans open and settles back when you leave. Under reduced motion the bob and the fan both stop.

### How is it used?

```html
<div class="burger" tabindex="0">
  <span class="top"></span>
  <span class="seed sd1"></span>
  <span class="lett"></span>
  <span class="patty"></span>
</div>
```

The exploded view is just four `transition`s with different travel distances, so the layers separate at different rates and the stack reads as one object coming apart rather than a rigid block moving. Each sesame seed keeps its tilt in a `--se` custom property, and the hover rule reapplies `rotate(var(--se))` alongside the lift, so the seeds rise with the bun without snapping flat. The cheese slice gets its soft melted underside from three hard stop `radial-gradient` bulges painted into its own background, so no drip elements are needed.

### Why is it useful?

Food, delivery, and menu themes use a burger. This builds one with pure CSS gradients and transitions, no images and no JavaScript, with a reduced motion fallback.
