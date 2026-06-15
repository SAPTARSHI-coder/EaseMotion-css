# Core Changes — Issue #9857: Flow-Relative Logical Property Utility Classes

## Overview

Add logical/flow-relative CSS property utility classes to EaseMotion CSS. These classes respect the `writing-mode` and `direction` of the document, enabling layouts that automatically adapt to right-to-left (RTL) scripts and vertical writing modes.

## Problem

The current utilities in `core/utilities.css` only provide physical-direction spacing utilities (e.g., `ease-mt-4`, `ease-pl-4`, `ease-mr-4`). There are no logical/flow-relative utility classes. This makes it impossible to write layouts that automatically adapt to RTL or vertical writing modes without custom CSS.

## Solution

Added the following utility classes to be merged into `core/utilities.css`:

### Margin Inline
- `ease-mi-s` / `ease-mi-e` — `margin-inline-start` / `margin-inline-end`
- Scale variants: `ease-mi-s-1` through `ease-mi-s-12`
- `ease-margin-inline-auto`

### Margin Block
- `ease-mbs` / `ease-mbe` — `margin-block-start` / `margin-block-end`
- Scale variants: `ease-mbs-1` through `ease-mbs-12`
- `ease-margin-block-auto`

### Padding Inline
- `ease-pi-s` / `ease-pi-e` — `padding-inline-start` / `padding-inline-end`
- Scale variants: `ease-pi-s-1` through `ease-pi-s-12`

### Padding Block
- `ease-pbs` / `ease-pbe` — `padding-block-start` / `padding-block-end`
- Scale variants: `ease-pbs-1` through `ease-pbs-12`

### Inset Logical
- `ease-inset-inline-0` / `ease-inset-block-0`
- `ease-is-0` / `ease-ie-0` — `inset-inline-start` / `inset-inline-end`
- `ease-is-4` / `ease-ie-4` with spacing token

All classes use `!important` to follow the existing convention and reference `--ease-space-*` design tokens for consistency.

## Demonstration

See `demo.html` for a side-by-side comparison showing how physical utilities fail in RTL layouts while the new logical utilities adapt automatically.

## Affected Files

- `core/utilities.css` — new block to be added in the spacing section

## Labels

- type:feature
- level:intermediate
- GSSoC-26
