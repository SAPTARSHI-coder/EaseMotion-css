\# ease-word-by-word



Text animates one word at a time with staggered delay.



\## Classes



| Class | Description | Per-word delay |

|-------|-------------|----------------|

| `ease-word-by-word` | Slide up animation | 100ms |

| `ease-word-by-word-fast` | Fast animation | 50ms |

| `ease-word-by-word-slow` | Slow animation | 200ms |

| `ease-word-by-word-fade` | Fade only | 100ms |

| `ease-word-by-word-left` | Slide from left | 100ms |

| `ease-word-by-word-right` | Slide from right | 100ms |

| `ease-word-by-word-scroll` | Scroll triggered | N/A |



\## Variables



| Variable | Default | Description |

|----------|---------|-------------|

| `--ease-word-delay` | 100ms | Delay per word |

| `--ease-word-duration` | 0.4s | Animation duration |



\## Usage



```html

<!-- Basic word by word -->

<div class="ease-word-by-word">Your text here</div>



<!-- Custom delay -->

<div class="ease-word-by-word" style="--ease-word-delay: 150ms;">

&#x20;   Custom delay

</div>

