# Sandbox Layout Fix: Absolute Layer Bleed and Depth Z-Fighting Resolution

## Overview
A performance and layout interaction fix for advanced 3D perspective animations to completely neutralize absolute layer bleeding, resolve sub-pixel panel tearing, and eliminate Z-fighting artifacts across Chromium and Gecko viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user workspace hosting a multi-layer 3D card assembly to verify geometric rotation stability.
* `style.css` — Scoped modifier asset layer declaring strict 3D style preservation tracks linked back to core global tokens.

## 🐛 The Bug Resolved
Previously, nesting absolute text nodes or colored sub-elements inside an interface card undergoing 3D perspective transformations (`transform: perspective() rotateY()`) triggered a severe presentation layout glitch across modern browsers. Because standard absolute blocks operate under loose 2D layers, running high-fidelity spatial rotations forces a depth rendering calculation conflict. The browser's engine fails to calculate layer convergence limits, causing background elements or text lines to flickeringly rip and bleed directly through foreground panels mid-transition.

## 🛠️ The Solution
The spatial interaction tracks are optimized. By injecting `transform-style: preserve-3d;` onto the parent wrapper, you establish a true 3D spatial box containment matrix. Standard flat `z-index` parameters are discarded entirely and replaced with concrete spatial height cushions via `transform: translateZ()`. This pushes the absolute layout layers physically apart along the 3D plane. Combined with `backface-visibility: hidden`, this cuts off intersection mapping bugs upfront, keeping transitions liquid-smooth at a locked 60fps.
