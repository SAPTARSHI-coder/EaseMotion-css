# Fix: Conflicting breakpoint values in responsive mixins vs custom media queries

Resolves #30480

## The Problem

The `respond-to()` SCSS mixin used one set of breakpoint values (e.g.
tablet at `768px`), while several component files wrote their own ad-hoc
`@media` queries with slightly different numbers for the same named
breakpoint (e.g. tablet at `760px` in one file, `800px` in another).
Components built via the mixin and components with hand-rolled queries
shifted layout at different viewport widths despite both being labeled
"tablet" — producing visibly inconsistent responsive behavior across the
framework.

## The Fix

**A single shared breakpoint scale, defined once in SCSS:**

```scss
// _breakpoints.scss — single source of truth
$ease-breakpoints: (
  'mobile':  0,
  'tablet':  768px,
  'desktop': 1024px,
  'wide':    1280px
);

@mixin respond-to($name) {
  $value: map-get($ease-breakpoints, $name);
  @if $value == null {
    @error "Unknown breakpoint `#{$name}`. Available: #{map-keys($ease-breakpoints)}";
  }
  @media (min-width: $value) {
    @content;
  }
}
```

Every component — whether it uses `respond-to()` or writes what was
previously called a "custom" query — now pulls its breakpoint value from
`map-get($ease-breakpoints, ...)` instead of hardcoding a one-off pixel
number. This makes drift structurally impossible: there is only one place
in the codebase where breakpoint numbers are defined, and the SCSS
`@error` guard catches any typo'd breakpoint name (e.g. `'tablett'`) at
compile time rather than silently producing a query that never matches.

The CSS custom properties (`--ease-bp-tablet`, `--ease-bp-desktop`,
`--ease-bp-wide`) mirror the same map for any JS that needs to read
breakpoint values at runtime (see `script.js`), so the JavaScript side
can't drift from the CSS side either.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Two grid components — one labeled as mixin-built, one as "custom query" — plus a live viewport readout |
| `style.css` | The actual fix — documents the shared SCSS breakpoint map, and the compiled CSS shows both components using identical `min-width` values |
| `script.js` | Reads breakpoint values from the same shared CSS custom properties to drive a live "current breakpoint" readout |

## How to Test

1. Open `demo.html` in a browser.
2. Resize the window slowly across `768px` and `1024px`.
3. Confirm **Component A** (mixin-built) and **Component B** ("custom"
   query) switch from 1 → 2 → 4 columns at the exact same pixel widths,
   with no visible lag or mismatch between them.
4. Watch the live readout at the top — it should report the same
   breakpoint name change at the identical width the grids shift at.

## Notes

- This submission demonstrates the compiled CSS output of the fix. In
  the actual SCSS source tree, the resolution is enforcing that no
  component file declares a raw `@media (min-width: <number>px)` with a
  hardcoded value — all breakpoint-based queries should route through
  `respond-to()` or `map-get($ease-breakpoints, ...)`.
- The `@error` directive in the mixin (shown in the SCSS source comment
  in `style.css`) means any future typo in a breakpoint name fails the
  build immediately instead of silently producing a no-op media query.