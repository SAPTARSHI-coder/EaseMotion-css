# CSS 3D Extruded Long-Shadow Text

1. **What does this do?**
   Creates physical text depth by stacking 20 `text-shadow` declarations at incrementing 1px offsets. On hover, the shadow direction transitions (diagonal → straight-down), making the extrusion appear to rotate as if the light source is moving. Three variants: diagonal extrude, top-left angular extrude, and chrome outlined gradient text.

2. **How is it used?**
   Apply `.extruded-text` to any heading element. Add `.extruded-text--angular` for the top-left variant. Use `.chrome-text` for the gradient outlined version.

   ```html
   <h1 class="extruded-text">DEPTH</h1>
   <h2 class="extruded-text extruded-text--angular">ANGULAR</h2>
   <h2 class="chrome-text">CHROME</h2>
   ```

3. **Why is it useful?**
   Demonstrates that `text-shadow` comma-lists compose into 3D dimensionality. Useful for hero headlines, splash screens, and retro-styled UI. The hover transition teaches that `text-shadow` is animatable — a commonly overlooked CSS fact. Works in all browsers with no dependencies.
