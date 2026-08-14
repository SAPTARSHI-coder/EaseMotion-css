# Fix: Split Text Reveal

## Description
This provides a standard class for wrapping text to create a word-level or character-level "reveal from bottom" animation.

## How it works
- Sets `overflow: hidden` on the wrapper.
- Animates the inner element's `transform: translateY` from 100% to 0.
