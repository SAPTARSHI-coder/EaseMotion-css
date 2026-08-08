# Archimedes Screw

A pure CSS/HTML Archimedes screw, lifting water up a 28 degree incline without ever lifting the water.

## What it shows

A helical surface inside an inclined tube. Turn it, and water raised from the basin at the bottom pours out at the top. What makes it worth looking at is that no part of the machine ever pushes water upwards.

Each pocket of water sits in a trough between two turns of the helix, resting on the low side of the tube. Its surface is level, as any water surface is. When the screw rotates, that trough does not tilt and does not carry the water up a slope: the helical surface simply rolls out from underneath, and the trough it forms reappears one pitch further along the axis. The water is left behind by a moving surface rather than lifted by it. Every pocket stays at the local bottom the entire time, and the whole assembly rises because the axis it slides along is tilted.

There is a neat consequence for drawing it. Rotating a helix about its own axis is indistinguishable, in side view, from sliding the pattern along that axis; it is the barber-pole illusion. So the entire mechanism is one translation of a periodic pattern, which is also precisely what the machine does to the water.

The geometry is fixed by two numbers. With pitch `p` and inclination `A`, one revolution advances each pocket by `p` along the axis, which is

```
p cos A  along the ground        p sin A  of lift
```

Here `p = 54px` and `A = 28 degrees`, so every turn buys **25.35px** of height.

Named for Archimedes in the third century BC and described in detail by Vitruvius, it was reportedly used to pump bilge water out of the *Syracusia*. It never went away: it still drains Dutch polders and moves sludge through sewage works, and run backwards it makes a hydro turbine gentle enough that fish pass through it unharmed.

## How it is built

- **The lift is measured, not asserted.** Sweeping the paused animation over one full revolution and tracking every pocket: each advances **47.68 px** horizontally and rises **25.35 px**, against `p cos A = 47.68` and `p sin A = 25.35`. The ratio of rise to run is **0.5317**, which is `tan 28` to four places, so the pockets travel exactly along the axis and not merely upwards.
- **The water surfaces really are level, and the check is the bounding box.** Each pocket is a 26 by 11 box counter-rotated against the screw's tilt. Measured on screen it comes back **26 x 11** at every pocket and every sampled frame. Had it inherited the tilt it would have measured **28.12 x 21.92**, so the box itself is the proof.
- **The pockets are exactly one pitch apart**: every adjacent pair measures **54 px**, the same 54 px each of them advances per revolution.
- **The flight is drawn as a surface**, 406 radial ribs running from shaft to tube wall, split into two layers with the shaft between them so the half of each turn passing behind the shaft is genuinely occluded rather than merely dimmed.
- **The loop is seamless by construction.** The pattern is periodic with the pitch, and the animation translates it by exactly one pitch, so the configuration at the end of a turn is identical to the start.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` stops the screw, the pockets and the outflow together, leaving the mechanism and its level pockets readable.

## Files

- `demo.html` - markup
- `style.css` - the whole component
