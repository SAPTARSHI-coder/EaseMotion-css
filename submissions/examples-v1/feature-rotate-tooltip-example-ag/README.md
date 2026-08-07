# Rotate Tooltip (Exit Animations)

A beginner-friendly, accessible, and high-performance implementation of custom tooltips demonstrating smooth entering transitions and distinct **rotating exit animations** entirely in pure CSS.

## What does this do?

This component demonstrates how to override CSS transitions between active and inactive states:

- By specifying transition properties on the base selector, we define the **Exit Animation** (runs when hover/focus is removed).
- By overriding the transition properties on the `:hover` or `:focus-within` selector, we define the **Enter Animation** (runs when the tooltip reveals).

It includes four rotation exit variants:

1. **Smooth Pivot** (`.rotate-tooltip-pivot-ag`): Tooltip rotates slightly (-12°) and scales down.
2. **Swing Hinge** (`.rotate-tooltip-swing-ag`): Tooltip pivots from the bottom-left corner, swinging downwards as it exits.
3. **3D Flip Exit** (`.rotate-tooltip-flip-ag`): Tooltip rotates around the horizontal X-axis (`rotateX`) in 3D perspective space.
4. **Roll Out** (`.rotate-tooltip-roll-ag`): Tooltip rotates (18°) and slides outward to the right as it closes.

## How is it used?

Apply the desired variant class to any element and provide the tooltip text via the `data-tooltip` attribute:

```html
<!-- Smooth Pivot Example -->
<button class="rotate-tooltip-pivot-ag" data-tooltip="This rotates on exit!">
  Hover or Focus me
</button>

<!-- Swing Hinge Example -->
<button
  class="rotate-tooltip-swing-ag"
  data-tooltip="Swings down from bottom-left"
>
  Hover or Focus me
</button>

<!-- 3D Flip Example -->
<button class="rotate-tooltip-flip-ag" data-tooltip="Flips back in 3D space">
  Hover or Focus me
</button>

<!-- Roll Out Example -->
<button class="rotate-tooltip-roll-ag" data-tooltip="Rolls out to the side">
  Hover or Focus me
</button>
```

## Why is it useful?

In traditional CSS tooltips, the entrance and exit animations are symmetrical (running the exact same transition in reverse). Adding a different, asymmetrical exit animation (like a minor rotation or roll-away) makes tooltips feel more organic, playful, and responsive.

## Design Customization (CSS Variables)

You can customize the tooltip styling by overriding the following tokens in your stylesheet:

| Token                               | Description                     | Default                              |
| :---------------------------------- | :------------------------------ | :----------------------------------- |
| `--ease-rotate-tooltip-bg`          | Tooltip bubble background color | `#1f2937` (Light) / `#f3f4f6` (Dark) |
| `--ease-rotate-tooltip-text`        | Tooltip text color              | `#f9fafb` (Light) / `#111827` (Dark) |
| `--ease-rotate-tooltip-radius`      | Border radius                   | `0.375rem`                           |
| `--ease-rotate-tooltip-enter-speed` | Speed of the reveal transition  | `0.2s`                               |
| `--ease-rotate-tooltip-exit-speed`  | Speed of the exit transition    | `0.28s`                              |

## Accessibility & Performance

- **Keyboard Triggering**: Tooltips are triggered by both `:hover` and `:focus-within`/`:focus`. This ensures that keyboard-only users navigating with `Tab` can view the tooltips.
- **Reduced Motion**: If a user has `prefers-reduced-motion: reduce` enabled on their system, all rotations, translations, perspective, and scale animations are bypassed, falling back to a clean, static fade-in/fade-out transition.
