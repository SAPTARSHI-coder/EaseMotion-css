# 🔢 Animated Number Counter

A reusable, scroll-triggered number counter component that animates counting up from zero to a target value.

## Features
- Scroll-triggered animation (Intersection Observer)
- Customizable duration, precision, and suffix
- Linear and ease-out easing options
- Lightweight (pure CSS + vanilla JS)
- Responsive and accessible
- Uses EaseMotion CSS variables

## Data Attributes
| Attribute | Description | Default |
|-----------|-------------|---------|
| `data-target` | Target number to count to | Required |
| `data-duration` | Animation duration in ms | `2000` |
| `data-suffix` | Text to append (%, +, K, M) | `''` |
| `data-precision` | Decimal places | `0` |
| `data-easing` | `linear` or `ease-out` | `linear` |
| `data-trigger` | `scroll` or `load` | `scroll` |

## Usage
```html
<span class="ease-number-counter" data-target="2500" data-suffix="+">0</span>