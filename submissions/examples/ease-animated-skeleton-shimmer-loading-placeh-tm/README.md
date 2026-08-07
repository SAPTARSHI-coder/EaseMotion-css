# Feature: Animated Skeleton Shimmer Loading Placeh

## Overview

This component demonstrates a specific UI animation pattern for the EaseMotion CSS library.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| --primary | #6366f1 | Brand accent color |
| --success | #10b981 | Positive state |
| --warning | #f59e0b | Warning state |
| --danger | #ef4444 | Error/danger state |
| --bg-dark | #0f1117 | Dark background |
| --bg-light | #ffffff | Light background |
| --radius | 12px | Border radius |
| --transition | 0.3s cubic-bezier(0.4, 0, 0.2, 1) | Default transition |

## Variants

- **Default**: Standard appearance with base transitions
- **Hover**: Enhanced effects on interactive elements
- **Focus**: Visible focus ring for keyboard navigation
- **Dark/Light**: Automatic theme adaptation via prefers-color-scheme
- **Reduced Motion**: Respects prefers-reduced-motion for accessibility

## Accessibility

- Focus-visible styles on all interactive elements
- prefers-reduced-motion support to disable animations
- ARIA labels where appropriate
- Sufficient color contrast ratios
- Keyboard navigable

## Usage



## CSS Architecture

- CSS custom properties for all design tokens
- BEM-inspired class naming
- Responsive via media queries
- Reduced motion media query support
