# Ease Retro Grid Floor

## What does this do?
This component renders a classic 80s synthwave perspective grid floor accompanied by a glowing sliced sun and a retro CRT scanline vignette overlay.

## How is it used?
3D perspective is established by applying `perspective: 600px` to the container wrapper (`.ease-retro-wrapper`). The grid element (`.ease-retro-grid`) is laid flat in 3D space using `transform: rotateX(75deg)`. The seamless forward movement illusion is created by continuously animating the `background-position-y` of two repeating `linear-gradient` grid patterns from `0 0` to `0 60px` matching the 60px grid cell size.

## Why is it useful?
Typically, moving 3D geometric grid environments require heavy WebGL frameworks (such as Three.js) and active JavaScript `requestAnimationFrame` render loops. This pure CSS-only technique delivers a lightweight, GPU-accelerated retro animation with zero JavaScript overhead and zero script execution costs.
