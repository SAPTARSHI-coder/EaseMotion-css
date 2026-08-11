# Noise Texture Overlay Component

Add ease-noise-texture-overlay-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--nt-opacity` | `0.04` |
| `--nt-radius` | `12px` |
| `--nt-shadow` | `0 8px 32px rgba(0,0,0,.4)` |

## Technique

Inline SVG with `feTurbulence` filter applied via `background-image`. `mix-blend-mode: overlay` blends it naturally with the card color. No JS needed.
