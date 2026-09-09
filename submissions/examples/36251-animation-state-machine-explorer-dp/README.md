# Animation State Machine Explorer

A visual finite state machine inspector that teaches UI animation as a
state-driven system — Idle, Entering, Visible, Exiting, Removed —
rather than an isolated animation effect.

## 1. What does this do?

Models a component's lifecycle as five connected states in a live
diagram, where the currently active state is highlighted and completed
states remain visually marked. Five **State Controls** — Enter, Show,
Hide, Exit, Remove — trigger only the valid transition from the
current state (attempting an invalid one is explained, not silently
allowed), while **Auto Play** progresses through the full lifecycle
automatically. A **State Inspector** reports current/previous/next
state, elapsed time, transition duration, animation status, and the
active animation name. A **Transition History** log timestamps every
state change, and a **Why This State** panel explains, in plain
language, why each state exists and what typically triggers it. A
**Compare vs Instant Show/Hide** toggle runs a second preview that
snaps directly between hidden and visible, so the value of the
lifecycle states is visible side by side rather than asserted.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose a **Component** (Modal, Toast, Tooltip, Dropdown, Sidebar) —
  the same state machine drives all five, only the preview changes.
- Click **Enter**, **Show**, **Hide**, **Exit**, or **Remove** to
  manually walk through the lifecycle, or click **Auto Play** to let
  it run continuously.
- Adjust **Transition Duration**, **Easing**, and **Playback Speed**
  to see how timing affects the Entering/Exiting animations.
- Enable **Compare vs Instant Show/Hide** to see the same component
  appear and disappear with no lifecycle at all, for direct contrast.
- Use **Replay** to restart from Idle immediately, **Reset** to
  restore all settings, and **Clear History** to wipe the transition
  log without affecting the current state.

## 3. Why is it useful?

Most animation examples show a single enter or exit effect in
isolation, which hides the fact that real components need explicit
intermediate states — a modal that's "entering" shouldn't yet accept
input, and one that's "exiting" shouldn't be interactive at all. This
tool makes that state machine explicit and inspectable: the diagram
shows which transitions are even valid from the current state, the
inspector exposes the same fields a developer would track in code
(current/previous/next, animation status), and the instant-toggle
comparison demonstrates concretely why skipping the Entering/Exiting
states produces a jarring experience. That reframes CSS animation from
"add a keyframe" to "model the states a component actually passes
through," which is a sturdier mental model for real component
libraries.
