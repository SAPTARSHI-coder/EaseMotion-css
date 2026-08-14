# CSS Bento Card: Quantum Energy Shield

A hardware-accelerated, JavaScript-free bento grid layout featuring pulsating, sci-fi energy shield effects powered entirely by CSS.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required.
- **Component Architecture**: 
  - **The Bento Grid**: Built using modern CSS Grid (`display: grid; grid-template-columns: repeat(4, 1fr)`). The layout is fully responsive, gracefully degrading to a 2-column, and eventually 1-column layout on smaller screens.
  - **The Shield Core**: The base of the shield effect is a CSS `radial-gradient` set as the `background-image` on each card. It provides a subtle inner glow radiating from the top edge.
  - **The Shield Aura**: The active forcefield is created using an `@keyframes shield-pulse` animation. This animation manipulates a massive, multi-layered `box-shadow` declaration. By animating the `spread-radius` and alpha-channel opacity of these shadows, we simulate an energy field that breathes, expands, and contracts.
  - **Grid Synchronization (Staggering)**: To make the dashboard feel organic and alive rather than rigidly mechanical, we apply negative `animation-delay` values (e.g., `-1.5s`, `-3s`) to specific cards based on their grid area. This staggers the pulsing so that different parts of the grid flare up at different times.
  - **The Overcharge Hover State**: When the user hovers over a `.shield-card`, we engage an "Overcharge" protocol. The idle breathing `animation` is removed (`animation: none`), and a new, massive, high-intensity static `box-shadow` is applied via transition. The `radial-gradient` background also shifts its focal point to the center and increases opacity, simulating a reactor heating up.
- **Theming**: Configured via CSS Custom Properties. Best viewed in a dark theme, utilizing deep indigo and bright cyan core energy colors. Typography utilizes `Chakra Petch` for a technical, HUD-like feel.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the continuous breathing animations and hover scale effects are disabled, and a static, accessible glow is presented instead.

## Usage
Open `demo.html` in your browser. The bento grid will initialize immediately. Observe the staggered breathing animations across the grid cards, and hover over any card to see the high-intensity overcharge shield state.

## Files
- `demo.html`: The HTML structure defining the CSS Grid layout and the nested SVG icons.
- `style.css`: The styling, the staggered `animation-delay` mappings, the multi-layered `box-shadow` keyframes, and the responsive media queries.
