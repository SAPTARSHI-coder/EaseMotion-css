# ScrollSpy — section navigation

> Issue: [#63570](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63570)

A nav that highlights the section currently in view, using `IntersectionObserver`.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `sections` | `Array<{ id, label }>` | `[]` | Sections to track. Ids must match real element ids. Renders `null` if empty. |
| `offset` | `number` | `0` | Sticky header height in px. |
| `label` | `string` | `'Page sections'` | Accessible nav name. |
| `onChange` | `(id: string) => void` | — | Fires when the active section changes. |
| `className` | `string` | `''` | Merged onto the root. |

## Usage

```jsx
import ScrollSpy from './ScrollSpy';
import './style.css';

<ScrollSpy
  offset={64}
  sections={[
    { id: 'intro', label: 'Introduction' },
    { id: 'install', label: 'Installation' },
    { id: 'api', label: 'API reference' },
  ]}
/>
```

Section elements need matching ids: `<section id="intro">…</section>`.

## Why it fits EaseMotion

**`IntersectionObserver`, not a scroll listener.** A scroll handler fires dozens of times per second and typically calls `getBoundingClientRect` on every section each time, forcing synchronous layout. That is the classic cause of janky scrolling on documentation pages — the nav itself makes the page feel slow.

**`rootMargin` must account for the sticky header.** Without a negative top margin, a section "enters the viewport" while still hidden behind the header, so the nav highlights the next item before the reader can see it. The `-55%` bottom margin narrows the trigger band so only one section is current at a time.

**Multiple visible sections need disambiguation.** With three short sections on screen, `isIntersecting` is true for all of them. Visible entries are tracked in a Map and the **topmost** is selected by comparing `boundingClientRect.top` — which is what a reader perceives as "current". Picking the first entry in the callback array instead would flicker, since entry order is not positional.

Three smaller details: the observer is disconnected on unmount *and* whenever `sections` or `offset` change, or observers accumulate and keep firing against stale nodes. `onChange` is held in a ref so an inline arrow function does not tear down and rebuild the observer on every parent render. And clicking a link moves **focus** to the target section, not just the scroll position — scrolling alone leaves a keyboard user's focus stranded in the nav.

Smooth scrolling is skipped when `prefers-reduced-motion` is set.
