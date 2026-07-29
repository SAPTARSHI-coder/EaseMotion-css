# Floating Profile Cards (`profile-card`)

A modern, high-fidelity user component layout featuring standard spatial vertical translation triggers that simulate a real-life physical object floating in mid-air over independent ground shadows.

## Technical Composition Breakdown

- **Ground Shadow Spatial Illusion Matrix:** Couples parent wrapper pseudo-elements (`::after`) with primary card node translations. As the card climbs vertical coordinates via `translateY(-12px)`, the base floor shadow automatically scales down and diffuses to preserve geometric light physics.
- **Perimeter Edge Illumination:** Implements sub-pixel crisp borders utilizing low-alpha opacity variables that interactively adjust contrast and glow layers upon user hover focus loops.
- **Accessible Reduced Motion Profiles:** Seamlessly integrates responsive `@media (prefers-reduced-motion: reduce)` rule guards that securely eliminate spatial transformation steps for screen accessibility comfort.

## Workspace Tree Map
- `demo.html`: Minimal independent visual layout container file.
- `style.css`: Clean element blueprint animation rule sheet.

---
Crafted with 💜 by **[Pari Dubey](https://github.com/pari-dubey1)**