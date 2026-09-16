# Code-Block CSS Custom Properties Design Token System

## Description
This PR introduces a comprehensive Design Token System to the `code-block` component using CSS Custom Properties. It defines semantic tokens for color, spacing (8pt grid), typography, border-radius, shadows, and animation durations/easings at `:root` level so they cascade to all components.

This enables one-line theming: override two token values on a parent element to completely transform the visual theme of any component without touching its CSS class selectors.

## Token Categories
- **Color**: Brand primary/secondary/accent, neutrals, semantic (success, warning, danger)
- **Spacing**: 8pt grid scale from 4px to 48px
- **Typography**: Font families, sizes (xs to 2xl), weights, line heights
- **Border Radius**: sm (4px) to full (9999px)
- **Shadow**: sm, md, lg, xl elevation levels
- **Animation**: duration (fast/base/slow) and easing (standard/decel/accel)

## Changes
- `style.css`: 80+ lines defining the full token system and component usage.
- `demo.html`: Three-card theme demo showing token overrides in action.
- `README.md`: Describes the token system and all categories.
\nFixes #55611\n