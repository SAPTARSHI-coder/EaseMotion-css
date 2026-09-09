# Cyberpunk Glowing Status Badge

A high-fidelity dashboard status badge featuring continuous diagonal scanline sweeps, digital flicker-in entrance states, and holographic neon glow shadows.

## What does this do?
This component renders status indicators styled after cyberpunk HUD elements. Each badge continuously animates a glowing diagonal light beam across its surface and exhibits a digital flicker on hover.

## How is it used?
1. Reference `style.css` inside your HTML file.
2. Structure your markup containing the badge indicators:
   ```html
   <span class="cyber-badge online">
     <span class="scan-line"></span>
     Online
   </span>
   ```
3. Use status classes like `online`, `offline`, and `warning` to alter variables (neon-glow color, border properties).

## Why is it useful?
Dynamic status badges add contextual visual feedback. They are ideal for monitoring dashboards, gamer profiles, and futuristic console landing pages.
