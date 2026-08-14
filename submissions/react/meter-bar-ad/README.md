# MeterBar — bounded value meter

> Issue: [#63823](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63823)

A meter with semantic threshold bands that change pattern as well as colour.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Clamped to `[min, max]`. |
| `min` / `max` | `number` | `0` / `100` | Range. `max` is forced above `min`. |
| `warnAt` | `number` | `0.75` | Fraction of range entering the warn band. |
| `overAt` | `number` | `1` | Fraction entering the over band. |
| `label` | `string` | — | Accessible name and visible heading. |
| `valueText` | `string` | derived | Overrides the announced value. |
| `showValue` | `boolean` | `true` | Render the numeric readout. |
| `size` | `'sm' \| 'md'` | `'md'` | Track height. |
| `className` | `string` | `''` | Merged onto the root. |

## Usage

```jsx
import MeterBar from './MeterBar';
import './style.css';

<MeterBar label="Seats used" value={42} max={50} warnAt={0.8} />
<MeterBar label="Storage" value={318} max={500} size="sm" />
```

## Why it fits EaseMotion

**`role="meter"`, not `progressbar`** — and the distinction is not pedantic. A progressbar represents a task advancing toward completion; a meter represents a measurement within a known range. Disk usage, quota consumption and temperature are meters. Announcing "75% complete" for a disk that is 75% *full* is wrong in a way that misleads.

**Threshold bands change pattern as well as colour.** A meter's entire purpose is signalling "this is fine" versus "this needs attention" — so encoding that in hue alone puts the one bit of information the component exists to convey out of reach for a colour-blind user. The warn band gets a diagonal hatch, the over band a denser one, so the three states are distinguishable in greyscale and in print.

**`aria-valuetext` carries the band name**, not just a number: "42 of 50, approaching limit" rather than "42". The band is the actionable part, and a bare value forces the listener to do the threshold arithmetic themselves.

The range is validated rather than trusted — an inverted or zero-width range would divide by zero, so `max` is forced above `min` and `value` is clamped into the result.

Under `forced-colors: active` the fill is given a system colour explicitly. Backgrounds are discarded there, so without this the meter would render as an empty track with no fill at all.
