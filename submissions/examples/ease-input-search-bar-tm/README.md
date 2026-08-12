# Input Search Bar Component

Add ease-input-search-bar-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|---------|
| `--isb-accent` | `#6366f1` |
| `--isb-radius` | `50px` |
| `--isb-shadow` | `0 4px 16px rgba(99,102,241,.2)` |

## Technique

Dropdown shown via `:focus ~ .isb-suggest { display: block }`. No JS needed for show/hide.
