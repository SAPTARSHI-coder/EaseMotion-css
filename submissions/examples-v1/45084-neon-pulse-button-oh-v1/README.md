# Component: ease-neon-pulse-button

This submission implements the `ease-neon-pulse-button` component for GSSoC issue **#45084**.

## Description

A stylish button component featuring a glowing neon border which smoothly pulses when hovered. Perfect for primary calls-to-action in dark mode layouts.

## Usage

```html
<button class="ease-neon-pulse">Get Started</button>
```

### Color Variants

```html
<button class="ease-neon-pulse ease-neon-cyan">Cyan</button>
<button class="ease-neon-pulse ease-neon-pink">Pink</button>
<button class="ease-neon-pulse ease-neon-green">Green</button>
<button class="ease-neon-pulse ease-neon-yellow">Yellow</button>
<button class="ease-neon-pulse ease-neon-purple">Purple</button>
```

### Outline Variant

```html
<button class="ease-neon-pulse ease-neon-outline">Outline Button</button>
```

### Size Variants

```html
<button class="ease-neon-pulse ease-neon-sm">Small</button>
<button class="ease-neon-pulse">Default</button>
<button class="ease-neon-pulse ease-neon-lg">Large</button>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--neon-color` | `#3b82f6` | Neon glow color |
| `--neon-glow` | See CSS | Box-shadow glow effect |
| `--pulse-duration` | `2s` | Pulse animation duration |

## Features

- Smooth pulsing neon glow animation
- Hover effect with intensified glow and fill
- Multiple color variants
- Size variants: small, default, large
- Pure CSS implementation using box-shadow and @keyframes
- `prefers-reduced-motion` support

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Glowing neon border with pulse animation
- ✅ Hover state with enhanced glow effect
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
