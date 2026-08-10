# ScrollProgress

A reading-progress bar that uses the native CSS scroll timeline where available
and falls back to a throttled listener only where it is not.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `target` | `RefObject` | — | Scroll container; defaults to the document. |
| `height` | `number` | `4` | Bar height in px. |
| `color` | `string` | `'#4c6ef5'` | Bar colour. |
| `className` | `string` | `''` | Extra classes. |

## Usage

```jsx
import ScrollProgress from './ScrollProgress';
import './style.css';

<ScrollProgress />
<ScrollProgress target={panelRef} color="#2f9e6e" height={3} />
```

## Why it fits EaseMotion CSS

Progress bars are the standard example of unnecessary main-thread work: a scroll
listener that reads `scrollHeight` and writes a style on every event, during the
interaction least tolerant of jank.

Feature-detecting with `CSS.supports('animation-timeline', 'scroll()')` means
supporting browsers pay nothing at all — no listener is attached and the entire
effect runs off the main thread in CSS. React only participates on the fallback
path.

That fallback is written the way a scroll handler should be. The listener is
`passive: true`, so it never blocks scrolling, and reads are coalesced into a
single `requestAnimationFrame` callback, so a burst of scroll events produces one
layout read per frame instead of dozens.

The bar animates `transform: scaleX()` rather than `width` on both paths, keeping
it on the compositor, and it is `role="presentation"` because reading position is
already conveyed by the scrollbar — announcing it again would be redundant noise.
