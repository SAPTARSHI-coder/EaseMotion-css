# Dreamcatcher

### What does this do?

It shows a dreamcatcher hanging under the stars. The hoop sways gently on its cord, the three feathers swing beneath it on staggered timings, the bead at the center of the web glows and fades, and stars twinkle behind it. Under reduced motion everything hangs still.

### How is it used?

```html
<div class="catcher">
  <div class="hoop"><span class="web"></span><span class="web2"></span><span class="bead"></span></div>
  <div class="dangle dg1"><span class="string"></span><span class="feather"></span></div>
</div>
```

The woven web costs two elements, not dozens: a `repeating-conic-gradient` draws every radial thread from the center, and a `repeating-radial-gradient` draws the concentric rings that cross them, both clipped to the hoop by `overflow: hidden`. Each feather hangs from a `transform-origin` at the top of its string, so it swings from where it is tied rather than pivoting about its middle.

### Why is it useful?

Boho, sleep, and calm or spiritual themes use a dreamcatcher. This builds a swaying dreamcatcher with a gradient-woven web, no images, with a reduced motion fallback.
