# CSS Float-Drift Progress Bar (Glassmorphism UI)

A pure CSS progress bar component designed for Glassmorphism UI Layouts. It features a stunning "Float-Drift" animation set, where internal light particles gently float and drift across the filled portion of the bar, simulating data transfer or energy flow.

## Features
- Pure CSS and HTML (No JavaScript required for animations).
- **Glassmorphism Aesthetic**: The main container (`.glass-card`) utilizes `backdrop-filter: blur(16px)` layered over large, softly glowing, ambiently drifting background orbs (`.bg-orb`).
- **The Float-Drift Effect**: 
- Inside the `.progress-fill` element, several `.drift-particle` divs are positioned absolutely.
- These particles utilize an `@keyframes` animation (`drift-linear`) that translates them from `left: 0` to `left: 100%` across the filled bar.
- To make the animation feel organic rather than mechanical, the keyframes include a slight vertical translation (`translate(0, -30%)`) and scaling at the 50% mark. This creates a gentle "floating" or "bobbing" effect as they move horizontally.
- The particles are given staggered `animation-duration` and `animation-delay` values via utility classes (`.p1`, `.p2`, `.p3`), ensuring they never sync up perfectly and look like a continuous, randomized stream.
- A secondary `.fill-glow` overlay pulses across the bar (`animation: fill-pulse`) to add a sweeping highlight.
- Clean, structured aesthetic utilizing the `Outfit` font, subtle white borders (`rgba(255, 255, 255, 0.1)`), and glowing accents.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the ambient background orbs stop moving, the pulsing active dot halts, and the float-drift particles inside the progress bar are completely hidden (`display: none`), leaving a static, clean glassmorphic progress bar.

## Usage
Open `demo.html` in your browser. You will see a mock environment deployment dashboard. Observe the progress bar; you will see horizontal light particles drifting and slightly bobbing across the blue gradient fill, simulating active processing. The background orbs slowly drift, creating dynamic refractions through the glass card.

## Files
- `demo.html`: The HTML structure for the layout, detailing the nesting required to keep the float-drift particles contained entirely within the current width of the `.progress-fill`.
- `style.css`: The styling, glassmorphism tokens, and the `@keyframes` driving the organic particle drifting mechanics.
