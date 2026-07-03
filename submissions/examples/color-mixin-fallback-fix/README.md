# Fix: Merge conflict between ease-mixin color variants and custom property fallbacks

Resolves #30479

## The Problem

The `color-variant()` SCSS mixin hardcoded its own color values directly
into the rules it generated. Separately, components referenced
`var(--ease-color-primary, #someFallback)` with a fallback value that did
not match what the mixin actually produced. If a consuming project never
defined `--ease-color-primary`, the rendered fallback color did not match
the framework's intended "primary" color — two different colors for the
same named variant, depending on whether the custom property happened to
be set.

## The Fix

**Color values are now defined exactly once**, as a SCSS map that
generates both the `:root` custom property declarations and the mixin's
fallback values:

```scss
$ease-colors: (
  'primary': #7c5cff,
  'success': #22c55e,
  'danger':  #e5484d
);

:root {
  @each $name, $value in $ease-colors {
    --ease-color-#{$name}: #{$value};
  }
}

@mixin color-variant($name) {
  $fallback: map-get($ease-colors, $name);
  @if $fallback == null {
    @error "Unknown color variant `#{$name}`.";
  }
  background: var(--ease-color-#{$name}, $fallback);
}
```

Because the mixin's fallback and the `:root` custom property both pull
from the same `$ease-colors` map entry, they are structurally guaranteed
to match — there is no longer a second hardcoded number anywhere that
could drift out of sync. The `@error` guard also catches an unknown
variant name at compile time instead of silently producing a `var()`
with no fallback.

This does **not** restrict theming: consumers can still override
`--ease-color-primary` (or any other variant) on `:root` or a scoped
ancestor at any time, and components will pick up the override
immediately, exactly as before. The fix only guarantees that when no
override is present, the rendered color always matches the framework's
actual intended default.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Badges styled by the compiled mixin output, a block proving the fallback matches with custom properties forcibly removed, and a live override demo |
| `style.css` | The actual fix — documents the shared SCSS color map, and shows the compiled `var(--ease-color-x, #fallback)` pattern where fallback values exactly match the `:root` defaults |
| `script.js` | Wires up swatch buttons to override `--ease-color-primary` at runtime, proving theming still works after the fix |

## How to Test

1. Open `demo.html` in a browser.
2. Compare badges in **Block 1** (normal custom properties) against
   **Block 2** (custom properties forcibly unset, forcing the `var()`
   fallback to render) — they should be visually identical.
3. In **Block 3**, click the colored swatches to confirm live overrides
   of `--ease-color-primary` still work immediately.
4. Click the reset (↺) swatch to confirm the badge returns to the
   default `#7c5cff`, matching Block 1's rendering exactly.

## Notes

- This pattern generalizes to any future color variant added to
  `$ease-colors` — there is no additional place a contributor needs to
  remember to update a matching fallback value, since the mixin and the
  `:root` declarations are generated from the same map.