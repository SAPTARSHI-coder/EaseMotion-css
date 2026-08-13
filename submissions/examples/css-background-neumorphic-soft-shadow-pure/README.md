# CSS Background: Neumorphic Soft Shadow

A hardware-accelerated, JavaScript-free animated background. Features soft, extruded geometric shapes that orbit and pulse, simulating a shifting ambient light source.

## Features
- Pure CSS and HTML implementation. No JavaScript required to simulate the shifting light source.
- **Component Architecture**: 
  - **Neumorphism Core Concept**: Neumorphism (or "Soft UI") relies on using a background color that is identical to the element's background color. Depth is created entirely through paired `box-shadow` values: one dark shadow (simulating the unlit edge) and one light shadow (simulating the lit edge).
  - **The Background Shapes**: The `.neumorphic-background` contains large `.neu-shape` elements. Because they share the same `--bg-base` color as the body, they are invisible except for their massive, soft shadows.
  - **Simulating a Moving Light Source**: To animate the Neumorphic background, we apply an `@keyframes` animation that simply rotates the circular shapes by 360 degrees. 
    - *The Trick*: Because the shapes are perfect circles, rotating them doesn't change their physical silhouette. However, rotating the shape *also rotates its drop-shadow*. This causes the light and dark shadows to slowly spin around the perimeter of the circle, perfectly mimicking the effect of a light source orbiting the shape in 3D space.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). The custom properties automatically recalculate the dark/light shadow hex values based on the OS theme to ensure the Neumorphism works on dark mode backgrounds.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the continuous orbital rotation of the background shapes is disabled, presenting a static but beautiful extruded background.

## Usage
Open `demo.html` in your browser. Observe the massive background shapes. Watch how their shadows slowly shift and orbit, simulating a moving ambient light. Hover and click the foreground button to see standard Neumorphic hover/active states (switching from an extruded `box-shadow` to a pressed `inset` shadow).

## Files
- `demo.html`: The HTML structure defining the neumorphic background container and the foreground content panel.
- `style.css`: The styling, the critical `--bg-base` color matching, the complex multi-layered `box-shadow` configurations (`--shadow-out`, `--shadow-in`), and the rotation `@keyframes` that drive the ambient light simulation.
