# Interactive Avatar Selector

A grid-based avatar selector with pulse animation on selection and scale transition effects.

## Features

- Click an avatar to select it — a selection ring appears with a subtle pulse animation
- Selected avatar scales up slightly for emphasis
- Hover states with border-color transition
- "Confirm Selection" button enables only when an avatar is chosen
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ias-duration` | `0.3s` | Transition duration for all animations |
| `--ias-avatar-size` | `80px` | Width and height of avatar images |
| `--ias-border-color` | `#e2e8f0` | Default avatar border color |
| `--ias-selected-color` | `#6366f1` | Selection ring and accent color |
| `--ias-radius` | `50%` | Border radius for avatar images |

## Usage

Include `style.css` and `script.js` in your project. Add the HTML structure with `ias-avatar` elements inside `ias-grid`. Each avatar should have a `data-name` and `data-color` attribute for the selection logic.
