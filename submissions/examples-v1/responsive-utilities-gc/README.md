# Responsive Breakpoint Utilities

### What does this do?
Introduces a comprehensive system of responsive utility classes for breakpoints `sm`, `md`, `lg`, `xl`, and `2xl`, covering display, grid, flex, gap, text alignment, width, and order.

### How is it used?
Prepend the breakpoint prefix to any supported utility class:
- `<div class="md-flex lg-hidden">`
- `<div class="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-4">`
- `<div class="w-full md-w-1/2 lg-w-1/3">`

(Note: Maintainer will prefix these with `ease-` e.g. `ease-md-flex`)

### Why is it useful?
It allows developers to build complex, responsive layouts with minimal custom CSS. While EaseMotion CSS already has basic `sm` and some `md` support, this expansion fills the gaps for larger screens and adds essential utilities like `gap`, `text-align`, and `order`.

---

## 🛠️ Implementation Proposal for Maintainer

To integrate this into the SCSS build system, you can add a `_responsive.scss` file or update `scss/_index.scss` with the following loop:

```scss
$breakpoints: (
  "sm": 640px,
  "md": 768px,
  "lg": 1024px,
  "xl": 1280px,
  "2xl": 1536px,
);

@each $bp, $width in $breakpoints {
  @media (min-width: $width) {
    // Display
    .ease-#{$bp}-block { display: block !important; }
    .ease-#{$bp}-hidden { display: none !important; }
    .ease-#{$bp}-flex { display: flex !important; }
    .ease-#{$bp}-grid { display: grid !important; }
    
    // Grid Columns
    @for $i from 1 through 12 {
      .ease-#{$bp}-grid-cols-#{$i} { grid-template-columns: repeat(#{$i}, minmax(0, 1fr)) !important; }
    }
    
    // Gaps
    $gaps: (0: 0, 1: 0.25rem, 2: 0.5rem, 3: 0.75rem, 4: 1rem, 6: 1.5rem, 8: 2rem);
    @each $key, $val in $gaps {
      .ease-#{$bp}-gap-#{$key} { gap: $val !important; }
    }
    
    // ... more utilities as shown in the style.css of this submission
  }
}
```

This ensures the framework remains lightweight while offering powerful responsive capabilities.
