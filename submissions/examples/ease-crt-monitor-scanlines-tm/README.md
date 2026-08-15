# CRT Monitor Scanlines

Closes #74887

Retro CRT terminal with horizontal scanlines, a faint sweep highlight, green phosphor glow, and a blinking text cursor.

## Technique

A `repeating-linear-gradient` on `::before` creates the scanlines. A `::after` gradient sweeps left-to-right on a 4s loop. Blinking cursor uses `steps()` timing function.
