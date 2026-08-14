# VirtualList — windowed rendering

> Issue: [#63817](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63817)

Renders only visible rows plus an overscan buffer, keeping DOM node count constant regardless of list length.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | `[]` | Full dataset. Renders `null` if empty. |
| `itemHeight` | `number` | `44` | **Fixed** row height in px. |
| `height` | `number` | `360` | Viewport height in px. |
| `overscan` | `number` | `4` | Rows rendered beyond the visible window. |
| `renderItem` | `(item, index) => ReactNode` | — | Row renderer. |
| `getKey` | `(item, index) => key` | index | Stable React key. |
| `label` | `string` | `'List'` | Accessible name. |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

<kbd>Home</kbd> / <kbd>End</kbd> jump to the ends; <kbd>PageUp</kbd> / <kbd>PageDown</kbd> move a viewport at a time.

## Usage

```jsx
import VirtualList from './VirtualList';
import './style.css';

<VirtualList
  items={rows}
  itemHeight={44}
  height={400}
  getKey={(row) => row.id}
  renderItem={(row) => <><span>{row.name}</span><span>{row.amount}</span></>}
/>
```

## Limitations

- **Fixed row height only.** Variable heights need measurement and a different algorithm; a fixed height is what makes the offset arithmetic exact.
- **Browser find-in-page cannot reach off-screen rows.** This is inherent to windowing, not a bug in this implementation — if full-text search matters more than list length, do not virtualise.

## Why it fits EaseMotion

**The accessibility trap most virtual lists fall into:** rendering only visible rows means the accessibility tree reports "list, 20 items" when there are 20,000. A screen reader user has no idea how much data exists, or where in it they are.

`aria-setsize` and `aria-posinset` on every row declare the **true** total and each row's real position, independent of what is mounted. The container carries `aria-setsize` too. This costs nothing and is the difference between a usable list and a misleading one.

**The window is translated, not absolutely positioned per row.** `transform` stays on the compositor; animating `top` would force layout on every scroll frame — which is exactly the cost virtualisation exists to avoid.

**Scroll is throttled through `requestAnimationFrame`.** A raw scroll handler calling `setState` fires far more often than the display refreshes, so the extra renders are pure waste and can drop frames on a slow device.

The full-height sizer gives the scrollbar its true proportions. Without it the thumb would size to the mounted rows and visibly jump on every update, which makes the list feel broken even though the content is correct.

`scrollToIndex` is exposed via the keyboard handlers because there is otherwise no way to reach item 9,000 — it is not mounted, so nothing can focus or scroll to it.
