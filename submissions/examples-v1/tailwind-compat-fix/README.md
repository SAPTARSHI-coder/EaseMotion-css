# Tailwind CSS Compatibility Fix

**Fixes:** Issue #8404

## Problem

EaseMotion animation classes used the CSS `animation` shorthand:

```css
/* ❌ Before */
.ease-fade-in {
  animation: ease-kf-fade-in 0.4s ease-in-out both;
}
```

The `animation` shorthand is **not additive** — it resets ALL
animation sub-properties. When Tailwind's `animate-spin` and
EaseMotion's `ease-fade-in` are applied to the same element,
whichever stylesheet loaded last completely cancelled the other.

## Root Cause

```css
/* Tailwind sets */
.animate-spin {
  animation: spin 1s linear infinite;  /* shorthand */
}

/* EaseMotion sets */
.ease-fade-in {
  animation: ease-kf-fade-in 0.4s ease-in-out both;  /* shorthand */
}

/* Result: one completely overrides the other */
```

## Fix — Longhand Properties

```css
/* ✅ After — longhand only */
.ease-fade-in {
  animation-name:            ease-kf-fade-in;
  animation-duration:        0.4s;
  animation-timing-function: ease-in-out;
  animation-fill-mode:       both;
}
```

Each class now sets only its own sub-properties. The browser merges
`animation-name` values from both libraries — both animations play.

## How CSS Animation Stacking Works

When two classes on the same element each set `animation-name` via
longhand, the browser treats the names as a comma-separated list: