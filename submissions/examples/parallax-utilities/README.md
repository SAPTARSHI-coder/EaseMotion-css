# Pure CSS Parallax Background Utilities

Resolves Issue #59843.

This submission provides a robust set of CSS utility classes to achieve high-performance parallax scrolling without relying on JavaScript scroll listeners. 

## Implementation Strategy
By utilizing CSS `perspective` on a container and translating inner layers along the Z-axis, the browser natively handles depth and scrolling speed differences.
- `perspective: 1px` simulates a 3D viewport.
- `translateZ(-1px) scale(2)` pushes an element back (making it scroll slower) while scaling it up to maintain its original visual dimensions.

## Included Files
- `style.css`: The core utility classes (`.ease-parallax-container`, `.ease-parallax-layer-slow`, etc.)
- `demo.html`: A functional example demonstrating the mountain/forest depth effect.

## Integration
Once the core engine contribution freeze is lifted, these classes can be safely migrated into `easemotion/utilities/parallax.css`.
