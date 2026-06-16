# Core Changes — Issue #9876: Add Object Position and Object View Box Utility Classes

## Overview

Add utility classes for `object-position` and `object-view-box` to `core/utilities.css`.

## Problem

The current utilities provide width/height classes but have no way to control how replaced elements (`<img>`, `<video>`, `<canvas>`) fit within their box:

1. **`object-position`** — no utilities for aligning replaced elements (center, top, bottom, left, right, etc.)
2. **`object-view-box`** — no utility for resetting the view box cropping

## Proposed Changes

### `core/utilities.css` — after Width & Height section

**Object Position** (9 classes):
```
.ease-object-center       → object-position: center
.ease-object-top          → object-position: top
.ease-object-bottom       → object-position: bottom
.ease-object-left         → object-position: left
.ease-object-right        → object-position: right
.ease-object-top-left     → object-position: top left
.ease-object-top-right    → object-position: top right
.ease-object-bottom-left  → object-position: bottom left
.ease-object-bottom-right → object-position: bottom right
```

**Object View Box** (1 class):
```
.ease-object-view-box-none → object-view-box: none
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
