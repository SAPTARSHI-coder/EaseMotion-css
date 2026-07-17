# Vampire Squid

A pure CSS/HTML *Vampyroteuthis infernalis* pulling its cloak inside out into the pineapple posture.

## What it shows

The vampire squid is neither a squid nor a vampire, and it does not attack anything. It drifts in the oxygen minimum zone, several hundred metres down, eating marine snow.

Threatened, it does the one thing it can: it pulls its webbed arms up and over its own head. The web turns inside out, the body disappears inside it, and the soft spines that were harmlessly lining the inner surface end up bristling on the outside. That is the pineapple posture, and it turns the animal into a ball that appears to be all spines and no squid.

It cannot ink. Living where it does, there is no light to hide from and no energy to spare. Instead it can eject a cloud of glowing mucus, and it carries photophores at its arm tips. Its eyes are the largest of any animal relative to body size.

## How it is built

- **The inversion is a real rotation.** The whole arm cluster is one element with `transform-origin: 50% 0` at the point where the arms meet the head. Rotating it 172 degrees folds it up and over, which is exactly what the animal does. The web, arms, spines and photophores all come along because they are children of it.
- **The spines end up outside for free.** The cirri layer is drawn on the inner face of the relaxed web. Once the cluster rotates over, that face is on the outside. Nothing repositions them; the rotation does it.
- **Enveloping, not hiding behind.** The cloak sits above the mantle in the stacking order, so when it inverts it covers the body rather than tucking behind it. That is the entire defence, so it had to read that way.
- **The web**: a `repeating-conic-gradient` fanning from the arm crown, masked with a `radial-gradient` so it fades at the margin instead of ending in a hard box.
- **Photophores**: one per arm tip, flashing on a stagger of `calc(var(--i) * 0.07s)` so the light runs around the rim rather than blinking as a block.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and parks the animal in the inverted posture with the spines out, so the defence still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
