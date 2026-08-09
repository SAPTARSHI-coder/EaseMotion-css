# Click Beetle

A pure CSS/HTML click beetle: stuck on its back, it arches, latches, and fires itself into the air.

## What it shows

A click beetle on its back cannot right itself with its legs. Instead it uses a latch.

A peg on the underside of its prothorax sits against a notch on the abdomen. The beetle arches its body so the peg catches on the lip of the notch, then contracts its muscles hard against that latch. The muscles cannot move the body, so the energy goes into deforming the cuticle itself. When the peg finally slips off the lip, everything stored comes out at once: the body snaps straight, the beetle slams the ground, and it is thrown into the air with a sharp audible click.

This is **latch-mediated spring actuation**, and it beats muscle by a wide margin. Muscle is slow. A latch lets you load slowly and release all at once, so peak acceleration can exceed 300 g, far more than any muscle could deliver directly. The beetle does not aim, so it tumbles.

## How it is built

- **Load slow, release in one frame.** The arch builds across 32% of the cycle and the snap takes **2%**. That ratio is the entire point of a latch, so the keyframe is deliberately lopsided instead of eased evenly.
- **A real hinge**: the fore-body (prothorax, head, antennae, peg) is a nested element whose `transform-origin` is pinned to the hinge point. Rotating it lifts the front and cocks the mechanism, exactly where the beetle bends.
- **The latch is drawn**: the peg rides on the fore-body and the notch sits on the abdomen. The notch compresses and brightens as the strain builds, then releases on the same frame the arch fires.
- **Overshoot**: the snap does not stop at flat, it goes past and rebounds, because the recoil is what launches the beetle.
- **Ballistics**: launch and tumble are separate nested keyframes, so the beetle rises and falls on one and rotates 540 degrees on the other. It lands on its feet by luck, which is honest.
- **Dust** puffs from the strike point on the frame the click lands.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the beetle fully arched and latched, so the loaded mechanism still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
