# Jello-Hover Dashboard Popover

A pure CSS, fully responsive, and accessible popover featuring a playful, organic "Jello" entrance animation triggered via mouse hover or keyboard focus. This component is tailored for **Dashboard Analytics** interfaces, providing clean data-heavy tooltips (like SLA definitions or chart legends) using the **EaseMotion** framework.

## Features

- **Pure CSS Interaction**: Triggers natively using `:hover` for mouse users and `:focus-within` for keyboard navigators, keeping the component lightweight and entirely free of JavaScript.
- **Jello Animation**: Employs a custom `@keyframes` sequence (`ease-jello-popover-center`) that applies `scale3d` transformations. The tooltip squishes and stretches organically before snapping into place, making data reveal engaging.
- **Dashboard Aesthetics**: Features high-contrast, dark tooltips designed to float clearly above busy, light dashboard interfaces. Includes embedded mini UI elements like an SLA progress bar.
- **Accessibility**: The `<button type="button">` trigger accepts native focus, enabling assistive technologies to interact with the popup contextually via standard `aria` tags.
- **Customizable**: Component variables are exposed on `.ease-popover-wrapper` allowing instant overriding of animation timing, colors, shadows, and sizing without altering core framework logic.

## Usage Structure

```html
<!-- Wrapper for the component -->
<div class="ease-popover-wrapper">
    
    <!-- Native focusable button acts as the trigger -->
    <button type="button" class="ease-popover-trigger" aria-haspopup="dialog" aria-label="More Information">
        <!-- SVG Icon (e.g., Info Circle) -->
        &#9432;
    </button>
    
    <!-- Popover Content (triggers when the button is focused or hovered) -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>Metric Definition</h4>
        </div>
        <div class="ease-popover-body">
            <p>Helpful text explaining the dashboard metric.</p>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `900ms` | Total duration of the Jello entrance animation. |
| `--popover-bg` | `var(--ease-color-neutral-900)` | Background color of the tooltip box. |
| `--popover-border` | `var(--ease-color-neutral-800)` | Subtle border color outlining the popover. |
| `--popover-shadow` | `var(--ease-shadow-xl)` | Drop shadow applied to elevate the popover over dashboard cards. |
| `--popover-radius` | `var(--ease-radius-md)` | Border radius of the popover box. |
| `--popover-text` | `var(--ease-color-surface)` | Default text color inside the popover. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock Analytics Performance Dashboard layout. Hover over the info icon on the "Server Uptime" card to witness the Jello effect!
