# Motion Performance Analyzer

A Lighthouse-style performance audit for a single CSS animation —
scoring, rendering pipeline analysis, and a direct good-vs-poor
comparison, all updating live as you change the animated property.

## 1. What does this do?

Runs one animated preview using a selectable property — five
GPU-friendly options (`translateX`, `translateY`, `scale`, `rotate`,
`opacity`) and five layout-triggering options (`width`, `height`,
`top`, `left`, `margin`) — and computes an estimated **Performance
Score** out of 100 with a star rating and color-coded status. A
**Rendering Pipeline** diagram shows which of the four browser stages
(Style, Layout, Paint, Composite) the current property actually
triggers. A **Performance Breakdown** panel reports GPU acceleration,
layout/paint triggering, rendering cost, smoothness, CPU load, and
battery impact as badges. A **Good vs Poor Comparison** always shows
the current property's GPU-friendly and layout-triggering counterparts
side by side with their own scores and stages, alongside contextual
optimization recommendations and a beginner-friendly explanation of
_why_ the selected property performs the way it does.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose an **Animated Property**, then adjust **Duration**, **Delay**,
  **Easing**, and **Iteration Count** — the preview, score, pipeline,
  breakdown, comparison, and recommendations all update together.
- Use **Play**, **Pause**, **Replay**, and **Reset** to control
  playback; the Animation Inspector tracks live progress and playback
  state.
- Refer to the **Animation Property Reference** at the bottom for a
  quick list of which properties fall into each category.

## 3. Why is it useful?

"Use transform instead of top" is common advice, but developers rarely
see a concrete performance number attached to that choice. By
converting the rendering-pipeline difference into an actual score,
badges, and a side-by-side comparison, this tool makes the cost of a
layout-triggering animation tangible rather than theoretical —
closer to how Lighthouse or DevTools would frame it. Pairing every
selection with its opposite-category counterpart reinforces the
underlying lesson: it's not that `top` is bad and `transform` is good
in the abstract, it's that one skips layout and paint while the other
doesn't, on every single frame.
