# Light / Dark Mode

## What does this do?
Demonstrates the CSS `light-dark()` color function with smooth theme transitions based on `prefers-color-scheme`.

## How is it used?
Set `color-scheme: light dark` and use `light-dark(lightVal, darkVal)`:

    body {
      color-scheme: light dark;
      background: light-dark(#fff, #000);
    }

## Why is it useful?
Simplifies theme support without media queries or JavaScript theme toggles.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
