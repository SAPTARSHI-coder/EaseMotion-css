# Jacana

A pure CSS/HTML jacana standing on lily pads, its weight spread across four absurdly long toes.

## What it shows

The jacana is called the lily-trotter because it walks on floating vegetation that should not hold a bird. It does not do this by being light. It does it by having the longest toes, relative to body size, of any bird.

Pressure is force over area. A lily pad cannot take a bird's weight through a point, but it can take it spread across a footprint wider than the bird itself. The toes splay out over several pads at once, so no single one of them is asked to carry much.

Jacanas are also polyandrous. The female holds a territory containing several males, and each male incubates and raises a clutch on his own, often carrying the chicks tucked under his wings.

## How it is built

- **The footprint is the point, so it is measured.** Each foot is four separately angled toes fanning from the ankle. In the browser the front foot spans **117px** against a body **88px** wide, a ratio of **1.33**. The foot really is wider than the bird, which is the fact the animal is built around.
- **Toe angles**: the bird faces left, so three toes fan forward around 180 degrees and the hallux points back. A first pass fanned them radially and one toe stabbed straight down through the pad.
- **The pad bows**: a shadow under the standing foot swells and deepens on the same cycle as the bird's teeter, so the pad reads as flexing under load rather than being a rigid disc.
- **Pad veins**: a `repeating-conic-gradient` from an off-centre origin fans the radial veins the way a real lily pad grows.
- **Balance**: wing and tail counter-rotate against the teeter, which is what the bird does on an unstable surface.
- **The shield**: the pale blue frontal shield and bill are drawn as separate pieces, since that plate of bare skin over the bill is the field mark.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the bird standing, so the splayed foot still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
