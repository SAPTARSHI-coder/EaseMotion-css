# CSS 3D Isometric Card Stack

## What does this do?
A stack of 3D cards rendered in perfect isometric perspective that fans out into distinct vertical layers upon interaction.

## How is it used?
`transform-style: preserve-3d` is applied to the `.ease-iso-wrapper` container to enable a 3D rendering context for nested child elements. The overall isometric perspective is established using `rotateX(60deg)` and `rotateZ(-45deg)`. 

When hovered or focused (`:hover`, `:focus-visible`), the child `.ease-iso-card` elements alter their `translateZ` values significantly (expanding up to `150px`) alongside slight `translateX` and `translateY` offsets. At the same time, their `box-shadow` blur and spread parameters scale proportionally to simulate physical altitude and depth off the page.

## Why is it useful?
Creating spatial, layered interfaces traditionally required complex canvas setups or WebGL. By leveraging the CSS compositor's Z-axis translation (`translateZ`) and 3D matrix transforms, developers achieve a flawlessly smooth, hardware-accelerated 3D effect strictly through the DOM without external dependencies.
