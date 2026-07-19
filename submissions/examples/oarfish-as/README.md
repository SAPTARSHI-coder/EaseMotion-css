# Oarfish

A pure CSS/HTML giant oarfish hanging head-up in the mesopelagic, driving itself with the dorsal fin alone.

## What it shows

The giant oarfish is the longest bony fish there is, reaching eleven metres. It has no scales, no swim bladder, and no teeth. It is a ribbon of silver guanine that eats krill.

Two things about it are worth drawing:

**It swims vertically.** Submersible footage found oarfish hanging head-up in the water column, not lying horizontal like a normal fish. The old "sea serpent" sightings are almost always dying ones that have come to the surface and gone sideways.

**It swims by its fin, not its body.** This is **amiiform locomotion**: the body stays nearly rigid while a wave travels along the long dorsal fin, and that wave does all the work. It is precise and quiet and lets the animal hover.

## How it is built

- **The travelling wave is `animation-delay`, and nothing else.** All 26 dorsal rays run the *same* keyframe. Each one is offset by `calc(var(--i) * -0.085s)` from the ray above it. Measured in the browser, the phase advances **exactly 0.085s per ray**, so across the fin the total offset is 2.125s against a 1.7s period, giving about **1.25 wavelengths** visible along the body at any moment. That stagger is the entire propulsion effect.
- **Fin large, body small.** The rays throw ±20 degrees while the body segments shift by 2.5px. That ratio is what makes it amiiform rather than an eel: if the body undulated as much as the fin, this would be the wrong animal.
- **A real ribbon**: 26 stacked segments, tapering **31%** from head to tail, so the wave has something to travel along and the tail does not end in a blunt stub.
- **The oars**: long pelvic rays with a paddle at the tip, hanging off the belly (the side opposite the dorsal fin). They are what the fish is named for and they do not propel it.
- **The crest**: the first dorsal rays drawn out over the head, each keeping its own `--pl` lean through the shared keyframe.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe. The fin holds its staggered pose, so the wave shape is still visible frozen.

## Files

- `demo.html` - markup
- `style.css` - the whole component
