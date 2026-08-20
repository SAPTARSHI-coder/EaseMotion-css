# iOS Safari 8-Bit Color Banding Fix for Hue-Rotate Backdrop Filters

## Abstract
This example demonstrates a fix for issue #80440, resolving severe 8-bit color banding on iOS Safari caused by `backdrop-filter: hue-rotate()` rendered over a dynamic radial gradient background.

## The WebKit Render Downgrade Bug
When iOS Safari composites a `backdrop-filter` containing color-shifting math (`hue-rotate`) over a flat `radial-gradient`, it optimizes memory by crushing the render target into an 8-bit buffer, causing severe visible banding.

## The Layer Promotion Fix
By applying `transform: translate3d(0, 0, 0)` and `will-change: transform` directly to the gradient layer, we force the GPU to promote it to a dedicated composition layer *before* the glass pane interacts with it. This preserves the high-fidelity 16-bit float math required for smooth gradient rendering.
