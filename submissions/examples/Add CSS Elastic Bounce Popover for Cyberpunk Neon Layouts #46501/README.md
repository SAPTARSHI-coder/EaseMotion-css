# CSS Elastic Bounce Popover (Cyberpunk Neon)

A pure CSS, fully responsive, and keyboard-accessible popover component featuring a smooth elastic bounce entrance animation styled with a Cyberpunk Neon aesthetic.

## Features

- **Pure CSS**: No JavaScript required for state management or animations. Uses `:focus-within` and `:hover` to reliably toggle the popover without JS.
- **Elastic Bounce Animation**: Uses a custom `@keyframes` animation utilizing EaseMotion's timing and easing variables to give a dynamic, spring-like feel.
- **Cyberpunk Neon Aesthetics**: Employs glowing borders, dark semi-transparent backgrounds, and monospace typography to complement dark mode layouts.
- **Keyboard Accessible**: Focus on the trigger via the `Tab` key opens the popover, and it remains open as long as focus is within the wrapper element.
- **Customizable**: Exposes custom parameters (such as `--popover-duration`, `--popover-scale-factor`, and `--popover-easing`) for easy tweaking via CSS Variables.

## Usage

Include the HTML structure:

```html
<div class="neon-popover-wrapper">
    <button class="neon-trigger" aria-haspopup="dialog">
        Initialize Uplink
    </button>
    
    <div class="neon-popover" role="dialog" aria-label="System Notification">
        <h3 class="neon-popover-header">System Alert</h3>
        <p class="neon-popover-body">Cyberpunk interface initialized. Connection to the mainframe established securely.</p>
        <button class="neon-popover-action">Acknowledge</button>
    </div>
</div>
```

Ensure `style.css` is loaded, which inherently imports the core `easemotion.css` framework to leverage its CSS variables.

## Customization

You can easily override the exposed CSS properties to adjust the animation behavior and visual feel:

```css
:root {
  --popover-duration: 600ms;
  --popover-easing: var(--ease-ease-bounce);
  --popover-scale-factor: 1.15;
  --popover-offset-y: var(--ease-space-4);
  
  /* Cyberpunk Neon Theme Variables */
  --neon-glow: var(--ease-glow-secondary);
  --neon-border: var(--ease-color-secondary-light);
  --neon-text: var(--ease-color-secondary-light);
  --neon-bg: var(--ease-color-bg);
}
```
