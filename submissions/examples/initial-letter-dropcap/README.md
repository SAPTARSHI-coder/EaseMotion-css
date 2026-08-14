# initial-letter Drop Cap

## Overview
This example demonstrates the `initial-letter` CSS property for creating typographic drop caps. Four variants are shown — 2-line, 3-line, 4-line (sink 3), and 3-line (raised, sink 1). A `@supports` feature query scopes the modern property so that non-supporting browsers receive a floated `<span>` fallback with proportional font sizing.

## Features
- `initial-letter` property with `-webkit-` prefix for Safari/Chrome compatibility
- Four drop cap sizes: 2-line, 3-line, 4-line (sink 3), 3-line (raised sink 1)
- Graceful fallback using `float: left` and proportional `font-size` for `initial-letter` values
- `@supports (initial-letter: 2)` at-rule to conditionally apply the modern property
- Serif typeface (Georgia) for the drop caps, system-ui for supporting text
- Dark theme (`#0a0f1e` background, `#e2e8f0` text) with pink accent (`#ec4899`)

## Usage
Open `demo.html` in Safari or Chrome 110+ to see `initial-letter` in action. In Firefox or older browsers, the float-based fallback renders a proportional drop cap. Resize the viewport to observe reflow behaviour.
