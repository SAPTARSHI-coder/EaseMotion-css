# Pure CSS Scroll-Driven Top Progress Bar

## What does this do?

An animation-first, zero-JavaScript scroll progress indicator bar fixed to the top of the viewport that grows dynamically as the user scrolls down the page.

## How is it used?

1. Link the component stylesheet:
   `<link rel="stylesheet" href="style.css">`
2. Add the progress bar container at the top of your body:
   `<div class="ease-scroll-progress"></div>`

## Why is it useful?

- **Zero JavaScript**: Offloads scroll calculations entirely to the browser's compositor thread using native CSS scroll timelines.
- **Ultra Performance**: Eliminates layout thrashing and scroll-jacking.
- **Safe Fallback**: Includes `@supports` fallback handling for legacy browsers, ensuring a graceful top-accent style degrades safely.

## Tech Stack

- HTML
- CSS (Pure CSS, no JS)

## Preview

Open `demo.html` directly in your browser and scroll the viewport to see the progress bar grow.
