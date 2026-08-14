# Motion Timeline Visualizer

An interactive example that visualizes animation start, duration, and
overlap as timeline bars, synchronized to a live preview and a moving
playhead — like an animation editor.

## 1. What does this do?

Renders a group of preview elements alongside a horizontal timeline
where every element gets its own row and bar showing exactly when its
animation starts and ends. Four timing strategies — **Sequential**,
**Parallel**, **Overlapping**, and **Staggered** — compute different
start times from the same duration, delay, and stagger values, so you
can directly compare how each strategy sequences motion. A playhead
sweeps across the timeline in sync with the live preview, highlighting
whichever bar is currently animating, while a playback panel reports
the active preset, timing values, and progress in real time.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose a **Timeline Preset** to change how start times are calculated.
- Adjust **Duration**, **Initial Delay**, **Stagger Interval**, and
  **Easing** — the timeline bars and preview both update immediately.
- Change **Number of Elements** to rebuild the preview and timeline
  with 3–8 items.
- Use **Play**, **Pause**, **Replay**, and **Reset** to control
  playback; the playhead and preview animations always stay
  synchronized because both are driven from the same computed start
  times and a single `requestAnimationFrame` clock.

## 3. Why is it useful?

Animation timing is usually described in prose ("stagger each item by
100ms") without a way to actually see the resulting overlap or gaps
between elements. This visualizer makes that timing structure literal:
each preset produces a visibly different timeline shape from the exact
same inputs, and the synchronized playhead shows precisely which
element is animating at any given moment. That makes it easier for
developers to reason about sequencing choices — sequential versus
staggered versus overlapping — before writing the equivalent
`animation-delay` values in their own CSS. The preview still respects
`prefers-reduced-motion` by falling back to a simple opacity fade,
while the timeline and playhead remain fully functional as an
educational tool.