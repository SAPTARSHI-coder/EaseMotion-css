# Accessible Sidebar Drawer (Focus Trap & Release)

This submission demonstrates how to implement a fully accessible Sidebar Drawer (often called an Offcanvas menu) that complies with WCAG 2.1 AA standards. Overlays like sidebars and modals share the same strict accessibility requirements regarding focus management and ARIA semantics.

## Core Accessibility Features

### 1. Semantic Structure and Modality

A sidebar that covers content or dims the background acts as a modal dialog. It must explicitly declare itself as such to screen readers.

```html
<div role="dialog" aria-modal="true" aria-labelledby="drawer-title">
    <h2 id="drawer-title">Navigation Menu</h2>
    <!-- Drawer contents -->
</div>
```
- `role="dialog"`: Informs the user they are inside an interactive dialog, not standard page content.
- `aria-modal="true"`: Instructs the screen reader to restrict its virtual cursor exclusively to the contents of this dialog.

### 2. The Focus Trap

When a sighted user opens a sidebar, they visually understand they are constrained to that sidebar. A keyboard-only or screen reader user must be programmatically constrained in the exact same way. If they press `Tab` repeatedly, they should cycle through the drawer's links, and never accidentally tab into the background page.

This demo uses the highly robust **Hidden Sentinel Pattern**:
We place invisible `tabindex="0"` elements at the very start and end of the drawer. When JavaScript detects focus hitting these sentinels, it instantly bounces the focus back into the interactive content.

```html
<!-- Top Sentinel -->
<div tabindex="0" class="focus-sentinel sr-only" id="trap-start"></div>

<!-- ... Drawer Content (Close Button, Nav Links) ... -->

<!-- Bottom Sentinel -->
<div tabindex="0" class="focus-sentinel sr-only" id="trap-end"></div>
```

```javascript
// Trap logic
trapStart.addEventListener('focus', () => lastInteractiveElement.focus());
trapEnd.addEventListener('focus', () => firstInteractiveElement.focus());
```

### 3. Focus Trap Release (Restoration)

The most commonly forgotten aspect of accessible modals/drawers is **Focus Restoration**. When the user closes the drawer, where does their focus go? If you do nothing, focus is reset to the top of the `<body>`, forcing the user to tab all the way back down the page to find where they were.

When the drawer opens, we cache `document.activeElement`. When it closes, we manually call `.focus()` on that cached element.

```javascript
let trapReleaseTarget;

function openDrawer() {
    // Cache the trigger button
    trapReleaseTarget = document.activeElement;
    // ... open logic ...
}

function closeDrawer() {
    // ... close logic ...
    
    // Release the trap and restore focus!
    if (trapReleaseTarget) {
        trapReleaseTarget.focus();
    }
}
```

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, the `box-shadow` that typically visually separates the sidebar from the background page will be stripped away. We must use the `forced-colors` media query to apply a solid system-color border to explicitly define the drawer's bounds.

```css
@media (forced-colors: active) {
    .drawer-surface {
        /* Replace stripped box-shadow with a solid border */
        border-left: 3px solid CanvasText;
    }
}
```
