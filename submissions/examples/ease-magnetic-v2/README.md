# ease-magnetic

Magnetic pull hover effect using CSS directional translate with spring easing. Zero JavaScript required.

## Usage

```html
<button class="ease-magnetic">Magnetic button</button>
```

## Intensity Variants

| Class | Shift distance |
|---|---|
| `ease-magnetic-weak` | 3px |
| `ease-magnetic` | 6px (default) |
| `ease-magnetic-strong` | 12px |

## Directional Variants

| Class | Direction |
|---|---|
| `ease-magnetic` | Up (default) |
| `ease-magnetic-left` | Left |
| `ease-magnetic-right` | Right |
| `ease-magnetic-down` | Down |
| `ease-magnetic-tl` | Top-left diagonal |
| `ease-magnetic-tr` | Top-right diagonal |
| `ease-magnetic-bl` | Bottom-left diagonal |
| `ease-magnetic-br` | Bottom-right diagonal |

## Special Variants

| Class | Description |
|---|---|
| `ease-magnetic-glow` | Pull up + glowing shadow |

## How It Works

True magnetic effects (following the cursor) require JavaScript. This utility provides the best pure-CSS approximation — a spring-eased directional translate on hover using `cubic-bezier(0.34, 1.56, 0.64, 1)`, which creates an overshoot bounce that closely mimics the feel of magnetic attraction. Mouse-leave returns smoothly to origin via the same spring curve.

## Submission

- **Author:** sudha09-git
- **Issue:** #3859
- **Files:** `style.css`, `demo.html`
