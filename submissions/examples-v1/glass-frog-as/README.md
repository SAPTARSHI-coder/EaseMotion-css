# Glass Frog

A pure CSS/HTML glass frog resting on a leaf, its heart visibly beating through a transparent belly.

## What it shows

Glass frogs are green on top and glass on the bottom. Turn one over and the ventral skin is genuinely transparent: you can see the heart beating, the white coil of the gut, the dark lobe of the liver, and the bones through it.

It is not a party trick. The transparency is camouflage. Resting on a backlit leaf, the frog's edges glow the same green as the leaf, so it has no silhouette to give it away. Recent work found that sleeping glass frogs pack most of their red blood cells into the liver, which makes them measurably clearer while they sleep.

## How it is built

- **Real transparency**: the body is `rgba(150, 206, 132, 0.36)`, not a solid green. The leaf and its veins are genuinely rendered underneath and read through the frog, which is what makes the camouflage legible instead of implied.
- **Layered viscera**: gut, liver, and heart sit above the body fill but *below* a translucent skin pane, so they look like organs seen through skin rather than stickers on top of it.
- **The gut**: a `repeating-conic-gradient` gives the packed intestinal coil its banding.
- **The heartbeat**: a multi-stop keyframe with a hard systolic spike and a smaller second bump, so it reads as a real cardiac cycle rather than a sine pulse.
- **Skin sheen**: the pane's highlight is deliberately parked in the upper-left corner. Centred over the chest it washed the heart out completely.
- **Leaf**: a `repeating-conic-gradient` from an off-centre origin fans the side veins out from the midrib.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the frog at rest, so the anatomy still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
