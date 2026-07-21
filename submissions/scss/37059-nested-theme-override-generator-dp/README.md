# Nested Theme Override Generator

## Overview

Hierarchical design systems commonly define a chain of themes — a base theme, then a dark theme, then a brand theme, then a high-contrast theme — where each level only changes a handful of tokens from the level before it. Writing out every token at every level duplicates values that never actually changed and makes it easy for themes to drift out of sync.

Nested Theme Override Generator is a compile-time SCSS utility that recursively compares two nested theme maps and produces only the tokens that actually differ. It walks arbitrarily deep nested maps, flattens them into dash-joined custom property names, and emits scoped CSS custom properties for just the overridden values — leaving unchanged tokens to fall through the CSS cascade from a parent theme scope. Everything resolves at compile time, so the output is plain, framework-agnostic CSS with no runtime cost.

## Features

- Recursive comparison of unlimited nested theme maps
- Emits only genuinely changed values as CSS custom property overrides
- Dash-joined custom property naming (`colors.primary` → `--colors-primary`)
- Scoped, configurable selector output (`[data-theme="dark"]`, `.brand`, `:root`, etc.)
- `flatten-theme()` for producing a full flat token map (useful for a base/root theme)
- Compile-time validation with `@warn`/`@error` for invalid, empty, or mismatched inputs
- No animations, keyframes, or transitions generated
- Zero external dependencies, framework agnostic

## File Structure

- `_nested-theme-override-generator.scss` — the utility (recursion, functions, mixin)
- `README.md` — documentation

## API

### `flatten-theme($map, $prefix: null)`

Recursively flattens a nested theme map into a single-level map whose keys are dash-joined and whose values are the leaf values. Errors on a non-map input, warns on an empty map or an unsupported leaf value type.

```scss
$flat: flatten-theme($base);
// (colors-primary: #2563eb, colors-secondary: #64748b, motion-duration: 200ms)
```

### `nested-theme-delta($base, $override, $prefix: null)`

Recursively compares a base theme map against an override theme map and returns a flat map containing only the keys whose values actually changed (or that exist only in the override). Nested maps are compared key-by-key at every depth. Errors on non-map inputs or on a structural mismatch (a map compared against a non-map at the same key), and warns on an empty override or an unsupported value type.

```scss
$delta: nested-theme-delta($base, $dark);
// (colors-primary: #60a5fa)
```

### `emit-nested-theme($selector, $theme)` (mixin)

Emits a selector block containing one `--custom-property: value;` declaration per entry in a flat theme map. Works with the output of either `flatten-theme()` (a full theme) or `nested-theme-delta()` (an override only). Errors on a non-map input, warns if the map is empty.

```scss
@include emit-nested-theme(":root", flatten-theme($base));

@include emit-nested-theme(
  '[data-theme="dark"]',
  nested-theme-delta($base, $dark)
);
```

## Example

**Base theme**

```scss
$base: (
  colors: (
    primary: #2563eb,
    secondary: #64748b,
  ),
  motion: (
    duration: 200ms,
  ),
);
```

**Dark theme**

```scss
$dark: (
  colors: (
    primary: #60a5fa,
    secondary: #64748b,
  ),
  motion: (
    duration: 200ms,
  ),
);
```

**Brand theme**

```scss
$brand: (
  colors: (
    primary: #7c3aed,
    secondary: #64748b,
  ),
  motion: (
    duration: 200ms,
  ),
);
```

**Generated delta**

```scss
$dark-delta: nested-theme-delta($base, $dark);
// (colors-primary: #60a5fa)

$brand-delta: nested-theme-delta($dark, $brand);
// (colors-primary: #7c3aed)
```

**Generated CSS variables**

```scss
@include emit-nested-theme(":root", flatten-theme($base));
@include emit-nested-theme(
  '[data-theme="dark"]',
  nested-theme-delta($base, $dark)
);
@include emit-nested-theme(
  '[data-theme="brand"]',
  nested-theme-delta($dark, $brand)
);
```

```css
:root {
  --colors-primary: #2563eb;
  --colors-secondary: #64748b;
  --motion-duration: 200ms;
}

[data-theme="dark"] {
  --colors-primary: #60a5fa;
}

[data-theme="brand"] {
  --colors-primary: #7c3aed;
}
```

## Validation

- **Invalid map detection** — every function and mixin checks its map arguments with `type-of()` and raises an `@error` immediately if a non-map value is passed where a theme map is expected.
- **Recursive comparison** — `nested-theme-delta()` walks nested maps depth-first, recursing whenever both sides hold a map at the same key, and raises an `@error` the moment one side holds a map while the other holds a scalar value at the same key, preventing silently malformed output.
- **Compile-time warnings** — empty theme maps, empty override maps, and unsupported leaf value types (anything that isn't a color, number, string, or list) trigger an `@warn` so problems are visible during compilation without necessarily halting the build.

## Example Use Cases

- Enterprise design systems maintaining a shared base token set across many teams
- White-label products that need per-client theme overrides without duplicating every token
- Brand theming layered on top of a neutral base theme
- Accessibility themes (e.g. high-contrast) that only need to adjust a small subset of tokens

## Why This Utility?

- **Eliminates duplicated tokens** — only values that actually changed between theme levels are emitted, instead of redeclaring an entire token set at every level.
- **Supports hierarchical themes** — arbitrarily deep nested maps and multi-level theme chains (base → dark → brand → high-contrast) are handled through recursion.
- **Framework agnostic** — compiles to plain CSS custom properties with no dependency on any JavaScript framework.
- **Reusable** — the same flatten, delta, and emit functions work for any theme map shape across any project.
- **Compile-time only** — all comparison and flattening logic runs during Sass compilation; no animation, keyframe, or transition code is generated, and nothing is computed in the browser.
