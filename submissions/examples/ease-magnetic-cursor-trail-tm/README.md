# Magnetic Cursor Trail

Closes #74924

Glowing multi-dot cursor trail with each dot following the previous at decreasing sizes for a comet effect.

## Technique

Five colored dots follow the mouse with progressively smaller sizes. Each dot interpolates toward the previous dot's position in the requestAnimationFrame loop.
