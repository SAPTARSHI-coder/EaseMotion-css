# Magnetic 3D Tilt Card (`ease-magnetic-tilt`)

An immersive premium layout card module that responds fluidly to mouse interaction by tracking angles and tilting across a three-dimensional perspective plane without requiring high-overhead JavaScript cursor coordinate loops.

## Under-the-Hood Mechanics

- **Transparent Grid Sensor Substrates:** Employs an overlay network of absolute quadrant sensor tags (`.tilt-trigger`) that isolate mouse coordinates.
- **Asynchronous Sibling Combinators:** Connects cursor tracking hooks via the CSS general sibling combinator (`~`), smoothly adjusting specific target `rotateX()` and `rotateY()` bounding definitions as different segments gain focus.
- **Volumetric Parallax Lift:** Combines parent `perspective: 1000px` contexts with independent internal tracking blocks running `translateZ(30px)`, causing textual items to cleanly pop outward toward the screen during action sequences.

## Workspace Tree

- `demo.html`: Standalone self-contained viewport sandbox structure.
- `style.css`: High performance compositor-friendly rule override sheets.

## By

[Pari Dubey](https://github.com/pari-dubey1)
