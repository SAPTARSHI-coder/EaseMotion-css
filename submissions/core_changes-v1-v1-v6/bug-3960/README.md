# Fix #3960: Fix #3960: add missing --ease-ease-linear and --ease-ease-in tokens to core/variables.css

### Proposed Change
`core/variables.css` is missing `--ease-ease-linear` and `--ease-ease-in` timing tokens. Several components inline literal timing functions as a result, violating the token-first design system.
```css
:root { --ease-ease-linear: linear; --ease-ease-in: cubic-bezier(0.4, 0, 1, 1); --ease-timing-linear: linear; }
```
