# Fix #3962: Fix #3962: .ease-navbar-glass add dark mode aware colors via color-mix()

### Proposed Change
`.ease-navbar-glass` in `components/navbar.css` hardcodes both `background: rgba(255,255,255,0.18)` and `color: rgba(15,23,42,0.92)` — neither adapts to `prefers-color-scheme: dark`.
```css
.ease-navbar-glass { background: color-mix(in srgb, var(--ease-color-neutral-900) 18%, transparent); color: var(--ease-color-neutral-100); }
@media (prefers-color-scheme: dark) { .ease-navbar-glass { background: color-mix(in srgb, var(--ease-color-neutral-100) 18%, transparent); color: var(--ease-color-neutral-900); } }
```
