# Hamburger Menu Animation Component

**Issue:** [#71861](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71861)

Animated hamburger menu with X transform and slide-down drawer.

## Design Tokens

| Token | Default |
|-------|--------|
| `--hg-accent` | `#6366f1` |
| `--hg-radius` | `8px` |
| `--hg-trans` | `0.3s` |

## Technique

Hidden checkbox + `:checked` sibling selector drives hamburger-to-X and menu expand. Zero JS.
