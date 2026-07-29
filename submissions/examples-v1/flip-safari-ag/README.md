# Flip Animation Safari Glitch Reproduction

## Overview
This folder contains a minimal reproduction of the reported Flip animation stuttering issue observed on Safari (both macOS and iOS). It also demonstrates potential CSS-based GPU acceleration techniques to resolve the glitch.

## Current Behavior (Safari)
When the `em-anim-flip-in` animation executes, Safari can occasionally stutter, skip frames, or cause the element to briefly flash/flicker.

## Expected Behavior
The Flip animation should perform a smooth 3D rotation transition without rendering artifacts, consistent with other browsers like Chrome and Firefox.

## Reproduction Steps
1. Open `demo.html` in Safari.
2. Observe the "Standard Flip" animation.
3. Click the "Replay Animation" button multiple times to consistently reproduce the flickering or frame drops.
4. Compare it with the "Optimized Flip" animation, which should render smoothly.

## Investigation & Proposed Optimizations
The glitch seems related to how WebKit handles 3D transforms without explicit hardware acceleration triggers.
The following CSS properties were tested and successfully mitigated the issue:

```css
.optimized {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0); /* Forces GPU Compositing */
    will-change: transform;
    transform-style: preserve-3d;
}
```

These changes prompt the browser to move the element onto its own layer on the GPU, preventing the main thread from stalling the animation rendering.

## Testing Environment
- **Safari (macOS):** Version 16+
- **Safari (iOS):** Version 16+
- **Chrome / Firefox / Edge:** Renders smoothly without modifications.

*Note: In accordance with the repository freeze policy, no files in the `core/` or `components/` directories have been modified.*
