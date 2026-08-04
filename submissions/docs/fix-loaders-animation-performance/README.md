# Fix: Loader Animation Performance

Optimizes keyframe transformations inside loader indicators to prevent repaint cascades.

## What does this do?
- **GPU Composition:** Refactors animations to use composited transform properties instead of padding or size alterations.