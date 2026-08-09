# SCSS Utility: Flexbox Alignment & Layout Utility Mixins

## What does this do?
Provides clean, reusable SCSS mixins to generate flexible and robust Flexbox container layouts. It simplifies writing verbose flexbox layout and alignment rules into single-line mixin calls.

## Mixin Signatures
```scss
// General Flex Layout
@mixin flex-layout(
  $direction: row,
  $justify: flex-start,
  $align: stretch,
  $wrap: nowrap,
  $gap: null
);

// Flex Centering Helper
@mixin flex-center(
  $direction: row,
  $gap: null
);
```

### Parameters
- `$direction`: The main flex axis direction (`row`, `column`, etc.).
- `$justify`: Horizontal/Main-axis alignment (`center`, `space-between`, etc.).
- `$align`: Vertical/Cross-axis alignment (`center`, `stretch`, etc.).
- `$wrap`: Wrap behavior (`wrap`, `nowrap`).
- `$gap`: Spacing between children.

## Usage Example
```scss
@import "scss-flexbox-alignment-layout-utility-mixins";

.nav-bar {
  @include flex-layout(row, space-between, center, nowrap, 1.5rem);
}

.hero-box {
  @include flex-center(column, 2rem);
}
```

## Compiled CSS Output
```css
.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1.5rem;
}

.hero-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 2rem;
}
```
