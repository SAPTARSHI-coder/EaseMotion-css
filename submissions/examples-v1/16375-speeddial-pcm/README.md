# Speed Dial / Expandable FAB Menu Component

## What does this submission do?

Adds a **Speed Dial** component — a floating action button (FAB) that expands into multiple action buttons. Supports 4 expansion directions (up, down, left, right), click and hover trigger modes, staggered entrance animation, rotating trigger icon, tooltip labels, and outside-click-to-close.

## How was it implemented?

- **CSS** (`style.css`): The `.speed-dial` component uses CSS custom properties for sizing, spacing, and colors. The `.sd-trigger` is a circular FAB with a box-shadow and scale hover effect. The `.sd-icon` rotates 45° when open. `.sd-actions` are absolutely positioned relative to the trigger based on direction class: `.up` (column-reverse above), `.down` (column below), `.left` (row-reverse to the left), `.right` (row to the right). Actions start at `transform: scale(0)` and animate to `scale(1)` with staggered `transition-delay` set via JS inline style. Tooltips (`.sd-tooltip`) appear on hover, positioned opposite the expansion direction.
- **HTML/JS** (`demo.html`): The `buildActions()` function generates action buttons with stagger delay and tooltip placement. `toggleDial()`/`openDial()`/`closeDial()` control the `.open` class. The interactive demo includes: 4 direction cells (up/down/left/right) in a grid, a hover-mode toggle (switches the demo dial between click and hover trigger modes), action logging (clicking an action logs its label + timestamp), Open All / Close All buttons, and outside-click-to-close. `ACTIONS` data (Share, Edit, Copy, Delete) drives all dials consistently.

## Why these choices?

- **4 directions** cover all common speed dial placements (bottom-right FAB expanding up, top-bar expanding down, side panels expanding left/right).
- **Click + Hover modes** serve different UX needs — click for deliberate actions, hover for quick-reveal toolbars.
- **Staggered animation** (50ms per action) creates a polished cascading entrance effect without complex keyframes.
- **Icon rotation** (+ → ×) is a universally recognized open/close affordance.
- **CSS-only tooltips** via `:hover` on `.sd-action` keep the implementation simple and accessible.
- **Outside-click-to-close** ensures the menu doesn't stay open accidentally.
- **Action logging** demonstrates how click events propagate from the action buttons.

## Files

| File        | Purpose                                                                     |
| ----------- | --------------------------------------------------------------------------- |
| `demo.html` | Interactive speed dial with 4 directions, hover/click modes, action logging |
| `style.css` | Speed dial styles: trigger, actions, directions, tooltips, animations       |
| `README.md` | This documentation                                                          |
