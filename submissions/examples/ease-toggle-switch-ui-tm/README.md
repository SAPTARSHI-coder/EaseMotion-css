# Toggle Switch UI Component

Add ease-toggle-switch-ui-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--tsw-accent` | `#6366f1` |
| `--tsw-radius` | `50px` |
| `--tsw-track` | `40px` |
| `--tsw-thumb` | `28px` |
| `--tsw-trans` | `0.3s cubic-bezier(.4,0,.2,1)` |

## Technique

Hidden checkbox + `:checked` sibling selector drives track and thumb animation. Zero JS.
