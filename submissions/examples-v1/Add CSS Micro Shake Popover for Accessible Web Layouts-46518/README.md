# CSS Micro Shake Popover (Accessible Web)

A pure CSS, fully responsive, and highly accessible popover component. It features a subtle micro shake entrance animation, visible focus states, high contrast, and automatic respect for `prefers-reduced-motion`.

## Features

- **Pure CSS**: No JavaScript required for state management. Uses `:focus-within` and `:hover` to toggle the popover reliably.
- **Micro Shake Animation**: Uses a custom `@keyframes` animation leveraging EaseMotion's timing and easing variables to give a subtle shake effect upon opening.
- **Accessible Web Aesthetics**: High contrast typography (WCAG AA compliant), prominent borders, strong focus rings, and readable font sizes.
- **Reduced Motion Support**: Automatically disables the shake animation and uses a simple fade if the user has requested reduced motion in their OS settings.
- **Keyboard Accessible**: Fully operable via the `Tab` key. Tabbing to the trigger opens the popover, and it remains open as long as focus is within the wrapper element.
- **Customizable**: Exposes custom parameters (such as `--popover-duration` and `--popover-shake-intensity`) for easy tweaking via CSS Variables.

## Usage

Include the HTML structure:

```html
<div class="accessible-popover-wrapper">
    <button class="accessible-trigger" aria-haspopup="dialog">
        More Information
    </button>
    
    <div class="accessible-popover" role="dialog" aria-label="Additional Information">
        <h3 class="accessible-popover-header">Accessibility Guidelines</h3>
        <p class="accessible-popover-body">This popover utilizes high contrast colors, visible focus indicators, and respects user preferences for reduced motion.</p>
        <button class="accessible-popover-action">Got it</button>
    </div>
</div>
```

Ensure `style.css` is loaded, which inherently imports the core `easemotion.css` framework to leverage its CSS variables.

## Customization

Override the exposed CSS properties to adjust behavior and colors:

```css
:root {
  --popover-duration: 400ms;
  --popover-easing: var(--ease-ease-out);
  --popover-shake-intensity: 3px;
  --popover-offset-y: var(--ease-space-3);
  
  /* Accessible Web Theme Variables */
  --accessible-bg: #ffffff;
  --accessible-text: #111111;
  --accessible-border: #444444;
  --accessible-accent: #005a9c;
  --accessible-focus: #ffbf47;
}
```
