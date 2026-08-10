# ease-float-var
Fix #3896: `.ease-float` hardcoded `3s ease-in-out` instead of using framework tokens.

## Issue
`core/animations.css` line 669:
```css
animation: ease-float 3s ease-in-out infinite;
```

## Correct Override (for users / maintainer reference)
```css
.ease-float {
  animation: ease-kf-float var(--ease-speed-medium) var(--ease-ease) infinite;
}
```

## Files
- `demo.html` — live demo with override applied
- `style.css` — the override stylesheet
- `README.md` — this file
