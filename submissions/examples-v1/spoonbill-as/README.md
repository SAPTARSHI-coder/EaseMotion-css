# Roseate Spoonbill

A pure CSS/HTML scene of a roseate spoonbill wading a sunset shallow, sweeping its spatulate bill through the water.

## What it shows

A spoonbill does not hunt by sight. It walks with the bill held slightly open and swings the head side to side through the shallows; when the spoon touches something alive, the bill snaps shut on reflex. The technique only works because the bill flares into a flat paddle at the tip, which is the feature the whole bird is named for.

The pink is dietary. Spoonbills eat crustaceans loaded with carotenoids and turn progressively more rose as they age.

## How it is built

- **The spoon** - the bill is a two-part unit: a slim `repeating-linear-gradient` shaft with a separate paddle whose asymmetric `border-radius` (`60% 26% 26% 60%`) flares only at the far end.
- **The sweep** - the whole neck is a nested box rotating around a shoulder `transform-origin`, so the bill traces a real arc through the water rather than sliding sideways.
- **Submerged parts** - an opaque water body sits behind the bird and a translucent glaze layer sits in front of it. Anything the bird puts below the waterline (bill tip, legs) is tinted by the glaze instead of vanishing behind the water.
- **Disturbance** - a silt cloud tracks the bill under the glaze while surface rings expand above it on a staggered delay, so the sweep visibly stirs the bottom.
- **Plumage** - `repeating-linear-gradient` feather lines over a `radial-gradient` body, deepening from pale shoulder to carmine flight feathers.
- **Balance** - wing and tail counter-rotate against the sweep, which is what keeps the real bird from turning as it swings.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the bird mid-sweep, so the pose still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
