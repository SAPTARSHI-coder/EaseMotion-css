# Tooltip Fade Pop

A pure CSS tooltip that fades and pops in on hover. Supports four directional positions.

## Features

- Fade + scale pop entrance animation
- Arrow pointer via `::before` border trick
- Four positions: top, bottom, left, right via `--top`, `--bottom`, `--left`, `--right` classes
- Customizable via `--tfp-*` CSS custom properties
- Zero JavaScript required
- `prefers-reduced-motion` respected

## Usage

Add `data-tfp="your text"` and the positional class (`--top`, `--bottom`, `--left`, `--right`) to any `.tfp-btn` element. The tooltip appears on hover with a smooth scale + opacity transition.
