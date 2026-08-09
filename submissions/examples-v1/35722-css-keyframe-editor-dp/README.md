# CSS Keyframe Editor

An educational playground for understanding how `@keyframes` works, by
editing five percentage stops directly and watching both the animation
and the generated CSS update live.

## 1. What does this do?

Provides five editable keyframe stops (0%, 25%, 50%, 75%, 100%). Select
a stop from the timeline, then adjust its Translate X, Translate Y,
Scale, Rotation, and Opacity values — the change is written into that
stop's data immediately. A single animated preview element interpolates
smoothly between whatever values you've set at each stop, using a real
`@keyframes` rule that's rebuilt and injected into the page as you
edit. The exact generated CSS is shown in a read-only code panel with a
Copy CSS button.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Click a **keyframe stop** (0%–100%) to select it; the control panel
  loads that stop's current values.
- Adjust **Translate X**, **Translate Y**, **Scale**, **Rotation**, or
  **Opacity** — the preview and generated CSS update instantly.
- Switch to another stop and repeat to build a multi-step animation.
- Use **Play**, **Pause**, **Replay**, or **Reset** to control the
  preview, and **Copy CSS** to copy the finished `@keyframes` block for
  use in your own project.

## 3. Why is it useful?

Most developers learn `@keyframes` by reading finished examples, which
doesn't build an intuitive sense of how percentage steps translate into
motion over time. By editing one stop at a time and immediately seeing
both the visual result and the exact CSS it produces, this tool turns
keyframe authoring into a hands-on, reversible experiment rather than
trial-and-error in a text editor. It also reinforces good practice by
generating clean, readable CSS output and by shortening the preview
animation automatically under `prefers-reduced-motion`.