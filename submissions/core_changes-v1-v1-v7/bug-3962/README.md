# Fix #3962: Fix #3962: ease-navbar-glass dark mode aware colors

`.ease-navbar-glass` hardcodes `background: rgba(255,255,255,0.18)` — does not adapt to `prefers-color-scheme: dark`.
```css
.ease-navbar-glass { background: color-mix(in srgb, var(--ease-color-neutral-900) 18%, transparent); color: var(--ease-color-neutral-100); }
@media (prefers-color-scheme: dark) { .ease-navbar-glass { background: color-mix(in srgb, var(--ease-color-neutral-100) 18%, transparent); color: var(--ease-color-neutral-900); } }
```
