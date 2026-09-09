# Dynamic Notification Alert Badge (Responsive Breakpoints Layout Guide)

This guide explains how to properly scale the Dynamic Notification Alert Badge across different screen sizes. A notification icon that looks perfectly proportioned on a mobile device often looks disproportionately small on a 4K desktop monitor. 

By mapping our dimensions to CSS Custom Properties, we can seamlessly scale the button, icon, and badge across breakpoints.

## Responsive Architecture via CSS Variables

Instead of duplicating height, width, and padding declarations inside media queries, we define a set of layout variables at the root level. These variables govern the size of the button container, the SVG icon, and the badge itself.

```css
:root {
    /* Default (Mobile First) Layout */
    --btn-size: 48px;
    --icon-size: 24px;
    --badge-size: 20px;
    --badge-font-size: 0.75rem;
    
    /* Offsets to keep the badge pinned to the top right */
    --badge-offset-top: -2px;
    --badge-offset-right: -2px;
}

/* Tablet Breakpoint */
@media (min-width: 768px) {
    :root {
        --btn-size: 56px;
        --icon-size: 28px;
        --badge-size: 24px;
        --badge-font-size: 0.875rem;
        --badge-offset-top: 0px;
        --badge-offset-right: 0px;
    }
}

/* Desktop Breakpoint */
@media (min-width: 1024px) {
    :root {
        --btn-size: 64px;
        --icon-size: 32px;
        --badge-size: 28px;
        --badge-font-size: 1rem;
        --badge-offset-top: 2px;
        --badge-offset-right: 2px;
    }
}
```

## HTML Markup & Accessibility Strategy

The notification badge is often placed over a button. This introduces an accessibility challenge: screen readers might announce "Button, Graphic, 3" which lacks context.

To solve this, we hide the visual badge from screen readers and provide a comprehensive `aria-label` on the parent `<button>`.

```html
<!-- The aria-label explains the icon AND the badge value -->
<button type="button" class="notification-btn" aria-label="Notifications, 3 unread messages">
    
    <!-- The SVG icon is decorative for screen readers by default -->
    <svg class="bell-icon" viewBox="0 0 24 24">...</svg>
    
    <!-- Hide the visual badge from screen readers so they don't read the raw number -->
    <span class="notification-badge" aria-hidden="true">3</span>
    
</button>
```

### Implementing the Variables

Apply the variables to the CSS structural classes:

```css
.notification-btn {
    width: var(--btn-size);
    height: var(--btn-size);
    position: relative;
    /* ... other styles ... */
}

.bell-icon {
    width: var(--icon-size);
    height: var(--icon-size);
}

.notification-badge {
    position: absolute;
    top: var(--badge-offset-top);
    right: var(--badge-offset-right);
    width: var(--badge-size);
    height: var(--badge-size);
    font-size: var(--badge-font-size);
    /* ... other styles ... */
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
