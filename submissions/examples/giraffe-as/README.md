# Giraffe

### What does this do?

It shows a giraffe on the savanna. Its long neck sways slowly as it reaches, its tail flicks, and it blinks. Under reduced motion the giraffe stands still.

### How is it used?

```html
<div class="giraffe">
  <span class="bodyg"></span>
  <div class="neckg">
    <span class="maneg"></span>
    <div class="headg"><span class="ossi os1"></span><span class="muzzleg"></span></div>
  </div>
</div>
```

The patches are stacked hard-stop `radial-gradient` layers, one per spot, painted directly onto the body and neck fills. Because they are part of the background rather than child elements, they clip automatically to the animal's rounded silhouette and travel with the neck as it sways, with no extra markup. The neck pivots from its base so the head arcs rather than sliding.

### Why is it useful?

Safari, wildlife, and "reach" or growth themes use a giraffe. This builds a giraffe with gradient-painted spots in pure CSS, no images, with a reduced motion fallback.
