# Animated Neon Border (ease-neon-border-pr)

## What does this do?

Provides a continuous, GPU-accelerated neon glowing border utilizing multi-layered inner and outer box-shadow projection with pulsing intensity and color-cycling keyframe modifiers.

## How is it used?

Add the base class `.ease-neon-border` and any combination of variant and animation modifiers to any HTML element:

```html
<!-- Cyan neon border with pulsing animation -->
<div class="ease-neon-border neon-cyan ease-neon-pulse">Your content here</div>

<!-- Color cycling neon border at a slow speed -->
<div class="ease-neon-border ease-neon-cycle neon-slow">Your content here</div>

<!-- Combined pulsing and color cycling neon border -->
<div class="ease-neon-border ease-neon-cycle ease-neon-pulse">
  Your content here
</div>
```

### Class Options

- **Base Class**: `.ease-neon-border`
- **Color Variants**: `.neon-cyan`, `.neon-pink`, `.neon-green`, `.neon-purple`
- **Animation Modifiers**: `.ease-neon-pulse`, `.ease-neon-cycle`
- **Speed Modifiers**: `.neon-fast`, `.neon-slow`

### Custom Variables

Customize theme, width, and radius directly in your CSS or inline styling:

- `--ease-neon-color`: Customize the glow color (e.g. `#ff5500`)
- `--ease-neon-intensity`: Scale the glow thickness/brightness (default: `1`)
- `--ease-neon-width`: Adjust the border width (default: `2px`)
- `--ease-neon-radius`: Adjust the border radius (default: `16px`)

## Why is it useful?

It aligns with EaseMotion CSS's mission of providing lightweight, high-performance motion effects. By utilizing native CSS `@property` registrations, the browser can smoothly interpolate the intensity and color custom properties on the GPU, avoiding heavy layouts or paint cycles. It is ideal for active dashboard widgets, alerts, profile borders, and call-to-action cards that need persistent, interactive attention-grabbing without reliance on JavaScript or canvas layers.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript required for core functionality)

## Preview

Open `demo.html` directly in your browser to interact with the sandbox and presets.

## Contribution Notes

- Class naming suffix handled by the contributor (`-pr` for Pratyush Panda)
- Maintainer will rename classes to standard `ease-*` conventions during final core integration.
