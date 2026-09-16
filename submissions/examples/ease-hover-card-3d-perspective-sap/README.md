# ease-hover-card-3d-perspective-sap

A card that tilts back on a single X-axis with a fixed angle on hover, simpler than full cursor-tracking tilt.

## Notes
- Single-axis `rotateX` (not cursor-tracked) keeps this lightweight — no JS needed at all.
- Respects `prefers-reduced-motion`: tilt transform removed, shadow-only feedback remains.