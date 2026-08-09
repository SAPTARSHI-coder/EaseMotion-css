# Scroll Spy Rail

## What does this do?

A sticky table-of-contents rail whose vertical line fills in proportion to how
far the reader has scrolled through the document.

## How is it used?

```css
.ssr-rail::before {
  animation: ssr-fill linear both;
  animation-timeline: scroll(root block);
}
@keyframes ssr-fill { to { transform: scaleY(1); } }
```

## Why is it useful?

Reading-progress indicators are traditionally a `scroll` handler that divides
`scrollTop` by `scrollHeight` and writes a width every event. That runs script on
the main thread during the one interaction where jank is most visible, and it
forces a layout read (`scrollHeight`) on each tick.

A `scroll()` progress timeline expresses the same mapping declaratively and is
sampled by the compositor, so the rail stays smooth even while the main thread is
busy. Because the fill is `transform: scaleY()` rather than `height`, it never
triggers layout either.

The rail degrades sensibly: browsers without scroll-driven animation support
leave the fill at its static state, so the table of contents still renders and
still navigates — the progress line is an enhancement, not a dependency. That is
the same graceful-degradation contract the EaseMotion engine already documents
for `em=""` attributes when JavaScript is unavailable.
