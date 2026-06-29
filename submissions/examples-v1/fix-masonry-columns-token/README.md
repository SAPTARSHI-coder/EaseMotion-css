# Fix: Named Masonry Variants Set --ease-masonry-columns Token

## Problem

`.ease-masonry-2`, `.ease-masonry-3`, and `.ease-masonry-4` hardcoded the `columns` property directly:

```css
.ease-masonry-2 { columns: 2; }
.ease-masonry-3 { columns: 3; }
.ease-masonry-4 { columns: 4; }
```

The base `.ease-masonry` class correctly uses `var(--ease-masonry-columns, 2)` — but named variants bypassed the token entirely. If a user set `--ease-masonry-columns` on a named variant it had no effect because `columns: 2` (a direct property) takes precedence over the token.

## Solution

Named variants set `--ease-masonry-columns` to their respective values, then consume the token via `columns: var(--ease-masonry-columns)`:

```css
.ease-masonry-2 {
  --ease-masonry-columns: 2;
  columns: var(--ease-masonry-columns, 2);
}
```

Responsive breakpoint overrides also set the token:

```css
@media (max-width: 639px) {
  .ease-masonry-2 { --ease-masonry-columns: 1; }
}
```

## Usage

Override column count on a named variant via inline token:

```html
<!-- Use .ease-masonry-2 layout but override to 3 columns -->
<div class="ease-masonry-2" style="--ease-masonry-columns: 3;">
  ...
</div>
```

Global override:

```css
:root {
  --ease-masonry-columns: 2; /* affects base .ease-masonry */
}
```

## Why it fits EaseMotion CSS

When a component exposes a CSS custom property, all modifier classes should set that token rather than hardcoding the underlying property — keeping the token as the single source of truth and making inline overrides work as expected.

Fixes #10423
