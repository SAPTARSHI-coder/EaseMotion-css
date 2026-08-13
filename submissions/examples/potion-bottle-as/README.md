# Potion Bottle

### What does this do?

It shows a glass potion bottle filled with glowing green liquid. The liquid sloshes gently, bubbles rise and pop at the surface, and wisps of fume drift up from the mouth of the bottle. Under reduced motion the liquid settles and the bubbles and fumes stay hidden.

### How is it used?

```html
<div class="potion">
  <span class="cork"></span>
  <div class="flask"><span class="liquid"><span class="bub b1"></span></span></div>
</div>
```

The flask is a rounded glass shape with `overflow: hidden` so the liquid stays inside. The `liquid` fills the lower part and sloshes with a small rotation, while each `bub` runs the `bubble` animation, floating up and fading as it reaches the surface. Fume wisps rise from the neck to suggest a magical brew.

### Why is it useful?

Game, fantasy, and lab or health themes use a potion. This builds a bubbling potion bottle with pure CSS shapes and animation, no images, with a reduced motion fallback.
