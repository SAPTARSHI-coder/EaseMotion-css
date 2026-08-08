# CSS Slide-Up Popover for Modern SaaS Layouts

A pure CSS, fully responsive, and keyboard-accessible Popover component engineered specifically for modern SaaS dashboards and application layouts. It features a crisp, clean aesthetic with a smooth slide-up animation.

## Features

- **Slide-Up Animation**: Provides a polished `translateY` transition with a subtle bounce easing, making interactions feel fast and native.
- **Modern SaaS Aesthetics**: Styled with crisp typography, precise light borders, and carefully layered box-shadows common in top-tier SaaS products.
- **Pure CSS Interactive State**: Utilizes `:focus-within` and `:hover` pseudo-classes to manage state without JavaScript. It remains fully accessible and keyboard navigable.
- **Customizable Properties**: Important animation parameters and layout offsets are exposed as CSS Custom Properties in `:root`.

## Custom Properties (API)

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `0.3s` | Duration of the slide-up animation. |
| `--popover-easing` | `cubic-bezier(0.2, 0.9, 0.3, 1.1)` | Easing function with a slight bounce at the end. |
| `--popover-slide-offset` | `24px` | The initial vertical offset before the slide animation. |
| `--popover-gap` | `8px` | Space between the trigger element and the popover. |

## Usage

1. Create a `.popover-container` to group your trigger and the popover content.
2. Ensure the trigger element (e.g., a `<button>`) can receive focus to support keyboard users.
3. Include `.popover-content` next to the trigger. The CSS handles the visibility and slide-up logic automatically when the container gains focus or is hovered.
