## Overview

Demonstrates fluid responsive sizing using CSS comparison functions `min()`, `max()`, and `clamp()` — enabling responsive typography and layout sizing without media queries. A fluid type scale shows headings that smoothly interpolate between minimum and maximum sizes. A side-by-side comparison contrasts fluid sizing (clamp) with fixed sizing. Additional examples use `min()` and `max()` for one-sided clamping, and `clamp()` for responsive padding and gaps.

## Techniques

- **`clamp(min, preferred, max)`** sets a fluid value that scales between lower and upper bounds based on the viewport-relative `preferred` value (e.g., `clamp(1rem, 3vw, 2rem)`)
- **`min(a, b)`** selects the smaller of two values, useful for capping maximum sizes (e.g., `min(90%, 30rem)`)
- **`max(a, b)`** selects the larger of two values, useful for enforcing minimum sizes (e.g., `max(16rem, 50%)`)
- All sizing in this demo uses `vw`-based preferred values for smooth viewport-driven scaling
- The `<h1>` and other heading elements use `clamp()` directly in the stylesheet as well
- `prefers-reduced-motion` disables scroll-behavior; no motion-based transitions exist in this demo

## Usage

Open `demo.html` and resize the browser window. Observe how fluid text scales smoothly compared to fixed text. Resize to very narrow and very wide viewports to see the clamp bounds in effect. The comparison section highlights the difference between fluid and fixed approaches. The page is fully self-contained with no external dependencies.
