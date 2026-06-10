# Fix #3958: ease-loader-spin use timing token

Bug: `.ease-loader-spin` hardcodes `linear` timing instead of using a CSS variable token.

## Fix
```css
.ease-loader-spin {
  animation: ease-kf-rotate 0.8s var(--ease-timing-linear) infinite;
}
```

Add `--ease-timing-linear: linear` to `core/variables.css`.

## Files
- `demo.html` — interactive demo
- `style.css` — the fix
- `README.md` — this file
