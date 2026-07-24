# Pure CSS Skeleton Shimmer Loading Card

## What does this do?

An animation-first, zero-JavaScript skeletal loading screen container that renders mock UI boxes with a smooth infinite sliding gradient shimmer wave effect.

## How is it used?

1. Link the component stylesheet:
   `<link rel="stylesheet" href="style.css">`
2. Create the skeleton components stack wrapping each with the `.ease-shimmer` utility class:
   ```html
   <div class="ease-skeleton-card">
     <div class="ease-skeleton-media ease-shimmer"></div>
     <div class="ease-skeleton-title ease-shimmer"></div>
     <div class="ease-skeleton-text ease-shimmer"></div>
     <div class="ease-skeleton-button ease-shimmer"></div>
   </div>
   ```

## Why is it useful?

- **Zero JS Overhead**: Computes background gradient transition shifts completely on the GPU render layer.
- **Improved UX**: Reduces perceived page load time by providing visual structure layout hints before real content finishes fetching.
- **Flexible & Modular**: Individual skeleton sizing utility blocks can be rearranged to fit any target UI mockup layout.

## Tech Stack

- HTML
- CSS (Pure CSS, no JS)

## Preview

Open `demo.html` directly in your browser to watch the shimmer wave loop sweep.
