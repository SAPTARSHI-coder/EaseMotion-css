# Section Divider Animate

Animated horizontal rule dividers with gradient sweep, dot pattern, and wavy line styles. Each divider animates automatically using pure CSS keyframes.

## Features

- Three animated divider styles: gradient sweep, marching dots, flowing wave
- Pure CSS — no JavaScript required for animation
- Customizable via CSS custom properties (colors, size, speed, density)
- Modifier classes for style variants (thin, dense, alternate color)
- Responsive and self-contained

## Usage

Add an `<hr>` element with the base class `sda-divider` and a style class:

```html
<!-- Gradient Sweep -->
<hr class="sda-divider sda-gradient">

<!-- Marching Dots -->
<hr class="sda-divider sda-dots">

<!-- Flowing Wave -->
<hr class="sda-divider sda-wave">
```

### Modifier Classes

| Class | Effect |
|---|---|
| `sda-gradient-thin` | Thin gradient line |
| `sda-dots-dense` | Tighter dot spacing |
| `sda-wave-alt` | Alternate wave color |

### Custom Properties

Set on `:root` or any parent:

```css
--sda-primary: #6366f1;     /* gradient start */
--sda-secondary: #ec4899;   /* gradient middle */
--sda-accent: #06b6d4;      /* gradient end */
--sda-height: 4px;          /* divider thickness */
--sda-width: 80%;           /* divider width */
--sda-max-width: 600px;     /* max width */
--sda-duration: 4s;         /* animation speed */
--sda-dot-color: #6366f1;   /* dot color */
--sda-dot-size: 8px;        /* dot diameter */
--sda-dot-gap: 16px;        /* spacing between dots */
--sda-wave-height: 20px;    /* wave amplitude */
--sda-wave-color: #6366f1;  /* wave stroke color */
```
