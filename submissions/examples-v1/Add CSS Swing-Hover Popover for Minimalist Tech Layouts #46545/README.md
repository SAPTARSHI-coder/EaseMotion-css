# CSS Swing-Hover Popover

A pure CSS, fully responsive, and accessible popover featuring a smooth 3D swing-hover interaction transition. This component is styled to complement Minimalist Tech interface aesthetics using the core design tokens and animations from the **EaseMotion** framework.

## Features

- **Pure CSS**: Zero JavaScript required for the animation and interaction.
- **Responsive**: Adapts gracefully to its content using `max-content` with a logical `max-width`.
- **Accessibility**: Uses `:focus-within` and hover states for comprehensive keyboard and mouse accessibility.
- **Customizable**: Exposes standard CSS custom properties (variables) on the wrapper for easy customization of timing, easing, scaling, and colors.
- **Glassmorphism Aesthetic**: Uses EaseMotion's `--ease-glass-bg` and blur filters to present a sleek minimalist tech look.
- **3D Physics**: Leverages `perspective`, `transform-origin`, and `rotateX` coupled with the framework's default bounce easing (`--ease-ease-bounce`) to simulate a physical swinging hinge.

## Usage Structure

```html
<!-- Wrapper for the component -->
<div class="ease-popover-wrapper">
    
    <!-- Trigger Button -->
    <button class="ease-popover-trigger" aria-haspopup="dialog">
        Hover or Focus
    </button>
    
    <!-- Popover Content -->
    <div class="ease-popover-content" role="dialog" aria-label="Tech Info">
        <div class="ease-popover-header">
            <h3>System Status</h3>
        </div>
        <div class="ease-popover-body">
            <p>Your popover content here...</p>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper` to tweak its behavior and appearance:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `600ms` | Duration of the swing transition. |
| `--popover-easing` | `var(--ease-ease-bounce)` | Timing function governing the 3D swing effect. |
| `--popover-bg` | `var(--ease-glass-bg)` | Background color of the popover content. |
| `--popover-border` | `var(--ease-glass-border)` | Border color for the popover content. |
| `--popover-shadow` | `var(--ease-glow-primary)` | Outer glow/shadow applied to the popover box. |
| `--popover-radius` | `var(--ease-radius-xl)` | The border radius of the popover box. |
| `--popover-text` | `var(--ease-color-text)` | Main text color within the popover. |

## Live Demo

Open `demo.html` in your browser to see the component in action with a Minimalist Tech theme layout.
