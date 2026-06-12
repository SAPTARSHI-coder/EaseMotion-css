# ease-tooltip

A pure CSS tooltip using `data-tip` attribute and `::after` pseudo-element. Zero JavaScript required.

## Usage

```html
<button data-tip="Hello!">Hover me</button>
```

## Variants

| Attribute        | Value           | Description           |
| ---------------- | --------------- | --------------------- |
| `data-tip-pos`   | `top` (default) | Tooltip appears above |
| `data-tip-pos`   | `bottom`        | Tooltip appears below |
| `data-tip-pos`   | `left`          | Tooltip appears left  |
| `data-tip-pos`   | `right`         | Tooltip appears right |
| `data-tip-color` | `success`       | Green tooltip         |
| `data-tip-color` | `danger`        | Red tooltip           |
| `data-tip-color` | `info`          | Blue tooltip          |
| `data-tip-color` | `warning`       | Amber tooltip         |

## Delay Variants

```html
<button data-tip="Delayed" class="ease-delay-100">100ms delay</button>
<button data-tip="Delayed" class="ease-delay-200">200ms delay</button>
<button data-tip="Delayed" class="ease-delay-300">300ms delay</button>
```

## Submission

- **Author:** sudha09-git
- **Issue:** #2248
- **Files:** `style.css`, `demo.html`
