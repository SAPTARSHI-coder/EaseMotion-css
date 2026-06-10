# Fix #3958: Fix #3958: ease-loader-spin hardcodes 'linear' — no CSS variable token

### Proposed Change
The `.ease-loader-spin` class hardcodes `linear` for animation timing with no CSS variable token, unlike `.ease-loader-pulse` and `.ease-loader-ping` which reference design tokens.
```css
.ease-loader-spin { animation: ease-kf-rotate 0.8s var(--ease-timing-linear) infinite; }
```
