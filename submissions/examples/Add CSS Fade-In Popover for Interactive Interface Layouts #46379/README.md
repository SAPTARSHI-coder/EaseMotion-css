# CSS Fade-In Popover for Interactive Interface Layouts

A pure CSS, fully responsive, and keyboard-accessible Popover component designed for modern, interactive user interfaces. It uses advanced CSS pseudo-classes (`:focus-within` and `:hover`) to manage state elegantly without a single line of JavaScript.

## Features

- **Pure CSS**: No JavaScript required for interaction or state management.
- **Accessible**: Fully navigable via keyboard. Opens on focus, remains open while tabbing through internal controls, and closes gracefully when focus leaves.
- **Interactive Interface Aesthetics**: Incorporates glassmorphism, soft shadows, fluid transitions, and a premium dark mode color palette.
- **Customizable**: Exposes animation and styling parameters via standard CSS custom properties.

## Custom Properties (API)

You can easily adjust the popover's behavior by overriding these CSS variables defined in the `:root` pseudo-class:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `0.4s` | Duration of the animation transition. |
| `--popover-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | The easing function for a smooth, natural feel. |
| `--popover-scale-start`| `0.92` | The initial scale size before popping in. |
| `--popover-scale-end` | `1` | The final scale size when fully visible. |
| `--popover-offset-y` | `12px` | Vertical spacing between the trigger button and popover. |
| `--popover-blur` | `12px` | The backdrop blur amount for the glass effect. |

## Usage & Implementation Details

1. Wrap your trigger element and the popover content within a `.popover-container` to establish the correct positioning and interaction context.
2. Use a focusable element (like a `<button>`) as the `.popover-trigger`. This ensures keyboard navigability.
3. The magic happens using the CSS selector `.popover-container:focus-within .popover-content`. When any element inside the container receives focus (including the trigger or internal popover inputs), the popover remains open.
4. Hover states (`:hover`) are also supported to cater to pointer devices naturally.
