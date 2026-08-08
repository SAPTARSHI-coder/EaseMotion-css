# Animation Synchronization Explorer

A timeline-editor-style tool that demonstrates how multiple CSS
animations can be sequenced, overlapped, staggered, or run in parallel
— with a professional timeline as the primary teaching surface.

## 1. What does this do?

Runs 3–8 independent animated cards, each computed with its own start
time based on the selected **Synchronization Mode**: Parallel,
Sequential, Overlap, Offset, Cascade, Reverse Cascade, or Wave. A
timeline panel — modeled after tools like After Effects or Premiere —
displays one colored bar per track showing its start, end, and any
overlap with the other tracks, with a time ruler across the top and a
playhead that sweeps across in sync with the live preview. An
Animation Inspector reports the active mode, duration, delay, overlap
percentage, stagger interval, active item count, and playback state in
real time, alongside a plain-language explanation of the current
strategy.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose a **Synchronization Mode** to change how start times are
  calculated for every track.
- Adjust **Duration**, **Initial Delay**, **Stagger Interval**,
  **Overlap Percentage**, and **Easing** — the timeline bars and
  preview cards update immediately.
- Change **Animation Count** to rebuild the preview and timeline with
  3–8 tracks.
- Use **Play**, **Pause**, **Replay**, and **Reset** to control
  playback; hover any timeline bar to see its exact start, end, and
  duration.

## 3. Why is it useful?

Coordinating several animations is usually described in prose terms
("stagger them" or "overlap slightly") without a way to see the
resulting timing relationships. This explorer makes those
relationships literal: each mode produces a visibly different timeline
shape from the same underlying duration, delay, and stagger values,
and the shared playhead shows exactly which tracks are active at any
given moment. That makes it easier to reason about sequencing
decisions — parallel versus cascade versus wave — before writing the
equivalent `animation-delay` values in a real project. The preview
still respects `prefers-reduced-motion` by falling back to a simple
opacity fade, while the timeline, inspector, and playhead remain fully
functional as a learning tool.