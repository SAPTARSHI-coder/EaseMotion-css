# Newcomen Engine

A pure CSS/HTML Newcomen atmospheric engine: the first machine that did useful work with fire, and it works by making a vacuum.

## What it shows

The name is the whole point. It is an **atmospheric** engine, not a steam engine in the sense people mean now.

The steam **never pushes anything**. It is admitted at barely above atmospheric pressure, just enough to fill the cylinder and shove the air out. Then Newcomen's actual invention happens: a **jet of cold water is squirted straight into the cylinder**. The steam condenses almost instantly, and where there was steam there is now close to nothing. The piston is left with a vacuum under it and roughly 14 pounds per square inch of sky on top of it, and the atmosphere drives it down.

So the fire's only job is to make the steam that is about to be destroyed. The engine is powered by the weight of the air.

Before this, the standard way to clear a flooded mine was horses. Newcomen's engines were built from about 1712 and ran for two centuries. They were dreadfully inefficient, because the cylinder was heated and chilled on every single stroke, and fixing exactly that is what Watt's separate condenser did sixty years later.

The beam only ever gets **pulled**. The pump side is deliberately heavier, so it falls and cocks the engine for the next stroke. There is no push anywhere in the machine.

## How it is built

- **Cause before effect, and it is measured.** The browser check samples the animation timeline and finds the steam disappears at **44.5%** of the cycle and the piston's fastest fall occurs at **53.2%**. The collapse comes first and the power stroke follows it. If those were reversed, or simultaneous, the component would be claiming the steam pushes, which is the exact misconception the engine is famous for.
- **The steam does not fade, it vanishes.** Its keyframe holds full opacity from 32% to 42% and is at zero by 47%. Five percent of the cycle. That abruptness is Newcomen's insight: do not wait for the cylinder to cool, inject cold water and drop the pressure in half a second.
- **The jet is drawn as a jet**: separate droplets on a staggered `calc(var(--i) * 0.02s)`, firing in the same window, with the injection valve visibly opening on the same frames.
- **The beam is a lever, not a driver**: the beam, piston and pump rod all share one 6s cycle (verified equal), and the beam sweeps 14 degrees while the piston travels 58px. Pump side down at rest, hauled up only during the vacuum stroke.
- **The water lifts on the power stroke only**, because raising water out of a mine is the only reason any of this exists.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and leaves the cylinder full of steam, at the top of the cycle.

## Files

- `demo.html` - markup
- `style.css` - the whole component
