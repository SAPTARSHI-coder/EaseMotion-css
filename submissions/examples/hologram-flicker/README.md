# Hologram Flicker Effect

**What is it?**
A holographic display card with flicker, chromatic aberration, scanlines, and glitch effects that simulate a sci-fi hologram projection.

**How it works**
Multiple layered animations: `hologram-flicker` varies opacity erratically to mimic unstable projection; `icon-glitch` shifts position and applies hue-rotate for chromatic shift; `scan-move` scrolls scanline overlay vertically; `glitch-sweep` sweeps a bright line across the card at random intervals.

**Why this approach**
Combining flicker, color shift, scanlines, and line sweeps creates a rich hologram illusion using only CSS animations -- no JavaScript or canvas needed.
