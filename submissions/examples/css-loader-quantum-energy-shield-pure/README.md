# CSS Loader: Quantum Energy Shield

A complex, multi-layered energy shield utilizing spinning dashed borders, intense box-shadow glows, and opposing rotation speeds to create intricate interference patterns.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG graphics.
- **Component Architecture**: 
  - **The Pulsing Core**: The center `.quantum-core` is a solid div utilizing dual layered `box-shadow`s (a tight blue glow and a wide purple glow). A `scale()` keyframe animation causes the core to slowly swell and contract, increasing the glow intensity at its peak.
  - **The Interference Rings**: Three absolute-positioned, transparent circular divs surround the core (`.shield-ring`). 
  - **Border Rendering Tricks**: Instead of solid borders, these rings utilize `dashed` and `dotted` border styles. By applying different weights (2px, 3px, 4px) and colors (blue, purple), the empty spaces between the dashes create the illusion of individual energy particles or field lines.
  - **Opposing Rotations**: The outer and inner rings spin clockwise (`linear` timing), while the middle ring spins counter-clockwise (`spin-reverse`) at a different speed. As the dashed borders pass over one another, they create a complex, unpredictable moiré/interference pattern resembling a sci-fi forcefield.
  - **Blend Modes**: The fast-spinning inner ring utilizes `mix-blend-mode: screen`. When its bright blue dashes intersect with the purple dots of the middle ring, the colors combine into pure white light, further selling the energy shield aesthetic.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The energy effect is intentionally designed for dark backgrounds (`--loader-bg: #09090b;`) to maximize contrast and the impact of the `mix-blend-mode: screen` interactions.
- Fully accessible semantic structure. The decorative shield rings are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all rotations and pulses, locking the rings at staggered, pleasing static angles (`rotate(45deg)`, etc.) for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the quantum energy shield loading animation.

## Files
- `demo.html`: The HTML structure defining the core and the three nested shield rings.
- `style.css`: The styling, the `dashed`/`dotted` border rendering, the `mix-blend-mode`, and the opposing rotation keyframes.
