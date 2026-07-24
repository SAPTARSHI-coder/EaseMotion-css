# Peacock

### What does this do?

It shows a peacock with its train folded behind it. Hovering or focusing the bird makes it display: the eleven feathers sweep out into a full fan, each one unfurling a moment after the one beside it so the tail opens from the middle outward. It works with no JavaScript. Under reduced motion the fan opens without easing.

### How is it used?

```html
<div class="peacock" tabindex="0">
  <div class="fan"><span class="feather fe1"></span>...</div>
  <span class="body"></span>
  <div class="head"><span class="crest"></span></div>
</div>
```

Each feather stores its fanned-out angle in a `--fa` custom property. At rest it is rotated to a fraction of that angle and squashed with `scaleY(0.42)`, so the train reads as folded; on `:hover` it rotates to the full `--fa` and scales back to full height. A `transition-delay` that grows with distance from the center makes the fan ripple open. The iridescent eyespots are concentric-ring radial gradients.

### Why is it useful?

Nature, pride, and reveal or showcase interactions use a peacock. This builds an interactive fanning peacock with pure CSS gradients and transitions, no images or JavaScript, with a reduced motion fallback.
