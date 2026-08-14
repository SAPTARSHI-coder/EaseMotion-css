# ProgressRing

An SVG determinate progress ring that animates along its own arc, with correct
progressbar semantics.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Current value; clamped to `0..max`. |
| `max` | `number` | `100` | Maximum value. |
| `size` | `number` | `96` | Outer diameter in px. |
| `thickness` | `number` | `8` | Stroke width in px. |
| `label` | `string` | — | Accessible name for the progressbar. |
| `showValue` | `boolean` | `true` | Render the centred percentage. |
| `className` | `string` | `''` | Extra classes. |

## Usage

```jsx
import ProgressRing from './ProgressRing';
import './style.css';

<ProgressRing value={72} label="Upload progress" />
<ProgressRing value={3} max={5} size={64} thickness={6} label="Steps complete" showValue={false} />
```

## Why it fits EaseMotion CSS

Progress rings are usually animated by re-rendering the arc path on every value
change, which cannot be transitioned because the path data itself changes.
Animating `stroke-dashoffset` against a fixed `stroke-dasharray` keeps the
geometry constant, so the browser can interpolate and the arc grows along its own
curve — the animation is CSS, not React.

The one-frame `requestAnimationFrame` deferral exists because a freshly mounted
element has no previous `stroke-dashoffset` to transition from; setting the final
value in the same frame produces a jump on first paint rather than a sweep.

The reduced-motion treatment differs deliberately from decorative components.
Determinate progress carries information, so it is never hidden — only the tween
between values is removed, and the ring still renders its current value exactly.

Because `radius` and `circumference` are derived from `size` and `thickness`, the
component stays correct at any dimensions without magic numbers, and `role`
plus `aria-valuenow` mean assistive technology reports real progress rather than
an unlabelled graphic.
