# Checkbox Toggle Switch Component

Add ease-checkbox-toggle-switch-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|---------|
| `--cts-accent` | `#6366f1` |
| `--cts-green` | `#10b981` |
| `--cts-radius` | `50px` |
| `--cts-shadow` | `0 4px 16px rgba(0,0,0,.3)` |

## Technique

Hidden checkbox + `:checked` sibling selector. Spring `cubic-bezier(.34,1.56,.64,1)` on thumb movement.
