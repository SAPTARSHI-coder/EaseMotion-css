# Motion Accessibility Inspector

An accessibility-inspection tool that shows the same animation twice —
original and accessibility-adapted — side by side, so the effect of
each motion preference is visible rather than just described.

## 1. What does this do?

Runs two synchronized previews of the same animation preset (Slide,
Scale, Bounce, or Rotate): the left always plays the original,
unmodified animation, and the right adapts to the selected
**Accessibility Mode** — Default Motion, Reduced Motion, Motion
Removed, or Fade Only. An **Accessibility Inspector** panel reports
the current mode, duration, motion intensity, motion distance,
animation type, accessibility status, and recommended usage, updating
live as settings change. A **Recommendations** panel surfaces best
practices specific to the selected mode, and an **Accessibility
Checklist** confirms the page itself follows the practices it teaches
(reduced motion support, keyboard accessibility, visible focus,
semantic HTML, motion alternatives, responsive design).

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose an **Accessibility Mode** to see how the adapted preview
  changes relative to the untouched original.
- Switch **Animation Preset**, **Duration**, and **Easing** — both
  previews update together, keeping the comparison fair.
- Use **Play**, **Pause**, **Replay**, and **Reset** to control both
  previews simultaneously.
- Read the explanation below the previews and the **Recommendations**
  panel for the reasoning behind the current mode.

## 3. Why is it useful?

"Respect prefers-reduced-motion" is often treated as a binary switch —
animation on or off — but good accessibility practice is closer to a
spectrum: reduce distance, replace movement with opacity, or remove
motion entirely while keeping the state change legible. Showing the
adapted version directly beside the original makes that spectrum
concrete: a developer can see that Reduced Motion still preserves
feedback, Fade Only trades movement for opacity, and Motion Removed
still needs to communicate a state change instantly rather than
silently. That comparison is a more durable lesson than a rule stated
in prose, and it models the checklist items — reduced motion support,
visible focus, semantic markup — that the tool itself is built with.
