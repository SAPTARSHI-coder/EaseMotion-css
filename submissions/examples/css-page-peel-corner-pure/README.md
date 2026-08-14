# CSS Page Peel Corner

A pure CSS interactive component where the top-right corner of a card peels back smoothly on hover, revealing hidden content or imagery underneath, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--reveal-bg`, `--fold-base`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a high-contrast dark mode variant.
- **Peel Architecture (Documented in Code)**: 
  - The card utilizes three layered `div` elements managed by `z-index`.
  - **The Reveal Layer**: Positioned at the absolute bottom (`z-index: 1`), holding the secret content.
  - **The Main Layer**: Positioned in the middle (`z-index: 2`). We use `clip-path: polygon` to cut a small "dog-ear" off the top right corner by default. On `:hover`, CSS variables defining the polygon vertices are transitioned to expand the cut, exposing the reveal layer below.
  - **The Fold Layer**: Positioned on top (`z-index: 3`). This piece simulates the physically curled paper. We use a complex `linear-gradient` to create the lighting and shadow effects of the paper bending back. On `:hover`, this element scales up perfectly in sync with the `clip-path` expansion beneath it.
- Fully accessible with `prefers-reduced-motion` support. The peeling animation is disabled for motion-sensitive users, acting instead as a sudden state-swap. The `:focus-within` pseudo-class ensures keyboard navigators can trigger the reveal.

## Usage
Open `demo.html` in your browser. Hover your mouse (or tab focus) over the card to see the top-right corner smoothly peel backward and cast a realistic shadow over the hidden content.

## Files
- `demo.html`: The HTML structure containing the three required layers (reveal, main, fold).
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `clip-path` polygon animation trick.
