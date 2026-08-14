# Text Reveal Character

Text that reveals character by character with translateY, rotateX, and blur animation. Each character's delay via `--rc-index`. Replay button resets and plays the animation.

## Features

- Character-by-character reveal animation
- Staggered delay via `--rc-index` CSS variable
- translateY, rotateX, and blur start state
- Bounce cubic-bezier for each char
- Replay button to repeat

## Usage

Each character is wrapped in a `.rev-char` span with `--rc-index` for stagger delay. Adding `.playing` class to the parent triggers the `charReveal` animation.
