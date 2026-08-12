# Backface Flip Card

## What it does

An interactive card grid where each card flips 180° on click using CSS 3D transforms. The front face hides with `backface-visibility: hidden` as the back face rotates into view, creating the illusion of a physical double-sided card. The grid is keyboard-accessible and includes "Flip All" / "Reset All" controls.

## How to use it

Open `demo.html` and click any card to flip it. Use the Tab key to navigate and press Enter or Space to toggle. The "Flip All" and "Reset All" buttons batch-toggle every card. Each card has a unique hue defined by a `--hue` custom property.

## Why it fits EaseMotion CSS

The backface-visibility technique is a cornerstone of 3D card-flip animations used across the EaseMotion CSS ecosystem. This example demonstrates `perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden` in a self-contained, accessible grid — patterns that directly map to the library's flip and 3D utility classes.
