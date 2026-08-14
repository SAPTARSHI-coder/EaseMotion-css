# Vaporwave Grid Pulse Horizon Mixin

1. What does this do? Generates a keyframe animation and utility class that creates a pulsing 3D grid illusion characteristic of vaporwave and synthwave aesthetics.
2. How is it used? Import the mixin and include it:
```scss
@import 'vaporwave-grid-pulse-horizon';

// Use defaults or pass custom duration/timing
@include ease-vaporwave-grid-pulse-horizon(4s, ease-in-out);
```
Apply the generated `.ease-anim-vaporwave-grid-pulse-horizon` class to an element.

3. Why is it useful? It provides a complex, 3D perspective animation with hardware-accelerated transforms that remains performant (60 FPS verified) and fully supports `prefers-reduced-motion` for accessibility.
