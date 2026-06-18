# ease-flip-card

Submission for Issue #3834

## What this adds

CSS component for a 3D card flip effect on hover using CSS
perspective and rotateY. Zero JavaScript required.

## Structure

```html
<div class="ease-flip-card">
  <div class="ease-flip-card__inner">
    <div class="ease-flip-card__front">Front</div>
    <div class="ease-flip-card__back">Back</div>
  </div>
</div>
```

## Classes

### Flip Direction
| Class | Direction |
|---|---|
| `ease-flip-card` | Horizontal flip (rotateY) |
| `ease-flip-card--vertical` | Vertical flip (rotateX) |

### Trigger
| Class | Trigger |
|---|---|
| `ease-flip-card` | Hover (default) |
| `ease-flip-card--click` | Focus / click (tabindex="0") |

### Speed
| Class | Duration |
|---|---|
| `ease-flip-card--fast` | 0.25s |
| `ease-flip-card` | 0.6s (default) |
| `ease-flip-card--slow` | 1.2s |

### Back Color Variants
| Class | Color |
|---|---|
| `ease-flip-card--blue` | Blue back |
| `ease-flip-card--purple` | Purple back |
| `ease-flip-card--pink` | Pink back |
| `ease-flip-card--dark` | Dark back |
| `ease-flip-card--gradient` | Green → Cyan gradient |

## Accessibility

- Click variant uses `tabindex="0"` + `:focus-within` — keyboard accessible
- Respects `prefers-reduced-motion` — flip replaced with opacity fade

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
