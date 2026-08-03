# Microscope

### What does this do?

It shows a lab microscope examining a slide. The focus knob turns back and forth, the objective lenses rack up and down with it, the illuminator glows up through the stage, and the cells on the slide jiggle under magnification. Under reduced motion everything holds still.

### How is it used?

```html
<div class="scope">
  <span class="tube"></span>
  <span class="objective ob1"></span>
  <span class="knob kb"></span>
  <div class="stage"><span class="slide"><span class="cell cl1"></span></span></div>
</div>
```

The knurled focus knob is a `repeating-conic-gradient` of fine ridges with an inset ring. Each objective lens stores its splay angle in a `--r` custom property, so the shared `focus` animation can rack them down without flattening the turret's fan. The illuminator is a `clip-path` cone of light shining up under the slide, whose cells jiggle with Brownian motion.

### Why is it useful?

Science, research, and inspection or "zoom in" themes use a microscope. This builds a working microscope with pure CSS gradients and animation, no images, with a reduced motion fallback.
