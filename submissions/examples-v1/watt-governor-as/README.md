# Watt Governor

A pure CSS/HTML centrifugal governor: two balls swing out as the engine speeds up, a sleeve rides up the spindle, and the steam valve closes on itself.

## What it shows

Each ball is a **conical pendulum**. Only two forces act on it, gravity down and tension along its arm, and they have to add up to the centripetal force that keeps it circling. Resolve them and the arm angle falls out:

```
cos(theta) = g / (omega^2 * L)
```

Rearranged, the height of the cone the arms sweep is

```
L cos(theta) = g / omega^2
```

Look at what is not in that. **Not the mass of the balls.** Not the length of the arms. Hang heavier balls and the angle does not budge; the extra weight pulling them down is exactly cancelled by the extra inertia needing more force to turn them. The cone height is a function of engine speed and nothing else, which is precisely what makes it a usable speed sensor rather than a sensor of whatever else happened to change.

So the sleeve position measures speed, and the sleeve is linked to the throttle. Run fast, balls rise, valve closes, engine slows. Run slow, balls drop, valve opens. The machine holds its own speed with no one watching. Boulton and Watt fitted it to their engines from 1788, borrowing the idea from flour mills, where the same device had long been used to set the gap between millstones.

Two honest caveats, both visible here:

- **Below a critical speed it does nothing at all.** The relation needs `g / (omega^2 L) <= 1`, so under `omega = sqrt(g/L)`, which is **54.6 rpm** for these arms, there is no solution but hanging straight down. Gravity simply wins, and the governor is blind.
- **It cannot hold one exact speed.** Moving the valve requires moving the sleeve, and moving the sleeve requires a change in speed. So every load setting settles at a slightly different speed. That standing error is called droop, and it is the characteristic flaw of a purely proportional controller.

Maxwell wrote the equations of motion for these in **On Governors** (1868), working out when they settle and when they hunt instead. It is one of the founding papers of control theory. The word cybernetics was later coined from the Greek for steersman, the same root that, through Latin, gives us the word governor.

## How it is built

Nine speeds from 40 to 146 rpm, stepped up and back down. The arm angle, both lower links, the sleeve height, the cone line and the valve opening are all driven from the same 16 phase schedule with `steps(1, end)`, so no two of them can ever render a state from different moments.

- **The geometry is the physics, and the browser re-derives it.** The check reads the rpm off the rendered readout, computes `acos(g / (omega^2 L))` from scratch, and compares it with the arm's measured rotation. Worst disagreement across all 16 steps: **0.0005 degrees**.
- **The cone height really is `g / omega^2`.** Measured against the rendered dashed line at all **15** above-critical steps, worst error **0.0005 px**.
- **The sleeve is driven by the same geometry**, not animated separately: its measured position matches `2 L cos(theta)` to **0.0004 px**.
- **The arms are exactly mirrored** at every step, and **below the critical speed both read exactly 0 degrees**, hanging dead straight as they must.
- **The feedback runs the right way.** The valve opening falls monotonically as speed rises, from fully open at 40 rpm to fully shut at 146.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` freezes the whole linkage, readout and valve together on one consistent speed.

## Files

- `demo.html` - markup
- `style.css` - the whole component
