# Wobble-Focus Checkout Popover

A pure CSS, fully responsive, and accessible popover featuring an attention-grabbing "Wobble" entrance animation triggered via focus or hover. This component is specifically designed to complement **E-Commerce Checkout** interface aesthetics (e.g., CVV help tooltips, promo code hints), prioritizing clarity, form accessibility, and user guidance using the **EaseMotion** framework.

## Features

- **Pure CSS Focus Toggle**: The interaction relies entirely on native CSS pseudo-classes (`:focus-within` and `:hover`). Keyboard navigation is fully supported, allowing screen reader users and power users to tab to the help icon and instantly reveal the tooltip.
- **Centered Wobble Animation**: Employs a custom `@keyframes` sequence (`ease-wobble-popover`) that smoothly shakes the popover side-to-side on the X-axis while factoring in the `translateX(-50%)` centering transform, ensuring the tooltip stays perfectly anchored above the trigger.
- **Checkout Aesthetics**: Features a dark, high-contrast tool-tip style with form inputs, focus rings, and an embedded pure-CSS illustration (e.g., the back of a credit card highlighting the CVV).
- **Accessibility**: The native `<button type="button">` acts as the trigger, receiving focus naturally without JS event listeners, making it natively accessible to assistive technologies.
- **Customizable**: Component variables are exposed on `.ease-popover-wrapper` allowing overriding of timing, colors, shadows, and radii.

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
            <h4>Security Code</h4>
        </div>
        <div class="ease-popover-body">
            <p>Helpful tooltip content goes here.</p>
            <!-- Optional illustrations -->
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `800ms` | Total duration of the Wobble entrance animation. |
| `--popover-bg` | `var(--ease-color-neutral-900)` | Background color of the tooltip box (typically a dark, high-contrast hue). |
| `--popover-border` | `var(--ease-color-neutral-800)` | Subtle border color outlining the popover. |
| `--popover-shadow` | `var(--ease-shadow-lg)` | Drop shadow applied to the popover. |
| `--popover-radius` | `var(--ease-radius-md)` | Border radius of the popover box. |
| `--popover-text` | `var(--ease-color-surface)` | Default text color inside the popover (white/light). |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock E-Commerce Secure Checkout layout. Focus the help icon next to the "CVV" input via mouse hover or the Tab key to see the animation.
