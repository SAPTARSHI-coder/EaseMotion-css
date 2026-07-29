# CSS Pulse-Active Accordion (Neumorphic Soft)

A soft, tactile accordion component designed for Neumorphic Soft layouts. Simulates physical depth through carefully calibrated inner and outer shadows that create the illusion of elements being pressed into or raised from a soft surface. The active item features a subtle breathing pulse in its shadow depth.

## Features
- **Shadow Depth Pulse:** The open item's shadow depth oscillates gently — creating a breathing effect where the panel appears to rise and settle, as if alive.
- **True Neumorphism:** Uses dual box-shadows (light from top-left, dark from bottom-right) on a matched background to create the illusion of extruded soft material.
- **Pressed/Raised States:** Closed items appear raised (convex), while open items transition to an inset (concave) appearance.
- **Warm Muted Palette:** Soft beige-gray tones that feel organic and comfortable, avoiding the cold sterility of typical UIs.
- **Pure CSS:** No JavaScript. Built on semantic `<details>`/`<summary>`.

## Usage
Wrap items in `.neu-accordion`. Each `<details>` gets `.neu-item`, each `<summary>` gets `.neu-header`.

## Files
- `demo.html`: A soft settings panel preview.
- `style.css`: Neumorphic shadows, depth pulse, and pressed/raised state transitions.
