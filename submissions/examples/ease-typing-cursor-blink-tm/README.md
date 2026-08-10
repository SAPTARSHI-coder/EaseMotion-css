# Typing Cursor Blink Component

Add ease-typing-cursor-blink-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--tc-accent` | `#6366f1` |
| `--tc-accent2` | `#ec4899` |
| `--tc-radius` | `10px` |
| `--tc-shadow` | `0 4px 16px rgba(0,0,0,.3)` |

## Technique

`animation: step-end` on cursor element creates sharp on/off blink without intermediate frames.
