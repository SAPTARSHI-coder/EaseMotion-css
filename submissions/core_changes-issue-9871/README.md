# Core Changes — Issue #9871: Add Background Utility Classes

## Overview

Add utility classes for `background-size`, `background-repeat`, `background-origin`, and `background-clip` to `core/utilities.css`. The current utilities only cover `background-color` and `background-position` — these four missing properties are essential for controlling how background images behave.

## Problem

1. **`background-size`** — no utilities for cover/contain/auto/100% sizing
2. **`background-repeat`** — no utilities for controlling tiling behavior
3. **`background-origin`** — no utilities for background positioning area
4. **`background-clip`** — `ease-gradient-text` uses this internally but there's no standalone clip utility

## Proposed Changes

### `core/utilities.css` — new Background Size/Repeat/Origin/Clip section after background-position

**Background Size** (4 classes):
```
.ease-bg-cover   → background-size: cover
.ease-bg-contain → background-size: contain
.ease-bg-auto    → background-size: auto
.ease-bg-100     → background-size: 100% 100%
```

**Background Repeat** (6 classes):
```
.ease-bg-repeat        → background-repeat: repeat
.ease-bg-no-repeat     → background-repeat: no-repeat
.ease-bg-repeat-x      → background-repeat: repeat-x
.ease-bg-repeat-y      → background-repeat: repeat-y
.ease-bg-repeat-round  → background-repeat: round
.ease-bg-repeat-space  → background-repeat: space
```

**Background Origin** (3 classes):
```
.ease-bg-origin-border  → background-origin: border-box
.ease-bg-origin-padding → background-origin: padding-box
.ease-bg-origin-content → background-origin: content-box
```

**Background Clip** (4 classes):
```
.ease-bg-clip-border  → background-clip: border-box
.ease-bg-clip-padding → background-clip: padding-box
.ease-bg-clip-content → background-clip: content-box
.ease-bg-clip-text    → -webkit-background-clip: text; background-clip: text
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:intermediate
- GSSoC-26
