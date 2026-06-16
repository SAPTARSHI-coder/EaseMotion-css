# Core Changes — Issue #9873: Add Mask Property Utility Classes

## Overview

Add utility classes for CSS Mask longhand properties to `core/utilities.css` with `-webkit-` prefix fallback for cross-browser support.

## Problem

`core/utilities.css` has three pre-composed mask-image utilities but no coverage of mask longhand properties:

1. **`mask-size`** — control size of mask images (cover, contain, auto)
2. **`mask-repeat`** — control mask image repetition (repeat, no-repeat, repeat-x, repeat-y, round, space)
3. **`mask-position`** — position the mask image (center, top, bottom, left, right)
4. **`mask-clip`** — determine mask painting area (border-box, padding-box, content-box, fill-box)
5. **`mask-origin`** — determine mask positioning area (border-box, padding-box, content-box)
6. **`mask-composite`** — composite multiple mask layers (add, subtract, intersect, exclude)

## Proposed Changes

### `core/utilities.css` — after existing mask image section

**Mask Size** (3 classes) + **Mask Repeat** (6 classes) + **Mask Position** (5 classes) + **Mask Clip** (4 classes) + **Mask Origin** (3 classes) + **Mask Composite** (4 classes) = **25 classes total**

All include both `-webkit-` prefixed and unprefixed declarations for cross-browser compatibility.

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
