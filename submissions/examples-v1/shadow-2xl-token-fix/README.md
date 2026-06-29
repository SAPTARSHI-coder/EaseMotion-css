# Shadow 2XL Token Fix

## What does this do?

Adds the missing `--ease-shadow-2xl` CSS custom property to complete the shadow design token scale (`sm → md → lg → xl → 2xl`).

## How is it used?

The token is already referenced in `components/modals.css` (line 45):

```css
box-shadow: var(--ease-shadow-2xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25));
```

Once defined in `core/variables.css`, the variable resolves normally and users can override it via `:root` like any other design token:

```css
:root {
  --ease-shadow-2xl: 0 30px 60px -15px rgba(0, 0, 0, 0.30);
}
```

### Proposed values

| Context | Value |
|---|---|
| Light mode (`:root`) | `0 25px 50px -12px rgba(0, 0, 0, 0.25)` |
| Dark mode (`prefers-color-scheme`) | `0 25px 50px -12px rgba(0, 0, 0, 0.50)` |
| Dark mode (`[data-theme="dark"]`) | `0 25px 50px -12px rgba(0, 0, 0, 0.50)` |

## Why is it useful?

- **Fixes bug [#11625](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/11625):** The modal component permanently falls back to a hardcoded shadow because the token it references does not exist.
- **Enables theming:** Without the token definition, users cannot customize the modal shadow via CSS variables.
- **Completes the scale:** The shadow scale jumps from `xl` to nothing — `2xl` fills the gap consistently with the existing progression (each step increases blur, spread, and offset).
- **Dark mode parity:** The dark variant doubles the opacity to `0.50`, matching the pattern used by `sm` through `xl` in the dark theme overrides.
