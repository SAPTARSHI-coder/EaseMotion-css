# Slide-Up Cyberpunk Popover

A pure CSS, fully responsive, and accessible popover featuring a snappy "Slide-Up" entrance animation triggered via focus or hover. This component is specifically designed to complement high-contrast **Cyberpunk Neon** interface aesthetics (think dark modes, glowing neon borders, and HUD-like data layouts) utilizing the **EaseMotion** framework.

## Features

- **Cyberpunk HUD Aesthetics**: Uses `box-shadow` for intense neon glows, a retro `Share Tech Mono` font, and custom UI elements like glowing progress bars to simulate a sci-fi Heads-Up Display (HUD) or terminal.
- **Pure CSS Focus Toggle**: The interaction relies entirely on native CSS pseudo-classes (`:focus-within` and `:hover`). Keyboard navigation is fully supported, allowing users to tab to the `[STATS]` trigger and instantly reveal the neon tooltip.
- **Slide-Up Animation**: Employs a custom `@keyframes` sequence (`ease-slide-up-popover`). The popover starts positioned slightly lower (`translateY(15px)`) and transparent, then smoothly slides into its final position while fading in, providing a clean, mechanical reveal.
- **Accessibility**: The native `<button type="button">` acts as the trigger, receiving focus naturally without JS event listeners, making it natively accessible to assistive technologies.
- **Customizable & Themed**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing, neon colors, and shadow intensities. A modifier class `.alt-neon` is provided to instantly swap a popover's theme (e.g., from Cyan to Neon Pink).

## Usage Structure

```html
<!-- Wrapper for the component -->
<div class="ease-popover-wrapper">
    
    <!-- Native focusable button acts as the trigger -->
    <button type="button" class="ease-popover-trigger" aria-haspopup="dialog" aria-label="Weapon Stats Info">
        <span class="trigger-icon">[STATS]</span>
    </button>
    
    <!-- Popover Content (triggers when the button is focused or hovered) -->
    <!-- Add 'alt-neon' class here to change color theme -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>ITEM // NAME</h4>
        </div>
        <div class="ease-popover-body">
            <div class="stat-row">
                <span>DMG</span>
                <span class="stat-bar"><span class="fill" style="width: 85%;"></span></span>
            </div>
            <p class="lore-text">Item lore or description.</p>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `300ms` | Total duration of the snappy Slide-Up entrance animation. |
| `--popover-bg` | `rgba(10, 10, 12, 0.95)` | Very dark, slightly transparent background for the popover panel. |
| `--popover-border` | `var(--neon-cyan)` | The glowing neon border color. |
| `--popover-shadow` | `0 0 15px rgba(0, 255, 255, 0.4)` | The neon glow drop shadow effect. |
| `--popover-text` | `#ffffff` | Default readable text color inside the body of the popover. |
| `--popover-accent` | `var(--neon-cyan)` | Accent color used for headers, highlights, and stat bars inside the popover. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock `WEAPON_SYS` Cyberpunk inventory interface. Use your mouse or the `Tab` key to interact with the `[STATS]` triggers and reveal the weapon telemetry!
