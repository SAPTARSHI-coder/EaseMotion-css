# CSS Progress: Aurora Glow

A hardware-accelerated, JavaScript-free progress bar. Features a vibrant, multi-colored animated fill with an intense, dynamically scaling ambient light spill.

## Features
- Pure CSS and HTML implementation. No JavaScript, SVGs, or Canvas required for the rendering of the ambient glow or the flowing gradient animation.
- **Component Architecture**: 
  - **The Flowing Fill**: The main `.progress-fill` element uses a multi-stop `linear-gradient` (Blue -> Purple -> Fuchsia -> Cyan). To create the illusion of flowing energy, we set `background-size: 200% 100%` and apply an infinite `@keyframes` animation that horizontally shifts the `background-position`.
  - **The Ambient Light Spill (The Glow)**: Real light bleeds out of its container. To achieve this in pure CSS without complex stacking contexts:
    1. A `::before` pseudo-element is attached to the `.progress-fill`.
    2. Crucially, it inherits the exact same dimensions, `background`, `background-size`, and `animation` as the main bar.
    3. We apply `filter: blur(12px)` to this pseudo-element and place it behind the main fill using `z-index: -1`.
    4. **Result**: As the progress bar grows, the blurred pseudo-element grows perfectly in tandem with it. Because it shares the same animated gradient, the ambient light spill accurately reflects the colors currently flowing through the bar.
  - **Dynamic Pulsing**: A secondary `@keyframes` animation is applied to the glow layer, subtly pulsing its `opacity` and `blur` radius to make the energy feel alive and volatile.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). Note: This component is designed to look most striking in dark mode environments where the glow can contrast heavily against the background.
- Fully accessible semantic structure using standard ARIA `progressbar` roles. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the continuous flowing gradient and pulsing glow animations are gracefully disabled.

## Usage
Open `demo.html` in your browser. Watch the colors flow through the progress bar and observe the intense, heavily blurred ambient light spilling out onto the background. Click the demo buttons (which simply apply inline `width` styles via JS) to see how the ambient glow scales perfectly in tandem with the progress fill.

## Files
- `demo.html`: The HTML structure defining the accessible `progressbar` track and the fill container.
- `style.css`: The styling, the `linear-gradient` flow animations, and the heavily blurred pseudo-element logic required to achieve the ambient Aurora glow.
