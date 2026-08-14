# Progress CSS `backdrop-filter` Glassmorphism

## Description
This PR introduces the CSS `backdrop-filter` property to the `progress` component, implementing the glassmorphism design pattern. `backdrop-filter` applies blur, saturation, and brightness effects to the content *behind* an element, creating a frosted glass appearance without modifying the background itself.

## Glassmorphism Recipe
1. `background: rgba(255,255,255, 0.08)` - Semi-transparent tint
2. `backdrop-filter: blur(20px) saturate(180%)` - Core frosted glass effect
3. `border: 1px solid rgba(255,255,255, 0.18)` - Glass edge
4. `box-shadow: inset 0 1px 0 rgba(255,255,255, 0.2)` - Top light reflection

## Key CSS Properties
- `backdrop-filter: blur()`: Blurs content visible through the element.
- `backdrop-filter: saturate()`: Boosts color vibrancy of content behind.
- `-webkit-backdrop-filter`: Safari prefix for full browser support.

## Changes
- `style.css`: 90+ lines with scene setup, glass card, and inner UI elements.
- `demo.html`: Vivid gradient scene with frosted glass card floating above.
- `README.md`: Describes the glassmorphism recipe and CSS properties.
\nFixes #56572\n