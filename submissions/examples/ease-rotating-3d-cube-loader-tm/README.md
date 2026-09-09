# Rotating 3D Cube Loader Component

Add ease-rotating-3d-cube-loader-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--rc-accent` | `#6366f1` |
| `--rc-accent2` | `#ec4899` |
| `--rc-accent3` | `#10b981` |
| `--rc-size` | `60px` |
| `--rc-speed` | `2s` |

## Technique

`transform-style: preserve-3d` + `rotateX` + `rotateY` keyframes on 6 positioned faces.
