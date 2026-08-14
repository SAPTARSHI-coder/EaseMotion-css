# Pure CSS Swing-Hover Tooltip Component

An elegant, highly customizable, and lightweight CSS-only animated tooltip component tailored perfectly for modern Product Catalog UI designs.

## Features
- **Zero JavaScript:** High performance, hardware-accelerated transformations.
- **Micro-interactions:** Configured with a distinct `cubic-bezier` easing rule that produces a playful yet refined swinging entry.
- **Accessibility Ready:** Built with explicit `role="tooltip"`, links using `aria-describedby`, and triggers seamlessly on keyboard `focus` triggers via standard `tabindex`.
- **Customization Friendly:** Driven by standard CSS Custom Properties for direct visual styling adjustments.

## Configuration Parameters

You can easily override these CSS custom variables at the `:root` block level or scope them to a specific component:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--tooltip-bg` | Background color of the tooltip container | `#1e293b` |
| `--tooltip-duration` | The execution length of the transition | `0.4s` |
| `--tooltip-easing` | The physics curve backing the swing effect | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| `--tooltip-swing-angle` | The initial rotational slant before reveal | `-15deg` |
| `--tooltip-scale-start` | Initial scale value before fully sizing up | `0.85` |

## How to Run Locally
1. Clone your fork of the repository.
2. Navigate to `submissions/examples/swing-hover-tooltips/`.
3. Open `demo.html` in any modern web browser to interact with the feature.