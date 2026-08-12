# Tooltip Pop Appear

A tooltip UI pattern where tooltips appear with a **scale + opacity** pop animation on hover.

## Features

-   Scale (0 → 1) and opacity fade-in transition
-   Four positions: top, bottom, left, right
-   CSS custom properties for easy theming
-   Arrow pseudo-elements pointing to the trigger element
-   Works on buttons and links

## Usage

Include the stylesheet and add `data-tooltip` (tooltip text) and `data-pos` (position) attributes to any element:

```html
<button class="tooltip-btn" data-tooltip="Hello" data-pos="top">Hover me</button>
```

## Customisation

Override the following CSS custom properties in `:root`:

| Variable                  | Default   | Description              |
| ------------------------- | --------- | ------------------------ |
| `--tooltip-duration`      | `0.25s`   | Transition duration      |
| `--tooltip-bg`            | `#1e293b` | Tooltip background color |
| `--tooltip-text-color`    | `#f8fafc` | Tooltip text color       |
| `--tooltip-arrow-size`    | `6px`     | Arrow triangle size      |
| `--tooltip-offset`        | `10px`    | Gap between trigger and tooltip |

## Browser Support

All modern browsers that support CSS custom properties and transitions.
