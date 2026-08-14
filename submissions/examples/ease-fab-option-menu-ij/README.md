# FAB Option Menu — Speed Dial

A floating action button that expands into multiple selectable option buttons with staggered reveal animation.

## Features

- Click the main FAB to reveal sub-options with translateY + scale + opacity transitions
- Staggered animation using `--fab-stagger` custom property
- Close on click outside or pressing Escape
- Accessible ARIA labels and keyboard support

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--fab-duration` | `0.35s` | Base transition duration |
| `--fab-stagger` | `0.06s` | Delay between each option |
| `--fab-bg` | `#6366f1` | Main FAB background |
| `--fab-color` | `#ffffff` | FAB icon color |
| `--fab-option-bg` | `#1e1e2e` | Option button background |
| `--fab-shadow` | `0 6px 20px rgba(99,102,241,0.4)` | FAB box-shadow |
| `--fab-radius` | `50%` | FAB border-radius |

## Usage

Include the HTML, link `style.css`, and place the script before `</body>`. The FAB opens upward; each option fires a custom `fab-select` event with the chosen value.
