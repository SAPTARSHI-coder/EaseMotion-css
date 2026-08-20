\# ease-image-color-reveal



A hover effect utility that reveals full color on a grayscale image. Great for team cards, product galleries, portfolios, and photography pages.



\## Usage



```html

<img class="ease-image-color-reveal" src="image.jpg" alt="Demo">

```



\## Speed Variants



| Class | Transition speed |

|---|---|

| `ease-image-color-reveal--fast` | 0.2s |

| (default) | 0.4s |

| `ease-image-color-reveal--slow` | 0.8s |



\## How It Works



\- Base class applies `filter: grayscale(100%)` with a transition.

\- On hover/focus, grayscale is removed, revealing color.

\- Respects `prefers-reduced-motion`.



\## Files



\- `demo.html` — live demo

\- `style.css` — component styles

\- `README.md` — this file

