\# ease-z-index utilities

CSS z-index utilities for controlling stacking order of positioned elements.

\## Classes

| Class | Value | Use Case |

|-------|-------|----------|

| `ease-z-0` | 0 | Lowest priority |

| `ease-z-10` | 10 | Low priority |

| `ease-z-20` | 20 | Medium-low priority |

| `ease-z-50` | 50 | Medium priority |

| `ease-z-100` | 100 | High priority |

| `ease-z-top` | 9999 | Highest priority (modals, tooltips) |

\## Important Note

⚠️ z-index only works on positioned elements. Your element must have one of these position properties:

\- `position: relative`

\- `position: absolute`

\- `position: fixed`

\- `position: sticky`

\## Usage

```html
<div style="position: relative;">
  &#x20;
  <div class="ease-z-0">Back element</div>

  &#x20;
  <div class="ease-z-100">Front element</div>

  &#x20;
  <div class="ease-z-top">Modal overlay</div>
</div>
```
