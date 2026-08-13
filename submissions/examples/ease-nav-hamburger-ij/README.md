# Nav Hamburger

An animated hamburger menu icon that morphs into an X when open. State via `--hm-open` (0 or 1). CSS handles the line rotations, opacity, and scale transitions with bounce cubic-bezier.

## Features

- Hamburger to X morphing animation
- Open state via `--hm-open` CSS variable
- Top/bottom lines rotate to form X
- Middle line fades and shrinks
- Bounce cubic-bezier transitions

## Usage

Set `--hm-open` (0 or 1) on `.ham-btn`. CSS rotates the top and bottom lines 45°/-45° and fades the middle line.
