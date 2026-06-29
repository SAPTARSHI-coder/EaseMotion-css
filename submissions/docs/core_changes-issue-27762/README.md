# ease-focus-ring — Custom Focus Ring & A11y Indicator Mixins

## What does this do?

SCSS mixins for custom accessible focus rings with `:focus-visible` — standard outline, double ring, glow effect, and "none" variants. Configurable color, width, offset, and border-radius.

## How is it used?

```scss
@use 'mixins' as focus;

.button {
  @include focus.ease-focus-ring(#6c5ce7, 3px, 2px);
}

.card {
  @include focus.ease-focus-ring-glow(#6c5ce7, 4px, 12px);
}
```

### Mixins

| Mixin | Effect |
|---|---|
| `ease-focus-ring` | Standard outline-based focus ring |
| `ease-focus-ring-double` | Outline + box-shadow double ring |
| `ease-focus-ring-glow` | Box-shadow glow (no outline) |
| `ease-focus-ring-none` | Removes focus ring |

### Configuration

```scss
$ease-focus-config: (
  'color': #6c63ff,
  'width': 2px,
  'offset': 2px,
  'style': solid,
  'border-radius': 4px
);
```
