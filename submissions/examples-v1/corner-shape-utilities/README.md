# CSS `corner-shape` Utilities

Relates to feature request **#41212**.

## 1. What does this do?

Provides utility classes built around the emerging CSS `corner-shape` property to create bevel, notch, scoop, and squircle corners without relying on SVGs, `clip-path`, or pseudo-elements. Each utility includes a graceful `@supports` fallback for browsers that don't yet support the specification.

## 2. Why is this useful for EaseMotion CSS?

Modern UI design is moving beyond simple rounded corners. Developers currently recreate unique corner styles using complex `clip-path` calculations or SVG masks, which are hard to maintain and don't compose well with borders or box-shadows. Native `corner-shape` utilities would provide expressive styling while keeping EaseMotion CSS lightweight and aligned with evolving CSS standards.

## 3. Utilities Provided

| Class | `corner-shape` | Effect |
|---|---|---|
| `.ease-shape-squircle` | `squircle` | Mathematically continuous superellipse (like Apple app icons) |
| `.ease-shape-notch` | `notch` | Cuts inward at 90° — cyberpunk/gaming aesthetic |
| `.ease-shape-bevel` | `bevel` | Slices corner with a straight line — brutalist/octagonal |
| `.ease-shape-scoop` | `scoop` | Inverted curve — great for ticket or coupon effects |

## 4. How is it used?

```css
/* You MUST specify border-radius for corner-shape to work */
.ease-corner-card {
  border-radius: 32px;
}

/* Apply the shape modifier */
.ease-shape-squircle { corner-shape: squircle; }
.ease-shape-notch    { corner-shape: notch; }
.ease-shape-bevel    { corner-shape: bevel; }
.ease-shape-scoop    { corner-shape: scoop; }

/* Graceful fallback for unsupported browsers */
@supports not (corner-shape: squircle) {
  .ease-shape-squircle {
    border-radius: 24px; /* A slightly smaller radius mimics squircle volume */
  }
}
```

## 5. Browser Support

`corner-shape` is part of the CSS Borders Level 4 draft spec. As of 2025, support is limited to early preview builds of certain browsers. The `@supports not` fallback in each utility ensures users see well-styled rounded corners on all other browsers until the spec is fully adopted.
