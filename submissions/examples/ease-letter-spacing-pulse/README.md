\# ease-letter-spacing-pulse



Text tracking breathes in and out - letter spacing expands and contracts rhythmically.



\## Classes



| Class | Description | Speed |

|-------|-------------|-------|

| `ease-letter-spacing-pulse` | Standard pulse | 2s |

| `ease-letter-spacing-pulse-fast` | Fast pulse | 1s |

| `ease-letter-spacing-pulse-slow` | Slow pulse | 4s |

| `ease-letter-spacing-pulse-hover` | One-shot on hover | 0.3s |



\## Variables



| Variable | Default | Description |

|----------|---------|-------------|

| `--ease-ls-amount` | 0.2em | Maximum letter spacing |

| `--ease-ls-speed` | 2s | Animation duration |



\## Usage



```html

<!-- Basic pulse (infinite) -->

<h2 class="ease-letter-spacing-pulse">BREATHE</h2>



<!-- Custom amount -->

<h2 class="ease-letter-spacing-pulse" style="--ease-ls-amount: 0.4em;">

&#x20;   DRAMATIC

</h2>



<!-- One-shot on hover -->

<h2 class="ease-letter-spacing-pulse-hover">HOVER ME</h2>

