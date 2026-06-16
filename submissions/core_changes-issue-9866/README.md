# Core Changes — Issue #9866: Add Interaction Utility Classes

## Overview

Add utility classes for `user-select`, `resize`, and `appearance` to `core/utilities.css`. These properties control user interaction with elements — text selection, element resizing, and native form control styling.

## Problem

1. **`user-select`** — no utilities for text selection behavior (critical for UI elements, drag-and-drop)
2. **`resize`** — no utilities for element resizing (critical for textareas and custom handles)
3. **`appearance`** — no utilities for resetting native OS form styling (critical for cross-browser consistency)

## Proposed Changes

### `core/utilities.css` — new Interaction section after existing pointer-events section

**User Select** (4 classes):
```
.ease-select-none → user-select: none
.ease-select-text → user-select: text
.ease-select-all  → user-select: all
.ease-select-auto → user-select: auto
```

**Resize** (4 classes):
```
.ease-resize-none       → resize: none
.ease-resize-both       → resize: both
.ease-resize-horizontal → resize: horizontal
.ease-resize-vertical   → resize: vertical
```

**Appearance** (2 classes):
```
.ease-appearance-none → appearance: none
.ease-appearance-auto → appearance: auto
```

## Affected Files

- `core/utilities.css`

## Labels

- type:feature
- level:beginner
- GSSoC-26
