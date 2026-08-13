# CSS 3D Effect: Bouncing Spring

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d`. Features elastic `cubic-bezier` timing functions and precisely staggered animation delays to simulate spring compression and expansion physics.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the 3D rendering or the elastic physics.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the depth using `perspective: 1000px`. The `.spring-assembly` wrapper applies `transform-style: preserve-3d` and rotates the entire scene into an isometric viewing angle (`rotateX(70deg)`).
  - **Torus Ring Construction**: Because pure CSS cannot natively render a true 3D spiral tube, the spring is constructed from 8 individual `.spring-coil` elements. These are styled as hollow rings (`border-radius: 50%` with a thick `border`). In isometric view, they stack perfectly to look like a contiguous coiled spring.
  - **The Physics Engine**: To simulate a spring bouncing on the floor, the bottom rings must move less distance than the top rings. 
    - We generate 8 distinct `@keyframes` (from `bounce-1` to `bounce-8`).
    - The lowest ring translates only `10px` up the Z-axis, while the highest ring translates `150px`. 
    - The `spring-payload` object sits on top and translates `180px`.
  - **Elastic Timing & Staggering**: The realistic "bounce" is achieved using a highly exaggerated `cubic-bezier(0.5, -0.5, 0.5, 1.5)` timing function. The animations are linked together by staggering their `animation-delay` by exactly `0.05s` per ring. This ensures the kinetic energy appears to travel up the coil from the floor, compressing and expanding it sequentially.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). The coil colors and inner/outer box shadows adapt to maintain high contrast.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing all animations. For motion-sensitive users, the CSS falls back to hardcoded, static Z-translations, presenting the spring in a fully expanded, frozen state rather than flashing or vibrating.

## Usage
Open `demo.html` in your browser. Watch the continuous bouncing animation and observe how the staggered delays and distinct Z-axis limits for each coil ring simulate realistic elastic spring physics.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the preserve-3d isometric container, the 8 spring coils, and the payload object.
- `style.css`: The styling, the `preserve-3d` mechanics, the torus ring construction, the elastic `cubic-bezier`, and the 8 individual `@keyframes` governing the Z-axis limits and staggered animation delays.
