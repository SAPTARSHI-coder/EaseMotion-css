# Core Changes — Issue #9881: Add Text Utility Classes (text-indent, text-justify, vertical-align)

## Overview

Add missing text utility classes for `text-indent`, `text-justify`, and `vertical-align` to `core/utilities.css`.

## Problem

The current typography utilities include text alignment (`ease-text-left`, `ease-text-center`, `ease-text-right`), font sizes, weights, and transforms, but three important text CSS properties are missing:

1. **`text-indent`** — No way to indent the first line of paragraphs
2. **`text-justify`** — No control over the justification algorithm
3. **`vertical-align`** — No utilities for inline/inline-block vertical alignment

## Proposed Changes

### `core/utilities.css` — Typography section

**Text Indent** (6 classes):
```
.ease-text-indent-0  → text-indent: 0
.ease-text-indent-1  → text-indent: var(--ease-space-1)
.ease-text-indent-2  → text-indent: var(--ease-space-2)
.ease-text-indent-4  → text-indent: var(--ease-space-4)
.ease-text-indent-6  → text-indent: var(--ease-space-6)
.ease-text-indent-8  → text-indent: var(--ease-space-8)
```

**Text Justify** (5 classes):
```
.ease-text-justify-auto             → text-justify: auto
.ease-text-justify-none             → text-justify: none
.ease-text-justify-inter-word       → text-justify: inter-word
.ease-text-justify-inter-character  → text-justify: inter-character
.ease-text-justify-distribute       → text-justify: distribute
```

**Vertical Align** (8 classes):
```
.ease-align-baseline     → vertical-align: baseline
.ease-align-top          → vertical-align: top
.ease-align-middle       → vertical-align: middle
.ease-align-bottom       → vertical-align: bottom
.ease-align-text-top     → vertical-align: text-top
.ease-align-text-bottom  → vertical-align: text-bottom
.ease-align-sub          → vertical-align: sub
.ease-align-super        → vertical-align: super
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
