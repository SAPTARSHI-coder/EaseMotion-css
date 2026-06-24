# prefers-color-scheme

## What does this do?
Demonstrates `prefers-color-scheme` media query with automatic light/dark theme adaptation and smooth transitions.

## How is it used?
Use `@media (prefers-color-scheme: dark/light)` to apply theme-specific styles:

    @media (prefers-color-scheme: dark) {
      body { background: #000; color: #fff; }
    }

## Why is it useful?
Provides automatic theme matching without JavaScript, respecting user OS preference.

## Tech Stack
- HTML
- CSS (media query)
- Vanilla JS (scheme detection display)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
