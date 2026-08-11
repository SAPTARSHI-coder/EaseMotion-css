# Hoatzin

A pure CSS/HTML hoatzin on a branch over an Amazon oxbow, with a chick hauling itself back up out of the water on the claws of its wings.

## What it shows

The hoatzin is a bird that eats leaves, which almost no bird does, because leaves are not worth the trouble.

To make it work it grew a **crop the size of its chest** and turned it into a fermentation vat, the way a cow uses a rumen. Bacteria break the leaves down over roughly 24 to 48 hours. The cost is enormous: the crop is so big it crowds out the flight muscles, so the hoatzin is a famously poor flier, and the fermentation makes it smell strongly enough to be called the stinkbird. Nobody hunts it.

The chicks are the other half of the story. Threatened by a snake or a monkey, a hoatzin chick **drops out of the nest into the water below**, swims, waits, and then climbs back up the branches using **two functional claws on the leading edge of each wing**. It uses its wings as hands. It loses the claws as an adult.

## How it is built

- **The crop is oversized on purpose.** Measured in the browser it is **42% of the body's area**, drawn as its own bulging element in front of the chest. That absurd proportion is why the bird can barely fly, so under-drawing it would lose the point.
- **It ferments**: the crop kneads on a non-uniform keyframe, squashing one way and then the other, with a `repeating-radial-gradient` churn layer swirling inside it.
- **The chick's climb is the composition.** Three nested keyframes: the body hauls up an arc from the water to the branch, the arm reaches and pulls on its own timing, and the claws **open on the reach and close on the pull**. It starts in the river and finishes standing on the branch beside the adult.
- **The claws are drawn as claws**, hooked and on the leading edge of the wing, because they are the entire reason anyone knows this bird.
- **The crest**: seven separate quills, each keeping its own `--q` lean through the shared bristle keyframe via `rotate(calc(var(--q) + 6deg))`.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and parks the chick mid-climb with its claws hooked, so the behaviour still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
