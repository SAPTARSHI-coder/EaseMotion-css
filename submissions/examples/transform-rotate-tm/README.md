# Transform Rotate — EaseMotion CSS

A comprehensive CSS utility submission demonstrating the `transform-rotate` CSS property
and related design tokens from the EaseMotion CSS framework.

## Overview

This submission adds **Transform Rotate CSS utilities** to the EaseMotion framework,
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
| Card | `.transform-rotate-card` | Shadow card with header/body/footer |
| Badges | `.transform-rotate-badge-*` | Primary, success, warning, danger, info |
| Chips | `.transform-rotate-chip` | Interactive pill-shaped chips |
| Buttons | `.transform-rotate-btn` | Primary, ghost, sm, lg variants |
| Input | `.transform-rotate-input` | Text input with focus ring |
| Avatar | `.transform-rotate-avatar` | User avatars with sm/lg variants |
| Tag | `.transform-rotate-tag` | Inline label tag |
| Progress | `.transform-rotate-progress` | Progress bar with animated fill |
| Loader | `.transform-rotate-loader` | Animated loading spinner |
| Sidebar | `.transform-rotate-sidebar-item` | Navigation sidebar items |
| Tooltip | `.transform-rotate-tooltip` | Hover tooltip component |
| Grid | `.transform-rotate-grid` | Auto-fill responsive grid |
| Stack | `.transform-rotate-stack` | Vertical flex stack |
| Row | `.transform-rotate-row` | Horizontal flex row |

## Installation

```html
<link rel="stylesheet" href="easemotion.css" />
```

## Usage

### Card Component

```html
<div class="transform-rotate-card">
  <div class="transform-rotate-card-header">
    <span class="transform-rotate-badge transform-rotate-badge-primary">New</span>
  </div>
  <div class="transform-rotate-card-body">
    <p>Your content here.</p>
    <button class="transform-rotate-btn">Action</button>
  </div>
  <div class="transform-rotate-card-footer">Footer text</div>
</div>
```

### Responsive Grid

```html
<div class="transform-rotate-grid">
  <div class="transform-rotate-demo">Item 1</div>
  <div class="transform-rotate-demo">Item 2</div>
  <div class="transform-rotate-demo">Item 3</div>
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
