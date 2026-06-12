\# ease-text-reveal

Text reveals character by character from behind a mask.

\## Classes

| Class | Description |

|-------|-------------|

| `ease-text-reveal` | Base text reveal animation |

| `ease-text-reveal-fast` | Fast reveal (0.4s) |

| `ease-text-reveal-slow` | Slow reveal (1.5s) |

| `ease-text-reveal-words` | Word by word staggered reveal |

| `ease-text-reveal-trigger` | Button triggered reveal |

| `ease-text-reveal-scroll` | Scroll triggered reveal |

\## Variables

| Variable | Default | Description |

|----------|---------|-------------|

| `--ease-reveal-duration` | 0.8s | Animation duration |

| `--ease-reveal-delay` | 0s | Animation delay |

\## Usage

```html
<!-- Basic reveal -->

<div class="ease-text-reveal">&#x20; <span>Your text here</span></div>

<!-- Custom duration -->

<div class="ease-text-reveal" style="--ease-reveal-duration: 1.5s;">
  &#x20; <span>Slow reveal</span>
</div>

<!-- Word by word -->

<div class="ease-text-reveal-words">
  &#x20; <span>This</span> <span>reveals</span> <span>word</span>
  <span>by</span> <span>word</span>
</div>
```
