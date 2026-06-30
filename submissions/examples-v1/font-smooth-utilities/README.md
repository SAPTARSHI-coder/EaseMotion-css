# ease-font-smooth — Font Smoothing Utility Classes

Utility classes to control `-webkit-font-smoothing` and `-moz-osx-font-smoothing` per element — allowing targeted overrides from the global antialiased base set in `core/base.css`.

## Classes

| Class | `-webkit-font-smoothing` | `-moz-osx-font-smoothing` |
|-------|--------------------------|---------------------------|
| `.ease-antialiased` | `antialiased` | `grayscale` |
| `.ease-subpixel` | `subpixel-antialiased` | `auto` |
| `.ease-font-smooth-auto` | `auto` | `auto` |
| `.ease-font-smooth-none` | `none` | `unset` |

## Usage

```html
<!-- Most common: smooth text on dark backgrounds -->
<div class="dark-hero ease-antialiased">
  <h1>Hero Heading</h1>
  <p>Clean, light text on dark backgrounds.</p>
</div>

<!-- Reset a section to browser default -->
<section class="ease-font-smooth-auto">
  Body copy that should use browser default rendering.
</section>

<!-- Heavier weight for small LCD text -->
<p class="ease-subpixel" style="font-size: 0.75rem;">
  Tiny label text
</p>
```

## When to use each class

| Class | Best for |
|-------|----------|
| `.ease-antialiased` | Light text on dark backgrounds, HiDPI screens, most UI headings |
| `.ease-subpixel` | Small body text on light LCD displays |
| `.ease-font-smooth-auto` | Resetting sections that inherit global antialiased base |
| `.ease-font-smooth-none` | Pixel-art or bitmap text effects (rare) |

## Notes

- `core/base.css` already sets `antialiased` globally — these utilities allow per-element overrides
- Effect is only visible on macOS Safari and Chrome on Retina/HiDPI displays
- No effect on Windows or Linux — graceful degradation

## Why it fits EaseMotion CSS

EaseMotion CSS sets `antialiased` globally in `core/base.css` but provides no utility to override per element. These classes complete the typography control system by allowing targeted smoothing overrides — essential for mixed light/dark section layouts.

Closes #11617
