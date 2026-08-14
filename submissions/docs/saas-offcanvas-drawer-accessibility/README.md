# SaaS Modern Offcanvas Drawer (Accessibility Setup Guide)

This guide details the strict accessibility requirements necessary to make an Offcanvas Drawer usable by keyboard-only users and screen readers. Because an offcanvas drawer acts as a modal overlay, it must hijack the user's focus and hide the background content from assistive technologies.

## 1. ARIA Attributes & Semantics

The DOM must be structured so that the drawer is identifiable as a dialog, and the trigger button clearly announces its relationship to the drawer.

```html
<!-- The Trigger Button -->
<button 
    aria-expanded="false" 
    aria-controls="drawer-id"
    id="trigger-btn"
>
    Open Settings
</button>

<!-- The Drawer Container -->
<aside 
    id="drawer-id"
    role="dialog" 
    aria-modal="true" 
    aria-labelledby="drawer-title"
    hidden
>
    <h2 id="drawer-title">Settings</h2>
    ...
</aside>
```
- `aria-expanded`: Must be toggled via JavaScript between `true` and `false` when the drawer opens/closes.
- `role="dialog"` + `aria-modal="true"`: Informs screen readers that this element sits above the main content and the main content is currently inaccessible.

## 2. Keyboard Navigation Mechanics (JavaScript)

To comply with WCAG guidelines for modal dialogs, your JavaScript implementation must handle three specific focus events:

1. **Opening the Drawer**: When the drawer opens, immediately shift the keyboard focus into the drawer. This is usually the first interactive element (like an input or the close button).
   ```javascript
   function openDrawer() {
       drawer.classList.add('is-open');
       drawer.querySelector('input, button').focus();
   }
   ```
2. **Closing the Drawer**: When the drawer closes, focus **must** be returned to the button that originally triggered it. Otherwise, keyboard users will lose their place on the page.
   ```javascript
   function closeDrawer() {
       drawer.classList.remove('is-open');
       document.getElementById('trigger-btn').focus();
   }
   ```
3. **Escape to Close**: Keyboard users expect the `Escape` key to close any active modal overlay.
   ```javascript
   document.addEventListener('keydown', (e) => {
       if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
           closeDrawer();
       }
   });
   ```

## 3. High Visibility Focus Rings (CSS)

Because offcanvas drawers are heavily interactive (containing forms, settings, and buttons), clear focus indicators are critical. Do not rely on default browser focus rings, as they may clash with your SaaS theme.

```css
:root {
    --focus-ring: #2563eb; 
}

/* Apply customized, high-visibility focus states to all interactive elements */
.saas-btn:focus-visible,
.drawer-close:focus-visible,
.saas-input:focus-visible {
    outline: 2px solid var(--focus-ring);
    
    /* Use outline-offset to prevent the ring from clipping into the element */
    outline-offset: 2px;
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
