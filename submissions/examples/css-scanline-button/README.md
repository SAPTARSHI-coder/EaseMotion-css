# CSS Scanline Button

A CRT-style button featuring an interactive scanline overlay effect built entirely with CSS.

## Features

- **Pure CSS**: Uses `repeating-linear-gradient` and pseudo-elements without any JavaScript logic or external assets.
- **Interactive Animation**: Activating `:hover` or `:focus-visible` states triggers a continuous, seamless downward scroll of the scanline pattern.
- **Accessible Foundation**: Built upon a standard `<button>` element ensuring native focus tracking and keyboard trigger (`Enter`, `Space`) behavior out of the box.
- **Visual Focus Indicators**: Utilizes a highly visible `outline` that triggers safely via `:focus-visible` without forcing states on pointer interaction.
- **Seamless Looping**: The translation distance matches a direct multiple of the gradient's repeatable height (`40px` translation for a `4px` tall gradient block), leading to infinite looping with zero snapping.
- **Motion Safe**: Incorporates `@media (prefers-reduced-motion: reduce)` to suspend the looping keyframe animation for users sensitive to motion, relying on opacity shifts instead.
- **Responsive Geometry**: Leverages container queries to safely reduce padding and adjust typography bounds on narrower mobile screens.

## Usage

1. Open `demo.html` in your browser.
2. Hover the button to see the CRT overlay initiate.
3. Test keyboard navigation using `Tab` to confirm the `:focus-visible` logic.
