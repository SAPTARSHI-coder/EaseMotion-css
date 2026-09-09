# Parallax Scrolling Layers Component

Add ease-parallax-scrolling-layers-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--px-speed1` | `0.3` |
| `--px-speed2` | `0.5` |
| `--px-speed3` | `0.7` |

## Note

Scroll listener updates `--scroll` CSS variable. CSS uses `translateY(calc(var(--scroll) * speed))` for each layer.
