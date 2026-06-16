# Core Changes — Issue #9864: Add 3D Transform Utility Classes

## Overview

Add utility classes for `transform-origin`, `backface-visibility`, and `perspective-origin` to `core/utilities.css`. These properties control 3D transform behavior and are essential for building 3D card flips, cubes, and immersive scenes.

## Problem

1. **`transform-origin`** — no utilities for setting the transform pivot point
2. **`backface-visibility`** — no utilities for controlling back face rendering (critical for flip cards)
3. **`perspective-origin`** — no utilities for setting the perspective vanishing point

## Proposed Changes

### `core/utilities.css` — new 3D Transform section

**Transform Origin** (9 classes):
```
.ease-origin-center       → transform-origin: center
.ease-origin-top          → transform-origin: top
.ease-origin-top-right    → transform-origin: top right
.ease-origin-right        → transform-origin: right
.ease-origin-bottom-right → transform-origin: bottom right
.ease-origin-bottom       → transform-origin: bottom
.ease-origin-bottom-left  → transform-origin: bottom left
.ease-origin-left         → transform-origin: left
.ease-origin-top-left     → transform-origin: top left
```

**Backface Visibility** (2 classes):
```
.ease-backface-visible → backface-visibility: visible
.ease-backface-hidden  → backface-visibility: hidden
```

**Perspective Origin** (5 classes):
```
.ease-perspective-origin-center → perspective-origin: center
.ease-perspective-origin-top    → perspective-origin: top
.ease-perspective-origin-bottom → perspective-origin: bottom
.ease-perspective-origin-left   → perspective-origin: left
.ease-perspective-origin-right  → perspective-origin: right
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
