# CSS Micro Shake Popover (Dashboard Analytics)

A pure CSS, fully responsive, and keyboard-accessible popover component featuring a subtle micro shake entrance animation tailored for data-dense dashboard and analytics interfaces.

## Features

- **Pure CSS**: No JavaScript required for state management. Uses `:focus-within` and `:hover` to reliably toggle the popover without JS.
- **Micro Shake Animation**: Uses a custom `@keyframes` animation utilizing EaseMotion's timing and easing variables to give a snappy, engaging shake effect on entrance.
- **Dashboard Analytics Aesthetics**: Features a compact, structured layout, clean utility borders, a dedicated header/footer layout, and clear typography perfect for data filters or quick settings.
- **Keyboard Accessible**: Focus on the trigger via the `Tab` key opens the popover, and it remains open as long as focus is within the wrapper element.
- **Customizable**: Exposes custom parameters (such as `--popover-duration`, `--popover-shake-intensity`, and `--popover-easing`) for easy tweaking via CSS Variables.

## Usage

Include the HTML structure:

```html
<div class="dashboard-popover-wrapper">
    <button class="dashboard-trigger" aria-haspopup="dialog">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-filter">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
        Filter Data
    </button>
    
    <div class="dashboard-popover" role="dialog" aria-label="Data Filters">
        <div class="dashboard-popover-header">
            <h3>Active Filters</h3>
        </div>
        <div class="dashboard-popover-body">
            <!-- Filter items here -->
        </div>
        <div class="dashboard-popover-footer">
            <button class="dashboard-btn-primary">Apply</button>
        </div>
    </div>
</div>
```

Ensure `style.css` is loaded, which inherently imports the core `easemotion.css` framework to leverage its CSS variables.

## Customization

You can easily override the exposed CSS properties to adjust the animation behavior and visual feel:

```css
:root {
  --popover-duration: 350ms;
  --popover-easing: var(--ease-ease-out);
  --popover-shake-intensity: 3px;
  --popover-offset-y: var(--ease-space-2);
  
  /* Dashboard Theme Variables */
  --dashboard-bg: var(--ease-color-surface);
  --dashboard-border: var(--ease-color-neutral-200);
  --dashboard-accent: var(--ease-color-info);
}
```
