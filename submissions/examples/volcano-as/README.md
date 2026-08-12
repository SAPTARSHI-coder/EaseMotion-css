# Volcano

### What does this do?

It shows an erupting volcano at night. Glowing lava blobs launch out of the crater and arc down the slopes, a molten glow throbs at the rim, a lava flow runs down one side, and dark smoke billows up from the top. Under reduced motion the eruption settles and the lava blobs stay hidden.

### How is it used?

```html
<div class="eruption"><span class="lava lv1"></span>...</div>
<div class="mountain"><span class="glow"></span><span class="flow"></span></div>
```

The mountain is a `clip-path` trapezoid with a crater notch, and the glowing rim throbs with a radial gradient. Each lava blob stores its landing offset in a `--tx` custom property and runs the `launch` animation, arcing up out of the crater and falling back down while fading. Smoke puffs billow upward on a slow loop.

### Why is it useful?

Nature, drama, and game or loading scenes use a volcano. This builds an erupting volcano with pure CSS shapes, custom properties, and animation, no images, with a reduced motion fallback.
