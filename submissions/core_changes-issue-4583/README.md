# Core Changes — Issue #4583: Excessive `-v1` version suffixes cause merge/review noise

## Overview
Multiple folders in `submissions/examples/` and `submissions/core_changes-*` have redundant `-v1` suffixes (up to 7 repetitions like `collapsible-sidebar-pjm-v1-v1-v1-v1-v1-v1-v1`). These bloat listings, create git noise, and make PRs harder to review.

## Impact
- **8** `core_changes-v1-v1-*` folders vs. meaningful `core_changes-issue-NNNN` names
- **16** example folders with double `-v1-v1` suffixes
- **1** folder with triple `-v1-v1-v1`
- Hundreds of single `-v1` folders with no `-v2` counterpart (the suffix is meaningless)

## Proposed Rename Map

### Core changes (most urgent)
| Current | Proposed |
|---------|----------|
| `core_changes-v1-v1-v1` | `core_changes-issue-1915` (or merge into existing) |
| `core_changes-v1-v1-v2` | `core_changes-issue-XXXX` |
| `core_changes-v1-v1-v3` | `core_changes-issue-XXXX` |
| `core_changes-v1-v1-v4` | `core_changes-issue-XXXX` |
| `core_changes-v1-v1-v5` | `core_changes-issue-XXXX` |
| `core_changes-v1-v1-v6` | `core_changes-issue-XXXX` |
| `core_changes-v1-v1-v6-v1` | `core_changes-issue-XXXX` |
| `core_changes-v1-v1-v7` | `core_changes-issue-XXXX` |

### Example folders with double `-v1-v1`
`custom-check-radio-v1-v1-v1`, `smooth-theme-transition-dg-v1-v1`, `ease-glass-tilt-v1-v1`, `ease-shake-effect-v1-v1`, `ease-badge-component-v1-v1`, `ease-heartbeat-v1-v1`, `scroll-trigger-v1-v1`, `ease-fade-out-v1-v1`, `ease-sticky-top-v1-v1`, `view-transitions-api-v1-v1`, `responsive-sidebar-v1-v1`, `blur-button-emphasis-v1-v1`, `skeleton-loader-v1-v1`, `ease-position-utilities-v1-v1`, `form-components-v1-v1`, `ease-spin-v1-v1`

**Proposed**: strip all but last meaningful segment: `ease-fade-out-v1-v1` → `ease-fade-out`

## CONTRIBUTING.md Update Needed
Add a naming convention rule:
- **Use kebab-case** with a *single* unique identifier
- **No cumulative version suffixes**: append `-v1` only if a `-v2` variant actually exists
- **Core changes**: use `core_changes-issue-{number}` (not `-v1-v1-vN`)
- **Examples**: `ease-{feature}-{initials}` for single submissions; `-v2` only if the original author submits a variant

## Labels
- `enhancement`, `documentation`, `GSSoC-26`
