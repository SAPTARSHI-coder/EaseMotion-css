# Core Changes — Issue #4578: Excessive `-v1` suffixes in folder names

## Overview
Many folders in `submissions/examples/` and `submissions/core_changes-*` use redundant `-v1`, `-v2`, `-v3` suffixes. Examples:
- `core_changes-v1-v1-v1` (triple nesting)
- `ease-tooltip-component-v1`, `ease-tooltip-component-v2`
- `animation-preview-studio-v1`, `animation-preview-studio-v2`
- Many `ease-*-v1` entries

## Impact
123 out of ~1000+ folders have version suffixes. This clutters the directory listing, implies versioning that doesn't actually exist, and some have cascading suffixes like `-v1-v1`.

## Resolution
Option A: Remove `-v1` suffixes from single-version folders (where no `-v2`/`-v3` variant exists).
Option B: Document the naming convention to discourage redundant suffixes going forward.
Option C: For multi-version folders, rename with meaningful descriptors (`-legacy`, `-refined`, etc.)

**Recommendation**: Adopt a naming convention where:
- Single submissions use **no suffix** (e.g., `ease-button` not `ease-button-v1`)
- Variants use **descriptive suffixes** (e.g., `ease-button-filled`, `ease-button-outlined`)
- Core changes use `core_changes-issue-{number}` (e.g., `core_changes-issue-4567`)
- Remove already-redundant `-v1-v1-v1` → `-v1` → single name

## Labels
- `documentation`, `enhancement`, `GSSoC-26`
