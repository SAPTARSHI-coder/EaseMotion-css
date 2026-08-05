# CSS Zoom-In Pricing Table for Fintech Dashboard Layouts

A pure CSS interactive Zoom-In pricing table crafted for high-performance fintech apps, crypto payment gateways, and algorithmic quant dashboards.

## Key Features

- **Focal Zoom-In Dynamics:** Card elements (icons, price badges, bullet points, and CTA buttons) execute coordinated spring-based zoom transitions (`transform: scale(1.08)` to `scale(1.25)`) when hovered.
- **Pure CSS Interactive Toggle:** Employs checkbox state mapping (`:checked ~`) for switching between Monthly and Annual pricing.
- **Glassmorphic Mesh Aesthetics:** Dark theme with subtle animated background mesh lights and neon accent borders.
- **Accessibility & Responsive Grid:** Responsive breakpoints down to mobile viewports with full `prefers-reduced-motion` compliance.

## Customization

```css
:root {
    --zoom-bg: #07090e;
    --neon-cyan: #00f2fe;
    --neon-blue: #4facfe;
    --ease-zoom: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
