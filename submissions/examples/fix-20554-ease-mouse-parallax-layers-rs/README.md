# ease-mouse-parallax-layers

## Issue
**Issue #20554**: Animation: ease-mouse-parallax-layers — multiple layers at different parallax speeds

## Bug
There was no mechanism in EaseMotion CSS to create multi-layer parallax depth. Existing layers all move at the same rate on mouse interaction, losing the 3D depth illusion.

## Fix
Implemented a CSS variable-driven parallax system with 3 depth layers each responding at different translation speeds:
- **Layer 1** (furthest): `0.5x` speed — `translateX(calc(var(--mouse-x) * -15px))`
- **Layer 2** (midground): `1x` speed — `translateX(calc(var(--mouse-x) * -30px))`
- **Layer 3** (closest): `1.5x` speed — `translateX(calc(var(--mouse-x) * -45px))`

## Why It Works
The CSS `calc()` function multiplies the normalized mouse position (−1 to 1) by a layer-specific constant. Faster-moving layers appear closer to the viewer per the parallax principle. The JavaScript only reads and writes the `--mouse-x` / `--mouse-y` CSS variables — all animation is handled by CSS `transform` transitions.

## Verification
Open `demo.html` and hover over the parallax scene box. Move your mouse to all corners to see the three layers shift at distinctly different speeds, creating a convincing 3D depth illusion.
