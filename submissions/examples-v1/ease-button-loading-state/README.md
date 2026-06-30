# Button Loading State Morph (`ease-button-loading-state`)

An intermediate animation feature utility designed to morph a functional CTA button smoothly into a centered circular loading spinner module upon asynchronous submission triggers.

## Technical Composition Breakdown

- **Fluid Geometry Shrinking:** Maps the transition properties across structural layout boundaries (`min-width` down from `160px` to `48px`), allowing the container frame to cleanly collapse and fit only the spinner footprint.
- **State Segregation Engine:** Coordinates simultaneous visual tracks when the `.ease-loading` flag class is injected—safely dropping element text opacities down to `0` while bringing the spinner to full focus scale.
- **60fps Compositor Rotations:** Employs hardware-isolated infinite keyframe animations on the custom spinning border node via standard compositor tracks to block document layout repaint flags.

## Workspace Tree Map

- `demo.html`: Live interactive sandbox triggering a 3-second morph simulation loop on-click.
- `style.css`: Clean modular component stylesheet blueprint rule layers.

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
