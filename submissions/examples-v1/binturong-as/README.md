# Binturong

A pure CSS/HTML binturong hanging beneath a branch, its prehensile tail hooked over the top as a fifth limb.

## What it shows

The binturong, or "bearcat", is neither bear nor cat. It is a large civet, and two things about it are genuinely unusual.

**Its tail is a fifth limb.** It is thickly furred, as long as the animal's own body, bare and calloused on the underside of the tip, and fully prehensile. The binturong is the **only carnivore in the Old World with a gripping tail** (the kinkajou, the only other one, is in the Americas). It uses it to hang, to brake while descending head-first, and to hold on while both hands are busy with fruit.

**It smells of hot buttered popcorn.** This is not a metaphor. The scent comes from **2-acetylpyrroline**, the exact same molecule produced when you pop corn or bake bread. The binturong makes it in its urine and scent-marks its territory with it, so a patch of rainforest occupied by a binturong smells like a cinema.

They are slow, heavy, and largely fruit-eating, and they are important seed dispersers, one of the few animals that can digest the tough seeds of the strangler fig.

## How it is built

- **The tail is genuinely body-length, and it is checked.** The browser check measures the tail against the body: **118px against 117px, a ratio of 1.01**. The tail is longer than the whole body, which is the claim, so it is measured rather than asserted.
- **It grips the branch, verified.** The tail tip curls up and over the top of the branch, and the check confirms the tip's bounding box reaches the branch. The callused pad is drawn on the *upper* inner face of the tip, because that is the surface that actually presses the bark. That grip is why the animal can hang there at all.
- **Hanging, not standing on top.** Both limb grips curl *up* over the branch and the body hangs beneath it, so the pose reads as suspended rather than perched.
- **The popcorn is shown**: warm golden scent motes waft up and spread from the animal on a staggered loop, keyed to the 2-acetylpyrroline the caption names.
- **Field marks**: the long dark ear tufts that overshoot the ear rims, the shaggy black coat drawn with a `repeating-linear-gradient`, and the reddish eyeshine.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and hides the drifting scent, leaving the animal hanging.

## Files

- `demo.html` - markup
- `style.css` - the whole component
