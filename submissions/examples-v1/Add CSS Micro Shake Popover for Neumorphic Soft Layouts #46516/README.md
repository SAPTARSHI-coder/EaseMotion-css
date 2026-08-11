# CSS Micro Shake Popover (Neumorphic Soft)

A pure CSS, fully responsive, and keyboard-accessible popover component featuring a subtle micro shake entrance animation styled with the popular Neumorphic (soft UI) aesthetic.

## Features

- **Pure CSS**: No JavaScript required for state management. Uses `:focus-within` and `:hover` to reliably toggle the popover without JS.
- **Micro Shake Animation**: Uses a custom `@keyframes` animation utilizing EaseMotion's timing and easing variables to give a subtle, engaging shake effect on entrance.
- **Neumorphic Soft Aesthetics**: Employs soft, pillowy drop shadows and highlights on a uniform background color to create the illusion of extruded 3D surfaces.
- **Keyboard Accessible**: Focus on the trigger via the `Tab` key opens the popover, and it remains open as long as focus is within the wrapper element.
- **Customizable**: Exposes custom parameters (such as `--popover-duration`, `--popover-shake-intensity`, and `--popover-easing`) for easy tweaking via CSS Variables.

## Usage

Include the HTML structure:

```html
<div class="neumorphic-popover-wrapper">
    <button class="neumorphic-trigger" aria-haspopup="dialog">
        Settings
    </button>
    
    <div class="neumorphic-popover" role="dialog" aria-label="Quick Settings">
        <h3 class="neumorphic-popover-header">Preferences</h3>
        <p class="neumorphic-popover-body">Adjust your application preferences with this soft, extruded interface.</p>
        <div class="neumorphic-actions">
            <button class="neumorphic-action-btn">Cancel</button>
            <button class="neumorphic-action-btn primary">Save</button>
        </div>
    </div>
</div>
```

Ensure `style.css` is loaded, which inherently imports the core `easemotion.css` framework to leverage its CSS variables.

## Customization

You can easily override the exposed CSS properties to adjust the animation behavior and visual feel:

```css
:root {
  --popover-duration: 400ms;
  --popover-easing: var(--ease-ease-out);
  --popover-shake-intensity: 3px;
  --popover-offset-y: var(--ease-space-5);
  
  /* Neumorphic Theme Variables */
  --neumorphic-bg: #e0e5ec;
  --neumorphic-text: #4a5568;
  --neumorphic-light-shadow: #ffffff;
  --neumorphic-dark-shadow: #a3b1c6;
  --neumorphic-accent: var(--ease-color-primary);
}
```
