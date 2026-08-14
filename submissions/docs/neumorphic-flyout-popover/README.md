# Neumorphic Flyout Popover (Quickstart Guide)

This guide documents how to implement a smooth, accessible Neumorphic Flyout Popover component. Neumorphism uses subtle highlights and shadows to create elements that look extruded from or pressed into the background.

## HTML Markup Example

Here is the base accessible markup required for the popover:

```html
<div class="popover-container">
    <!-- Trigger Button -->
    <button class="neumorphic-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="popover-content">
        Options
    </button>
    
    <!-- Flyout Popover Content -->
    <div id="popover-content" class="neumorphic-flyout" role="menu" aria-hidden="true">
        <ul class="flyout-list">
            <li role="none"><a href="#" role="menuitem">Profile</a></li>
            <li role="none"><a href="#" role="menuitem">Settings</a></li>
            <li role="none"><a href="#" role="menuitem">Log Out</a></li>
        </ul>
    </div>
</div>
```

## CSS Custom Properties & Modifiers

The neumorphic effect relies entirely on manipulating `box-shadow` values. 

### Default Light Theme Variables

```css
:root {
    --bg-color: #e0e5ec;
    --text-color: #333;
    --shadow-light: #ffffff;
    --shadow-dark: #a3b1c6;
    --transition-speed: 0.3s;
}
```

### Modifier Classes

Append the `--dark` modifier class to BOTH the trigger and the flyout to switch to a sleek dark mode neumorphic theme.

**Dark Mode** (`.neumorphic-flyout--dark`, `.neumorphic-trigger--dark`)
```css
.neumorphic-flyout--dark,
.neumorphic-trigger--dark {
    --bg-color: #2b2b2b;
    --text-color: #e0e0e0;
    --shadow-light: #3a3a3a;
    --shadow-dark: #1c1c1c;
}
```

## Accessibility Requirements

Interactive popovers must follow the WAI-ARIA Menu or Disclosure patterns to be accessible.

### ARIA Attributes
- **Trigger**: Must have `aria-haspopup="true"`, `aria-controls="[ID_OF_POPOVER]"`, and `aria-expanded` (toggled between `"true"` and `"false"` via JS).
- **Popover container**: Must have `role="menu"` and `aria-hidden` (toggled inverse to the trigger's `aria-expanded`).
- **List items**: Use `role="none"` on the `<li>` and `role="menuitem"` on the inner `<a>` or `<button>`.

### Keyboard Navigation Setup
You must implement JavaScript to handle the following:
- `Enter` / `Space` on the trigger toggles the menu.
- Focus should immediately shift to the first `menuitem` when the popover opens.
- Pressing `Escape` while focus is anywhere within the popover must close it and return focus to the trigger button.
- Ensure the trigger and all links have visible focus states (e.g., using `outline` or switching to inset shadows on `:focus-visible`).

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
