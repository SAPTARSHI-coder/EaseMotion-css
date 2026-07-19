# 3D Flip Cyberpunk Popover

A pure CSS, fully responsive, and accessible popover featuring a dramatic "3D Flip" entrance animation triggered via focus or hover. This component is specifically designed to complement high-contrast **Cyberpunk Neon** interface aesthetics (think holographic data displays, neon borders, and retro terminal fonts) utilizing the **EaseMotion** framework.

## Features

- **Cyberpunk Hologram Aesthetics**: Uses `box-shadow` for intense neon glows, a retro `Share Tech Mono` font, and custom UI elements like price tags to simulate an underground sci-fi black market or augmentation clinic.
- **Pure CSS Focus Toggle**: The interaction relies entirely on native CSS pseudo-classes (`:focus-within` and `:hover`). Keyboard navigation is fully supported, allowing users to tab to the `[DETAILS]` trigger and instantly reveal the neon tooltip.
- **3D Flip Animation**: Employs a custom `@keyframes` sequence (`ease-flip-3d-popover`) working in tandem with the `perspective: 1000px` property on the wrapper. The popover starts folded flat (`rotateX(-90deg)`) and dramatically flips up into view (`rotateX(0deg)`), simulating a holographic data projection turning on.
- **Accessibility**: The native `<button type="button">` acts as the trigger, receiving focus naturally without JS event listeners, making it natively accessible to assistive technologies.
- **Customizable & Themed**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing, neon colors, and shadow intensities. A modifier class `.alt-neon` is provided to instantly swap a popover's theme (e.g., from Neon Yellow to Neon Cyan).

## Usage Structure

```html
<!-- Wrapper for the component (Provides 3D Perspective) -->
<div class="ease-popover-wrapper">
    
    <!-- Native focusable button acts as the trigger -->
    <button type="button" class="ease-popover-trigger" aria-haspopup="dialog" aria-label="Augmentation Details">
        <span class="trigger-icon">[DETAILS]</span>
    </button>
    
    <!-- Popover Content (triggers when the button is focused or hovered) -->
    <!-- Add 'alt-neon' class here to change color theme -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>UPGRADE_NAME</h4>
        </div>
        <div class="ease-popover-body">
            <p class="lore-text">Item lore or description.</p>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `500ms` | Total duration of the 3D Flip entrance animation. |
| `--popover-bg` | `rgba(10, 10, 12, 0.95)` | Very dark, slightly transparent background for the popover panel. |
| `--popover-border` | `var(--neon-yellow)` | The glowing neon border color. |
| `--popover-shadow` | `0 10px 25px rgba(255, 255, 0, 0.2)` | The neon glow drop shadow effect. |
| `--popover-text` | `#ffffff` | Default readable text color inside the body of the popover. |
| `--popover-accent` | `var(--neon-yellow)` | Accent color used for headers and highlights inside the popover. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock `AUG_STORE_V.2` Cyberpunk interface. Use your mouse or the `Tab` key to interact with the `[DETAILS]` triggers and watch the holographic data displays flip up into reality!
