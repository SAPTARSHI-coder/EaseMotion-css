# Fade-In Neumorphic Soft Popover

A pure CSS, fully responsive, and accessible popover featuring a buttery-smooth "Fade-In" entrance animation triggered via focus or hover. This component is specifically designed to complement the extruded, clay-like **Neumorphic Soft** interface aesthetics utilizing the **EaseMotion** framework.

## Features

- **Neumorphic Aesthetics**: Heavily utilizes complex `box-shadow` techniques to create physical UI depth. Elements appear either extruded from the background (using light and dark drop shadows) or pressed into it (using inset shadows). The background color `#e0e5ec` serves as the canvas for this lighting effect.
- **Pure CSS Focus Toggle**: The interaction relies entirely on native CSS pseudo-classes (`:focus-within` and `:hover`). Keyboard navigation is fully supported, allowing users to tab to the control buttons and instantly reveal the neumorphic popover panels. 
- **Smooth Fade-In Animation**: Employs a custom `@keyframes` sequence (`ease-fade-in-popover`). The popover begins fully transparent and slightly shifted down (`translateY(5px)`), and smoothly fades in to full opacity while sliding into its resting place. This creates a very soft, subtle entrance that perfectly matches the "soft UI" aesthetic.
- **Accessibility**: The native `<button type="button">` acts as the trigger, receiving focus naturally without JS event listeners, making it natively accessible to assistive technologies. A custom dashed focus outline ensures keyboard users know exactly where they are.
- **Customizable**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing and neumorphic shadow variables. The `.center-align` modifier is provided to easily center the popover over a trigger (as seen in the Thermostat example).

## Usage Structure

```html
<!-- Wrapper for the component -->
<!-- Use 'center-align' modifier on the content if you want it centered -->
<div class="ease-popover-wrapper">
    
    <!-- Native focusable button acts as the trigger -->
    <!-- 'neu-btn' applies the extruded clay look -->
    <button type="button" class="ease-popover-trigger neu-btn" aria-haspopup="dialog" aria-label="Settings">
        <svg>...</svg>
    </button>
    
    <!-- Popover Content (triggers when the button is focused or hovered) -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>Settings Title</h4>
        </div>
        <div class="ease-popover-body">
            <!-- Neumorphic sliders and dials go here -->
            <p>Soft UI Content</p>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `300ms` | Total duration of the buttery smooth Fade-In animation. |
| `--popover-bg` | `var(--neu-bg)` | The base background color (`#e0e5ec`) necessary for the shadows to look correct. |
| `--popover-border` | `transparent` | Neumorphism doesn't use standard borders, it relies on light/shadow. |
| `--popover-shadow` | `12px 12px 20px var(--neu-shadow-dark), -12px -12px 20px var(--neu-shadow-light)` | The heavy extruded dual-shadow that gives the popover its physical volume. |
| `--popover-text` | `var(--neu-text-main)` | Soft, dark grey text for readable contrast. |
| `--popover-radius` | `20px` | Large border radius for the friendly, soft aesthetic. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock `Smart Home Control` dashboard. Use your mouse or the `Tab` key to interact with the Light Settings and Thermostat triggers to watch the soft fade-in animation and play with the neumorphic sliders!
