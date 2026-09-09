# SCSS User Select & Touch Controls Helper Mixins

Comprehensive helper mixins for managing text selection (`user-select`) and touch gesture actions (`touch-action`) on interactive UI components across browsers.

## Features

- **Cross-Browser Vendor Prefixing**: Provides `-webkit-`, `-moz-`, `-ms-`, and standard `user-select` property declarations.
- **Touch Gesture Optimization**: Streamlines `touch-action` controls to optimize touch interactions and eliminate tap delays.
- **Composite Control Mixin**: `@include touch-control()` combines selection prevention, gesture management, and tap highlight suppression in a single declaration.
- **EaseMotion Integration**: Fully compatible with core EaseMotion CSS tokens and custom CSS variables (`--ease-touch-action`, `--ease-tap-highlight`).

## Parameters & Mixins

### User Select Mixins

| Mixin | Parameters | Default | Description |
|---|---|---|---|
| `@include user-select($value)` | `$value` | `none` | Cross-browser `user-select` rule with full vendor prefix fallbacks |
| `@include user-select-none` | None | - | Disables text selection on the element |
| `@include user-select-text` | None | - | Enables standard text selection |
| `@include user-select-all` | None | - | Selects all content inside element on single click |
| `@include user-select-auto` | None | - | Resets to default browser selection behavior |

### Touch Action Mixins

| Mixin | Parameters | Default | Description |
|---|---|---|---|
| `@include touch-action($value)` | `$value` | `auto` | Cross-browser `touch-action` rule |
| `@include touch-action-none` | None | - | Disables default browser touch actions |
| `@include touch-action-pan-x` | None | - | Restricts touch gestures to horizontal panning |
| `@include touch-action-pan-y` | None | - | Restricts touch gestures to vertical panning |
| `@include touch-action-manipulation` | None | - | Enables panning and pinch-zoom while disabling double-tap zoom delay |
| `@include touch-action-pinch-zoom` | None | - | Enables multi-touch pinch-to-zoom |

### Composite Mixin

| Mixin | Parameters | Default | Description |
|---|---|---|---|
| `@include touch-control($select, $touch)` | `$select`, `$touch` | `none`, `manipulation` | Combines user selection rules, touch action rules, and tap highlight styling |

## Usage Examples

### Basic Button Component

```scss
@use './user-select-touch-controls' as *;

.ease-button-interactive {
  @include touch-control(none, manipulation);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
}
```

### Drag & Drop Canvas / Carousel

```scss
@use './user-select-touch-controls' as *;

.ease-draggable-card {
  @include user-select-none;
  @include touch-action-pan-x;
}
```

### Responsive Design Integration

```scss
@use './user-select-touch-controls' as *;

.ease-touch-surface {
  @include touch-action-manipulation;

  @media (max-width: 768px) {
    @include user-select-none;
  }
}
```
