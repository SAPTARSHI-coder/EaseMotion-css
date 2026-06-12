\# ease-shadow-trail

Animated trailing shadow effect with multiple box-shadow layers.

\## Classes

| Class | Description | Speed |

|-------|-------------|-------|

| `ease-shadow-trail` | Standard shadow trail | 0.4s |

| `ease-shadow-trail-light` | Light subtle trail | 0.4s |

| `ease-shadow-trail-deep` | Deep strong trail | 0.4s |

| `ease-shadow-trail-fast` | Fast animation | 0.2s |

| `ease-shadow-trail-slow` | Slow animation | 0.6s |

\## Variables

| Variable | Default | Description |

|----------|---------|-------------|

| `--ease-shadow-color` | rgba(0,0,0,0.1) | Shadow color |

| `--ease-shadow-depth` | 16px | Maximum shadow offset |

\## Usage

```html
<!-- Basic shadow trail -->

<div class="ease-shadow-trail">&#x20; Hover to see shadow trail</div>

<!-- Custom color -->

<div
  class="ease-shadow-trail"
  style="--ease-shadow-color: rgba(255,100,100,0.3);"
>
  &#x20; Red shadow trail
</div>

<!-- Custom depth -->

<div class="ease-shadow-trail" style="--ease-shadow-depth: 30px;">
  &#x20; Deeper trail
</div>
```
