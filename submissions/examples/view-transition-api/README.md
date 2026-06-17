# View Transition API

## What does this do?
Demonstrates the View Transition API for smooth animated DOM changes.

## How is it used?
Wrap DOM mutations in `document.startViewTransition()`:

    const t = document.startViewTransition(() => { /* swap elements */ });

## Why is it useful?
Enables smooth crossfade/morph animations between page states without complex CSS.

## Tech Stack
- HTML
- CSS
- Vanilla JS (View Transition API)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
