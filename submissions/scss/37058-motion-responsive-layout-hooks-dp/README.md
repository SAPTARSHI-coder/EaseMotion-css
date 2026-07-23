# Motion-Responsive Layout Hooks

## Overview

Responsive layouts often repeat the same `@media (min-width: ...)` blocks across a codebase, and motion-aware behavior is usually bolted on separately with its own `prefers-reduced-motion` blocks. This duplication makes layout rules harder to maintain and easy to get out of sync between breakpoints and motion preferences.

Motion-Responsive Layout Hooks is a compile-time SCSS utility that centralizes breakpoint configuration and generates reusable responsive layout hooks that can optionally coordinate with a user's motion preference. It does not create animations, keyframes, or transitions — it only generates the media-query scaffolding and selectors needed to coordinate layout behavior across breakpoints and motion preferences. Everything resolves at compile time, so the output is plain, framework-agnostic CSS.

## Features

- Centralized, overridable breakpoint map
- `motion-layout()` mixin for generating breakpoint-based media queries
- Optional motion-preference coordination (`reduced`, `no-preference`/`allow`)
- `layout-hook()` mixin for generating named, reusable responsive selectors
- `breakpoint()` function for reading raw breakpoint values anywhere in a stylesheet
- `add-breakpoint()` function for safely extending the breakpoint map
- Compile-time validation with `@warn` and `@error` for unknown/invalid/empty/duplicate breakpoints
- No animations, keyframes, or transitions generated
- Zero external dependencies, framework agnostic

## File Structure

- `_motion-responsive-layout-hooks.scss` — the utility (maps, functions, mixins)
- `README.md` — documentation

## API

### `$breakpoints` (map)

Default breakpoint map. Override it before importing, or extend it with `add-breakpoint()`.

```scss
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
) !default;
```

### `breakpoint($name, $map: $breakpoints)`

Returns the raw value of a breakpoint. Errors on an unknown breakpoint name.

```scss
.custom {
  width: breakpoint(sm);
}
```

### `add-breakpoint($map, $name, $value)`

Returns a new map with the given breakpoint added or overridden. Warns if the key already exists, errors on an invalid value.

```scss
$breakpoints: add-breakpoint($breakpoints, xxl, 1536px);
```

### `validate-breakpoints($map: $breakpoints)`

Validates a breakpoint map, erroring on an empty map or any invalid (non-numeric or unitless) value. Runs automatically against `$breakpoints` when the file is loaded.

### `motion-layout($breakpoint, $motion: null, $map: $breakpoints)` (mixin)

Generates a `min-width` media query for the given breakpoint. An optional `$motion` argument (`reduced`, `no-preference`, or `allow`) adds a coordinated `prefers-reduced-motion` condition.

```scss
@include motion-layout(md) {
  .grid {
    display: grid;
  }
}

@include motion-layout(md, reduced) {
  .grid {
    display: block;
  }
}
```

### `layout-hook($name, $breakpoint, $motion: null, $map: $breakpoints)` (mixin)

Generates a reusable, named responsive selector (`.#{$name}`) wrapping `motion-layout()`.

```scss
@include layout-hook(sidebar, lg) {
  grid-template-columns: 240px 1fr;
}
```

## Example

**Breakpoint configuration**

```scss
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
);

$breakpoints: add-breakpoint($breakpoints, xxl, 1536px);
```

**Responsive hook example**

```scss
@include layout-hook(dashboard, lg) {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
}
```

**Generated CSS**

```css
@media (min-width: 1024px) {
  .dashboard {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 24px;
  }
}
```

**Reduced-motion example**

```scss
@include layout-hook(card-grid, md, reduced) {
  display: flex;
  flex-direction: column;
}
```

```css
@media (min-width: 768px) and (prefers-reduced-motion: reduce) {
  .card-grid {
    display: flex;
    flex-direction: column;
  }
}
```

## Validation

- **Unknown breakpoint detection** — `breakpoint()` and `motion-layout()` raise an `@error` when a requested breakpoint name is not present in the map, listing the available keys.
- **Invalid values** — `validate-breakpoints()` and `add-breakpoint()` raise an `@error` when a breakpoint value is not a number with a unit (e.g. a unitless number or a non-numeric value).
- **Empty breakpoint maps** — `validate-breakpoints()` raises an `@error` if the map passed to it has no entries.
- **Duplicate breakpoint keys** — `add-breakpoint()` emits an `@warn` when a key already exists in the map before overriding it, so overrides are intentional rather than silent.
- **Compile-time warnings** — all validation runs during compilation, so problems surface before any CSS is generated, and `$breakpoints` is validated automatically as soon as the file is loaded.

## Example Use Cases

- Dashboards with layout regions that reflow across breakpoints
- General responsive page layouts (headers, containers, grids)
- Navigation components that change structure at different widths
- Card and grid components that adjust column counts responsively
- Design systems that need a single, shared source of truth for breakpoints and motion coordination

## Why This Utility?

- **Reduces repetitive responsive code** — one mixin call replaces hand-written media queries scattered across a stylesheet.
- **Encourages motion-aware layouts** — motion preference is a first-class, opt-in parameter rather than an afterthought.
- **Framework agnostic** — compiles to plain CSS with no runtime dependency on any JavaScript framework.
- **Reusable** — breakpoints, hooks, and validation logic are shared across an entire project through a single map and a small set of mixins/functions.
- **Compile-time only** — all logic resolves during Sass compilation; nothing is computed in the browser, and no animation, keyframe, or transition code is generated.
