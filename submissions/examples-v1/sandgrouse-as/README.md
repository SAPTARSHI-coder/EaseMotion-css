# Sandgrouse

A pure CSS/HTML male sandgrouse rocking belly-down into a desert puddle to load his feathers with water.

## What it shows

Sandgrouse nest in deserts, far from any water, and their chicks cannot fly. So the male commits to one of the strangest daily errands in biology: he **carries water home in his own feathers**.

His belly feathers are unlike anything else. The barbs are tightly coiled when dry, and when they get wet they **uncoil and interlock into a dense mat** that holds water by capillary action instead of shedding it. He wades in, rocks forward, and rubs his belly in the puddle for several minutes to charge them.

Then he flies up to 30km home carrying **25 to 40ml of water** in his plumage, in dry desert air, and the chicks strip it out of him with their beaks.

## How it is built

- **The barbs uncoil in a wave.** All 16 barbs run the same keyframe, each delayed by `calc(var(--i) * 0.045s)`. Measured in the browser, the phase steps exactly **0.045s per barb**, so the belly wets progressively across its width instead of all at once. That is what soaking looks like.
- **Coiled versus loaded.** The barbs sit at `scaleY(0.72)` dry and open to `scaleY(1)` wet, which is the actual mechanism: the barb geometry changes state when it takes on water.
- **The rock is a hold, not a dip.** The keyframe drops the bird belly-down and then **stays there for 38% of the cycle** before rising. A real male rubs his belly in the puddle for minutes. A quick bob would be the wrong behaviour.
- **The belly is a patch, not sticks**: a soft feather base under the barbs, so the tract reads as plumage.
- **Drips** fall from the loaded belly as he lifts, because the mat is not perfect.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the bird belly-down with the barbs open, so the loading pose still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
