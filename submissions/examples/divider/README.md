# ease-divider

Styled and animated horizontal/vertical dividers using CSS border and pseudo-elements. Zero JavaScript required.

## Usage

```html
<!-- Basic horizontal divider -->
<hr class="ease-divider" />

<!-- Gradient fade -->
<hr class="ease-divider ease-divider-gradient" />

<!-- Text label -->
<div class="ease-divider-label">OR</div>

<!-- Animated draw-in -->
<hr class="ease-divider ease-divider-primary ease-divider-draw" />

<!-- Vertical inline -->
<span class="ease-divider-vertical"></span>
```

## Variants

### Style
| Class | Description |
|---|---|
| `ease-divider` | Base 1px horizontal line |
| `ease-divider-gradient` | Fades out at edges |
| `ease-divider-primary` | Indigo gradient |
| `ease-divider-success` | Green gradient |
| `ease-divider-danger` | Red gradient |
| `ease-divider-dashed` | Dashed border |
| `ease-divider-dotted` | Dotted border |
| `ease-divider-2` | 2px thick |
| `ease-divider-4` | 4px thick |

### Label
| Class | Description |
|---|---|
| `ease-divider-label` | Horizontal lines with center text |

Add any text between the tags. Combine with `ease-divider-gradient` for faded lines.

### Vertical
| Class | Description |
|---|---|
| `ease-divider-vertical` | Inline vertical separator (1em tall) |
| `ease-divider-vertical-full` | Full-height vertical separator |

### Animation
| Class | Description |
|---|---|
| `ease-divider-draw` | Draws in left to right on load (0.8s) |
| `ease-divider-draw-fast` | 0.4s draw |
| `ease-divider-draw-slow` | 1.6s draw |
| `ease-divider-draw-scroll` | Draws in when scrolled into view |

## Submission

- **Author:** sudha09-git
- **Issue:** #3831
- **Files:** `style.css`, `demo.html`
