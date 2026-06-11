# Core Changes — Issue #4567: Truncated `easemotion/all.css` Bundle

## Overview
This submission provides the corrected `easemotion/all.css` bundle that fixes the truncation reported in issue #4567. The original `easemotion/all.css` ended abruptly after `@import "../components/modals.css";` — missing `components/forms.css`, the `@layer` cascade declarations, and the `@media (prefers-reduced-motion: reduce)` accessibility block.

## Problem
| Symptom | Root Cause |
|---------|-----------|
| Forms component never loads when using `easemotion/all.css` | `@import "../components/forms.css";` was missing |
| `@layer` declarations absent — no cascade layering | Top of file had no `@layer` block |
| Reduced-motion users still see animations | `@media (prefers-reduced-motion: reduce)` block was absent |

## Fix Applied
The file `style.css` in this folder is a drop-in replacement for `easemotion/all.css` and includes:
1. `@layer easemotion-base, easemotion-components, easemotion-utilities;`
2. All 14 component `@import` statements (buttons, cards, navbar, masonry, chip, footer, sidebar, scroll-progress, tabs, badges, loaders, tooltips, modals, **forms**)
3. `@media (prefers-reduced-motion: reduce)` accessibility block that zeros animation duration and forces `scroll-behavior: auto`

## Affected File (maintainer will copy to `easemotion/all.css`)
`submissions/core_changes-issue-4567/style.css`

## Verification
Open `demo.html` in this folder. It renders:
- A heading using layout + text utilities (confirms core utilities load)
- A navbar + chip using component imports (confirms components load)
- A form with an input (confirms `forms.css` loads — this was the missing piece)
- A hover-glow button (confirms hover cascade layers work)
- A Masonry grid (confirms `masonry.css` loads)

## Labels
- `bug`, `level:intermediate`, `GSSoC-26`
