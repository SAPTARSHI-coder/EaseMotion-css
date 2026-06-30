# Custom @font-face Typography

## Overview
This example demonstrates self-hosted web fonts using `@font-face` with six weight variants (300, 400, 500, 600, 700, 800). The custom typeface "Satoshi" is declared with `font-display: swap` and compared against the system font stack using Google's Inter font, illustrating the difference between a self-hosted font loading strategy and a CDN-served font.

## Features
- Six `@font-face` blocks covering Light through Extrabold, each with `local()` fallback for installed fonts
- `font-display: swap` strategy to prevent invisible text during load
- Side-by-side comparison with a CDN-served system font stack (Inter)
- Styled weight-sample cards with hover accent effects
- Info section explaining `font-display: swap`, `optional`, and `block` strategies

## Usage
Open `demo.html` in any browser. The Satoshi font files (`.woff2` / `.woff`) should be placed in a `fonts/` subdirectory matching the `url()` paths in `style.css`. Resize the viewport to see how `font-display: swap` handles the flash of unstyled text (FOUT) on a slow connection.
