# CSS Widget: Laser Ray Trace Variation

A polished, reusable dashboard widget featuring a conceptual "Laser Ray Trace" optical stage. This component renders a continuous, animated laser signal reflecting off an optical surface, generating a futuristic, high-tech aesthetic using strictly HTML and Vanilla CSS.

## Features

- **Optical Geometry**: Recreates a physics ray-tracing diagram natively in the DOM. Features an absolute-positioned `.ray-stage` containing a `.laser-source` emitter, a `.ray-primary` beam, an `.optical-element` mirror (rotated via `transform: rotate()`), and a rebounding `.ray-reflected` beam.
- **Hardware-Accelerated Laser Pulses**: The continuous energy signal traveling down the laser beams is handled by `.ray-pulse` nodes. These execute a looping `translateX` animation (`@keyframes pulse-travel`) to simulate the speed of light. Operating purely on `transform` ensures perfectly smooth, 60fps compositor-driven rendering.
- **Controlled Glow Physics**: Prevents the widget from looking like a muddy neon blur by tightly restricting glow effects. `box-shadow` is applied exclusively to the `.ray` elements, featuring an intense white `--laser-core` and a softer, colored `--laser-glow`.
- **CSS Variable Theming**: The laser visualization seamlessly adapts to different optical frequencies. The `.theme-cyan` and `.theme-violet` modifier classes override the `--laser-glow` and source background variables, instantly restyling the entire optical stage.
- **Dashboard Telemetry Hierarchy**: The conceptual laser visualization acts as a decorative background layer (`aria-hidden="true"`, `pointer-events: none`). The foreground features clean, semantic telemetry data tailored for scientific or engineering interfaces, ensuring legibility against the deep background.
- **Native Dark Mode Integration**: Lasers demand high contrast. The widget forces a deep slate/black background (`#09090b`) internally, which meshes perfectly with host platforms utilizing `@media (prefers-color-scheme: dark)` configurations.
- **Accessibility & Reduced Motion**:
  - Focus overrides default browser rings, applying a custom dual-ring focus state mapping to the active laser theme color to ensure safe `Tab` navigation.
  - Hooking into `@media (prefers-reduced-motion: reduce)`, the `.ray-pulse` animation loops are destroyed. The widget gracefully falls back to displaying a beautiful, static optical diagram, protecting users with vestibular sensitivities from continuous high-contrast movement.

## Usage

1. Open `demo.html` in your browser.
2. Observe the continuous energy pulses traveling from the emitter, hitting the 45-degree mirror, and reflecting accurately along the new trajectory.
3. Hover over the cards to see the beam intensity and surrounding glow increase, alongside a subtle widget lift (`translateY`).
4. Try keyboard navigation (`Tab`) to view the customized focus-visible states spanning the exact laser color configurations.
