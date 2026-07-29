# Animation Debug Overlay

An interactive developer tool that inspects a running CSS animation —
showing its name, timing, easing, direction, playback state, and live
progress — like a lightweight DevTools panel for motion.

## 1. What does this do?

Displays one animated preview object alongside a floating debug
overlay and a progress panel. Switching between six presets (Fade Up,
Slide Left, Scale, Rotate, Bounce, Pulse) or adjusting duration, delay,
easing, direction, or iteration count immediately updates both the
animation and every value shown in the overlay: animation name,
duration, delay, easing, iteration count, direction, fill mode,
playback state, current phase (Waiting / Running / Finished), and
progress percentage. A synchronized progress bar with a moving
playhead reports elapsed and remaining time in real time, driven by a
single `requestAnimationFrame` clock shared with the CSS animation.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Pick an **Animation** preset and adjust **Duration**, **Delay**,
  **Easing**, **Direction**, and **Iteration Count** from the control
  panel; the preview and debug overlay update immediately.
- Use **Play**, **Pause**, **Replay**, and **Reset** to control
  playback — the overlay's phase and state fields reflect each action.
- Toggle **Show / Hide Debug Overlay** to inspect the preview without
  the floating panel.
- Watch the **Progress** section for the live progress bar, playhead,
  percentage, elapsed time, and remaining time.

## 3. Why is it useful?

CSS animation properties are normally invisible once an animation
starts — you can read the values in your stylesheet, but you can't
easily see how they translate into actual playback behavior over time.
This overlay makes that translation visible and traceable: pairing
each control with a live, labeled readout helps developers build
accurate intuition for how duration, delay, easing, and iteration
count interact, before debugging a similar issue in a real project.
The preview still respects `prefers-reduced-motion` by falling back to
a brief opacity fade, while the debug overlay and progress tracking
keep functioning normally so the educational value isn't lost.