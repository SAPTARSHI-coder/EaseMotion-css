# Endless 3D Road Animation

A synthwave/retro-wave inspired endless road animation, warped into 3D perspective using purely CSS.

## Preview
Open `demo.html` in your browser. You will see a glowing sunset and a grid/road that continuously rushes towards the screen in 3D perspective.

## Implementation
- The `.scene` parent uses `perspective` to define a 3D viewpoint.
- The `.road` is an extremely tall element that has been tilted nearly flat away from the viewer (`transform: rotateX(80deg)`) with `transform-origin: top`.
- The grid and dashed lines are drawn using multiple `repeating-linear-gradient` backgrounds on the road.
- The illusion of motion is created entirely by animating the `background-position` downwards in an infinite loop, making it appear as if the camera is traveling forward along the road.
