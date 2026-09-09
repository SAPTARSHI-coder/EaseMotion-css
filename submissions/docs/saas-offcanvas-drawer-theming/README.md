# SaaS Modern Offcanvas Drawer (Theming Configuration Guide)

This guide documents how to easily theme the SaaS Modern Offcanvas Drawer using CSS Custom Properties. Many modern SaaS applications require both Light and Dark modes. By defining structural colors as CSS variables, we can toggle themes instantly without rewriting the complex drawer layout or animation logic.

## Theming Architecture

The colors for the drawer background, text, borders, and footer are mapped to CSS variables at the `:root` level. 

### Core Variables (Default Light Theme)
```css
:root {
    --drawer-bg: #ffffff;
    --drawer-text: #0f172a;
    --drawer-text-muted: #64748b;
    --drawer-border: #e2e8f0;
    --drawer-footer-bg: #f8fafc;
    
    --drawer-close-hover: #f1f5f9;
    --focus-ring: #3b82f6;
}
```

## Creating a Dark Theme Modifier

To create a dark theme, define a modifier class (e.g., `.drawer-theme-dark`) that overrides these core variables.

### CSS Example

```css
/* Custom Dark Theme Modifier */
.drawer-theme-dark {
    --drawer-bg: #0f172a;
    --drawer-text: #f8fafc;
    --drawer-text-muted: #94a3b8;
    --drawer-border: #334155;
    --drawer-footer-bg: #1e293b;
    
    --drawer-close-hover: #334155;
    
    /* Lighter blue to maintain contrast against the dark background */
    --focus-ring: #60a5fa; 
}
```

### HTML Implementation

Apply the modifier class directly to the root `<aside>` element of the drawer.

```html
<!-- Default (Light) Drawer -->
<aside class="saas-drawer" role="dialog" aria-modal="true">
    ...
</aside>

<!-- Dark Mode Drawer -->
<aside class="saas-drawer drawer-theme-dark" role="dialog" aria-modal="true">
    ...
</aside>
```

## Theming & Accessibility 

When creating custom themes for a drawer, pay close attention to the following accessibility requirements:

1. **Focus Ring Contrast**: Notice how the `--focus-ring` variable was changed from `#3b82f6` (standard blue) to `#60a5fa` (lighter blue) in the dark theme. Focus rings must maintain a high contrast ratio against the background color they sit on.
2. **Backdrop Separation**: The darkened backdrop (`.drawer-backdrop`) generally does not need to be themed, as it is a semi-transparent black overlay that works on both light and dark backgrounds. However, ensure it remains a separate HTML element from the drawer itself.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
