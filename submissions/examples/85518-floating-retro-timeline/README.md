# Floating Vertical Timeline — Retro Pixel

A pure CSS floating vertical timeline component with a retro pixel-inspired visual style.

The component uses alternating cards, a central timeline rail, pixel-style markers, responsive layouts, and subtle hover transitions.

## Features

- Floating vertical timeline
- Retro pixel-inspired styling
- Alternating timeline cards
- Responsive mobile, tablet, and desktop layouts
- Smooth hover transitions
- `prefers-reduced-motion` support
- Keyboard focus styling
- Pure HTML and CSS
- No JavaScript dependencies

## Accessibility

The component respects the user's motion preferences.

When `prefers-reduced-motion: reduce` is enabled:

- Card transitions are disabled.
- Hover movement is removed.
- The timeline remains fully usable without animation.

Timeline dates use semantic `<time>` elements and the timeline itself uses an ordered list to preserve the chronological structure.

## Design Tokens

The component keeps its visual values in CSS custom properties so the styling can be adapted to the surrounding design system.

```css
:root {
  --pixel-bg: #09090b;
  --pixel-surface: #18181b;
  --pixel-border: #52525b;
  --pixel-text: #fafafa;
  --pixel-muted: #a1a1aa;
  --pixel-accent: #a3e635;
}