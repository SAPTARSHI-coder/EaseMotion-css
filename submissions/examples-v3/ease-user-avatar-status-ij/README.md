# User Avatar Status Component Sandbox

## Overview
A user avatar component with interactive online/offline/busy/away status indicator dots. The dot pulses with a ring glow when online and transitions smoothly between states. Click any avatar to cycle through statuses.

## Sandbox Configuration Files
- `demo.html` — Standalone presentation with Inter font, heading, four avatar cards with status dots, and click-to-cycle interaction.
- `style.css` — Scoped custom properties, status dot color + scale transitions, and a `@keyframes uas-pulse` for the online glow animation.

## Key Layout Mechanics
1. **Custom Properties Driven:** All visual knobs (`--uas-duration`, `--uas-avatar-size`, `--uas-online-color`, `--uas-offline-color`, `--uas-busy-color`, `--uas-away-color`) are exposed as `:root` variables.
2. **Data-attribute driven:** Status is controlled via `data-status` attribute; CSS attribute selectors apply the correct dot color and animation.
3. **Pulse Animation:** When `data-status="online"`, the dot receives a `box-shadow` pulse keyframe that creates a glowing ring effect.
