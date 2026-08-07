# Phi Accrual Failure Detector Monitor

A responsive, CSS-only operations monitor that demonstrates probabilistic
failure detection from heartbeat arrival history.

## What it demonstrates

- Adaptive suspicion instead of a fixed binary timeout
- A rolling heartbeat interval distribution
- Phi confidence bands for healthy, watch, and suspect states
- Reversible routing decisions when a delayed node recovers
- A timeline from missed heartbeat to restored traffic

## Interaction

Use the **Deliver heartbeat** control to simulate a late node returning. The
native checkbox remains keyboard focusable, so `Tab` and `Space` transition the
monitor from suspect to healthy without JavaScript.

## Technical notes

- Pure HTML and CSS
- Responsive desktop and mobile layouts
- Visible keyboard focus handling
- Reduced-motion support
- No external assets or runtime dependencies
