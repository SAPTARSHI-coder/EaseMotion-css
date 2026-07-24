# Saguaro

A pure CSS/HTML saguaro at sunset: pleats swelling after rain, night flowers opening at the crown, and an elf owl looking out of an old woodpecker hole.

## What it shows

A saguaro is a water tank with an accordion for a skin.

The trunk is fluted into vertical pleats. When rain comes, the cactus drinks hard through a shallow root mat that spreads out as far as the plant is tall, and the pleats **open out like a bellows**. A full-grown saguaro can take on a tonne of water in a few days and gain roughly a quarter of its width. It does not get taller. It gets fatter, then lives off that for a year.

It is slow beyond belief. A saguaro is often 30 years old before it flowers and **can be 75 before it grows its first arm**. The flowers open at night for bats and moths and are shut again by the next afternoon.

The holes are someone else's work. A Gila woodpecker drills a nest cavity, the cactus scars the wound over into a hard waterproof shell (a "saguaro boot"), and years later an elf owl moves into it.

## How it is built

- **The swell is horizontal only, and it is measured.** The trunk animates `scaleX` alone. In the browser it goes from **53.3px to 62.0px wide, a 16.3% gain, with 0.00% height change**. That constraint is the whole biology: the pleats are the only thing that gives, so a uniform `scale` would have been wrong.
- **The pleats spread with it**: the ribs are a `repeating-linear-gradient` inside the trunk, so when the trunk scales, the spacing between pleats genuinely widens. Nothing separately animates the ribs.
- **The arms rebuild their own lean**: they swell too, and their keyframe is `rotate(var(--lean)) scaleX(...)`, because a bare `scaleX` keyframe would have wiped each arm's tilt and snapped it upright.
- **Spine crown**: a `repeating-conic-gradient` of areole spines, masked to a band around the growing tip.
- **The flowers** open and shut on the same long cycle, waxy white and only briefly.
- **The owl** rises into the nest hole and settles back, two yellow eyes in the dark.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and parks the cactus fully swollen, with each arm's lean preserved.

## Files

- `demo.html` - markup
- `style.css` - the whole component
