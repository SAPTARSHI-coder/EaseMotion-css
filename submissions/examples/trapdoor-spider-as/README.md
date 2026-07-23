# Trapdoor Spider

A pure CSS/HTML trapdoor spider: a silk-lined burrow, a hinged cork lid, radiating trip lines, and a strike that is over before you see it.

## What it shows

A trapdoor spider does not build a web. It builds a **door**.

The lid is a genuine piece of engineering. It is thick, made of soil bound with silk, **beveled on its underside** so it can only seat one way into a matching bevel cut in the rim, and camouflaged on top with moss and grit glued down until it is invisible. It hangs on a silk hinge. Some species hold it shut from underneath with their fangs hooked into the inside, and pull hard enough that you can lift the whole spider by the door.

The spider has almost no vision. What it has is a fan of **trip lines**: silk threads radiating out from the rim across the ground. They are not sticky and they do not catch anything. They are a tripwire. Something walks across one, the spider feels it through the lid, and that is its only warning and its only aim.

Then the hunt happens. The door flies open, the spider comes out to about half its body length, grabs, and is back inside with the lid shut. It is done in a fraction of a second, and the spider may have waited days for it.

## How it is built

- **The waiting is most of the component.** The browser check samples the door's live animation timeline over 1000 points and measures how long it is actually open: **19.8% open, 80.2% shut**. That ratio is the animal. A door that spends its time flapping would be the wrong picture.
- **The lid is drawn as a cork.** It has real thickness, a `clip-path` bevel tapering across its underside, and a silk hinge at one edge, so the way it seats is visible rather than asserted. Moss and grit sit on top.
- **The trip lines fire first.** They twang on a `scaleY` spike at 44% of the cycle, *before* the door opens at 46%. The order matters: the line is the trigger, so the spider cannot react before the wire moves.
- **The strike is nested.** The door swings, the body lunges, the legs brace by scaling their own `--la` angle with `rotate(calc(var(--la) * 1.5))`, and the fangs snap, each on its own keyframe within the same 6s cycle.
- **The ant is why.** It walks in, trips a line, and is gone on the next frame.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and leaves the burrow shut, which is what you would actually find.

## Files

- `demo.html` - markup
- `style.css` - the whole component
