# Outline Offset — EaseMotion CSS

A comprehensive CSS utility submission demonstrating the `outline-offset` CSS property
and related design tokens from the EaseMotion CSS framework.

## Overview

This submission adds **Outline Offset CSS utilities** to the EaseMotion framework,
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
| Card | `.outline-offset-card` | Shadow card with header/body/footer |
| Badges | `.outline-offset-badge-*` | Primary, success, warning, danger, info |
| Chips | `.outline-offset-chip` | Interactive pill-shaped chips |
| Buttons | `.outline-offset-btn` | Primary, ghost, sm, lg variants |
| Input | `.outline-offset-input` | Text input with focus ring |
| Avatar | `.outline-offset-avatar` | User avatars with sm/lg variants |
| Tag | `.outline-offset-tag` | Inline label tag |
| Progress | `.outline-offset-progress` | Progress bar with animated fill |
| Loader | `.outline-offset-loader` | Animated loading spinner |
| Sidebar | `.outline-offset-sidebar-item` | Navigation sidebar items |
| Tooltip | `.outline-offset-tooltip` | Hover tooltip component |
| Grid | `.outline-offset-grid` | Auto-fill responsive grid |
| Stack | `.outline-offset-stack` | Vertical flex stack |
| Row | `.outline-offset-row` | Horizontal flex row |

## Installation

```html
<link rel="stylesheet" href="easemotion.css" />
```

## Usage

### Card Component

```html
<div class="outline-offset-card">
  <div class="outline-offset-card-header">
    <span class="outline-offset-badge outline-offset-badge-primary">New</span>
  </div>
  <div class="outline-offset-card-body">
    <p>Your content here.</p>
    <button class="outline-offset-btn">Action</button>
  </div>
  <div class="outline-offset-card-footer">Footer text</div>
</div>
```

### Responsive Grid

```html
<div class="outline-offset-grid">
  <div class="outline-offset-demo">Item 1</div>
  <div class="outline-offset-demo">Item 2</div>
  <div class="outline-offset-demo">Item 3</div>
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
