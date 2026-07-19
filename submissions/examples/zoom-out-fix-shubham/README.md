# Fix: Missing Opacity in ease-kf-zoom-out Animation

This submission resolves Issue #2909 by integrating smooth opacity blending properties into the core zoom entrance animation matrix.

## Problem Details
The original `@keyframes ease-kf-zoom-out` implementation omitted `opacity` changes. This caused elements utilizing the transition rule to suddenly appear on the viewport layout at 100% visibility before starting the scale transition down from 1.5.

## Solution Summary
Appended `opacity: 0` inside the initialization keyframe step (`from`) and balanced it with `opacity: 1` inside the termination milestone block (`to`). This brings the element's opacity tracking behavior into uniform alignment with the rest of the library's zoom module presets.