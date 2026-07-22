# Tada-Click Dashboard Popover

A pure CSS, fully responsive, and accessible popover featuring a playful "Tada" entrance animation triggered via click. This component is heavily tailored for **Dashboard Analytics** interface aesthetics, prioritizing data density, crisp typography, and subtle shadows using the **EaseMotion** framework.

## Features

- **Pure CSS Click Toggle**: Utilizes the "Checkbox Hack" (`<input type="checkbox">` paired with a `<label>`) to provide a reliable, JS-free click toggle state.
- **Tada Animation**: Employs a custom `@keyframes` sequence (`ease-tada-popover`) that subtly scales down, wobbles while scaling up, and settles into place, drawing user attention to the data.
- **Dashboard Aesthetics**: Crisp borders, white/neutral backgrounds, smaller font sizes, and monospaced numerical values for a professional data-heavy look.
- **Accessibility**: The `<label>` acting as the trigger is fully focusable (`tabindex="0"`) and features a clear focus ring. Associated ARIA attributes define its dialog intent.
- **Customizable**: Component variables are exposed natively on `.ease-popover-wrapper` allowing overriding of timing, colors, shadows, and radii.

## Usage Structure

```html
<!-- Wrapper for the component -->
<div class="ease-popover-wrapper">
    
    <!-- Hidden checkbox to hold state -->
    <input type="checkbox" id="my-popover-toggle" class="ease-popover-checkbox" aria-hidden="true">
    
    <!-- Label acts as the trigger button (linked via 'for' attribute) -->
    <label for="my-popover-toggle" class="ease-popover-trigger" role="button" tabindex="0" aria-haspopup="dialog" aria-label="More info">
        <!-- Trigger Icon/Text -->
        &#9432;
    </label>
    
    <!-- Popover Content -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>Data Metrics</h4>
        </div>
        <div class="ease-popover-body">
            <p>Description of the metric.</p>
            <div class="metric-row">
                <span class="metric-label">Value:</span>
                <span class="metric-value positive">100%</span>
            </div>
        </div>
    </div>
    
</div>
```
*Note: Make sure the `id` of your input uniquely matches the `for` attribute of your label.*

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `500ms` | Total duration of the Tada entrance animation. |
| `--popover-bg` | `var(--ease-color-surface)` | Background color of the popover box (typically white/dark depending on theme). |
| `--popover-border` | `var(--ease-color-neutral-200)` | Subtle border color outlining the popover. |
| `--popover-shadow` | `var(--ease-shadow-lg)` | Drop shadow applied to elevate the popover over dashboard cards. |
| `--popover-radius` | `var(--ease-radius-md)` | Border radius of the popover box. |
| `--popover-text` | `var(--ease-color-text)` | Default text color inside the popover. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock Analytics Dashboard layout displaying data trends.
