# Wobble-Focus Glassmorphism Popover

A pure CSS, fully responsive, and accessible popover featuring a playful "Wobble" entrance animation triggered via focus or hover. This component is specifically designed to complement **Glassmorphism UI** interface aesthetics, heavily utilizing backdrop blurs and semi-transparent layers using the **EaseMotion** framework.

## Features

- **Glassmorphism Aesthetics**: Heavily utilizes `backdrop-filter: blur`, highly transparent backgrounds, inner shadow highlights, and semi-transparent white borders to create a realistic frosted glass effect.
- **Pure CSS Focus Toggle**: The interaction relies entirely on native CSS pseudo-classes (`:focus-within` and `:hover`). Keyboard navigation is fully supported, allowing users to tab to the help icon and instantly reveal the frosted tooltip.
- **Centered Wobble Animation**: Employs a custom `@keyframes` sequence (`ease-wobble-popover`) that smoothly shakes the popover side-to-side on the X-axis while factoring in the `translateX(-50%)` centering transform.
- **Accessibility**: The native `<button type="button">` acts as the trigger, receiving focus naturally without JS event listeners, making it natively accessible to assistive technologies. It features a custom, glass-themed focus ring.
- **Customizable**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing, colors, shadows, and radii.

## Usage Structure

```html
<!-- Wrapper for the component -->
<div class="ease-popover-wrapper">
    
    <!-- Native focusable button acts as the trigger -->
    <button type="button" class="ease-popover-trigger" aria-haspopup="dialog" aria-label="Help">
        <!-- SVG Icon (e.g., a Question Mark) -->
        ?
    </button>
    
    <!-- Popover Content (triggers when the button is focused or hovered) -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>Glass Panel Info</h4>
        </div>
        <div class="ease-popover-body">
            <p>Helpful tooltip content goes here.</p>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `800ms` | Total duration of the Wobble entrance animation. |
| `--popover-bg` | `rgba(255, 255, 255, 0.15)` | Background color of the tooltip box (highly transparent for glass effect). |
| `--popover-border` | `rgba(255, 255, 255, 0.4)` | Semi-transparent white border outlining the popover. |
| `--popover-shadow` | `0 8px 32px rgba(0, 0, 0, 0.15)` | Drop shadow applied to the popover. |
| `--popover-radius` | `var(--ease-radius-lg)` | Border radius of the popover box. |
| `--popover-text` | `#ffffff` | Default text color inside the popover. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock Glassmorphism settings panel. Background abstract shapes demonstrate the backdrop blur effect when the popover wobbles into view.
