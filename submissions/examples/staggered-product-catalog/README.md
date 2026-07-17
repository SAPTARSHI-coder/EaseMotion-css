# EaseMotion: Pure CSS Staggered Entrance Modal

A modern, highly performant product presentation modal engine operating entirely over standard CSS selectors. It implements a sequential transition entrance state across nested nodes without introducing rendering pipelines overhead or script locks.

## Key Architecture

- **State Management**: Implemented utilizing the `input[type="checkbox"]` selector framework combined with sibling (`~`) selection chains.
- **Layout Model**: Responsive hybrid grid structural components parsing structural boundaries automatically via viewports definitions.
- **Hardware Acceleration**: Transitions optimize rendering layers exclusively over `transform` and `opacity` properties to prevent structural layout reflow calculations.

## Customization Hooks

Adjusting interaction dynamics across implementation targets requires altering custom properties under the root selection level within `style.css`:

| Parameter | Default | Function |
| :--- | :--- | :--- |
| `--modal-duration` | `0.5s` | Base visibility overlay scaling runtime tracking window. |
| `--modal-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing parameter defining progression curve (ExpoOut). |
| `--modal-scale-start` | `0.94` | Original scale initialization bounds on viewport mapping. |
| `--stagger-delay-base` | `0.05s` | Generative offset intervals tracking sibling entry spacing. |
| `--stagger-y-offset` | `25px` | Baseline pixel translation distance across item shifts. |

## Accessibility Compliance

1. **Overlay Mask Dismiss**: Incorporates background target label layers, making container masks functional close triggers.
2. **Keyboard Traps & Mappings**: Script companion elements capture `Escape` keys to reverse state properties cleanly, translating standard keyboard patterns efficiently. Custom elements employ matching `role` specifications.