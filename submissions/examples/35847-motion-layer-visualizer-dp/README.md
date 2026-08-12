# Motion Layer Visualizer

An educational tool that shows why animating `transform`/`opacity` is
smooth while animating `width`/`top`/`left`/`margin` is not — by
visualizing which browser rendering pipeline stages each one actually
triggers.

## 1. What does this do?

Runs two synchronized animations side by side: a GPU-friendly one
(`translateX`, `translateY`, `scale`, `rotate`, or `opacity`) and a
layout-triggering one (`width`, `height`, `top`, `left`, or `margin`).
Selecting any property automatically pairs it with its counterpart so
both boxes are always visible together. A **Rendering Pipeline**
diagram shows the four stages a browser runs — Style, Layout, Paint,
Composite — with a checkmark on every stage the current pairing
actually triggers and a dash on every stage it skips, making the cost
difference visible rather than theoretical. A performance card,
plain-language explanation, and a fixed set of optimization tips
provide supporting context.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose an **Animated Property** from either the GPU-friendly or
  layout-triggering group; both preview boxes, the pipeline diagram,
  the performance card, and the explanation text update together.
- Adjust **Duration** and **Easing** to change the pacing of both
  previews at once.
- Use **Play**, **Pause**, **Replay**, and **Reset** to control
  playback of both boxes in sync.

## 3. Why is it useful?

"Animate transform and opacity, not width and top" is common advice,
but it's rarely shown *why* — most developers never see which specific
rendering stages each choice skips or triggers. By pairing a
GPU-friendly property with its layout-triggering counterpart and
mapping both onto the same four-stage pipeline, this tool turns an
abstract performance rule into a visible, comparable difference:
compositor-only properties skip Layout and Paint entirely, while
layout properties re-run the full pipeline on every frame. That
concrete mental model is easier to retain — and easier to justify in a
code review — than a rule stated without evidence. The comparison
previews still respect `prefers-reduced-motion` by shortening to a
single low-iteration pass, while the pipeline and performance panels
continue to update normally.