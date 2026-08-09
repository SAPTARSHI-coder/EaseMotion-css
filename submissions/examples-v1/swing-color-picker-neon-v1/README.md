# Swing Color Picker — Neon

A neon-inspired color picker component with swing animation, built with EaseMotion CSS.

## Overview

This component features a row of color swatches that gently swing in a staggered pendulum motion, creating an eye-catching neon aesthetic. When a color is selected, the swatch stops swinging and highlights with a glow effect.

## Features

- **Swing Animation**: Swatches gently rock back and forth using a custom `ease-swing` keyframe animation with staggered delays
- **Neon Glow**: Active and hovered swatches emit a neon glow matching their color
- **Pure CSS Animations**: All animations are CSS-only; JavaScript is only used for selection state
- **Keyboard Accessible**: Full arrow-key navigation between swatches with visible focus indicators
- **ARIA Support**: Uses `role="radiogroup"` and `role="radio"` with `aria-checked` states
- **Responsive**: Adapts to smaller screens with reduced swatch sizes
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

## Usage

1. Include EaseMotion CSS in your project
2. Add the HTML structure from `demo.html`
3. Include the styles from `style.css`
4. The minimal JavaScript handles color selection and keyboard navigation

## EaseMotion Classes Used

- CSS custom properties from `--ease-*` variable system
- `--ease-radius-*` for border radius tokens
- `--ease-color-*` for color tokens
- `--ease-font-*` for typography tokens
- Custom `ease-swing` keyframe animation

## Color Palette

| Color   | Hex       | Name         |
|---------|-----------|--------------|
| Neon Pink   | `#FF006E` | Vibrant magenta |
| Neon Purple | `#8338EC` | Electric violet |
| Neon Blue   | `#3A86FF` | Bright azure |
| Neon Teal   | `#00F5D4` | Aqua glow |
| Neon Yellow | `#FEE440` | Sun flare |
| Neon Orange | `#FB5607` | Blaze amber |

## Browser Support

Works in all modern browsers that support CSS custom properties and keyframe animations.
