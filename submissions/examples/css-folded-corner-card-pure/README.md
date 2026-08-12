# CSS Folded Corner Card

A pure CSS card component that features a realistic folded paper corner effect using background linear-gradients and pseudo-element shadows.

## Features
- Pure CSS and HTML (Zero JavaScript or complex SVG manipulation).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--fold-color`, `--bg-base`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Fold Illusion (Documented in Code)**: 
- This component creates the folded corner effect utilizing two clever linear-gradient tricks. 
- **The Cutout**: The main `.folded-card` element uses `background: linear-gradient(-135deg, transparent 42px, var(--card-bg) 0);` to literally cut an angled chunk out of the top-right corner, leaving it completely transparent.
- **The Fold Flap**: A `::before` pseudo-element is absolute positioned in that empty corner. It uses another linear gradient `background: linear-gradient(to bottom left, transparent 50%, var(--fold-color) 0);` to draw the folded triangle overlapping the card.
- A `box-shadow` is applied to the flap to lift it off the card, creating 3D depth.

## Usage
Open `demo.html` in your browser. Hover over the card to see it lift off the page smoothly, demonstrating that the folded corner is fully integrated into the card's bounding box and transform state.

## Files
- `demo.html`: The HTML structure containing the folded card layout.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `linear-gradient` cutout tricks.
