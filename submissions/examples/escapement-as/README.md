# Escapement

A pure CSS/HTML lever escapement: an escape wheel that never rotates, only jumps, released one tooth at a time by a balance beating five times a second.

## What it shows

Every mechanical watch has a mainspring trying to dump all its energy at once. The escapement is the thing that refuses to let it.

The name is literal. The wheel does not turn; it **escapes**, one tooth at a time. At every instant one of the lever's two ruby jewels is holding a tooth completely stationary against the full force of the mainspring. The balance swings, nudges the lever, the jewel lifts, exactly one tooth slips past, and the other jewel catches the next one. That is a beat. Meanwhile the wheel gives the balance a tiny push through the same lever, which is the only thing keeping the balance from dying out.

So the escapement does two jobs at once, and they are in tension: it **counts** time by letting the wheel out in equal packets, and it **pays** the balance just enough energy to keep counting.

The balance itself is why a watch works in your pocket. It is a pendulum whose restoring force is a **hairspring**, not gravity, so it does not care which way up it is.

## How it is built

- **`steps(30)` is the entire idea.** The wheel's keyframe is a plain `rotate(0deg)` to `rotate(360deg)`, but the timing function is `steps(30, end)`. It is physically incapable of being between teeth.

  Verified by sampling the wheel's live animation timeline at **3000 points** across one revolution: exactly **30 distinct angles**, and every single gap between them is **12.00°**. Not approximately stepped. Stepped.

- **One tooth per beat, checked.** The wheel does a revolution in `6s` over 30 teeth, so **0.2s per tooth**. The balance's period is `0.4s`, which is two beats, so **0.2s per beat**. Those two numbers are equal, which is the constraint that makes an escapement an escapement, and the check confirms it rather than the comment claiming it.
- **5 beats per second** falls out of the same numbers, matching the label rather than being asserted by it.
- **The lever is locked to the balance**: same duration, verified equal, because a lever that drifted against its balance would be a broken watch.
- **Drawn as the real parts**: undercut tooth faces via `clip-path`, two ruby pallet jewels, an impulse pin on the balance (the single point where balance and lever touch), and a hairspring as a `repeating-radial-gradient` spiral.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` stops all three parts, leaving the wheel locked against a jewel, which is where it spends its life anyway.

## Files

- `demo.html` - markup
- `style.css` - the whole component
