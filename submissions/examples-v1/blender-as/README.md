# Blender

### What does this do?

It shows a kitchen blender full of fruit. Hovering or focusing it switches the machine on: the blades spin up, the fruit chunks churn around the jar, the lid rattles, the power light turns green, the dial twists, and the contents blend from green to a pink smoothie. It works with no JavaScript. Under reduced motion the blades and chunks stay still while the color and light still change.

### How is it used?

```html
<div class="blender" tabindex="0">
  <span class="lid"></span>
  <div class="jar"><span class="smoothie"></span><span class="chunk ch1"></span><span class="blade"></span></div>
  <div class="base"><span class="knob"></span><span class="led"></span></div>
</div>
```

The jar is a `clip-path` tapered glass with `overflow: hidden`, so the liquid and fruit stay inside. On `:hover` or `:focus` the blade runs a very fast `whirl`, each chunk follows a looping `churn` path, and the `smoothie` transitions to a new color, so the drink appears to actually blend.

### Why is it useful?

Kitchen, recipe, and processing or "mixing" themes use a blender. This builds an interactive blender with pure CSS shapes and animation, no images or JavaScript, with a reduced motion fallback.
