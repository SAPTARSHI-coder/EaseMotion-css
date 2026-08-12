# 3D Flip Portfolio Popover

A pure CSS, fully responsive, and accessible popover featuring an elegant "3D Flip" entrance animation triggered via focus or hover. This component is specifically designed to complement refined **Creative Portfolio** interface aesthetics (think large serif typography, clean whitespace, and subtle gradients) utilizing the **EaseMotion** framework.

## Features

- **Creative Portfolio Aesthetics**: Uses elegant typography pairings (`Playfair Display` and `Inter`), soft drop shadows, and minimalist layouts to simulate a high-end design agency's project showcase.
- **Pure CSS Focus Toggle**: The interaction relies entirely on native CSS pseudo-classes (`:focus-within` and `:hover`). Keyboard navigation is fully supported, allowing users to tab to the information triggers and instantly reveal project details.
- **Elegant 3D Flip Animation**: Employs a custom `@keyframes` sequence (`ease-flip-3d-portfolio`) working in tandem with the `perspective: 1200px` property on the wrapper. The popover starts folded flat downwards (`rotateX(90deg)`) and smoothly flips up like opening a book cover or turning a high-quality card.
- **Accessibility**: The native `<button type="button">` acts as the trigger, receiving focus naturally without JS event listeners, making it natively accessible to assistive technologies. A subtle, custom focus ring is provided.
- **Customizable & Themed**: Component variables are natively exposed on `.ease-popover-wrapper` allowing overriding of timing, backgrounds, and drop shadows. A modifier class `.theme-dark` is provided to instantly swap a popover's theme for high-contrast dark mode overlays.

## Usage Structure

```html
<!-- Wrapper for the component (Provides 3D Perspective) -->
<div class="ease-popover-wrapper">
    
    <!-- Native focusable button acts as the trigger -->
    <button type="button" class="ease-popover-trigger" aria-haspopup="dialog" aria-label="Project Details">
        <!-- SVG Icon -->
        <svg>...</svg>
    </button>
    
    <!-- Popover Content (triggers when the button is focused or hovered) -->
    <!-- Add 'theme-dark' class here to change color theme -->
    <div class="ease-popover-content" role="dialog">
        <div class="ease-popover-header">
            <h4>Project Details</h4>
        </div>
        <div class="ease-popover-body">
            <p class="desc-text">Elegant serif description goes here.</p>
        </div>
    </div>
    
</div>
```

## Customization Parameters

The following CSS variables can be adjusted directly on the `.ease-popover-wrapper`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `600ms` | Total duration of the elegant 3D Flip entrance animation. |
| `--popover-bg` | `#ffffff` | Clean white background for the popover panel. |
| `--popover-border` | `#eaeaea` | Subtle light border outlining the popover. |
| `--popover-shadow` | `0 20px 40px rgba(0, 0, 0, 0.08)` | A deep, soft drop shadow for physical elevation. |
| `--popover-text` | `#333333` | Elegant, dark gray text color for contrast. |
| `--popover-radius` | `2px` | Very sharp border radius for a modern editorial feel. |

## Live Demo

Open `demo.html` in your browser to view the popover integrated within a mock `Selected Works` portfolio layout. Use your mouse or the `Tab` key to interact with the project detail icons and watch the elegant 3D flip reveal!
