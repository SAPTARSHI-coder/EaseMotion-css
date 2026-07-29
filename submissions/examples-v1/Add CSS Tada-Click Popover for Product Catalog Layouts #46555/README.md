# Tada-Click Product Catalog Popover

A pure CSS, fully responsive, and accessible popover featuring a playful "Tada" entrance animation triggered via click. This component is tailored specifically for **Product Catalog** interface aesthetics (e-commerce), prioritizing bold call-to-actions, product images, and quick-view selectors using the **EaseMotion** framework.

## Features

- **Pure CSS Click Toggle**: Utilizes the "Checkbox Hack" (`<input type="checkbox">` paired with a `<label>`) to provide a reliable, JS-free click toggle state for selecting product options (e.g., "Add to Cart" popovers).
- **Centered Tada Animation**: Employs a custom `@keyframes` sequence (`ease-tada-popover-center`) that smoothly wobbles the popover into place while accounting for its `translateX(-50%)` centering transform.
- **E-Commerce Aesthetics**: Features bold buttons, stark contrasts, and clean product card layouts designed to maximize conversion rates.
- **Accessibility**: The `<label>` acting as the trigger is fully focusable (`tabindex="0"`) and features a clear focus ring. Associated ARIA attributes define its dialog intent.
- **Customizable**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing, colors, shadows, and radii.

## Usage Structure

```html
<!-- Wrapper for the component -->
<div class="ease-popover-wrapper">
    
    <!-- Hidden checkbox to hold state -->
    <input type="checkbox" id="product-options-toggle" class="ease-popover-checkbox" aria-hidden="true">
    
    <!-- Label acts as the trigger button (linked via 'for' attribute) -->
    <label for="product-options-toggle" class="ease-popover-trigger" role="button" tabindex="0" aria-haspopup="dialog" aria-label="Select Options">
        Select Options
    </label>
    
    <!-- Popover Content -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>Choose Size</h4>
        </div>
        <div class="ease-popover-body">
            <!-- Product options go here -->
            <button class="add-to-cart-btn">Add to Cart</button>
        </div>
    </div>
    
</div>
```
*Note: Ensure the `id` of your input uniquely matches the `for` attribute of your label.*

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `450ms` | Total duration of the Tada entrance animation. |
| `--popover-bg` | `var(--ease-color-surface)` | Background color of the popover box (typically white). |
| `--popover-border` | `var(--ease-color-neutral-200)` | Subtle border color outlining the popover. |
| `--popover-shadow` | `var(--ease-shadow-xl)` | Strong drop shadow applied to elevate the popover over product cards. |
| `--popover-radius` | `var(--ease-radius-lg)` | Border radius of the popover box. |
| `--popover-text` | `var(--ease-color-text)` | Default text color inside the popover. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock e-commerce Product Catalog layout.
