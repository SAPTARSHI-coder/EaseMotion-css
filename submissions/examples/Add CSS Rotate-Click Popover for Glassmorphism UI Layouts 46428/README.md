# Rotate-Click Glassmorphism Popover

A pure CSS, fully responsive, and accessible popover featuring a snappy "Rotate & Scale" entrance animation triggered via a **Click** interaction. This component is specifically designed to complement vibrant **Glassmorphism UI** aesthetics (think frosted glass, backdrop blurs, and semi-transparent borders) utilizing the **EaseMotion** framework.

## Features

- **Glassmorphism Aesthetics**: Heavily utilizes `backdrop-filter: blur(24px)` (along with `-webkit-backdrop-filter`), semi-transparent white backgrounds (`rgba(255, 255, 255, 0.7)`), and subtle inner box-shadow highlights to simulate a frosted glass pane sitting over vibrant background elements.
- **Pure CSS Click Toggle (Checkbox Hack)**: The interaction relies on a visually hidden `<input type="checkbox">` linked to a `<label>` trigger. This allows the popover to open and close on *click* rather than hover, without needing JavaScript. 
- **Rotate & Scale Animation**: Employs a custom `@keyframes` sequence (`ease-rotate-click-popover`). The popover originates from the top-right corner, starting slightly rotated (`15deg`) and scaled down (`0.8`), then twists into its final position, creating an organic, dynamic reveal. Also features a trigger icon that spins 45 degrees when active.
- **Accessibility**: Keyboard navigation is fully supported! The hidden checkbox is focusable (via the `sr-only` or CSS `clip` method) and we apply a custom focus outline to the visible `<label>` trigger when the user tabs to it. The trigger also updates its ARIA state semantics.
- **Customizable**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing, glass opacities, and drop shadows. 

## Usage Structure

```html
<!-- Wrapper for the component -->
<div class="ease-popover-wrapper">
    
    <!-- Hidden Checkbox for Click Hack -->
    <input type="checkbox" id="popover-toggle-1" class="ease-popover-toggle">
    
    <!-- Label acts as the clickable/focusable trigger -->
    <label for="popover-toggle-1" class="ease-popover-trigger" aria-label="Media Options" tabindex="0">
        <span class="trigger-icon">
            <svg>...</svg>
        </span>
    </label>
    
    <!-- Popover Content (triggers when checkbox is checked) -->
    <div class="ease-popover-content" role="menu">
        <ul class="action-menu">
            <li class="action-item">Action 1</li>
            <li class="action-item">Action 2</li>
        </ul>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `400ms` | Total duration of the rotate and scale entrance animation. |
| `--popover-bg` | `rgba(255, 255, 255, 0.7)` | Semi-transparent frosted glass background for the panel. |
| `--popover-border` | `rgba(255, 255, 255, 0.8)` | Subtle semi-transparent border outlining the popover. |
| `--popover-shadow` | `0 10px 40px rgba(0, 0, 0, 0.1)` | A deep, soft drop shadow for physical elevation over the background. |
| `--popover-text` | `#333333` | Clean dark text color for contrast on the glass. |
| `--popover-radius` | `var(--ease-radius-lg)` | Soft, friendly border radius. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock `Media Library` layout, complete with abstract background shapes to demonstrate the beautiful frosted glass blur effect. Click on the round options triggers to see the rotation animation!
