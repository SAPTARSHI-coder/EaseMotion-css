# EaseMotion Responsive Neon Button

## Overview
The **EaseMotion Responsive Neon Button** is a modern, high-performance UI component designed for high-tech, futuristic, and cyberpunk interface design systems. Built with zero JavaScript dependencies and zero media queries, it delivers a multi-layered neon glow effect powered by CSS Custom Properties and fluid scaling equations.

---

## Base Usage

To use the default Responsive Neon Button in your project, include `style.css` and use the `.ease-neon-btn` class on a `<button>` or `<a>` element.

```html
<!-- Default Cyan Neon Button -->
<button type="button" class="ease-neon-btn">
  Cyan Glow
</button>

<!-- As an Anchor Link -->
<a href="#" class="ease-neon-btn">
  Explore System
</a>
```

---

## Dynamic Color Injection

The Neon Button relies on a single CSS Custom Property, `--ease-neon-rgb`, which accepts raw comma-separated RGB values (e.g. `56, 189, 248`). This single variable automatically recalculates:
- Text color (`rgb(var(--ease-neon-rgb))`)
- Solid border color (`2px solid rgb(var(--ease-neon-rgb))`)
- Dynamic text shadow opacities (`rgba(var(--ease-neon-rgb), 0.5)`)
- Multi-layered `box-shadow` inset and drop-shadow opacities (`0.2`, `0.4`, `0.6`)
- Hover background fill and focus indicator rings

### Available Color Variants

#### Default Cyan (`56, 189, 248`)
```html
<button type="button" class="ease-neon-btn">
  Default Cyan
</button>
```

#### Matrix Green (`.ease-neon-btn--matrix`)
```html
<button type="button" class="ease-neon-btn ease-neon-btn--matrix">
  Matrix Green
</button>
```

#### Cyberpunk Pink (`.ease-neon-btn--cyber`)
```html
<button type="button" class="ease-neon-btn ease-neon-btn--cyber">
  Cyber Pink
</button>
```

#### Warning Amber (`.ease-neon-btn--warning`)
```html
<button type="button" class="ease-neon-btn ease-neon-btn--warning">
  Warning Amber
</button>
```

### Custom Inline Color Injection
You can pass any custom RGB value dynamically without altering CSS classes:

```html
<button type="button" class="ease-neon-btn" style="--ease-neon-rgb: 168, 85, 247;">
  Purple Glow
</button>
```

---

## Fluid Responsiveness

The Neon Button achieves seamless fluid responsiveness across mobile devices, tablets, desktop monitors, and ultra-wide displays without requiring a single `@media` query breakpoint.

It utilizes modern CSS `clamp()` functions for both font sizing and padding:

- **Font Size**: `font-size: clamp(0.875rem, 1.5vw, 1.2rem);`
  - Minimum font size: `0.875rem` (14px)
  - Ideal scaling rate: `1.5vw` of viewport width
  - Maximum font size: `1.2rem` (19.2px)

- **Padding**: `padding: clamp(0.8rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3rem);`
  - Vertical padding scales smoothly between `0.8rem` and `1.2rem`.
  - Horizontal padding scales smoothly between `2rem` and `3rem`.

---

## Accessibility (a11y)

- **Focus Ring Visualization**: Includes explicit `:focus-visible` styling with custom offset (`outline-offset: 4px`) matching the active neon theme color for keyboard navigation.
- **High Contrast State**: Hover states invert the background to solid theme color with `#020617` dark text, ensuring crisp legibility.
- **Interactive Semantics**: Supported natively on `<button type="button">` and `<a href="#">` tags.
- **User Selection**: Features `user-select: none;` to avoid accidental text highlighting on double clicks.
