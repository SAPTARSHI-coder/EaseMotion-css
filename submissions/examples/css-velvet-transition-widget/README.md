# CSS Widget: Velvet Smooth Transition Variation

A polished, reusable dashboard widget featuring a distinctive "Velvet Surface" visual treatment. This component generates a premium, tactile fabric texture and luxurious light-sheen interaction entirely using HTML and Vanilla CSS, without noisy image textures or JavaScript.

## Features

- **Microscopic Fabric Texture**: Instead of relying on heavy noise images or expensive SVG filters, the velvet fiber texture is generated using two `repeating-linear-gradient` declarations set to extreme low opacity (`0.01`). Blended via `mix-blend-mode: overlay`, this creates a soft, brushed tonal depth characteristic of premium velvet.
- **Luxurious Light Sheen**: The `.velvet-sheen` element utilizes a massive, soft `radial-gradient` that simulates light grazing across the fabric fibers.
- **Hardware-Accelerated Interaction**: The velvet interaction isn't just a basic hover color swap. The light sheen physically travels across the surface using an elongated `1.2s` cubic-bezier transition mapped strictly to `transform: translate3d(...)` and `opacity`. This ensures the soft light glide renders buttery smooth on the GPU without triggering any browser repaints.
- **Responsive Architecture**: Built utilizing standard CSS Grid constraints. The velvet texture scales mathematically across viewports, remaining pinned as a `position: absolute` background layer so it never interferes with DOM layout scaling down to mobile viewports.
- **Dark Mode Native Aesthetic**: Premium materials thrive in dark environments. To support lighter host pages, the widget maintains a strict dark boundary (`var(--velvet-[theme]-base)`) inside the card container. It perfectly accommodates a native `@media (prefers-color-scheme: dark)` host page by transitioning the surrounding shadow boundaries to deeper ambient occlusion metrics.
- **Accessibility & Focus Integration**: The decorative velvet layers utilize `aria-hidden="true"` and `pointer-events: none` to remain invisible to screen readers. Focus states override the default browser rings with a sharp, high-contrast white bounding box for clean keyboard navigation.
- **Reduced Motion Support**: Hooking into `@media (prefers-reduced-motion: reduce)`, the sweeping sheen transitions and physical Y-axis hover elevations are disabled gracefully, leaving the widget to serve as a beautiful static premium card for users with vestibular conditions.

## Usage

1. Open `demo.html` in your browser.
2. Observe the subtle brushed texture across the Burgundy and Midnight variations.
3. Hover slowly over the widgets to witness the signature `Velvet Smooth Transition`: notice how the light sheen slowly sweeps diagonally across the surface, replicating directional fabric nap.
4. Try keyboard navigation (`Tab`) to view the customized focus-visible state.
