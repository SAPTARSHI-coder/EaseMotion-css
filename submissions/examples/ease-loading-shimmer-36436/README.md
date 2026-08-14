\# ease-loading-shimmer



A lightweight utility component for skeleton loading placeholders. Adds a sweeping shimmer animation over any element — useful for cards, avatars, buttons, text blocks, and product placeholders while content loads.



\## Usage



```html

<div class="ease-loading-shimmer"></div>

```



\## Shape Variants



| Class | Use case |

|---|---|

| `ease-loading-shimmer--avatar` | Circular avatar |

| `ease-loading-shimmer--text` | Text line |

| `ease-loading-shimmer--button` | Button placeholder |

| `ease-loading-shimmer--card` | Card placeholder |

| `ease-loading-shimmer--product` | Product tile |



\## How It Works



\- Base class sets `position: relative; overflow: hidden;` and a neutral background color.

\- A `::after` pseudo-element sweeps a translucent gradient using a 1.5s infinite animation.

\- Respects `prefers-reduced-motion`.



\## Files



\- `demo.html` — live demo

\- `style.css` — component styles

\- `README.md` — this file

