# Contract Animation - Safari Stutter

This folder contains a reproduction demo for the stuttering issue observed in the Contract animation on Safari, as documented in Issue #47777. 

## Issue Description
Several users reported that the "Contract" animation appears noticeably less smooth on Safari compared to Chromium-based browsers or Firefox. The animation may stutter, drop frames, and exhibit inconsistent timing during playback.

## Reproduction Steps
1. Open `demo.html` in Safari (macOS or iOS).
2. Observe the "Contract Default" box. You may notice subtle stuttering or frame drops compared to running the same file in Chrome or Firefox.
3. Observe the "Contract Optimized" box, which uses CSS hardware acceleration to ensure smooth 60fps rendering on Safari.

## Observed Behavior
- **Browser:** Safari (macOS/iOS)
- **Expected behavior:** Smooth scaling animation without frame drops.
- **Actual behavior:** The default animation stutters or jitters slightly during the transition.

## Suggested Solution (Workaround)
The stuttering on Safari is typically caused by the browser not promoting the animated element to its own compositor layer. We can force hardware acceleration and smooth out the animation by adding the following CSS properties to the element being animated:

```css
.contract-optimized {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
}
```

These properties ensure the animation is offloaded to the GPU, providing a much smoother experience on Safari without modifying the core framework keyframes.
