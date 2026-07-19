# Ease Gradient Rotation Var
Fix #3901: `.ease-gradient-rotation` hardcodes `3s` duration instead of `var(--ease-speed-slow)`.

## Issue
`core/animations.css` line 733:
```css
animation: ease-kf-gradient-rotation 3s var(--ease-ease) infinite;
```

## Permanent Core Fix (for maintainer)
```css
/* core/animations.css .ease-gradient-rotation */
- animation: ease-kf-gradient-rotation 3s var(--ease-ease) infinite;
+ animation: ease-kf-gradient-rotation var(--ease-speed-slow) var(--ease-ease) infinite;
```

## Files
- `demo.html`
- `style.css`
- `README.md`
