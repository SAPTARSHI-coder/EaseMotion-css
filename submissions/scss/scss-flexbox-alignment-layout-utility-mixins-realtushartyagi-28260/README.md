# SCSS Flexbox Alignment & Layout Utility Mixins

A highly robust, reusable SCSS mixin designed to quickly scaffold flexible layouts without writing repetitive flexbox boilerplate.

## Features
- **Master Layout Mixin**: A single `@include ease-flex-layout()` handles `justify-content`, `align-items`, `flex-direction`, `gap`, and `flex-wrap`.
- **Smart Compilation**: The mixin is optimized to save bytes by omitting default values. For example, it only outputs `flex-direction` if you pass something other than `row`.
- **Granular Utilities**: Includes specialized semantic mixins like `@include ease-flex-center()` and `@include ease-flex-stack()` for the most common use cases.
- **Utility Classes**: Pre-compiles standard utility classes for developers who prefer a utility-first HTML approach without writing custom SCSS.

## Parameters for `ease-flex-layout`

| Parameter | Type | Default Value | Description |
|-----------|------|---------------|-------------|
| `$justify` | String | `center` | Sets the `justify-content` property |
| `$align` | String | `center` | Sets the `align-items` property |
| `$direction` | String | `row` | Sets the `flex-direction` (row, column) |
| `$gap` | Number | `0` | Defines the `gap` between flex children |
| `$wrap` | String | `nowrap` | Sets the `flex-wrap` behavior |

## Usage Examples

### 1. Basic Absolute Centering
By default, the master mixin perfectly centers content horizontally and vertically.

```scss
@use 'flexbox-alignment-layout-utility-mixins' as *;

.ease-modal-backdrop {
  @include ease-flex-layout();
}
```

### 2. Spaced Row Layout with Gap
Ideal for navbars, toolbars, or headers.

```scss
@use 'flexbox-alignment-layout-utility-mixins' as *;

.ease-navbar {
  @include ease-flex-layout(
    $justify: space-between,
    $align: center,
    $direction: row,
    $gap: 1.5rem
  );
}
```

### 3. Using the Granular Stack Mixin
Quickly build a vertical stack of elements.

```scss
@use 'flexbox-alignment-layout-utility-mixins' as *;

.ease-card-content {
  @include ease-flex-stack($gap: 2rem, $align: stretch);
}
```

## Utility Classes Included
If you prefer not to write custom SCSS, this module compiles ready-to-use CSS utility classes:
- `.ease-flex-center`: Perfect absolute centering.
- `.ease-flex-between`: Flex row with `space-between`.
- `.ease-flex-stack`: Flex column with a standard `1rem` gap.

## Why it fits EaseMotion CSS
EaseMotion champions clean, semantic architecture. Modern interfaces heavily rely on Flexbox for alignment, leading to excessive boilerplate (`display: flex; align-items: center; justify-content: center;`). This SCSS module DRYs out component styling, drastically speeding up development while ensuring consistent alignment spacing across the entire application ecosystem.
