# ease-popover-vv

## Overview
A **pure CSS** animated popover inspired by modern cyberpunk / neon SaaS dashboards.

- ✅ Zero JavaScript (interaction is driven by `:hover` and `:focus-within`)
- ✅ Smooth **opacity + scale + translateY + blur + shadow** opening animation
- ✅ Premium UI styling: glassmorphism, neon glow, soft blur, rounded corners, floating shadows

## Features
- Neon glass popover card with animated glow/shadow intensity
- Animated arrow that fades/scales in with the popover
- Gently pulsing badge (only while the popover is open)
- CTA button hover lift
- Keyboard-accessible: identical behavior for mouse and keyboard
- Reduced-motion support via `prefers-reduced-motion`

## Folder Structure
```
submissions/examples/ease-popover-vv/
├─ demo.html
├─ style.css
└─ README.md
```

## Accessibility
- Popover uses `role="tooltip"`
- Popover description is wired via `aria-describedby` on the trigger button
- Focus-visible styling is implemented (`:focus-visible`)
- Semantic HTML (`main`, `section`, headings, button, link)
- Keyboard users get the exact same interaction using `:focus-within`

## Responsive Behavior
- **Desktop:** Popover appears above the trigger button
- **Tablet:** Demo is centered
- **Mobile:** Popover width becomes `min(90vw, 320px)` to prevent horizontal scrolling and clipping

## CSS Variables
All configurable values are exposed as CSS Custom Properties:

- `--popover-duration`
- `--popover-easing`
- `--popover-scale`
- `--popover-distance`
- `--popover-width`
- `--popover-padding`
- `--popover-radius`
- `--popover-bg`
- `--popover-border`
- `--popover-text`
- `--popover-title`
- `--popover-accent`
- `--popover-shadow`
- `--popover-arrow-size`
- `--popover-blur`

### Customization Example
In `style.css` you can adjust glow and motion like:
```css
:root {
  --popover-duration: 280ms;
  --popover-scale: 0.9;
  --popover-blur: 18px;
  --popover-accent: #5bdbff;
}
```

## Browser Support
Modern browsers supporting:
- `backdrop-filter`
- `:focus-within`
- `:focus-visible`
- CSS transform `scale` / `translate` / `filter` transitions

## Preview Description
The demo shows:
- Trigger button with a neon gradient and animated border glow
- Popover card containing:
  - Title
  - Small `NEW` badge
  - Description
  - CTA button (with an arrow)

Example text:
**Neon Access**

**NEW**

Unlock premium interface effects with zero JavaScript animations.

[ Explore ]

## Future Enhancements
Potential extensions (still keeping zero-JS):
- Theming via data attributes (e.g., `data-theme="cyber"`)
- Additional variants (right/left placement) using only CSS
- Optional reduced-motion badge/arrow variants

## Contribution Notes
This example is intentionally self-contained and does not modify the core library.
The component name remains **`ease-popover-vv`** and is implemented using only modern CSS.

