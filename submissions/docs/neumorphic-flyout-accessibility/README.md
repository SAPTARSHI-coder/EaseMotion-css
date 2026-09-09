# Neumorphic Flyout Popover (Accessibility Setup Guide)

This guide documents the critical accessibility requirements for building a Neumorphic Flyout Popover. Neumorphism relies on subtle, low-contrast shadows to create depth, making it inherently challenging for visually impaired users. Furthermore, flyout menus require strict ARIA attributes to function correctly for screen reader users.

## 1. ARIA Flyout Semantics

To ensure screen readers understand that a button opens a menu, and to track whether that menu is currently open or closed, you must implement the following ARIA pattern:

### The Trigger Button

```html
<button 
    class="flyout-trigger" 
    aria-haspopup="true" 
    aria-expanded="false" 
    aria-controls="options-menu"
    id="options-menu-btn"
>
    Options
</button>
```
- `aria-haspopup="true"`: Announces that this button triggers an interactive popup menu.
- `aria-expanded="false"`: This state **must be toggled to true via JavaScript** when the menu opens.
- `aria-controls="options-menu"`: Connects the button to the DOM element it controls.

### The Popover Menu

```html
<ul 
    id="options-menu" 
    role="menu" 
    aria-labelledby="options-menu-btn"
>
    <li role="presentation">
        <a href="#" role="menuitem">Profile Settings</a>
    </li>
</ul>
```
- `role="menu"` and `role="menuitem"`: Establishes the standard menu hierarchy.
- `aria-labelledby`: Points back to the trigger button, giving the menu an accessible name.

## 2. Neumorphic Focus States (CSS)

The hallmark of neumorphism is the lack of hard borders—elements appear extruded from the background using light and dark shadows. 

Because of this, the default browser focus ring is often invisible or illegible. **You must define a high-contrast focus ring.**

```css
:root {
    --focus-ring: #3182ce; /* Ensure this contrasts sharply with the background */
}

/* 1. The Trigger Button */
.neumorphic-btn:focus-visible {
    outline: 3px solid var(--focus-ring);
    outline-offset: 4px; /* Push the ring outside the drop shadow */
}

/* 2. The Menu Items */
.neumorphic-item:focus-visible {
    outline: 2px solid var(--focus-ring);
    /* Inset the ring so it doesn't break the popover's internal padding */
    outline-offset: -2px; 
    background-color: rgba(163, 177, 198, 0.2);
}
```

By enforcing a high-contrast `:focus-visible` state, you maintain the premium, soft aesthetic of neumorphism for mouse users while ensuring keyboard users can safely navigate the interface.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
