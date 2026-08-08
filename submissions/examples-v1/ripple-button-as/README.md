# Ripple Effect Button

### What does this do?

It gives a button a ripple, an expanding circle that fades out from the center, each time it is pressed, using only CSS.

### How is it used?

```html
<button class="ripple-btn" type="button">Click me</button>
<button class="ripple-btn is-ghost" type="button">Ghost</button>
```

The ripple is a `::after` pseudo element that animates from a small scale to a large one and fades out on the `:active` state. Add `is-ghost` for the outline variant.

### Why is it useful?

A ripple gives a button a tactile, responsive feel on press. This plays a one shot expand and fade on `:active` with only a pseudo element and a keyframe, so it needs no JavaScript. The button shows a visible focus ring, and the ripple is disabled under `prefers-reduced-motion: reduce`.
