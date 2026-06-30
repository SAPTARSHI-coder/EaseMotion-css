# @property Typed `<color>` Design Token Animation

Registers CSS custom properties with `syntax: '<color>'` via `@property`, enabling native color interpolation in transitions and `@keyframes`. Without `@property`, CSS variables are opaque strings — they snap between values instead of interpolating.

## Variants

| Variant | Mechanism | Trigger |
|---------|-----------|---------|
| Token cascade | `@keyframes` animates one token; all consumers update | Continuous |
| Theme switch | Class change triggers token transition across 3 tokens | Button click |
| Per-element hover | Each element has its own typed `--ease-btn-bg` | `:hover` |

## Why `@property` is required

```css
/* Without @property — snaps between values, no interpolation */
:root { --color: #6c63ff; }
.el { background: var(--color); transition: --color 0.4s; } /* does nothing */

/* With @property — smooth color interpolation */
@property --ease-btn-bg {
  syntax: '<color>';
  inherits: false;
  initial-value: #6c63ff;
}

.ease-btn {
  background-color: var(--ease-btn-bg);
  transition: --ease-btn-bg 0.4s ease;
}
.ease-btn:hover { --ease-btn-bg: #a78bfa; }
```

## Token cascade pattern

```css
@property --ease-token-primary {
  syntax: '<color>';
  inherits: true;       /* cascades to all children */
  initial-value: #6c63ff;
}

@keyframes ease-token-cycle {
  0%   { --ease-token-primary: #6c63ff; }
  25%  { --ease-token-primary: #ec4899; }
  50%  { --ease-token-primary: #10b981; }
  75%  { --ease-token-primary: #f59e0b; }
  100% { --ease-token-primary: #6c63ff; }
}

.ease-token-cascade {
  animation: ease-token-cycle 4s linear infinite;
}
```

`inherits: true` means animating the token on a parent element updates all descendant elements that reference it — a single `@keyframes` drives the entire color system.

## Theme switching

```css
@property --ease-token-bg { syntax: '<color>'; inherits: true; initial-value: #1a2035; }

.ease-theme-switcher {
  transition:
    --ease-token-bg 0.5s ease,
    --ease-token-primary 0.5s ease,
    --ease-token-accent 0.5s ease;
}

.ease-theme-switcher.theme-warm {
  --ease-token-bg: #1c1008;
  --ease-token-primary: #f59e0b;
}
```

## Accessibility

`prefers-reduced-motion: reduce` disables the cascade animation and removes all token transitions.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-token-cascade { animation: none; }
  .ease-theme-switcher, .ease-btn { transition: none; }
}
```
