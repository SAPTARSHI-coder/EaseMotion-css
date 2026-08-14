# Projector Remote

Closes #74814

A retro projector remote with a small status screen, red power button, numeric pad, and a circular D-pad navigation cluster.

## Technique

Numeric pad uses 3-column CSS Grid. The D-pad is a 3x3 grid with a circular center OK button. Buttons have a `box-shadow: 0 2px 0` and `:active` translates the button down 2px to mimic physical press.
