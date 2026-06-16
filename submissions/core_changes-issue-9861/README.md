# Core Changes — Issue #9861: Add Alignment Utility Classes

## Overview

Add utility classes for `justify-self`, `justify-items`, `align-content`, `place-self`, and `place-content` to `core/utilities.css`. These complete the CSS box alignment set alongside the existing `align-items`, `align-self`, `justify-content`, and `place-items` utilities.

## Problem

1. **`justify-self`** — missing inline-axis item alignment (auto, start, end, center, stretch)
2. **`justify-items`** — missing inline-axis container alignment
3. **`align-content`** — missing space distribution between wrapped lines
4. **`place-self`** / **`place-content`** — missing alignment shorthands

## Proposed Changes

### `core/utilities.css` — additions to the existing Alignment section

**Justify Self** (5 classes):
```
.ease-justify-self-auto    → justify-self: auto
.ease-justify-self-start   → justify-self: start
.ease-justify-self-end     → justify-self: end
.ease-justify-self-center  → justify-self: center
.ease-justify-self-stretch → justify-self: stretch
```

**Justify Items** (4 classes):
```
.ease-justify-items-start   → justify-items: start
.ease-justify-items-end     → justify-items: end
.ease-justify-items-center  → justify-items: center
.ease-justify-items-stretch → justify-items: stretch
```

**Align Content** (7 classes):
```
.ease-content-start   → align-content: flex-start
.ease-content-end     → align-content: flex-end
.ease-content-center  → align-content: center
.ease-content-between → align-content: space-between
.ease-content-around  → align-content: space-around
.ease-content-evenly  → align-content: space-evenly
.ease-content-stretch → align-content: stretch
```

**Place Self** (4 classes):
```
.ease-place-self-start   → place-self: start
.ease-place-self-end     → place-self: end
.ease-place-self-center  → place-self: center
.ease-place-self-stretch → place-self: stretch
```

**Place Content** (4 classes):
```
.ease-place-content-start   → place-content: start
.ease-place-content-end     → place-content: end
.ease-place-content-center  → place-content: center
.ease-place-content-between → place-content: space-between
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
