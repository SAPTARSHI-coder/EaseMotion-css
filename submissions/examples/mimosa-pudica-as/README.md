# Mimosa Pudica

A pure CSS/HTML sensitive plant. Hover or focus the leaf and the leaflets fold shut in a travelling wave, then the whole leaf collapses at the pulvinus.

## What it shows

*Mimosa pudica* folds when touched, and the interesting part is the **timing**. The leaflets do not all shut at once. The signal starts where the touch landed and travels outward along the rachis at roughly 2 to 3 cm per second, so you watch a wave of closing run down the leaf. Only afterwards does the main pulvinus at the base give way and drop the entire petiole.

There is no muscle involved. Each pulvinus is a swollen joint whose cells dump potassium, lose turgor pressure, and go limp. It takes several minutes to pump back up, which is why the plant cannot do it repeatedly.

## How it is built

- **Real interaction, no JavaScript**: the fold is a `:hover` / `:focus-visible` state on the plant container. Nothing is scripted, and the `tabindex` plus `:focus-visible` branch means it works from the keyboard too.
- **The travelling wave is `transition-delay`**: every leaflet carries an index `--i`, and its delay is `calc(var(--i) * 0.075s)`. That single line is the whole propagation effect. Leaflet 0 starts immediately, leaflet 6 starts at 0.45s.
- **Folding in pairs**: the upper leaflet pivots at `50% 100%` and the lower one at `50% 0`, and they rotate in opposite directions so the pair closes toward the rachis tip like a book, which is what the real leaf does.
- **The pulvinus goes last**: the petiole's own transition carries a `0.34s` delay, so the leaf only collapses after the leaflet wave has passed. Its `transform-origin` is pinned to the joint, and a marked swelling sits there.
- **The droop overshoots**: the petiole uses a `cubic-bezier` with a negative final control point, so it drops past its resting angle and settles, rather than easing politely into place.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` collapses the transition durations and delays to near zero, so the state change is instant rather than animated. The fold itself still happens, because it is the content, not the decoration.

## Files

- `demo.html` - markup
- `style.css` - the whole component
