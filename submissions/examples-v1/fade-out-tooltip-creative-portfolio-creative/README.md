# Creative Portfolio Fade-Out Tooltip — EaseMotion CSS

## What does this do?
The **Creative Portfolio Fade-Out Tooltip** is a pure HTML and CSS tooltip component (no JavaScript) designed for creative, editorial, and design portfolio layouts. It renders a clean glassmorphic tooltip card that features a rotated boundary arrow inheriting the parent backdrop-blur, a smooth fade/scale-up entrance on hover/focus, and a gradual fade/scale-down exit (fade-out transition) when interaction is removed.

## How is it used?
Integrate the tooltip by wrapping a trigger element and its tooltip content inside the main container class:

```html
<div class="ease-fade-tooltip ease-tooltip--top">
  <!-- Trigger Element -->
  <button class="ease-tooltip__trigger" aria-describedby="tip-id">
    Hover or Focus
  </button>
  
  <!-- Tooltip Bubble -->
  <div id="tip-id" class="ease-tooltip__content" role="tooltip">
    Tooltip Content Goes Here
  </div>
</div>
```

### Placements
Change the positioning of the tooltip bubble relative to the trigger by swapping the placement modifier class on the wrapper:
- `.ease-tooltip--top` (Default top-centered position)
- `.ease-tooltip--bottom` (Bottom-centered position)
- `.ease-tooltip--left` (Left-centered position)
- `.ease-tooltip--right` (Right-centered position)

## Why is it useful?
Many CSS tooltips snap closed instantly without transition when mouse hover is lost, creating a jarring user experience. By utilizing transition rules matching `opacity`, `transform`, and `visibility` (specifically transitioning visibility with a delay/step-end state), this component plays a smooth, organic fade-out and shrink transition upon exiting.

It is lightweight, isolated, and integrates well into grid and flex containers.

## Configuration (CSS Custom Properties)
You can customize the tooltip styling by overriding the following CSS variables on the `.ease-fade-tooltip` container:

| Custom Property | Default Value | Description |
|---|---|---|
| `--ease-tooltip-duration` | `0.25s` | Animation transition duration for entering/exiting. |
| `--ease-tooltip-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing function for entrance and exit. |
| `--ease-tooltip-scale-factor` | `0.94` | Starting scale factor of the entrance animation. |
| `--ease-tooltip-offset` | `10px` | Space gap between trigger boundary and tooltip bubble. |
| `--ease-tooltip-blur-intensity` | `10px` | Glassmorphic backdrop blur filter radius. |
| `--ease-tooltip-bg-opacity` | `0.82` | Opacity of the slate background. |
| `--ease-tooltip-border-radius` | `10px` | Border radius of the tooltip bubble. |
| `--ease-tooltip-shadow-strength` | `0.35` | Shadow intensity coefficient. |
| `--ease-tooltip-accent-color` | `#8b5cf6` | Keyboard focus ring accent color. |

## Accessibility & Performance Features
- **Semantic Setup:** Content uses `role="tooltip"`, and trigger buttons link via `aria-describedby` to match correct ARIA descriptors for screen readers.
- **Keyboard Navigation:** Uses focus-visible keyboard styling. When users `Tab` into trigger buttons, the tooltip displays automatically with custom visual outlines.
- **Reduced Motion Support:** Listens to `prefers-reduced-motion: reduce` queries to remove drift offsets, scale animations, and transition delays, offering standard instant state changes.
