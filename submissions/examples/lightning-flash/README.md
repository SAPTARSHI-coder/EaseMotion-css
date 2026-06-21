# Lightning Flash Effect

**What is it?**
A stormy night scene with three distinct lightning bolts striking at staggered intervals, accompanied by ambient sky flashes.

**How it works**
Each `.lightning` uses `clip-path` for a jagged bolt shape. The `lightning-strike` keyframe rapidly toggles opacity with brightness for the flicker. The `.sky` has `flash-ambient` which briefly lightens the background in sync with strikes.

**Why this approach**
Pure CSS lightning with `clip-path` bolts and rapid opacity flicker simulates the erratic nature of real lightning without canvas or JS.
