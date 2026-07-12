# Animation Interruption Explorer

A simulation lab that shows what actually happens to a running CSS
animation when it's paused, reversed, cancelled, restarted mid-flight,
or re-triggered rapidly — instead of only showing animations that play
cleanly start to finish.

## 1. What does this do?

Runs a single animated object with a full simulation control room
around it: an **Event Timeline** highlighting the current lifecycle
step, an **Animation State Monitor** reporting live state, progress,
direction, iteration, playback status, interruption count, and
elapsed/remaining time, an **Interruption Log** recording every action
with a timestamp, and a **Recovery Analysis** panel that explains, in
plain language, what each interruption actually does under the hood.
Seven scenario buttons — **Restart**, **Reverse**, **Pause**,
**Resume**, **Cancel**, **Rapid Trigger**, and **Interrupt Midway** —
let you apply real interruptions to the running animation at any
moment, alongside a synchronized "uninterrupted" preview for direct
comparison.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose an **Animation Preset** and adjust **Duration**, **Delay**,
  **Easing**, **Iterations**, and **Playback Speed**.
- Use **Play**, **Pause**, **Replay**, and **Reset** for baseline
  control, then click any **Interruption Scenario** button while the
  animation is running to see its immediate effect on the "Interrupted"
  preview, compared side by side with the untouched "Uninterrupted" one.
- Watch the **Event Timeline** and **Animation State Monitor** update
  live, and read the **Recovery Analysis** text after each action to
  understand exactly what CSS mechanism produced that behavior.
- Use **Clear Log** to reset the Interruption Log without affecting
  current playback.

## 3. Why is it useful?

Most animation tutorials assume a clean, uninterrupted run from 0% to
100%, but real interfaces constantly interrupt animations — a user
double-clicks, a modal closes before its entrance finishes, a toggle
flips back before the transition completes. Developers rarely see what
CSS actually does in these cases: `animation: none` cancels
immediately with no cleanup, `animation-play-state: paused` freezes at
the current computed value, reversing direction doesn't recreate the
animation instance, and rapid re-triggering can prevent an animation
from ever completing. By exposing each behavior as an explicit,
explained action against a live comparison baseline, this tool
replaces guesswork with a concrete mental model for handling
interruption gracefully in real UI code.
