# Animated Border Draw & Glow Keyframe Mixins

A reusable SCSS utility module for creating animated border drawing effects and glowing border highlights.

## Features

- Animated border drawing effect
- Custom glow effect
- Reusable SCSS mixins
- Adjustable animation duration
- Adjustable glow blur radius

---

## File Included

- _animated-border-draw-glow-keyframe-mixins.scss

---

## Mixins

### 1. animated-border-draw()

Creates animated border drawing effect.

Parameters:

- $color → Border color
- $width → Border thickness
- $duration → Animation duration

Example:

```scss
.card {
  @include animated-border-draw(#ff5733, 3px, 1s);
}
```

---

### 2. border-glow()

Creates glowing border effect.

Parameters:

- $glow-color → Glow color
- $blur → Blur radius

Example:

```scss
.card {
  @include border-glow(#00ffff, 15px);
}
```

---

## CSS Output Example

```css
.card {
  position: relative;
  border: 2px solid transparent;
  box-shadow: 0 0 12px #3498db;
}
```