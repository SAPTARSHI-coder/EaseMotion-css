# Loader — Bounce Animation

## What does this do?
Adds `.ease-loader-bounce` — a single circular element that
bounces up and down with a shadow that scales to fake a 3D floor
effect.

## How is it used?
Wrap in a region with `aria-busy` and `aria-label`:

    <div role="status" aria-busy="true" aria-label="Loading">
      <span class="ease-loader ease-loader-bounce"></span>
    </div>

## Why is it useful?
The existing loader variants (spin, pulse, ping, dots, bars,
progress-bar) are all flat 2D. `.ease-loader-bounce` adds a
subtle 3D feel with the synchronized shadow scale, useful for
games, fun apps, or any UI that wants personality.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see the bouncing loader.

## Contribution Notes
- Pure CSS animation
- Respects `prefers-reduced-motion`
