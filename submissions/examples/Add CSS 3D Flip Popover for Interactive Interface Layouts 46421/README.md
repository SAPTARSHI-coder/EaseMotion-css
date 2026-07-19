# 3D Flip (Y-Axis) Interactive UI Popover

A pure CSS, fully responsive, and accessible popover featuring a crisp "3D Flip" entrance animation on the Y-Axis triggered via focus or hover. This component is specifically designed to complement **Interactive Interface** aesthetics (think SaaS dashboards, modern web apps, rounded corners, and soft shadows) utilizing the **EaseMotion** framework.

## Features

- **SaaS Dashboard Aesthetics**: Uses clean UI styling with vibrant primary colors (Indigo), large border radii, distinct background/surface color contrast, and soft yet pronounced drop shadows.
- **Pure CSS Focus Toggle**: The interaction relies entirely on native CSS pseudo-classes (`:focus-within` and `:hover`). Keyboard navigation is fully supported, allowing users to tab to the header actions (Notifications, Profile) and instantly reveal the dropdown menus. Focus states are clearly defined with an offset primary-colored outline.
- **3D Y-Axis Flip Animation**: Employs a custom `@keyframes` sequence (`ease-flip-y-3d-interactive`) working in tandem with the `perspective: 1200px` property on the wrapper. Unlike the X-axis flip, this popover hinges from the side (top-right), starting folded away (`rotateY(-90deg)`) and swinging sharply like a door opening to face the user (`rotateY(0deg)`).
- **Accessibility**: Native `<button type="button">` tags act as the triggers, receiving focus naturally without JS event listeners, making it natively accessible to assistive technologies.
- **Customizable**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing, backgrounds, and drop shadows. The `.align-right` modifier ensures dropdowns align correctly when placed in right-hand side header actions.

## Usage Structure

```html
<!-- Wrapper for the component (Provides 3D Perspective) -->
<!-- Use 'align-right' to hinge and flip from the right side -->
<div class="ease-popover-wrapper align-right">
    
    <!-- Native focusable button acts as the trigger -->
    <button type="button" class="ease-popover-trigger" aria-haspopup="dialog" aria-label="Notifications">
        <svg>...</svg>
    </button>
    
    <!-- Popover Content (triggers when the button is focused or hovered) -->
    <div class="ease-popover-content interactive-menu" role="dialog">
        <div class="ease-popover-header">
            <h4>Menu Title</h4>
        </div>
        <div class="ease-popover-body">
            <!-- List of interactive items -->
            <ul class="action-list">
                <li class="action-item">Item 1</li>
            </ul>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `400ms` | Total duration of the snappy Y-Axis 3D Flip entrance animation. |
| `--popover-bg` | `#ffffff` | Clean white surface background for the popover panel. |
| `--popover-border` | `#e2e8f0` | Subtle structural border outlining the popover. |
| `--popover-shadow` | `var(--ui-shadow-lg)` | A pronounced drop shadow for UI depth. |
| `--popover-text` | `#0f172a` | High contrast slate text color. |
| `--popover-radius` | `12px` | Modern, friendly border radius. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock `AppUI` Dashboard header. Use your mouse or the `Tab` key to interact with the Notification bell and User Avatar triggers to watch the Y-Axis 3D flip reveal!
