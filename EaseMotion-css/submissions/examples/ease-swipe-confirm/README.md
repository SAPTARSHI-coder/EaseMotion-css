# Ease Swipe Confirm Input

A smooth, accessible swipe-to-confirm button component built for EaseMotion CSS.

## 1. What does this do?
This component creates an iOS-inspired swipe-to-confirm interaction, allowing users to slide a thumb handle across a track to authorize or execute an action safely.

## 2. How is it used?
An invisible HTML `<input type="range">` covers the entire swipe wrapper to seamlessly capture all native touch, drag, mouse, and keyboard interaction events. As the user drags the range input, a micro-script passes the slider's numeric value (0–100) directly into a CSS Custom Property (`--swipe-val`), which dynamically animates the visible thumb element and track fill width in real-time.

## 3. Why is it useful?
Instead of writing 100+ lines of fragile JavaScript to calculate mouse/touch coordinates, handle event listeners, and compute bounding rects, this approach leverages the browser's native `<input type="range">` slider logic. The micro JavaScript utility only updates the CSS variable and manages the threshold snap-back, offloading 100% of the UI morphing, layout, dynamic opacity, and hardware-accelerated movement to the CSS GPU compositor. Furthermore, it inherently inherits native HTML accessibility for screen readers and keyboard navigation.
