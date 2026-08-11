# Crookes Radiometer

A pure CSS/HTML light mill: four black-and-silver vanes spinning in a partly evacuated bulb.

## What it shows

William Crookes built this in 1873 and thought he had measured the pressure of light itself. He had not, and the argument about what actually drives it ran for thirty years and pulled in Maxwell and Reynolds before it was settled.

The vanes are black on one face and silvered on the other. Put the bulb in sunlight and it spins. The obvious explanation is radiation pressure, and it is **wrong for a simple reason you can see**: the shiny face reflects photons and so receives *twice* the momentum of the black face, which absorbs them. If light pressure drove the mill, it would turn **shiny-side-first**. It does not. It turns **black-side-first**, the opposite way, so whatever is pushing is pushing on the dark faces.

The real cause needs the gas that is still in the bulb. A Crookes radiometer is a **partial** vacuum, not a good one. The black face absorbs light and warms; the silver face reflects and stays cool. At the **edges of each vane**, gas molecules near the warm side are hotter than those near the cool side, and they creep from cold to hot along the surface. That flow, **thermal transpiration**, pushes back on the vane's rim and drives it dark-side-away. Osborne Reynolds worked this out in 1879.

Two things confirm it. Pump the bulb down to a genuinely hard vacuum and it **stops**, because there is no gas left to creep. And radiation pressure is real but roughly a **million times** too weak here; it would only win in that hard vacuum where the mill has already stalled.

## How it is built

- **The direction is the whole point, and it is what the component commits to.** The rotor turns with the black faces retreating, which is the observed behaviour and the opposite of what light pressure would give.
- **Each vane genuinely has two different faces.** The browser check reads the computed styles of both halves of a vane and confirms a dark face (`rgb(20, 20, 26)`) and a bright face (`rgb(238, 244, …)`). That temperature difference is the engine, so it is drawn rather than implied.
- **Four vanes at exact right angles**: the check measures their rotations as **0, 90, 180, 270**, with all four gaps at exactly 90 degrees.
- **The bulb is drawn as a partial vacuum**, a sealed glass envelope with the vanes balanced on a needle bearing, which is the low-friction pivot that lets so weak a force turn anything at all.
- **Light arrives from one side**, so the illuminated faces are the ones doing the work.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` stops the rotor and the incoming light, leaving the vanes and their two-tone faces legible.

## Files

- `demo.html` - markup
- `style.css` - the whole component
