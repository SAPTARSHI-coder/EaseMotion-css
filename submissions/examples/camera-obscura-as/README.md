# Camera Obscura

A pure CSS/HTML camera obscura: a sunlit landscape outside, a pinhole in the wall, and the same scene landing upside down on the wall of the dark room.

## What it shows

Light travels in straight lines. A ray from the top of the balloon can only reach the far wall by passing through the pinhole and continuing downward, and a ray from the ground can only reach it by continuing upward. The rays cross at the hole, so the image lands inverted. That is the entire device, and it has been known since at least Mozi in the 4th century BC.

A smaller hole gives a sharper but dimmer image, a larger one gives brighter but blurrier. There is no lens and nothing to focus.

## How it is built

- **The projection is not a drawing of an inverted scene. It is the scene.** The room's wall panel contains the same markup as the world outside, wrapped in a `.projO` element carrying `transform: rotate(180deg)`. The balloon is deliberately asymmetric top-to-bottom, so the inversion is unmistakable: in the projection the basket sits above the envelope.
- **Automatic sync**: because both copies run the same `liftO` keyframe with the same timing, the projected balloon drifts in step with the real one for free. Nothing coordinates them.
- **Crossed rays**: two thin beams pivot from the pinhole at equal and opposite angles, meeting exactly at the hole, which is what makes the geometry legible rather than asserted.
- **Not a filter wipe**: the aperture pulse animates `filter`, which would have wiped the projection's own dim/blur filter. The projection gets its own keyframe that rebuilds `brightness(...) saturate(...) sepia(...) blur(...)` at every stop instead.
- **The look**: a `repeating-linear-gradient` scanline grain over the panel, and a heavy dim so the image reads as light on plaster rather than as a window.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe. The inversion is a static `transform`, so the whole point of the component survives with motion off.

## Files

- `demo.html` - markup
- `style.css` - the whole component
