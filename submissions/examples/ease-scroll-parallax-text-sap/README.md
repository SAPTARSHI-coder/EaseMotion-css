# ease-scroll-parallax-text-sap

A large heading that drifts vertically at a fraction of scroll speed, offset relative to its container's centered position.

## Notes
- Offset is calculated relative to the section's distance from viewport center (not just `top`), so the text is perfectly centered exactly when the section itself is centered in the viewport.
- Respects `prefers-reduced-motion`: checked via `matchMedia` in JS, skipping the update function entirely; a CSS `!important` fallback also locks the transform to neutral.