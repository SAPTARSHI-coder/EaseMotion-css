# Fix: Missing `.ease-ping` Utility Class

## Bug Description
In `core/animations.css`, the keyframes for ping exist (`@keyframes ease-kf-ping`), but the corresponding `.ease-ping` utility class is completely missing. This prevents developers from applying the ping animation using the standard class-based approach (they can only use it via the `em="ping"` engine attribute).

## Fix
This submission adds the missing `.ease-ping` utility class linking to `ease-kf-ping` with standard animation timings, which should be merged into `core/animations.css`.

## Files
- `style.css` - The missing `.ease-ping` utility class.
- `demo.html` - A demonstration of the ping animation used as a notification dot.
