# Tab Switch Animation Component

Add ease-tab-switch-animation-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--ts-accent` | `#6366f1` |
| `--ts-radius` | `10px` |
| `--ts-trans` | `0.3s` |

## Technique

Hidden radio inputs + `:checked` sibling selectors drive both the active tab highlight and the visible panel. Zero JS.
