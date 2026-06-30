# Scroll Snap Type X Utility

This submission implements a horizontal gallery carousel demonstrating the visual behaviors of `ease-scroll-snap-x-mandatory` and `ease-scroll-snap-x-proximity` utility classes.

---

## Technical Overview

Horizontal scroll snapping coordinates scroll boundaries for mobile sliders, galleries, and carousel layouts without heavy scroll velocity calculation scripts.

The utility definitions are:
- Mandatory Snap (`ease-scroll-snap-x-mandatory`): `scroll-snap-type: x mandatory;` — forces the viewport to snap to a slide boundary immediately upon release.
- Proximity Snap (`ease-scroll-snap-x-proximity`): `scroll-snap-type: x proximity;` — snaps to boundaries only if the scroll release position is close to the threshold.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Swipe or scroll horizontally inside the **Mandatory Snap** container — verify it locks perfectly onto a slide boundary when released.
3. Scroll inside the **Proximity Snap** container — observe that it only snaps if you release near a slide boundary.
