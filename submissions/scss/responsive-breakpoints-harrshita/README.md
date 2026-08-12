# SCSS Responsive Breakpoint Mixins

A SCSS mixin library providing clean, named responsive breakpoint mixins
for mobile-first development, compatible with EaseMotion CSS.

## Installation

Import the partial in your SCSS file:

```scss
@use 'responsive-breakpoints' as *;
// or
@import 'responsive-breakpoints';
```

## Breakpoints

| Name | Min Width | Typical Device |
|------|-----------|----------------|
| `xs` | 0px | Extra small (default/mobile) |
| `sm` | 576px | Small phones |
| `md` | 768px | Tablets |
| `lg` | 992px | Small laptops |
| `xl` | 1200px | Desktops |
| `xxl` | 1400px | Wide screens |

## Mixins

### `ease-respond-up($bp)` — Mobile-first (min-width)

```scss
.ease-container {
  padding: 1rem;

  @include ease-respond-up(md) { padding: 2rem; }
  @include ease-respond-up(xl) { padding: 3rem; max-width: 1200px; }
}
```

### `ease-respond-down($bp)` — Max-width

```scss
.ease-sidebar {
  display: block;

  @include ease-respond-down(md) { display: none; }
}
```

### `ease-respond-only($bp)` — Exact breakpoint range

```scss
.ease-badge {
  @include ease-respond-only(sm) { font-size: 0.8rem; }
  @include ease-respond-only(lg) { font-size: 1rem; }
}
```

### `ease-respond-between($lower, $upper)` — Between two breakpoints

```scss
.ease-grid {
  @include ease-respond-between(sm, lg) {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Custom Breakpoints

Override the `$ease-breakpoints` map before importing:

```scss
$ease-breakpoints: (
  "mobile":  0px,
  "tablet":  600px,
  "desktop": 1024px,
);

@import 'responsive-breakpoints';
```

## Error Handling

Passing an unknown breakpoint name triggers a Sass `@error`:

```
Error: ease-respond: unknown breakpoint `xxs`.
       Valid values: xs, sm, md, lg, xl, xxl
```

## Requirements

- Dart Sass 1.x or later
- No dependencies

Closes #67725
