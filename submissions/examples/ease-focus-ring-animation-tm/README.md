# Focus Ring Animation Component

Add ease-focus-ring-animation-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--fr-accent` | `#6366f1` |
| `--fr-ring-offset` | `3px` |
| `--fr-radius` | `10px` |

## Technique

`box-shadow` layered rings with `outline` create the animated focus indicator. `:focus-visible` ensures it only shows on keyboard navigation.
