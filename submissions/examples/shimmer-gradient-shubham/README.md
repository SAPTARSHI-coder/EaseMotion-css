# Fix: Missing @keyframes for Shimmer Sweep & Gradient Rotation (#2926)

## Issue Outline
The utility classes `.ease-shimmer-sweep` and `.ease-gradient-rotation` originally referenced `@keyframes` definitions (`ease-kf-shimmer-sweep` and `ease-kf-gradient-rotation`) that were missing from the framework styles, causing target components to render with static, motionless backgrounds.

## Implementation Strategy
Created a dedicated submission example to showcase the decoupled animation engine fix:
1. **`.ease-shimmer-sweep`**: Implemented a moving 3-stop linear gradient stretched to `200%` width. The keyframes animate `background-position` smoothly across the X-axis to generate a shining metallic sheen.
2. **`.ease-gradient-rotation`**: Implemented a dual-tone background gradient paired with a hardware-accelerated `hue-rotate(360deg)` layer filter transition to smoothly rotate the color spectrum continuously.

##  How to Preview
1. Navigate to this directory: `submissions/examples/shimmer-gradient-shubham/`
2. Open `demo.html` directly in any standard browser to watch the utility animations execute live.