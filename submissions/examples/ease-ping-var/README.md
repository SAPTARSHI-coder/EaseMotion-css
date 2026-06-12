# Ease Ping Var

Fix #3897: `.ease-ping` hardcoded `cubic-bezier(0, 0, 0.2, 1)` instead of `var(--ease-ease)`.

## Permanent Core Fix (for maintainer)

```css
/* core/animations.css .ease-ping */
animation: ease-kf-ping 1s var(--ease-ease)
  var(--ease-animation-iterations, infinite);
```

## Files

- `demo.html`
- `style.css`
- `README.md`
