# Fix #3957: Fix #3957: ease-loader-ping hardcoded cubic-bezier

The `.ease-loader-ping` class hardcodes `cubic-bezier(0, 0, 0.2, 1)` for the animation timing function instead of referencing the `--ease-ease-out` design token declared in `core/variables.css`.
```css
.ease-loader-ping { animation: ease-kf-ping 1s var(--ease-ease-out) infinite; }
```
