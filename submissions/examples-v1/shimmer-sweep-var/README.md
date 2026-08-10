# Shimmer Sweep Var
Fix #3902: `.ease-shimmer-sweep` duration verification.

## Issue
`core/animations.css` defines `.ease-shimmer-sweep` using:
```css
animation: ease-kf-shimmer-sweep var(--ease-speed-slow) var(--ease-ease) infinite;
```

This class already uses the framework's CSS custom properties correctly.
This PR verifies the implementation and documents the expected behavior.

## Verification
- `--ease-speed-slow` controls animation duration ✅
- `--ease-ease` controls timing function ✅
- Override `--ease-speed-slow` in `:root` to customize speed

## Files
- `demo.html`
- `style.css`
- `README.md`
