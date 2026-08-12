# @media (scripting) Adaptive UI

## Summary
Uses the `@media (scripting)` media query to provide progressive enhancement — enhanced interactive styles when JavaScript is available, and fallback styles when scripting is disabled.

## Key Concepts
- **`scripting: enabled`** — Applies when the browser supports and has JavaScript enabled. Use for enhanced hover effects, smooth transitions, and interactive states.
- **`scripting: none`** — Applies when JavaScript is disabled or unsupported. Provides a functional fallback without reliance on scripting.
- **`scripting: initial-only`** — Applies when JavaScript runs only during initial page load (e.g., some e-ink readers or print media).

## Usage
Define baseline styles for all users, then use `@media (scripting: enabled)` to layer on enhanced interactions. Use `@media (scripting: none)` to adjust or simplify the experience for users without JavaScript.
