# Dynamic Notification Alert Badge (Theming Configuration Guide)

This guide explains how to customize the visual aesthetics of the Dynamic Notification Alert Badge. By utilizing CSS Custom Properties, developers can easily create contextual variants (e.g., Success, Warning, Error) without altering the underlying component structure.

## Theming Architecture

The colors for the badge and the accessibility focus ring are mapped to CSS variables at the `:root` level. 

### Core Variables
- `--badge-bg`: The background color of the numeric badge.
- `--badge-text`: The color of the text inside the badge.
- `--focus-ring`: The color of the high-contrast `:focus-visible` outline.

## Creating Theme Modifiers

To create a new contextual theme, define a modifier class (e.g., `.badge-theme-success`) that overrides these core variables.

### CSS Example

```css
/* Base Variables (Default Alert Red) */
:root {
    --badge-bg: #ef4444; 
    --badge-text: #ffffff;
    --focus-ring: #ef4444;
}

/* Custom Success Theme Modifier */
.badge-theme-success {
    --badge-bg: #10b981; 
    --focus-ring: #10b981;
}

/* Custom Warning Theme Modifier */
.badge-theme-warning {
    --badge-bg: #f59e0b; 
    --focus-ring: #f59e0b;
}
```

### HTML Implementation

Apply the modifier class directly to the parent `<button>` element. This ensures both the badge color and the keyboard focus ring are themed synchronously.

```html
<!-- Default (Alert) -->
<button type="button" class="notification-btn" aria-label="Notifications, 3 unread alerts">
    <svg>...</svg>
    <span class="notification-badge" aria-hidden="true">3</span>
</button>

<!-- Success Variant -->
<button type="button" class="notification-btn badge-theme-success" aria-label="Tasks, 12 completed">
    <svg>...</svg>
    <span class="notification-badge" aria-hidden="true">12</span>
</button>
```

## Theming & Accessibility 

When creating custom themes, pay close attention to contrast ratios.

1. **Badge Text Contrast**: The `--badge-text` must have a contrast ratio of at least 4.5:1 against the `--badge-bg`. If you create a light-colored badge (e.g., a pale yellow warning badge), you must change `--badge-text` to a dark color (e.g., `#000000`).
2. **Focus Ring Contrast**: The `--focus-ring` is applied as an outline on the parent button. It must contrast sufficiently against the background color of the page. Do not theme the focus ring with a light color if the page background is also light.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
