# Glassmorphic 3D Holographic Ticket

A highly realistic, interactive event ticket component featuring a perforated edge cutout (via `mask-image` and `radial-gradient`) and a premium 3D holographic hover effect.

## Files
- `demo.html`: The HTML structure of the ticket.
- `style.css`: The advanced CSS rules for the 3D transforms, holographic glare, and perforations.
- `README.md`: This file.

## Features
- **3D Transform:** Uses CSS `perspective` and `rotateY()` to tilt the ticket on hover based on the cursor position (simulated via static hover tilt for CSS-only support).
- **Holographic Glare:** A sweeping `linear-gradient` layered with `mix-blend-mode: overlay` gives a shimmering foil reflection effect.
- **Perforated Edges:** Uses seamless `mask-image` circles to simulate the torn/perforated edge typical of event stubs.
- **Glassmorphic Theme:** Integrates perfectly with the EaseMotion dark mode glass aesthetic.

## Usage
Simply include the `.glass-3d-ticket` and its inner structure in your markup.
