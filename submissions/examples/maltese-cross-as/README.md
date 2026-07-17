# Maltese Cross

A pure CSS/HTML Geneva drive: a wheel turning at a constant speed, and a cross that moves in four hard quarter-turns and is locked solid the rest of the time.

## What it shows

This is the mechanism that made cinema work.

Film cannot be pulled through a projector smoothly. Each frame has to be **slammed into the gate, held perfectly still while the shutter is open, and then jerked away** in the dark. If the film moved while you were looking at it you would see a smear. So you need something that converts continuous rotation into a stop-and-go, with a long stop and a short go, and which holds the film *rigidly* during the stop rather than just slowly.

The Geneva drive does exactly that with no electronics and no brakes. A pin on the continuously turning drive wheel drops into one of four slots and sweeps the cross round by 90 degrees. Then the pin leaves the slot, and a **locking disc** on the same drive, with one bite cut out of it, rolls against the cross's concave flank and physically jams it. The cross cannot move even if you push it.

It also came from watchmaking, where it was used the other way round: to stop a mainspring being wound too far.

## How it is built

- **The duty cycle is real, and it is measured.** The check samples the cross's actual animation timeline and computes how much of the time it is turning. Result: **moving 24.9%, locked 75.1%**. That 1:3 split is the defining property of a four-slot Geneva, and it is what buys the shutter its open window.
- **Four steps per revolution, from the timings.** The drive is `2s` and the cross is `8s`, so the measured ratio is **exactly 4**. Each step holds for 18.75% of the cross cycle and turns in 6.25%, and that 6.25% of 8s is 0.5s, precisely a quarter of one drive turn: the window the pin is inside a slot.
- **The film is slaved to the cross.** Same duration, same keyframe shape, so the strip advances only while the cross turns and is dead still while it is locked. That is the entire point of the mechanism.
- **Geneva geometry**: the wheel is a square with a concave arc bitten out of each corner (four composited `radial-gradient` masks with `mask-composite: intersect`) and four radial slots between them. The concave flanks are what the locking disc rides against.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and leaves the mechanism at rest, pin clear of the slots and disc locked.

## Files

- `demo.html` - markup
- `style.css` - the whole component
