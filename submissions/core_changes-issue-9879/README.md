# Core Changes — Issue #9879: Add Scroll Behavior and Overscroll Behavior Utility Classes

## Overview

Add utility classes for `scroll-behavior` and `overscroll-behavior` to `core/utilities.css`.

## Problem

The current utilities have scroll-snap and scrollbar sections but lack:

1. **`scroll-behavior`** — controls smooth vs instant scrolling for in-page anchor links
2. **`overscroll-behavior`** — prevents scroll chaining in modals, sidebars, and nested scroll containers

## Proposed Changes

### `core/utilities.css` — after scroll-snap section

**Scroll Behavior** (2 classes):
```
.ease-scroll-smooth → scroll-behavior: smooth
.ease-scroll-auto   → scroll-behavior: auto
```

**Overscroll Behavior** (3 classes):
```
.ease-overscroll-auto    → overscroll-behavior: auto
.ease-overscroll-contain → overscroll-behavior: contain
.ease-overscroll-none    → overscroll-behavior: none
```

**Overscroll Behavior Axis Variants** (4 classes):
```
.ease-overscroll-x-contain → overscroll-behavior-x: contain
.ease-overscroll-y-contain → overscroll-behavior-y: contain
.ease-overscroll-x-none    → overscroll-behavior-x: none
.ease-overscroll-y-none    → overscroll-behavior-y: none
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
