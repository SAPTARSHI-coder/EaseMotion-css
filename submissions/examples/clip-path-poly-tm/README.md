# Clip Path Poly — EaseMotion CSS

A comprehensive CSS utility submission demonstrating the `clip-path-poly` CSS property
and related design tokens from the EaseMotion CSS framework.

## Overview

This submission adds **Clip Path Poly CSS utilities** to the EaseMotion framework,
providing reusable, token-driven CSS classes for rapid UI development.

## Features

- **Token-driven design**: Uses CSS custom properties from `core/variables.css`
- **Dark mode support**: Full `prefers-color-scheme: dark` variants
- **Reduced motion**: `prefers-reduced-motion: reduce` media query support
- **Accessibility**: Focus-visible states, semantic HTML, keyboard navigation
- **Responsive**: Mobile-first utility classes with fluid sizing

## Components Included

| Component | Class | Description |
|-----------|-------|-------------|
| Card | `.clip-path-poly-card` | Shadow card with header/body/footer |
| Badges | `.clip-path-poly-badge-*` | Primary, success, warning, danger, info |
| Chips | `.clip-path-poly-chip` | Interactive pill-shaped chips |
| Buttons | `.clip-path-poly-btn` | Primary, ghost, sm, lg variants |
| Input | `.clip-path-poly-input` | Text input with focus ring |
| Avatar | `.clip-path-poly-avatar` | User avatars with sm/lg variants |
| Tag | `.clip-path-poly-tag` | Inline label tag |
| Progress | `.clip-path-poly-progress` | Progress bar with animated fill |
| Loader | `.clip-path-poly-loader` | Animated loading spinner |
| Sidebar | `.clip-path-poly-sidebar-item` | Navigation sidebar items |
| Tooltip | `.clip-path-poly-tooltip` | Hover tooltip component |
| Grid | `.clip-path-poly-grid` | Auto-fill responsive grid |
| Stack | `.clip-path-poly-stack` | Vertical flex stack |
| Row | `.clip-path-poly-row` | Horizontal flex row |

## Installation

```html
<link rel="stylesheet" href="easemotion.css" />
```

## Usage

### Card Component

```html
<div class="clip-path-poly-card">
  <div class="clip-path-poly-card-header">
    <span class="clip-path-poly-badge clip-path-poly-badge-primary">New</span>
  </div>
  <div class="clip-path-poly-card-body">
    <p>Your content here.</p>
    <button class="clip-path-poly-btn">Action</button>
  </div>
  <div class="clip-path-poly-card-footer">Footer text</div>
</div>
```

### Responsive Grid

```html
<div class="clip-path-poly-grid">
  <div class="clip-path-poly-demo">Item 1</div>
  <div class="clip-path-poly-demo">Item 2</div>
  <div class="clip-path-poly-demo">Item 3</div>
</div>
```

### Dark Mode

Dark mode is automatically applied via CSS media queries.
No JavaScript required.

### Reduced Motion

Animations are disabled for users with `prefers-reduced-motion: reduce`.

## Design Tokens Used

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-color-primary` | `#6c63ff` | Primary actions, highlights |
| `--ease-color-bg` | Light/dark bg | Page background |
| `--ease-color-surface` | `#ffffff` | Card/surface backgrounds |
| `--ease-color-muted` | `#64748b` | Secondary text |
| `--ease-radius-md` | `0.5rem` | Border radius |
| `--ease-radius-full` | `9999px` | Pills, avatars |
| `--ease-shadow-md` | medium shadow | Card shadows |
| `--ease-space-4` | `1rem` | Spacing scale |
| `--ease-space-6` | `1.5rem` | Card padding |
| `--ease-speed-fast` | `150ms` | Fast transitions |
| `--ease-speed-slow` | `600ms` | Slow transitions |
| `--ease-ease-bounce` | bezier | Bouncy easing |
| `--ease-glow-primary` | primary glow | Focus/hover glow |

## Browser Support

Modern browsers with CSS Custom Properties support:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## License

MIT — same as EaseMotion CSS framework.
