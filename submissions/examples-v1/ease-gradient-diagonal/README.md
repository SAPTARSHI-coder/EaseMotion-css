# Diagonal Gradient Shift Animation (`ease-gradient-diagonal`)

An intermediate animation feature utility designed to shift a multi-color gradient canvas diagonally across an element using pure-CSS background position modifiers.

## Technical Composition Breakdown

- **45-Degree Angular Gradient Grid:** Implements a strict `45deg` linear array matching explicit acceptance targets cleanly.
- **Oversized Background Canvas:** Expands background bounds up to `200% 200%` to supply necessary vector pixel maps for shifting without exposing edge masks.
- **Fluid Diagonal Translation:** Loops the tracking vector coordinates seamlessly from `0% 0%` directly through to `100% 100%` over a continuous `6s` linear loop thread.

## Workspace Tree Map

- `demo.html`: Standalone playground layout holding the live component.
- `style.css`: Clean modular layout stylesheet rules.

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
