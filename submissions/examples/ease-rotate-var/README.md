# Ease Rotate Var
Fix #3899: `.ease-rotate` hardcodes `linear` timing function instead of `var(--ease-ease)`.

## Permanent Core Fix (for maintainer)
```css
/* core/animations.css .ease-rotate */
- animation: ease-kf-rotate 1.2s linear infinite;
+ animation: ease-kf-rotate 1.2s var(--ease-ease) var(--ease-animation-iterations, infinite);
```

## Files
- `demo.html`
- `style.css`
- `README.md`
