# Magnetic Hover Button

A button that follows the cursor with a magnetic pull effect. JS calculates cursor position relative to center and sets `--mx` and `--my` CSS variables; CSS applies a bounce transform and glow effect.

## Features

- Magnetic pull toward cursor position
- Smooth bounce cubic-bezier transition
- Gradient background (red to yellow)
- Glow pseudo-element on hover
- Driven by `--mx` and `--my` CSS custom properties

## Usage

Create a `.magnet-btn` element with `--mx` and `--my` CSS variables. JS updates these on mousemove to pull the button toward the cursor.
