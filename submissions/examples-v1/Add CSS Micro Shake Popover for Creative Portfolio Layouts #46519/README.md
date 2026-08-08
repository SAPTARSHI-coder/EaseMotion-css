# CSS Micro Shake Popover (Creative Portfolio)

A pure CSS, fully responsive, and keyboard-accessible popover component featuring a subtle micro shake entrance animation styled for creative portfolio aesthetics.

## Features

- **Pure CSS**: No JavaScript required for state management. Uses `:focus-within` and `:hover` to reliably toggle the popover without JS.
- **Micro Shake Animation**: Uses a custom `@keyframes` animation utilizing EaseMotion's timing and easing variables to give a subtle, engaging shake effect on entrance.
- **Creative Portfolio Aesthetics**: Employs clean typography, generous whitespace, pill-shaped buttons, and soft shadows to complement elegant, minimal portfolio designs.
- **Keyboard Accessible**: Focus on the trigger via the `Tab` key opens the popover, and it remains open as long as focus is within the wrapper element.
- **Customizable**: Exposes custom parameters (such as `--popover-duration`, `--popover-shake-intensity`, and `--popover-easing`) for easy tweaking via CSS Variables.

## Usage

Include the HTML structure:

```html
<div class="portfolio-popover-wrapper">
    <button class="portfolio-trigger" aria-haspopup="dialog">
        View Details
    </button>
    
    <div class="portfolio-popover" role="dialog" aria-label="Project Details">
        <div class="portfolio-popover-image"></div>
        <div class="portfolio-popover-content">
            <h3 class="portfolio-popover-header">Project Alpha</h3>
            <p class="portfolio-popover-body">An exploration of minimal design systems and interactive typography for the modern web.</p>
            <a href="#" class="portfolio-popover-action">Read Case Study &rarr;</a>
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
  --popover-shake-intensity: 4px;
  --popover-offset-y: var(--ease-space-4);
  
  /* Creative Portfolio Theme Variables */
  --portfolio-bg: var(--ease-color-surface);
  --portfolio-text: var(--ease-color-text);
  --portfolio-accent: var(--ease-color-primary);
}
```
