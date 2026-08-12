# 3D Isometric Cubes

Closes #75011

Four cubes arranged in 3D space, rotating slowly on the Y axis. Each cube has 6 faces built with `transform: rotateX/Y translateZ`.

## Technique

`transform-style: preserve-3d` enables true 3D positioning. Each face is a 80x80 absolute div positioned by rotating the face plane and pushing it out by half the cube size via `translateZ(40px)`.
