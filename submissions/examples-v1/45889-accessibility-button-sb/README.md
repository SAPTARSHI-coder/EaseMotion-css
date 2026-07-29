# Accessibility-First Button Variants

High-contrast, keyboard-friendly button components designed for maximum accessibility.

## Files

- `demo.html` - Demo page showing accessible button variants
- `style.css` - Button styles with accessibility features

## Usage

Open `demo.html` in a browser. Use Tab key to navigate and see focus states.

## Features

### Accessibility Features
- High contrast colors (4.5:1+ ratio)
- Visible focus indicators
- Keyboard navigation support
- Reduced motion support
- High contrast mode support
- Disabled states

### Button Variants
- Primary
- Secondary
- Ghost
- Outline
- Danger
- Success

### Size Variants
- Large
- Default
- Small

### Special States
- Icon buttons
- Loading state with spinner
- Disabled state

## Classes

| Class | Description |
|-------|-------------|
| `ease-btn-primary-sb` | Primary button |
| `ease-btn-secondary-sb` | Secondary button |
| `ease-btn-ghost-sb` | Ghost button |
| `ease-btn-outline-sb` | Outline button |
| `ease-btn-danger-sb` | Danger button |
| `ease-btn-success-sb` | Success button |
| `ease-btn-large-sb` | Large size |
| `ease-btn-small-sb` | Small size |
| `ease-btn-icon-sb` | Icon button |
| `ease-btn-loading-sb` | Loading state |

## Accessibility Best Practices

1. Always provide accessible labels with `aria-label` for icon-only buttons
2. Use `aria-busy="true"` when button is in loading state
3. Ensure buttons have sufficient color contrast
4. Test keyboard navigation with Tab key
5. Consider reduced motion preferences

Closes #45889
