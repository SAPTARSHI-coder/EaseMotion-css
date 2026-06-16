# Core Changes — Issue #9857: Add Logical (Flow-Relative) Property Utility Classes

## Overview

Add utility classes for flow-relative CSS logical properties to `core/utilities.css`. These properties respect `writing-mode` and `direction` (LTR/RTL), enabling layouts that automatically adapt to different scripts.

## Problem

1. **`margin-inline` / `margin-block`** — no flow-relative margin utilities (physical `mt-4`, `ml-4` don't flip in RTL)
2. **`padding-inline` / `padding-block`** — no flow-relative padding utilities
3. **`inset-inline` / `inset-block`** — no logical positioning utilities

## Proposed Changes

### `core/utilities.css` — new Logical (Flow-Relative) Spacing section after margin section

**Margin Inline** (19 classes):
```
.ease-mi-s, .ease-mi-e                → margin-inline-start/end: var(--ease-space-4)
.ease-mi-s-{1,2,3,4,6,8,10,12}        → margin-inline-start with size
.ease-mi-e-{1,2,3,4,6,8,10,12}        → margin-inline-end with size
.ease-margin-inline-auto               → margin-inline: auto
```

**Margin Block** (18 classes):
```
.ease-mbs, .ease-mbe                   → margin-block-start/end: var(--ease-space-4)
.ease-mbs-{1,2,3,4,6,8,10,12}         → margin-block-start with size
.ease-mbe-{1,2,3,4,6,8,10,12}         → margin-block-end with size
```

**Padding Inline** (18 classes):
```
.ease-pi-s, .ease-pi-e                → padding-inline-start/end: var(--ease-space-4)
.ease-pi-s-{1,2,3,4,6,8,10,12}       → padding-inline-start with size
.ease-pi-e-{1,2,3,4,6,8,10,12}       → padding-inline-end with size
```

**Padding Block** (18 classes):
```
.ease-pbs, .ease-pbe                  → padding-block-start/end: var(--ease-space-4)
.ease-pbs-{1,2,3,4,6,8,10,12}        → padding-block-start with size
.ease-pbe-{1,2,3,4,6,8,10,12}        → padding-block-end with size
```

**Inset Logical** (4 classes):
```
.ease-inset-inline-0  → inset-inline: 0
.ease-inset-block-0   → inset-block: 0
.ease-is-0            → inset-inline-start: 0
.ease-ie-0            → inset-inline-end: 0
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
