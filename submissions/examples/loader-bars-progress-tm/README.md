# Loader — Bars and Progress Bar

## What does this do?
Adds two new loader variants:
- `.ease-loader-bars` — three vertical bars that animate up and down
- `.ease-loader-progress-bar` — a horizontal progress bar that fills
  with a sliding gradient

## How is it used?
Wrap the loader in a region with `aria-busy` and `aria-label`:

    <div role="status" aria-busy="true" aria-label="Loading">
      <span class="ease-loader ease-loader-bars">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </span>
    </div>

    <div role="status" aria-busy="true" aria-label="Loading">
      <span class="ease-loader ease-loader-progress-bar"></span>
    </div>

## Why is this useful?
The existing loader component supports `.ease-loader-spin`,
`.ease-loader-pulse`, `.ease-loader-ping`, and `.ease-loader-dots`.
Bars and progress bars are the two most common loader patterns in
modern UIs, and both are missing.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see both new variants
animating side by side.

## Contribution Notes
- Pure CSS animation
- Respects `prefers-reduced-motion`
- Follows the existing `.ease-loader-dot` pattern for staggered
  animation delays
