# Wobble-Focus Cyberpunk Popover

A pure CSS, fully responsive, and accessible popover featuring a glitchy "Wobble" entrance animation triggered via focus or hover. This component is specifically designed to complement high-contrast **Cyberpunk Neon** interface aesthetics (think dark modes, glowing neon borders, clipped corners, and monospace terminal fonts) utilizing the **EaseMotion** framework.

## Features

- **Cyberpunk Aesthetics**: Heavily utilizes `clip-path` for angular cut corners, `box-shadow` and `text-shadow` for intense neon glows, and a retro `Share Tech Mono` font over dark backgrounds.
- **Pure CSS Focus Toggle**: The interaction relies entirely on native CSS pseudo-classes (`:focus-within` and `:hover`). Keyboard navigation is fully supported, allowing users to tab to the `[?]` help trigger and instantly reveal the neon tooltip.
- **Wobble Animation**: Employs a custom `@keyframes` sequence (`ease-wobble-popover-cyber`). Since this specific tooltip is right-aligned in the layout, the keyframes are adjusted to shake without the `-50%` X-translation, providing a snappy, glitch-like entrance.
- **Accessibility**: The native `<button type="button">` acts as the trigger, receiving focus naturally without JS event listeners, making it natively accessible to assistive technologies.
- **Customizable**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing, neon colors, and shadow intensities. A modifier class `.alt-neon` is also provided to quickly switch the neon color palette (e.g., from Cyan to Pink).

## Usage Structure

```html
<!-- Wrapper for the component -->
<div class="ease-popover-wrapper">
    
    <!-- Native focusable button acts as the trigger -->
    <button type="button" class="ease-popover-trigger" aria-haspopup="dialog" aria-label="System Info">
        <span class="trigger-icon">[?]</span>
    </button>
    
    <!-- Popover Content (triggers when the button is focused or hovered) -->
    <!-- Add 'alt-neon' class here to change color theme -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>WARNING_MESSAGE</h4>
        </div>
        <div class="ease-popover-body">
            <p>Critical system details and lore go here.</p>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `700ms` | Total duration of the glitchy Wobble entrance animation. |
| `--popover-bg` | `rgba(10, 10, 12, 0.95)` | Very dark, slightly transparent background for the popover panel. |
| `--popover-border` | `var(--neon-cyan)` | The glowing neon border color. |
| `--popover-shadow` | `0 0 15px rgba(0, 255, 255, 0.4)` | The neon glow drop shadow effect. |
| `--popover-text` | `#ffffff` | Default readable text color inside the body of the popover. |
| `--popover-accent` | `var(--neon-cyan)` | Accent color used for headers and highlights inside the popover. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock `SYS_TERMINAL_V.84` Cyberpunk interface. Use your mouse or the `Tab` key to interact with the `[?]` triggers and reveal the warnings!
