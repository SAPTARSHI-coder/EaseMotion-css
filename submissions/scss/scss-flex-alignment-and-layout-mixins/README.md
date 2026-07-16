# Flex Alignment & Layout Mixins

A lightweight, reusable SCSS utility for the **EaseMotion CSS** design system. Provides mixins for common flexbox alignment and layout patterns.

## Files

- `_flex-alignment-and-layout-mixins.scss` — the mixin partial
- `main.scss` — example usage / compiles to style.css
- `style.css` — compiled CSS output
- `demo.html` — live demo page

## Mixins

### `flex-center($direction, $gap)`

Centers content horizontally and vertically using flexbox.

| Param | Default | Description |
|---|---|---|
| `$direction` | `row` | Flex direction (`row` or `column`) |
| `$gap` | `0` | Gap between children |

```scss
.hero {
  @include flex-center(column, 16px);
}
```

### `flex-between($align, $direction)`

Distributes children with `space-between` and configurable cross-axis alignment.

| Param | Default | Description |
|---|---|---|
| `$align` | `center` | Cross-axis alignment (`align-items` value) |
| `$direction` | `row` | Flex direction |

```scss
.navbar {
  @include flex-between(center, row);
}
```

### `flex-stack($breakpoint, $gap)`

Lays children out in a row by default, stacking into a column below a given breakpoint — useful for responsive layouts.

| Param | Default | Description |
|---|---|---|
| `$breakpoint` | `768px` | Max-width at which children stack into a column |
| `$gap` | `16px` | Gap between children |

```scss
.card-group {
  @include flex-stack(600px, 12px);
}
```

### `flex-gap($gap, $direction)`

Applies a gap between flex children, with a margin-based fallback for older browsers that don't support `gap` in flexbox.

| Param | Default | Description |
|---|---|---|
| `$gap` | `16px` | Gap size |
| `$direction` | `row` | Flex direction |

```scss
.button-group {
  @include flex-gap(8px, row);
}
```

## Usage

```scss
@import 'flex-alignment-and-layout-mixins';

.my-element {
  @include flex-center();
  @include flex-gap(12px);
}
```

## Compiling

```bash
sass main.scss style.css
```

## Demo

Open `demo.html` in a browser to see all mixins in action. Resize the window to see `flex-stack()` switch from row to column layout.

## Browser Support

- Flexbox: all modern browsers
- `gap` in flexbox: modern browsers (Chrome 84+, Firefox 63+, Safari 14.1+); `flex-gap()` includes a margin-based fallback for older browsers
