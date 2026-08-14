\# ease-orbit



Elements orbit around a central point in continuous circular motion.



\## Classes



| Class | Description | Speed |

|-------|-------------|-------|

| `ease-orbit` | Standard orbit | 6s |

| `ease-orbit-fast` | Fast orbit | 3s |

| `ease-orbit-slow` | Slow orbit | 12s |



\## Variables



| Variable | Default | Description |

|----------|---------|-------------|

| `--ease-orbit-radius` | 80px | Distance from center |

| `--ease-orbit-speed` | 6s | Animation duration |



\## Usage



```html

<div class="ease-orbit">

&#x20;   <div class="orbit-center">⭐</div>

&#x20;   <div class="orbit-child">🌍</div>

&#x20;   <div class="orbit-child">🌙</div>

</div>



<!-- Custom radius -->

<div class="ease-orbit">

&#x20;   <div class="orbit-child" style="--ease-orbit-radius: 100px;">🌍</div>

</div>



<!-- Custom speed -->

<div class="ease-orbit" style="--ease-orbit-speed: 4s;">

&#x20;   ...

</div>

