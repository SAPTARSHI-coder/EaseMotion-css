# Sliding Auth Screen Component (CSS-Only)

A responsive single-container authentication viewport component split into two input zones with a hardware-accelerated sliding graphic layout overlay panel.

## Features
* **Zero JS Form Engine:** Controls state-driven translations natively by capturing check actions on hidden inputs via pseudo-selectors (`:checked ~`).
* **Dual-Axis Overlay Interlocking:** Counter-translates overlay elements synchronously against the master frame axis to establish a modern parallax slide depth.
* **Responsive Breakpoint Matrix:** Under `768px` viewports, the layout transitions into a linear card template stack with custom focus triggers, turning off wide spatial transforms for better legibility on mobile devices.

## Configurable Properties

| CSS Custom Variable | Baseline Assignment Token | Role / Context Mapping |
| :--- | :--- | :--- |
| `--ease-auth-duration` | `0.65s` | Dictates frame sliding animation timeline length. |
| `--ease-auth-curve` | `cubic-bezier(...)` | Applies dynamic sharp acceleration and gentle deceleration steps. |