# Color Theme Toggle Component

Add ease-color-theme-toggle-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--ct-accent` | `#6366f1` |
| `--ct-radius` | `50px` |
| `--ct-shadow` | `0 4px 16px rgba(0,0,0,.1)` |

## Technique

CSS custom properties scoped to `:root` and `:root.dark` handle the color system. JS toggles a class and saves to localStorage.
