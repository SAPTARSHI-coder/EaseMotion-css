# News Ticker Board

Closes #74806

TV-style news ticker with BREAKING label that blinks, scrolling headlines, and live timestamp.

## Technique

The track uses a 25s infinite linear scroll with `padding-left: 100%` to create the entrance animation. Hover pauses the animation. The `::before` pseudo-element adds red bullet separators between items.
