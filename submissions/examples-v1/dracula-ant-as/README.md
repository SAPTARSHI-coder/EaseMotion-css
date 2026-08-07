# Dracula Ant

A pure CSS/HTML *Mystrium camillae*, the animal that holds the record for the fastest movement of any living thing.

## What it shows

The dracula ant's mandible snap is the **fastest known animal movement**: the jaw tips reach about **90 metres per second** and the whole strike is over in a quarter of a millisecond, accelerating at around 100,000 g.

The mechanism is the surprising part. Most fast-striking ants are **trap-jaw** ants: they hold the mandibles wide open, latched, and release them to swing shut. The dracula ant does something completely different. Its jaws are **already closed, pressed tip against tip**, and it **loads them by pushing them together** so hard they bend and store energy like a bow. Then one mandible **slides across the other and slips free**, releasing all that stored strain at once. It is a spring-loaded snap, exactly like snapping your fingers: the power does not come from the muscle's speed, it comes from the sudden release of a loaded surface.

The muscle is slow. The spring is not. Separating the loading from the release is what lets a small animal exceed what any muscle could do directly.

(The name is unrelated to the jaws. Adults cannot eat solid food, so they chew holes in their own larvae and drink the blood, non-lethally. Hence Dracula.)

## How it is built

- **Load slow, release in one frame.** The mandible keyframe holds near its resting angle from 0% to 60%, presses inward to 64%, and the whole 40-degree throw happens between 64% and 66% of the cycle. The browser check samples the mandible's live angle at 1000 points and confirms it spends **89.8% of the cycle within 8 degrees of rest**, with the entire strike landing at **66%**. That ratio is the animal: almost all waiting, then a snap.
- **They press, they do not swing.** The two mandibles start pressed together, not open. The `.loadD` glow builds while they press and vanishes the instant they slip at 66%, so the stored-energy phase is visible.
- **Mirrored jaw, its own keyframe.** The lower mandible carries `scaleY(-1)` and gets a separate keyframe that rebuilds it at every stop, so the snap cannot flip it.
- **Everything fires on frame 66%**: the spark rays, the prey being snatched in, and the ant's recoil all key to the same instant, because in life they are simultaneous.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the jaws loaded with the strain glow showing, so the mechanism reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
