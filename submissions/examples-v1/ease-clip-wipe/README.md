\# ease-clip-wipe

Clip-path wipe transition reveals elements from different directions.

\## Classes

| Class | Description | Direction |

|-------|-------------|-----------|

| `ease-clip-wipe-left` | Wipe from left | Left → Right |

| `ease-clip-wipe-right` | Wipe from right | Right → Left |

| `ease-clip-wipe-top` | Wipe from top | Top → Bottom |

| `ease-clip-wipe-bottom` | Wipe from bottom | Bottom → Top |

| `ease-clip-wipe-diagonal` | Diagonal wipe | Corner to corner |

| `ease-clip-wipe-entrance` | Entrance from left | On page load |

| `ease-clip-wipe-entrance-right` | Entrance from right | On page load |

\## Speed Variants

| Class | Speed |

|-------|-------|

| `ease-clip-wipe-left-fast` | 0.3s |

| `ease-clip-wipe-left` | 0.6s |

| `ease-clip-wipe-left-slow` | 1.2s |

\## Variables

| Variable | Default | Description |

|----------|---------|-------------|

| `--ease-wipe-duration` | 0.6s | Animation duration |

\## Usage

```html
<!-- Wipe on hover -->

<div class="ease-clip-wipe-left">Reveals from left</div>

<!-- Entrance on load -->

<div class="ease-clip-wipe-entrance">Wipes in on load</div>

<!-- Custom duration -->

<div class="ease-clip-wipe-left" style="--ease-wipe-duration: 1s;">
  &#x20; Slow wipe
</div>
```
