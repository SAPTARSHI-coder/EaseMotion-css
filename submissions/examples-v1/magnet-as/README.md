# Magnet

### What does this do?

It shows a horseshoe magnet with iron filings scattered below it. Hovering or focusing the magnet energizes it: the field lines appear and pulse between the poles, and the filings snap upward and rotate to align themselves with the field. It works with no JavaScript. Under reduced motion the filings snap without easing.

### How is it used?

```html
<div class="magnet" tabindex="0">
  <span class="arc"></span>
  <span class="polen"></span>
  <span class="field fd1"></span>
  <span class="filing fg1"></span>
</div>
```

The horseshoe is one element: a circle with a thick border and a transparent bottom edge, which leaves exactly the U shape. The field lines reuse the same trick at larger radii with a dashed border. Each filing gets its own `transform` on hover, translating toward the nearest pole and rotating to lie along the field, so the scatter resolves into a coherent pattern rather than every piece moving the same way.

### Why is it useful?

Science, attraction, and "pull" or magnetism metaphors use a magnet. This builds an interactive magnet with pure CSS shapes and transitions, no images or JavaScript, with a reduced motion fallback.
