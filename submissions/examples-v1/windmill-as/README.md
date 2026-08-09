# Windmill

### What does this do?

It shows a Dutch windmill on a green hill. The four striped sails turn steadily around the hub, clouds drift across the sky behind it, and the mill has a door and round windows. Under reduced motion the sails and clouds stop.

### How is it used?

```html
<div class="mill">
  <span class="body"></span>
  <div class="sails">
    <span class="sail s1"></span>
    <span class="hub"></span>
  </div>
</div>
```

The mill body is a `clip-path` trapezoid with a triangular roof. The four sails are striped bars anchored at a shared center and offset by ninety degrees each; their parent `sails` wrapper runs the `rotate` animation so all four turn together around the hub. Clouds drift on a slow loop behind the mill.

### Why is it useful?

Countryside, energy, and travel scenes use a windmill. This builds a turning windmill with pure CSS shapes and animation, no images, with a reduced motion fallback.
