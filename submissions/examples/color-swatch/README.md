# Color Swatch

A compact, clickable color swatch component for theme editors, product customizers, and design tools.

## Classes

- `.color-swatch` — base swatch (circle/box), background set via inline `style` or a color class
- `.color-swatch-sm` / `.color-swatch-md` / `.color-swatch-lg` — size variants
- `.selected` — marks the active/selected swatch with a ring + checkmark
- `.color-swatch-group` — flex-wrap container for a row of swatches, responsive on small screens

## Usage

\`\`\`html
<div class="color-swatch-group">
  <div class="color-swatch color-swatch-md selected" style="background:#f97316"></div>
  <div class="color-swatch color-swatch-md" style="background:#3b82f6"></div>
</div>
\`\`\`

## Acceptance criteria covered
- [x] Color display
- [x] Selected state
- [x] Hover animation (scale + shadow)
- [x] Multiple sizes (sm/md/lg)
- [x] Responsive layout (wraps, shrinks on mobile)

Related issue: #71725
