# Explicit @layer Order Declaration

**Fixes:** Issue #4250

## Problem

EaseMotion used three named `@layer` blocks across its component files:
- `easemotion-base`
- `easemotion-components`
- `easemotion-utilities`

But no master **layer-order statement** was declared. The CSS spec says:
> When the same layer name appears multiple times, the order is determined
> by the **first** occurrence in the stylesheet. Without an explicit
> declaration, that first occurrence is wherever the first `@layer`
> block happens to be parsed — which depends entirely on import order.

If a consumer imported files in a different order, or if a build tool
reordered them, the cascade priority could silently flip, causing
component styles to override utility styles or vice versa.

## Fix

Add this as the **very first rule** in `easemotion.css` (the bundle
entry point):

```css
@layer easemotion-base, easemotion-components, easemotion-utilities;
```

This locks the layer precedence once at parse time. Import order no
longer matters.

## Layer Precedence (lowest → highest)

| Layer | Contents | Priority |
|---|---|---|
| `easemotion-base` | Tokens, resets, variables | Lowest |
| `easemotion-components` | Buttons, cards, modals… | Middle |
| `easemotion-utilities` | Spacing, display, text | Highest |
| *(unlayered consumer styles)* | Your own CSS | Always wins |

## Consumer Override Pattern

Consumer styles placed **outside any `@layer`** automatically beat all
layered EaseMotion styles. No `!important` required:

```css
/* ✅ Your CSS file — no @layer needed */
.my-btn {
  background: hotpink; /* beats easemotion-components */
}
```

If a consumer wants to write styles that stay BELOW a specific layer,
they can wrap in their own layer:

```css
/* Consumer style that stays below easemotion-utilities */
@layer my-base {
  .ease-btn { padding: 0.5rem; }
}
```

## Consumer @layer Integration Guide

```css
/* Recommended consumer setup */
@import url('easemotion.css'); /* includes layer-order declaration */

/* Optional: declare your own layers below EaseMotion's */
@layer my-components, my-utilities;

/* Unlayered styles always win over EaseMotion */
.my-component { ... }
```

## Acceptance Criteria

- [x] `@layer` ordering declaration added to bundle entry point
- [x] Order documented — base → components → utilities
- [x] Consumer `@layer` override pattern shown in docs and demo
- [x] Live demo proves consumer unlayered styles win without `!important`