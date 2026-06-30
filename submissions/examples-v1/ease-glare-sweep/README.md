\# ease-glare-sweep

Diagonal light glare sweeps across element on hover or in continuous loop.

\## Classes

| Class | Description | Speed |

|-------|-------------|-------|

| `ease-glare-sweep` | Glare on hover | 0.6s |

| `ease-glare-sweep-fast` | Fast glare on hover | 0.3s |

| `ease-glare-sweep-slow` | Slow glare on hover | 1.2s |

| `ease-glare-sweep-loop` | Continuous loop | 1.5s |

| `ease-glare-sweep-loop-fast` | Fast continuous loop | 0.8s |

\## Variables

| Variable | Default | Description |

|----------|---------|-------------|

| `--ease-glare-color` | rgba(255,255,255,0.5) | Glare color |

| `--ease-glare-speed` | 0.6s | Animation speed |

\## Usage

```html
<!-- Basic glare on hover -->

<div class="ease-glare-sweep">&#x20; Content with glare effect</div>

<!-- Custom color -->

<div
  class="ease-glare-sweep"
  style="--ease-glare-color: rgba(255,255,255,0.8);"
>
  &#x20; White glare
</div>

<!-- Continuous loop -->

<div class="ease-glare-sweep-loop">&#x20; Always sweeping glare</div>
```
