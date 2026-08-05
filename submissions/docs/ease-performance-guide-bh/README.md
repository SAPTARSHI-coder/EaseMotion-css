# Animation Performance Guide

## What does this do?
Documents best practices for creating high-performance animations.

## How is it used?
Follow these guidelines when adding animations:
1. Prefer transform and opacity
2. Avoid layout-triggering properties
3. Test on mobile devices

## Why is it useful?
- 60fps animations
- Better battery life on mobile
- Smoother user experience
- Reduced CPU usage

## Performance Checklist
- [ ] Use transform instead of position changes
- [ ] Use opacity instead of visibility changes
- [ ] Use will-change for upcoming animations
- [ ] Remove will-change after animation completes
- [ ] Limit animation duration to under 300ms
- [ ] Test on low-end devices
