# Link Hover Underline

Animated underline effects on link hover using `::after` pseudo-element with `scaleX` transitions. Supports center-origin and left-origin expansion, plus multiple accent colors.

## Features

- Underline slides in from center or left on hover
- Pseudo-element with `scaleX` transition
- Customizable line color, height, and animation speed
- Multiple colored variants via modifier classes
- Smooth easing with cubic-bezier spring

## Usage

Add `class="lhu-link lhu-center"` (or `lhu-left`) to anchor elements. Use color modifier classes like `lhu-accent`, `lhu-green`, etc. for colored variants.

Customize via `:root` variables:

```css
--lhu-duration       /* animation speed */
--lhu-line-color     /* default underline color */
--lhu-line-height    /* underline thickness */
--lhu-link-color     /* default link text color */
--lhu-hover-color    /* link text color on hover */
```
