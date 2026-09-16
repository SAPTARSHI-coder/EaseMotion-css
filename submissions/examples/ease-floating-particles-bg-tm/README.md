# Floating Particles Background Component

Add ease-floating-particles-bg-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--fp-accent` | `#6366f1` |
| `--fp-accent2` | `#ec4899` |
| `--fp-accent3` | `#10b981` |
| `--fp-opacity` | `0.4` |
| `--fp-speed` | `8s` |
| `--fp-count` | `20` |

## Technique

CSS `translateY` keyframe animation moves particles from bottom to top. Multiple particles with different `animation-delay` and `animation-duration` create organic randomness.
