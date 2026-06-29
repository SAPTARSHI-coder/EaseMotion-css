# Marquee — 3x and Half Speed Variants

## What does this do?
Adds two marquee speed presets that complement the existing
x-fast / fast / normal / slow / x-slow scale:
- `.ease-marquee-3x` — 3x the normal speed (roughly 7s loop)
- `.ease-marquee-half` — half the normal speed (40s loop)

## How is it used?
Apply the variant alongside `.ease-marquee`:

    <div class="ease-marquee ease-marquee-3x">
      <div class="ease-marquee-track">...</div>
    </div>

## Why is it useful?
The existing speed scale (x-fast through x-slow) doesn't include
fractions of the normal speed. A 3x and a half speed preset
cover the common extremes designers ask for.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see the two new speeds.

## Contribution Notes
- Pure CSS addition
- Works with the existing `ease-marquee-pause-on-hover` and
  `ease-marquee-pause-on-focus` variants
