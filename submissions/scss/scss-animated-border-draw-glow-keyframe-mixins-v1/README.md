# Animated Border Draw & Glow Keyframe Mixins

## Overview

This SCSS utility provides reusable mixins for animated border drawing and glowing border effects.

It allows developers using EaseMotion CSS to easily add animated border effects with customizable parameters.

---

## Included Mixins

### 1. animated-border-draw

Creates an animated border drawing effect.

Usage:

```scss
.card {
  @include animated-border-draw(#00ffff, 2px, 1.5s);
}
```

Parameters:

- `$color` → Border color
- `$border-width` → Border thickness
- `$duration` → Animation duration

---

### 2. animated-border-glow

Creates a glowing animated border.

Usage:

```scss
.card {
  @include animated-border-glow(#00ffff, 12px, 2s);
}
```

Parameters:

- `$color` → Glow color
- `$blur` → Glow blur intensity
- `$duration` → Animation duration

---

## Why useful?

This utility helps developers quickly add visually appealing border animations and reusable motion effects inside the EaseMotion CSS design system.
