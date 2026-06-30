\# ease-banner



Top-of-page banner/announcement component with slide-down entrance animation.



\## Classes



| Class | Description |

|-------|-------------|

| `ease-banner` | Base banner component |

| `ease-banner-info` | Blue info banner |

| `ease-banner-success` | Green success banner |

| `ease-banner-warning` | Yellow warning banner |

| `ease-banner-error` | Red error banner |

| `ease-banner-dismissible` | Banner with close button |

| `ease-banner-close` | Close button for dismissible banner |



\## Features



\- 🎯 Slide-down entrance animation

\- 🎨 Multiple color variants (info, success, warning, error)

\- ❌ Dismissible variant with close button

\- 📱 Responsive design



\## Usage



```html

<!-- Basic banner -->

<div class="ease-banner">

&#x20;   <div class="ease-banner-content">

&#x20;       <span>🎉</span>

&#x20;       <p>Your message here</p>

&#x20;   </div>

</div>



<!-- Dismissible banner -->

<div class="ease-banner ease-banner-info">

&#x20;   <div class="ease-banner-content">

&#x20;       <span>ℹ️</span>

&#x20;       <p>Info message</p>

&#x20;   </div>

&#x20;   <button class="ease-banner-close" onclick="this.parentElement.remove()">✕</button>

</div>

