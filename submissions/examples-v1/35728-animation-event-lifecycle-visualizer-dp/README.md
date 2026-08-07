# Animation Event Lifecycle Visualizer

A DevTools-style monitor that captures real CSS animation events —
`animationstart`, `animationiteration`, `animationend` — and maps them
onto a live flow diagram, timeline, and console.

## 1. What does this do?

Runs a real CSS animation on a preview element and attaches genuine
`animationstart`, `animationiteration`, and `animationend` event
listeners to it — nothing is simulated with timers. Every time the
browser fires one of these events, three things update simultaneously:
the **Event Flow Diagram** highlights the matching step in the
lifecycle (adapting automatically to the current iteration count,
including an infinite-repeat indicator), the **Event Timeline** logs
it with a precise timestamp, and the **Live Event Console** appends a
DevTools-style log line with the event name and animation name. An
**Animation State** panel and synchronized **Playback Progress** bar
report duration, delay, iteration count, direction, fill mode, and
live percentage throughout.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose an **Animation** preset and adjust **Duration**, **Delay**,
  **Iteration Count**, **Direction**, and **Easing** — each change
  rebuilds the flow diagram to match and replays it.
- Use **Play**, **Pause**, and **Replay** to control playback; the
  flow diagram, timeline, and console all stay in sync with the actual
  browser-fired events, including correctly resuming a paused
  animation without losing elapsed time.
- Use **Reset** to return every control to its default, and
  **Clear Event Log** to wipe the timeline and console without
  affecting the current animation settings.

## 3. Why is it useful?

Most developers know that `animationiteration` and `animationend`
exist, but rarely see exactly *when* and *how many times* they fire
relative to `iteration-count`, `delay`, and `direction` — especially
the fact that `animationiteration` fires on every repeat except the
last, which fires `animationend` instead. By listening to the real
browser events (not a fake timer) and visualizing their order as a
diagram that adapts to the current settings, this tool turns an
abstract part of the CSS Animations spec into something developers can
watch happen, building accurate intuition before they rely on these
events in their own JavaScript. The preview still respects
`prefers-reduced-motion` by simplifying its motion, while the event
capture, diagram, and logs continue to function normally.