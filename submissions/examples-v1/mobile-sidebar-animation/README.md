# Fix: Mobile Sidebar Slide Animation Fail

## Description
This example demonstrates how toggling `display: none` to `display: block` destroys CSS entry/exit transitions, and provides a pure CSS layout fix.

## Root Cause & Solution
- **The Problem:** Modifying `display` triggers an immediate reflow, which forces the browser to apply the target coordinates instantly without running the transition step.
- **The Solution:** Replacing `display: none` with `visibility: hidden` maintains the element structure in the render tree. By adding `visibility` to the `transition` property list, the browser smoothly animates the `transform` before updating the layout visibility state.
