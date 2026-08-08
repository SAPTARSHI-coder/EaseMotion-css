# ImageCompare — before/after slider

> Issue: [#63819](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63819)

A before/after comparison slider that works by drag **and** by keyboard.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `beforeSrc` / `afterSrc` | `string` | — | Image sources. |
| `beforeAlt` / `afterAlt` | `string` | `'Before'` / `'After'` | Alt text. |
| `defaultValue` | `number` | `50` | Initial split, 0–100. |
| `step` | `number` | `2` | Arrow-key increment. |
| `beforeLabel` / `afterLabel` | `string` | `'Before'` / `'After'` | Corner captions. |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

| Key | Action |
|---|---|
| <kbd>←</kbd> / <kbd>→</kbd> | Move by `step` |
| <kbd>PageUp</kbd> / <kbd>PageDown</kbd> | Move by `step × 5` |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jump to either extreme |

## Usage

```jsx
import ImageCompare from './ImageCompare';
import './style.css';

<ImageCompare
  beforeSrc="/shots/before.jpg"
  afterSrc="/shots/after.jpg"
  beforeAlt="Dashboard before the redesign"
  afterAlt="Dashboard after the redesign"
/>
```

## Why it fits EaseMotion

**Almost every before/after slider is drag-only**, which makes it completely unusable without a pointer — and the hidden content is often the entire point of the page. Implementing the `slider` role with arrow-key control costs very little and makes the comparison genuinely operable.

**The "after" image is clipped, not resized.** Overlaying it and animating `width` re-lays-out and re-scales the image on every frame: the comparison stutters, and the image *content* shifts as the panel narrows, so you are no longer comparing the same pixels. `clip-path: inset()` clips a fixed-size image — the pixels never move, only the visible region changes, and it stays on the compositor.

`setPointerCapture` routes subsequent moves to the handle even once the pointer has left it, so a fast drag does not lose the slider partway. Pointer Events also cover mouse, touch and stylus with one code path.

Three supporting details: `touch-action: none` stops a touch drag scrolling the page instead of comparing; `user-select: none` and `draggable="false"` stop the drag selecting text or starting a native image drag; and the handle is 40px wide with the visible line drawn by a pseudo-element, so the grab target meets the touch minimum without a 40px white bar across the image.

`aria-valuetext` reports "62% After" rather than a bare number, which is meaningless out of context.
