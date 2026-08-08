# NumberTicker — animated numeric transitions

> Issue: [#63814](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63814)

Animates between numeric values, announcing only the settled result.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Target value. Non-finite input falls back to 0. |
| `duration` | `number` | `900` | Animation length in ms. `0` snaps. |
| `decimals` | `number` | `0` | Fraction digits. |
| `locale` | `string` | user's locale | Passed to `Intl.NumberFormat`. |
| `format` | `object` | — | Extra `Intl.NumberFormat` options (currency, percent…). |
| `prefix` / `suffix` | `string` | `''` | Wrapping text. |
| `label` | `string` | formatted value | Announced instead of the raw number. |
| `className` | `string` | `''` | Merged onto the root. |

## Usage

```jsx
import NumberTicker from './NumberTicker';
import './style.css';

<NumberTicker value={settled} decimals={2} format={{ style: 'currency', currency: 'USD' }} />
<NumberTicker value={rate} decimals={1} suffix="%" label={`Success rate ${rate} percent`} />
```

## Why it fits EaseMotion

**It announces the final value only.** A ticker inside a live region that updates every frame produces sixty announcements a second — the screen reader is rendered useless for the entire animation, and the user has no way to skip it. The visible digits are `aria-hidden` and the target value sits in a separate, stable node.

**`requestAnimationFrame`, not `setInterval`.** An interval drifts from the display refresh, so the count visibly stutters. rAF is driven by the frame clock, and it also pauses in background tabs rather than burning CPU on a tab nobody is looking at.

**It snaps under `prefers-reduced-motion`.** A rapidly changing number is a motion effect even though nothing physically moves — it is exactly the sort of thing that triggers vestibular discomfort, and it is routinely missed because "no transform" reads as "no motion".

Two smaller details that matter:

The final frame sets the exact target rather than the eased result. Accumulated float error would otherwise leave the underlying value at something like `999.9999` while displaying "1,000" — correct on screen, wrong in any derived calculation.

On cleanup the animation resumes from wherever it was interrupted, so a value that changes mid-flight continues from the current display rather than snapping back to the previous start.

Formatting goes through `Intl.NumberFormat`, so thousands separators, currency and percent all follow the user's locale instead of being hand-assembled with regex — which breaks for every locale that does not use a comma.

`font-variant-numeric: tabular-nums` is the one CSS property that matters: proportional digits have different widths, so a counting number visibly jitters and any layout beside it shifts on every frame.
