# CSS Glitch-Flicker Modal (Cyberpunk Layout)

An advanced, high-impact modal component built exclusively with CSS. Designed for Cyberpunk, Sci-Fi, and Web3 interfaces, it features staggered text glitching, a flickering entrance sequence, and sharp geometric cut-paths.

## 🚀 Features

- **Zero JavaScript:** Employs the hidden-checkbox pattern (`input type="checkbox"`) linked to the backdrop and trigger buttons to handle the modal's open/close state logic natively in CSS.
- **True CSS Text Glitch:** Uses the `attr(data-text)` technique on pseudo-elements (`::before`, `::after`) layered over the primary text. By applying rapid, staggered `clip-path: inset()` keyframe animations, it creates an authentic holographic glitch effect without needing duplicate HTML spans.
- **Cinematic Flicker Entrance:** The modal container utilizes a hard-stepping keyframe animation (`opacity` jumping between 0, 1, and 0.5) to mimic a failing neon sign or a system boot sequence when opened.
- **Cyberpunk Geometry:** Avoids `border-radius` entirely in favor of `clip-path: polygon()` to create the aggressive chamfered edges and cut corners on the modal body and buttons.
- **Accessible & Performant:** Includes `tabindex="0"` on labels to ensure keyboard accessibility. Crucially, implements `@media (prefers-reduced-motion: reduce)` to strip out the intense flickering, glitching, and flashing keyframes to protect users sensitive to rapid motion or strobe effects.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. To dismiss the modal, users can click the dark backdrop overlay or the internal "Abort" label.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --cp-neon-red: #ff003c;           /* Primary alert color */
    --cp-neon-cyan: #00f0ff;          /* Secondary interactive color */
    --cp-neon-yellow: #fcee0a;        /* Accent details */
    --cp-anim-speed: 0.3s;            /* Modal backdrop fade speed */
}
