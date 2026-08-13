# CSS Sci-Fi HUD: Glassmorphism Blur

A hardware-accelerated, JavaScript-free Head-Up Display (HUD) interface featuring advanced glassmorphism techniques. The UI panels act as frosted glass, dynamically refracting animated glowing orbs in the background.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the glass refraction effects.
- **Component Architecture**: 
  - **The Ambient Background**: For glassmorphism to be effective, there must be something complex behind the glass to refract. We use absolute positioned `<div>` elements (`.orb`) with massive `filter: blur(80px)` applied. These orbs are animated via `@keyframes float` to slowly drift around the viewport behind the UI.
  - **The Glass Panels**: The `.glass-panel` utility class is the core of this design. It uses `background: rgba(...)` to create a semi-transparent base, and `backdrop-filter: blur(16px)` to physically blur the glowing background orbs that sit behind it in the Z-index stack.
  - **Edge Lighting**: Real glass catches light on its edges. We simulate this by applying a subtle `border` with `rgba(255, 255, 255, 0.1)`, and specifically highlighting the top and left borders slightly more to simulate a directional light source from the top-left.
  - **Center Visualizer**: The central core visualizer uses layered `.glass-ring` elements. These rings rotate in opposite directions using `@keyframes spin` and `spin-reverse`, creating a complex mechanical gyroscope effect entirely out of blurred CSS borders.
  - **Data Progress Bars**: The environmental data bars use `box-shadow` on the `.glass-fill` elements to create a glowing liquid effect that sits cleanly inside the frosted glass tracks.
- **Theming**: Configured via CSS Custom Properties. The color palette uses deep space blues and blacks for the background, contrasted with vibrant cyan, magenta, and yellow for data and warnings. Typography utilizes `Jura` and `Rajdhani` for a clean, aerospace-grade aesthetic.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. (Animations can be disabled via OS preferences).

## Usage
Open `demo.html` in your browser. Watch as the massive glowing orbs slowly drift behind the UI panels. Notice how the `backdrop-filter: blur()` on the glass panels dynamically reacts to the colors moving behind them, creating a highly realistic frosted glass effect. 

## Files
- `demo.html`: The HTML structure defining the ambient background orbs, the HUD layout, and the nested glass panels.
- `style.css`: The styling, the `backdrop-filter` utility classes, the infinite `@keyframes float` and `spin` animations, and the responsive media queries.
