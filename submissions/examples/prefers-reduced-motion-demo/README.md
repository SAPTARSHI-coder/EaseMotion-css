# Prefers Reduced Motion Demo

A self-contained demo showcasing how EaseMotion CSS respects the `prefers-reduced-motion` media query.

## What it demonstrates

- Animation classes (`ease-bounce-in`, `ease-flip-in`, `ease-scale-in`) are disabled when the user prefers reduced motion
- Continuous animations (`ease-float`, `ease-pulse`) are also suppressed
- Fallback styles ensure content remains visible without animation

## How to test

1. Open `demo.html` in a browser
2. Enable "Reduce Motion" in your OS accessibility settings:
   - **macOS**: System Settings → Accessibility → Display → Reduce Motion
   - **Windows**: Settings → Accessibility → Visual Effects → Animation effects
   - **Linux**: Varies by desktop environment
3. Refresh the page — all animations should be disabled

## Relates to

- Issue #88687 — Add prefers-reduced-motion support to all animation classes
