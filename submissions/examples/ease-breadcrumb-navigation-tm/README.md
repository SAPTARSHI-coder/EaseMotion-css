# Breadcrumb Navigation Component

Add ease-breadcrumb-navigation-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--br-accent` | `#6366f1` |
| `--br-font` | `0.875rem` |
| `--br-radius` | `6px` |
| `--br-trans` | `0.2s` |

## Technique

Flexbox row with separator spans. `:hover` with `aria-current` for active state. Semantic `nav` + `aria-label`.
