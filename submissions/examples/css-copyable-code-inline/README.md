# CSS Copyable Code Inline

An inline code snippet that reveals a copy affordance on hover/focus, pure CSS styling (copy via native semantics). Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<code class="ease-ccode" role="button" tabindex="0" aria-label="Copyable code: npm i ease">npm i ease<span class="ease-ccode__hint" aria-hidden="true">⧉</span></code>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #70222
