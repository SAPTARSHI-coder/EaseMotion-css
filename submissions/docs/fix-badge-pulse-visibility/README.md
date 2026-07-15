# Fix: Badge Pulse Visual Visibility

Resolves a design bug in `badges.css` where the pulsing indicator (`.ease-badge-pulse::after`) is invisible because it lacks a background definition and has a zero-size box-shadow.

## What does this do?
- **Pulsing Ripple Fix:** Defines `background: inherit` and correct default border-radius/shadow bounds so that the ping scale animation creates a visible ripple.