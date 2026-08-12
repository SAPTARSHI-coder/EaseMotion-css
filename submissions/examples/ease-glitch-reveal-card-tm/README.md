# Glitch Reveal Card

Closes #75013

Card that reveals a chromatic-aberration glitch effect on hover, with magenta and cyan text shadows offset from the main text.

## Technique

`::before` and `::after` pseudo-elements with the same text content, offset by a few pixels using `transform: translate`. On hover, they become visible and create the split-color glitch look.
