# Core Changes — Issue #4574: Undocumented `submission/examples/` (singular) directory

## Overview
The repository contains two parallel example directories:
1. `submissions/examples/` (plural) — well-documented, 1000+ folders
2. `submission/examples/` (singular) — undocumented, 15 folders

The singular directory is never mentioned in `CONTRIBUTING.md`, `README.md`, or any other documentation. It also contains a folder with a literal space in the name (`scroll to top`).

## Contents of `submission/examples/`
1. `aspect-ratio-fix`
2. `css-accordion`
3. `dropdown-stack-fix`
4. `ease-btn-glow-ops`
5. `flex-wrap-fix`
6. `glass-interactions-sh`
7. `infinite-marquee`
8. `profile-card-combo`
9. `progress-bar-sh`
10. `radial-progress`
11. `scroll to top` (⚠️ contains space — will break CLI tools)
12. `sidebar-dropdown`
13. `star-rating`
14. `sticky-header`
15. `subpixel-bleed-fix`

## Resolution
Option A: Move all contents into `submissions/examples/` (the canonical plural directory) and delete the singular directory.
Option B: Document the singular directory in `CONTRIBUTING.md` so contributors know it exists.

Recommendation: **Option A** — move the 15 folders and the single `submission/` README into `submissions/`, then remove `submission/`. The space-named folder should be renamed to `scroll-to-top` (kebab-case).

## Labels
- `documentation`, `GSSoC-26`
