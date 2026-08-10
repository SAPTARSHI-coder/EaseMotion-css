# VirtualList

Renders only the rows near the viewport, so lists of tens of thousands of items
stay responsive.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | `[]` | Full data set. |
| `rowHeight` | `number` | `40` | Fixed row height in px. |
| `height` | `number` | `320` | Viewport height in px. |
| `overscan` | `number` | `4` | Extra rows rendered above and below. |
| `renderRow` | `(item, index) => ReactNode` | — | Row renderer. |
| `label` | `string` | — | Accessible name for the listbox. |

## Usage

```jsx
import VirtualList from './VirtualList';
import './style.css';

<VirtualList
  items={rows}
  rowHeight={44}
  height={400}
  label="Submissions"
  renderRow={(row) => <span>{row.name}</span>}
/>
```

## Why it fits EaseMotion CSS

Animation quality is bounded by frame budget, and the fastest way to lose it is
mounting ten thousand DOM nodes. Any EaseMotion entrance animation applied to a
long list will stutter regardless of how well the CSS is written — so windowing is
an animation concern, not just a data one.

The scroll handler coalesces into one `requestAnimationFrame` per frame, so a
burst of scroll events causes a single React render rather than dozens.

Positioning the window with `transform: translateY()` against a full-height spacer
keeps the scrollbar proportional to the real data length while moving the rendered
slice on the compositor. Absolutely positioning each row by `top` instead would
trigger layout for every visible row on every frame.

`aria-setsize` and `aria-posinset` are what make virtualisation accessible: without
them a screen reader reports only the rendered slice, so a list of 10,000 items
announces as "1 of 12". These attributes report the true size and position while
only a fraction is in the DOM.

The `overscan` buffer renders slightly beyond the viewport so fast scrolling does
not reveal blank space before the next render commits.
