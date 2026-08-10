# Flexbox Alignment & Layout Utility Mixins

A set of reusable SCSS mixins and generated utility classes for common
flexbox layout patterns — direction, alignment, justification, wrapping,
and spacing — without repeating boilerplate flex declarations.

## Files

- `_flexbox-alignment-layout-utility-mixins.scss` — mixins, gap scale map,
  and generated utility classes.
- `README.md` — this documentation.

## Usage

### As mixins

```scss
@import 'flexbox-alignment-layout-utility-mixins';

.navbar {
  @include flex-between;
}

.hero {
  @include flex-center(column);
}

.app-layout {
  @include flex(row, stretch, flex-start, nowrap, 16px);
}

.sidebar {
  @include flex-item(0, 0, 240px);
}

.main-content {
  @include flex-item(1, 1, auto);
}
```

### As utility classes

```html
<div class="flex-row justify-between items-center gap-3">
  <div>Left</div>
  <div>Right</div>
</div>

<div class="flex-center">
  <p>Perfectly centered</p>
</div>
```

## Mixin reference

| Mixin           | Parameters                                              | Description                              |
|-----------------|------------------------------------------------------------|-------------------------------------------|
| `flex`          | `$direction, $align, $justify, $wrap, $gap`               | Full flex-container shorthand.            |
| `flex-center`   | `$direction`                                              | Centers content on both axes.             |
| `flex-between`  | `$align`                                                  | Space-between layout (e.g. navbars).      |
| `flex-item`     | `$grow, $shrink, $basis`                                   | Sets flex-grow/shrink/basis on a child.   |

## Compiled CSS example

```css
.flex-between {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 0;
}

.gap-3 {
  gap: 12px;
}
```

## Browser support

Flexbox and `gap` on flex containers are supported in all modern browsers.