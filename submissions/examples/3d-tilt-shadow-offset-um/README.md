# 3D Tilt Shadow Offset Effect

**EaseMotion CSS Hover Utility Submission** · `submissions/examples/3d-tilt-shadow-offset-um/`

A tactile 3D hover effect that creates the illusion of physical depth by shifting the element up and left while casting its shadow down and right.

---

## 1. What does this do?

It applies a compound transition to `transform` and `box-shadow`. On hover, the element translates slightly negative on the X/Y axes while the shadow offset and blur radius increase in the positive direction, simulating a card lifting closer to a light source.

## 2. How is it used?

Apply the `.ease-tilt-shadow-um` class to any card or interactive container.

```html
<div class="ease-tilt-shadow-um">
  <h3>Interactive Card</h3>
  <p>Hover me to see the 3D lift and shadow shift effect.</p>
</div>
```

## 3. Why is it useful?

It provides a premium, "glassmorphic" or tactile feel to UI elements using only standard CSS properties. It aligns with the EaseMotion philosophy by using performant compositor transitions (`transform`) combined with a carefully eased `box-shadow` to create depth without complex JavaScript or heavy 3D rendering.
