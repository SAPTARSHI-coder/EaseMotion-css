# Speed Dial FAB

A floating action button that expands into multiple child action buttons with a staggered reveal animation.

## Features

- FAB rotates 45° on expand
- Child buttons appear with scale + translateY stagger
- Tooltip labels appear on hover
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sdf-duration` | `0.3s` | Animation duration for expand/collapse |
| `--sdf-fab-bg` | `#6366f1` | Background color of the main FAB |
| `--sdf-action-bg` | `#1e1e2e` | Background color of action buttons |
| `--sdf-label-bg` | `#181825` | Background color of tooltip labels |
| `--sdf-radius` | `50%` | Border radius for all FAB buttons |

## Usage

Include `style.css` and follow the HTML structure with `.fab-container`, `.fab-main`, `.fab-actions`, and `.fab-action` elements. The JavaScript toggles the `expanded` and `visible` classes on click.
