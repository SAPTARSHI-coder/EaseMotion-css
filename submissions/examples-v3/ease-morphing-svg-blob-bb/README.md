# Organic Morphing SVG Fluid Blob Showcase

An interactive showcase demonstrating organic fluid shapes morphing smoothly using CSS variables, custom keyframe transitions, and SVG filter blending.

## What does this do?
This demo creates an organic, liquid-like blob background that continuously morphs its shape and shifts gradients over time. It responds to mouse interaction by scaling, changing shape deformation speeds, and shifting contrast.

## How is it used?
1. Link `style.css` to your HTML.
2. Structure your markup containing the SVG blob elements:
   ```html
   <div class="blob-container">
     <div class="morphing-blob"></div>
   </div>
   ```
3. Use CSS custom variables to control parameters such as transition speed, border-radius keyframes, and color stops.

## Why is it useful?
Using raw CSS Keyframe animations coupled with SVG border-radius morphing provides a lightweight, GPU-accelerated solution for modern dynamic background graphics without relying on heavy canvas or WebGL libraries.
