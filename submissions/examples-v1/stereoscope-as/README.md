# Stereoscope

A pure CSS/HTML Holmes stereoscope holding an alpine viaduct stereograph, sliding the card along the rail to focus.

## What it shows

Oliver Wendell Holmes designed this pattern in 1861 and refused to patent it, which is why it became the shape everyone recognises. A hooded pair of prismatic lenses, a wooden septum splitting the two lines of sight, and a wire card holder that slides along a rail until the pair fuses.

A stereograph is not two copies of the same photo. It is two photos taken about as far apart as a person's eyes, so anything close to the camera sits at a different horizontal position in each half while anything far away does not move at all. That difference is the entire illusion.

## How it is built

- **Real disparity**: the two halves are the same markup, but the near subjects (rail posts, foreground trees) are offset horizontally between `.hlL` and `.hlR` while the distant peaks are identical in both. That is the actual geometry of a stereo pair, not a decorative duplicate.
- **The septum**: a raised centre divider running the full depth of the hood, which is what stops each eye seeing the wrong half.
- **The hood**: an asymmetric `border-radius` (`8px 8px 26px 26px / 6px 6px 40px 40px`) gives the flared face-cup, with a `repeating-linear-gradient` wood grain over the base.
- **Lenses**: an off-centre `radial-gradient` puts the highlight up and left on both, with a `box-shadow` ring for the bezel; they brighten on the same keyframe as the focus pull.
- **Focus**: the card and its wire slide share one keyframe and travel down the rail together, which is how you actually focus one of these.
- **Card stock**: warm mount board with a sepia print inset, an ink caption underneath.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and parks the card partway down the rail, so the instrument still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
