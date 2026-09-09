# Neumorphic Flyout Popover (Theming Configuration Guide)

This guide explains how to theme and customize the Neumorphic Flyout Popover using CSS Custom Properties. Because neumorphism heavily relies on lighting and shadows matching the background color, creating new themes requires carefully calibrating four specific CSS variables.

## Theming Configuration via CSS Variables

To create a new theme, you must redefine the core variables under a new CSS modifier class.

### Required Variables
- `--bg-color`: The base color for the background, button, and popover.
- `--text-color`: The color for the text and icons.
- `--shadow-light`: The highlight color (usually a lighter tint of the base color, or pure white).
- `--shadow-dark`: The shadow color (usually a darker shade of the base color).

### CSS Implementation (Ocean Theme Example)

```css
/* Base variables apply to the default state */
:root {
    --bg-color: #e0e5ec;
    --text-color: #333;
    --shadow-light: #ffffff;
    --shadow-dark: #a3b1c6;
}

/* Ocean Theme Modifier */
.neumorphic-flyout--ocean,
.neumorphic-trigger--ocean {
    --bg-color: #e0f2fe;
    --text-color: #0369a1;
    --shadow-light: #ffffff;
    --shadow-dark: #b9dcf2;
}
```

## HTML Markup Example

To apply your custom theme, add the modifier classes to both the trigger button and the flyout popover container:

```html
<div class="popover-container">
    <!-- Trigger Button with Ocean Theme -->
    <button class="neumorphic-trigger neumorphic-trigger--ocean" aria-haspopup="true" aria-expanded="false" aria-controls="popover-ocean">
        Ocean Theme
    </button>
    
    <!-- Flyout Popover with Ocean Theme -->
    <div id="popover-ocean" class="neumorphic-flyout neumorphic-flyout--ocean" role="menu" aria-hidden="true">
        <ul class="flyout-list">
            <li role="none"><a href="#" role="menuitem">Option 1</a></li>
            <li role="none"><a href="#" role="menuitem">Option 2</a></li>
        </ul>
    </div>
</div>
```

## Accessibility Requirements for Theming

When creating custom themes for neumorphic UI, contrast is often a major issue. Ensure you follow these guidelines:

1. **Text Contrast**: The `--text-color` must have at least a 4.5:1 contrast ratio against the `--bg-color` to meet WCAG AA requirements.
2. **Focus Visibility**: Soft inset shadows are often not distinct enough to serve as a clear focus indicator. Ensure you retain the `outline` on `:focus-visible` for keyboard users:
   ```css
   .neumorphic-trigger:focus-visible {
       outline: 2px solid var(--text-color);
       outline-offset: 4px;
   }
   ```
3. **Keyboard Navigation**: As always with this component, ensure `Escape` closes the popover and focus returns to the trigger button.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
