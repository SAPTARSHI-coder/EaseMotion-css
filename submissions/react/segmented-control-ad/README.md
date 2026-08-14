# SegmentedControl — animated segmented control

> Issue: [#61726](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61726)

A React segmented control whose indicator slides between options, implemented as a WAI-ARIA radiogroup with full keyboard support.

## Description

Renders a track of options with a thumb that slides to the selected one. Arrow keys move selection, Home and End jump to the ends, and disabled options are skipped.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `Array<{ value, label, disabled? }>` | `[]` | Options. Renders `null` if empty. |
| `value` | `string` | — | Selected value. An unmatched value pins the indicator to the first slot. |
| `onChange` | `(value: string) => void` | — | Called with the newly selected value. |
| `size` | `'sm' \| 'md'` | `'md'` | Option padding and font size. |
| `fullWidth` | `boolean` | `false` | Stretch to fill the container. |
| `label` | `string` | `'View'` | Accessible group label. |
| `className` | `string` | `''` | Merged onto the root. |

Any other props are spread onto the root element.

## Usage

```jsx
import SegmentedControl from './SegmentedControl';
import './style.css';

const [range, setRange] = useState('week');

<SegmentedControl
  label="Date range"
  value={range}
  onChange={setRange}
  options={[
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year', disabled: true },
  ]}
/>
```

## Keyboard

| Key | Action |
|---|---|
| <kbd>Tab</kbd> | Enter/leave the group — **one** tab stop total |
| <kbd>→</kbd> / <kbd>↓</kbd> | Next enabled option (wraps) |
| <kbd>←</kbd> / <kbd>↑</kbd> | Previous enabled option (wraps) |
| <kbd>Home</kbd> / <kbd>End</kbd> | First / last enabled option |

## Why it fits EaseMotion

**Radiogroup, not a button row.** A row of buttons puts every option in the tab sequence, so a keyboard user crossing a toolbar has to tab through all six range options to reach the next control. A radiogroup with roving `tabIndex` is a single tab stop, with arrow keys moving between options — which is also the interaction screen reader users are told to expect from the role.

**The indicator needs no measurement.** Its width is `(100% - padding) / --seg-count-ad` and its offset is `translateX(100% × --seg-active-ad)` — position derived entirely from the option count and active index. No refs, no `getBoundingClientRect`, no `ResizeObserver`. It stays correct when the container resizes, when a webfont loads late and reflows the labels, and during server rendering where measurement is impossible.

It is also transform-only, so sliding never triggers layout.

**Forced-colors needs special handling.** The thumb is a background fill, and high-contrast mode discards backgrounds — the selected option would become indistinguishable from the rest. The `forced-colors` block swaps the fill for an `outline` on the indicator plus a `Highlight` text colour, both of which survive.

The arrow-key walk skips disabled options and bails after a full loop, so an all-disabled option set cannot spin forever.
