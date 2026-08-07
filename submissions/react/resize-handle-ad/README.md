# ResizeHandle — split-pane divider

> Issue: [#63571](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63571)

A split-pane divider that is draggable **and** fully keyboard-operable, implementing the WAI-ARIA `separator` pattern.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Current size in px. |
| `onChange` | `(next: number) => void` | — | Receives the clamped, rounded next value. |
| `min` | `number` | `120` | Lower bound. |
| `max` | `number` | `600` | Upper bound. |
| `step` | `number` | `16` | Arrow-key increment. |
| `largeStep` | `number` | `64` | PageUp/PageDown increment. |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | `vertical` = a vertical divider resizing width. |
| `inverted` | `boolean` | `false` | Drag left/up to grow — for a right-hand pane. |
| `label` | `string` | `'Resize panel'` | Accessible name. |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

| Key | Action |
|---|---|
| <kbd>←</kbd> / <kbd>→</kbd> | Resize by `step` (vertical divider) |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Resize by `step` (horizontal divider) |
| <kbd>PageUp</kbd> / <kbd>PageDown</kbd> | Resize by `largeStep` |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jump to `min` / `max` |

## Usage

```jsx
import ResizeHandle from './ResizeHandle';
import './style.css';

const [width, setWidth] = useState(280);

<div style={{ display: 'flex' }}>
  <aside style={{ width }}>…</aside>
  <ResizeHandle value={width} onChange={setWidth} min={200} max={600} />
  <main style={{ flex: 1 }}>…</main>
</div>
```

## Why it fits EaseMotion

**Drag-only dividers are unusable without a pointer**, and they are the norm. This implements the `separator` role properly: focusable, exposing `aria-valuenow` / `aria-valuemin` / `aria-valuemax`, and resizable with arrow keys, PageUp/PageDown and Home/End.

**Pointer Events with capture, not mouse/touch pairs.** `setPointerCapture` routes every subsequent move to the handle even once the pointer has left it — which is what stops a fast drag from "dropping" the divider partway. Doing this with `mousemove` on `window` also requires guarding against text selection and iframe capture; pointer capture handles both, and covers touch and stylus with the same code path.

Arrow semantics follow the **visual axis**: a vertical divider responds to left/right, a horizontal one to up/down. Binding both orientations to the same keys would be arbitrary in one of the two cases.

Three supporting details: `touch-action: none` stops a touch drag scrolling the page underneath instead of resizing; `user-select: none` stops the drag selecting text in the panes either side; and a `::before` pseudo-element widens the hit area beyond the 10px visual rail, which is below the recommended minimum target size and genuinely hard to grab.

`onChange` is held in a ref so an inline arrow function does not invalidate the pointer handlers on every parent render, and secondary mouse buttons are ignored so a right-click drag does not resize.
