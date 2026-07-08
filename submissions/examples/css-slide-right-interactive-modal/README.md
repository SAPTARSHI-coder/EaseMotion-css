# Interactive Slide-Right Control Deck

A robust, pure CSS overlay drawer panel configured with tactile micro-interactions and rapid physics curves. Engineered precisely for dashboard control units, game configuration grids, or rich interactive application workspaces.

## 🕹️ Micro-Interaction Architecture
- **Snappy Physics Interpolation:** Leverages an bouncy overshoot configuration (`easeOutBack` bezier array) to add responsive playfulness to panel arrivals.
- **Pure CSS Input Toggles:** Utilizes checkbox hack configurations to implement tactile toggle components without injecting Javascript event cycles.

## 🎛️ Modulating Variables

Fine-tune global interactive weights cleanly by modifying these custom tokens declared at the `:root` pseudo-class layer:

| Property Identifier | Default Setting | Architectural Intent |
| :--- | :--- | :--- |
| `--interact-duration` | `0.42s` | Global slide transformation speed limit. |
| `--interact-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Overshoot back-out timing function profile. |
| `--interact-slide-offset` | `-100%` | Hidden baseline orientation path vector. |
| `--interactive-violet` | `#6366f1` | Primary interactive neon color profile token. |