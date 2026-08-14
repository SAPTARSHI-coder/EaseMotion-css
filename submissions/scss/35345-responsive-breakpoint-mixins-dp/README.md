# Responsive Breakpoint Utilities

A mobile-first SCSS breakpoint system with named breakpoints, range
mixins, and common media-feature mixins for accessible, responsive
design systems.

## 1. What does this do?

Provides a single `$breakpoints` map (`mobile`, `tablet`, `laptop`,
`desktop`, `widescreen`) plus:

- `breakpoint-value($name)` and `breakpoint-exists($name)` — lookup and
  validation functions, with `@error` thrown for unknown names.
- `min-width()`, `max-width()`, `between()` — core mobile-first range
  mixins accepting either a named breakpoint or a raw length.
- `mobile`, `tablet`, `laptop`, `desktop`, `widescreen` — convenience
  mixins wrapping `min-width()` for each named breakpoint.
- `portrait()`, `landscape()`, `retina()`, `hover-supported()`,
  `reduced-motion()`, `dark-mode()`, `print()` — media-feature mixins
  for orientation, pixel density, input capability, motion preference,
  color scheme, and print contexts.

## 2. How is it used?

Import the partial and call the mixins with a content block:

```scss
@use "responsive-breakpoints" as *;

.grid {
  display: grid;
  grid-template-columns: 1fr;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.sidebar {
  @include max-width("laptop") {
    display: none;
  }
}

.nav {
  @include between("tablet", "desktop") {
    flex-direction: row;
  }
}

.card {
  transition: transform 0.3s ease;

  @include hover-supported {
    &:hover {
      transform: translateY(-4px);
    }
  }

  @include reduced-motion {
    transition: none;
  }
}

body {
  background: white;

  @include dark-mode {
    background: #111;
  }
}
```

Passing an unknown breakpoint name (e.g. `@include min-width("phone")`)
raises a compile-time `@error` naming the valid options.

## 3. Why is it useful?

Hand-rolled `@media` queries scattered across a codebase drift out of
sync and are hard to audit. This library centralizes breakpoint values
in one map, enforces mobile-first consistency through a small set of
composable mixins, validates breakpoint names at compile time instead
of failing silently, and bundles accessibility-relevant media features
(reduced motion, hover capability, color scheme) alongside layout
breakpoints — making it a solid, dependency-free foundation for a
design system or component library.