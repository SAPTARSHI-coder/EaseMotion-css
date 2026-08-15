# Dark Mode Connection Status Bar: Accessibility Guide

This guide outlines the accessibility (a11y) setup for the Dark Mode Connection Status Bar component. Proper implementation ensures the status bar is usable by all individuals, including those relying on screen readers, keyboard navigation, or high-contrast settings.

## HTML Markup Examples

To ensure semantic meaning and proper announcement by assistive technologies, the status bar must use an `aria-live` region.

### Basic Setup
```html
<div class="ease-connection-status" 
     role="status" 
     aria-live="polite" 
     aria-atomic="true">
    <span class="ease-status-indicator ease-status-indicator--online"></span>
    <span class="ease-status-text">Connected</span>
</div>
```

### Critical Disconnections
For critical updates (e.g., connection lost), use `aria-live="assertive"` so the screen reader interrupts the user immediately.
```html
<div class="ease-connection-status ease-connection-status--offline" 
     role="alert" 
     aria-live="assertive" 
     aria-atomic="true">
    <span class="ease-status-indicator ease-status-indicator--offline"></span>
    <span class="ease-status-text">Connection Lost. Reconnecting...</span>
</div>
```

## Modifier Classes and Custom CSS Property Overrides

The status bar uses CSS variables for easy theming, especially in Dark Mode contexts.

### Custom CSS Properties
You can override these variables at the root or container level to match your application's dark mode palette while maintaining WCAG AA contrast ratios (4.5:1).

```css
:root[data-theme="dark"] {
    /* Status Colors */
    --ease-color-online: #10b981; /* Emerald 500 */
    --ease-color-offline: #ef4444; /* Red 500 */
    --ease-color-connecting: #f59e0b; /* Amber 500 */
    
    /* Background and Text */
    --ease-status-bg: #1e293b; /* Slate 800 */
    --ease-status-text: #f8fafc; /* Slate 50 */
    --ease-status-border: #334155; /* Slate 700 */
}
```

### Modifier Classes
- `.ease-connection-status--online`: Default state.
- `.ease-connection-status--offline`: Applies high-contrast red error states.
- `.ease-connection-status--connecting`: Applies animated pulses (respects `prefers-reduced-motion`).

## Keyboard Navigation

If the status bar contains actionable elements (like a "Reconnect Now" button), it must be keyboard accessible.

1. **Focus Management:** Ensure actionable elements use `<button>` tags with clear `:focus-visible` outlines.
2. **Tab Order:** Actionable elements should flow naturally in the DOM so they are reachable via the `Tab` key.
3. **Triggering:** Users must be able to activate the button using both `Enter` and `Space`.

```html
<div class="ease-connection-status ease-connection-status--offline" role="alert" aria-live="assertive">
    <span class="ease-status-text">Offline</span>
    <!-- Actionable elements must be native buttons for keyboard a11y -->
    <button class="ease-status-action" onclick="retryConnection()">
        Reconnect Now
    </button>
</div>
```

### Focus Ring Styling (Dark Mode)
```css
.ease-status-action:focus-visible {
    outline: 2px solid var(--ease-color-online);
    outline-offset: 2px;
    background-color: rgba(255, 255, 255, 0.1);
}
```
