# Animated Geometric Background

A continuously moving, seamless geometric background pattern created entirely with CSS.

## Preview

Open `demo.html` in your browser to see the dotted geometric pattern smoothly sliding in the background.

## Implementation Details

- **No SVG/Images/JavaScript:** The pattern itself is drawn using CSS `radial-gradient`s applied to the `background-image` property.
- **Pattern Generation:** Two `radial-gradient`s are layered and offset from each other using `background-position: 0 0, 20px 20px;` to create a staggered polka-dot pattern.
- **Seamless Animation:** The `background-size` is exactly `40px 40px`. The `@keyframes` animation shifts the `background-position` by exactly this amount (moving it from `0, 20px` to `40px, 60px`). Because the translation distance perfectly matches the repeating unit size, the loop point is visually undetectable, resulting in a seamless, infinite scroll effect.
