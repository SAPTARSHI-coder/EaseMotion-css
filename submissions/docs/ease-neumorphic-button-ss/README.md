# Neumorphic Button (Basic Usage)

## Overview
The Neumorphic Button component provides soft, tactile UI elements designed with realistic dual-shadow physics (specular highlight and ambient shadow). Built using CSS custom properties, it delivers smooth elevation transitions, pressed/recessed states, and accessible WCAG 2.1 AA keyboard navigation support.

## Quick Start & HTML Snippets

### Standard Button
```html
<button class="ease-btn-neu">Click Me</button>
```

### Accent Variant
```html
<button class="ease-btn-neu ease-btn-neu-accent">Confirm</button>
```

### Inset Toggle
```html
<button class="ease-btn-neu ease-btn-neu-inset" aria-pressed="true">Active</button>
```

### Circle Icon
```html
<button class="ease-btn-neu ease-btn-neu-icon" aria-label="Settings">⚙</button>
```

## CSS Class Naming Conventions

| Class | Description |
| --- | --- |
| `.ease-btn-neu` | Base extruded surface with dual ambient/specular shadows. |
| `.ease-btn-neu-accent` | Applies primary brand color accent to label and hover glow. |
| `.ease-btn-neu-inset` | Renders a recessed, pressed inset shadow state. |
| `.ease-btn-neu-icon` | Formats the component into a 1:1 circular icon button. |

## CSS Custom Property Overrides

The component relies on CSS custom properties defined on `:root` that can be customized to match any color scheme or design system theme:

- `--neu-bg`: Background matching color (`#e2e8f0` default)
- `--neu-shadow-dark`: Bottom-right ambient shadow color (`#cbd5e1` default)
- `--neu-shadow-light`: Top-left highlight specular shadow color (`#ffffff` default)
- `--neu-accent`: Interactive text/focus color (`#0284c7` default)
- `--neu-radius`: Border radius token (`14px` default)

## Accessibility & WCAG Compliance Notes

- **Color Contrast**: Mandatory text color contrast exceeding WCAG 2.1 AA 4.5:1 ratio against the neumorphic surface (`#0f172a` text color on `#e2e8f0` surface).
- **Focus Indicators**: Explicit `:focus-visible` offset ring (`outline-offset: 4px`) ensures full visibility for keyboard navigation.
- **High-Contrast Support**: `@media (forced-colors: active)` media query provides strong border definitions for Windows High Contrast Mode.
- **ARIA Attributes**: Required ARIA semantics (`aria-pressed` for toggle states and explicit `aria-label` on icon buttons) guarantee screen reader accessibility.
