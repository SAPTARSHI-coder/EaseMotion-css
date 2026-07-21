# Command Palette Modal

**Issue:** #36563

A command palette modal with slide-in items and staggered entrance animations.

## CSS Custom Properties

| Variable           | Default    | Description                    |
|--------------------|------------|--------------------------------|
| `--modal-bg`       | `#1e1e2e`  | Modal background color         |
| `--item-hover`     | `#313244`  | Hover background for items     |
| `--slide-duration` | `0.3s`     | Duration of the slide-in anim  |
| `--stagger-delay`  | `0.04s`    | Delay between each item anim   |

## Usage

Include `style.css` and `demo.html` in your project. Toggle the `.active` class on both `.palette-overlay` and `.palette-modal` to show/hide the palette.
