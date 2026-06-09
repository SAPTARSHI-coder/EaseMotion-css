# Sandbox Layout Fix: 3D Perspective Hover Tilt Loop Stutter Resolution

## Overview

A structural layout interaction fix for premium 3D transforms to completely neutralize mouse entry feedback loops, eliminate rendering flutters, and block frame vibration cycles across Blink and Gecko engines.

## 📁 Sandbox Configuration Files

- `demo.html` — Precision presentation block hosting the layered perspective card structure to verify edge hover tracking stability.
- `style.css` — Scoped layout sheet isolating mouse-hit bounds from moving child target layers linked back to global variables.

## 🐛 The Bug Resolved

Previously, applying deep spatial perspective adjustments (`transform: perspective() rotateX() rotateY()`) onto an interface card that also directly checked the `:hover` pseudo-class caused severe layout degradation. As the user's cursor crossed the box limit, the card tilted on its 3D canvas axis, pulling its geometric boundaries out from underneath the pointer. This triggered instantaneous leave-and-enter event storms inside browser engines, causing the component to violently shake and flutter.

## 🛠️ The Solution

The interaction boundaries are optimized. By wrapping components in an unmoving, transparent parent framework (`.alm-tilt-card-anchor`), you maintain a rock-solid, static pointer collision field. Hover declarations target this static container and route transition rotation commands down onto a separate nested child element (`.alm-card-visual-target`). Because the child plane transforms independently inside the parent's fixed boundary zone, the cursor never drops tracking connection, keeping interactions butter-smooth at a locked $60\text{fps}$.
