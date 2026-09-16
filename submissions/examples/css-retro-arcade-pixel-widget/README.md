# CSS Widget: Retro Arcade Pixel Variation

A polished, reusable dashboard widget featuring a distinctive "Retro Arcade Pixel" visual identity. This component brings 8-bit nostalgia to modern data dashboards using strictly HTML and Vanilla CSS, avoiding all image assets and external fonts.

## Features

- **CSS Pixel Geometry**: Achieves the classic "stepped corner" arcade aesthetic natively in CSS. By passing a complex `clip-path` polygon to both the outer wrapper and the inner content block, a perfect 8-bit stroke is generated without relying on SVG masks or PNG backgrounds.
- **Hardware-Accelerated Interaction**: Hovering triggers an illumination effect. The background behind the clip-path shifts to the theme's active accent color, while the component lifts via `transform: translateY(-4px)`, shifting drop-shadow depths simultaneously. This keeps all movement perfectly locked to 60fps GPU compositing.
- **Subtle Scanline Display**: The `.widget-content` area implements a highly-restrained CRT scanline overlay using a `repeating-linear-gradient`. The opacity is kept incredibly low to ensure the foreground dashboard metrics remain perfectly crisp and readable.
- **Pixel-Perfect Separators**: Inner hierarchy is managed by the `.arcade-divider`, which uses a horizontal repeating gradient to generate a dashed line resembling individual glowing pixels.
- **CSS Variable Theming**: The retro aesthetic natively supports color injection. Applying `.theme-cyan` or `.theme-magenta` to the host anchor instantly swaps the arcade border, drop-shadow glow, typographic accents, and hover illumination to match specific cabinet styling.
- **Dark Mode Integration**: Arcade screens require high contrast. The widget forces a deep charcoal/black background internally, meshing beautifully with host platforms utilizing `@media (prefers-color-scheme: dark)` configurations without blowing out the neon colors.
- **Accessibility & Reduced Motion**:
  - Semantic `<article>` structure ensures dashboard metrics are properly prioritized by screen readers.
  - Overtakes default browser focus rings by injecting a solid inner-stroke on `:focus-visible`, securing safe keyboard `Tab` targeting that aligns with the pixelated style.
  - Fully implements `@media (prefers-reduced-motion: reduce)`. The scanline CRT overlay is completely stripped to prevent visual noise/vertigo, and all blinking `.pixel-dot` animations are halted to provide a safe, static arcade diagram.

## Usage

1. Open `demo.html` in your browser.
2. Note the stepped corners—this is pure CSS `clip-path`, meaning it scales indefinitely without pixel blur.
3. Hover over the widgets to observe the background illumination trick that creates a glowing arcade border.
4. Try keyboard navigation (`Tab`) to view the customized focus-visible states spanning the exact pixel geometries.
