# CSS Pulse-Active Accordion (Creative Portfolio)

An artistically asymmetric accordion for Creative Portfolio layouts. Features staggered reveal animations, hand-drawn-style gradient borders, and a pulsing glow on the active project section that mimics a spotlight on a gallery piece.

## Features
- **Spotlight Pulse:** The open item receives a warm, directional glow that pulses gently — like a gallery spotlight breathing.
- **Asymmetric Layout:** Headers use a left-aligned thick accent stripe with varying widths per item, creating a dynamic, non-uniform visual rhythm.
- **Staggered Content Reveal:** Content fades and slides in from alternating directions (left for odd items, right for even) using CSS `:nth-child`.
- **Art-Directed Typography:** Mixed-weight header text with a serif title and sans-serif subtitle for editorial flair.

## Usage
Wrap items in `.portfolio-accordion`. Each `<details>` gets `.portfolio-item`, each `<summary>` gets `.portfolio-header`.

## Files
- `demo.html`: A portfolio-style preview with project case studies.
- `style.css`: Spotlight pulse, asymmetric borders, and staggered reveal animations.
