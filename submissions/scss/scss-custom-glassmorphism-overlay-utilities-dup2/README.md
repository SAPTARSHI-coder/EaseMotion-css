# Custom Glassmorphism Overlay Utilities

A reusable SCSS mixin module for building **glassmorphism-style overlay
surfaces** — translucent, blurred panels with soft borders and depth shadows.
Fits EaseMotion CSS's utility-first, composable design philosophy.

## File

```
_custom-glassmorphism-overlay-utilities.scss
```

## Mixins

### `glass-overlay($blur, $opacity, $tint, $border, $radius, $shadow)`

The core mixin. Applies a frosted-glass effect to any element.

| Parameter  | Type      | Default     | Description                                                        |
|------------|-----------|-------------|----------------------------------------------------------------------|
| `$blur`    | Number    | `12px`      | Backdrop blur radius. Higher = softer/foggier glass.                |
| `$opacity` | Number    | `0.15`      | Background fill opacity (`0`–`1`). Controls frosted vs. transparent. |
| `$tint`    | Color     | `#ffffff`   | Base tint mixed into the translucent background.                    |
| `$border`  | Boolean   | `true`      | Whether to render a 1px translucent border.                         |
| `$radius`  | Number    | `16px`      | Corner radius of the glass surface.                                 |
| `$shadow`  | Boolean   | `true`      | Whether to apply a soft elevation shadow.                           |

**Usage:**

```scss
.card-glass {
  @include glass-overlay();
}

.modal-glass-dark {
  @include glass-overlay($blur: 20px, $opacity: 0.1, $tint: #000000);
}

.chip-glass-flat {
  @include glass-overlay($blur: 8px, $border: false, $shadow: false, $radius: 999px);
}
```

### `glass-overlay-tinted($color, $blur, $opacity)`

Convenience wrapper for a colored "stained glass" look — useful for status
badges, alerts, or themed panels. Automatically adjusts text color for
light/dark mode contrast.

| Parameter  | Type   | Default | Description                          |
|------------|--------|---------|---------------------------------------|
| `$color`   | Color  | —       | Required. Tint/theme color.           |
| `$blur`    | Number | `14px`  | Backdrop blur radius.                 |
| `$opacity` | Number | `0.18`  | Background fill opacity.              |

**Usage:**

```scss
.alert-glass-success {
  @include glass-overlay-tinted($color: #22c55e);
}
```

## Pre-built Utility Classes

For quick use without writing a custom mixin call:

| Class            | Effect                                  |
|------------------|------------------------------------------|
| `.glass`         | Default glass surface                    |
| `.glass-light`   | Light, airy frosted look                 |
| `.glass-dark`    | Dark glass panel                         |
| `.glass-frosted` | Heavier blur, more opaque                |
| `.glass-flat`    | No border, no shadow — flat glass tint   |

```html
<div class="glass">Glass card content</div>
<div class="glass-dark">Dark glass panel</div>
```

## Compiled CSS Output (example)

Compiling `.glass { @include glass-overlay(); }` produces:

```css
.glass {
  position: relative;
  background-color: rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.27);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

@supports not (backdrop-filter: blur(1px)) {
  .glass {
    background-color: rgba(255, 255, 255, 0.4);
  }
}
```

## Accessibility

The module respects `prefers-reduced-transparency`. On systems that request
reduced transparency, blur is removed and the background becomes
near-opaque so content stays legible:

```css
@media (prefers-reduced-transparency: reduce) {
  .glass, .glass-light, .glass-dark, .glass-frosted, .glass-flat {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background-color: rgba(255, 255, 255, 0.92);
  }
}
```

## Browser Support

`backdrop-filter` is supported in all modern Chrome, Edge, Safari, and
Firefox versions (104+). A `@supports` fallback raises background opacity
on unsupported browsers so the surface still reads clearly without blur.

## Folder location

```
submissions/scss/scss-custom-glassmorphism-overlay-utilities/
├── _custom-glassmorphism-overlay-utilities.scss
└── README.md
```