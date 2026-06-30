\# ease-morph-path

Smoothly animates between two SVG paths using CSS `d` property animation.

\## Classes

| Class | Description | Speed |

|-------|-------------|-------|

| `ease-morph-path` | Triangle ↔ Circle | 2s |

| `ease-morph-path-star` | Star ↔ Circle | 2s |

| `ease-morph-path-heart` | Heart ↔ Circle | 2s |

| `ease-morph-path-blob` | Circle ↔ Organic Blob | 3s |

| `ease-morph-path-blob2` | Circle ↔ Organic Blob 2 | 3s |

| `ease-morph-path-fast` | Fast morph | 1s |

| `ease-morph-path-slow` | Slow morph | 4s |

\## Variables

| Variable | Default | Description |

|----------|---------|-------------|

| `--ease-morph-speed` | 2s | Animation speed |

\## Usage

```html
<!-- Basic morph -->

<svg viewBox="0 0 100 100" class="ease-morph-path">
  &#x20;
  <path d="M50,20 L80,80 L20,80 Z" />
</svg>

<!-- Custom speed -->

<svg
  viewBox="0 0 100 100"
  class="ease-morph-path"
  style="--ease-morph-speed: 3s;"
>
  &#x20;
  <path d="M50,20 L80,80 L20,80 Z" />
</svg>
```
