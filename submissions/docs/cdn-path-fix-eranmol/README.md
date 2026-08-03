# CDN Path Consistency Fix — Issue #47282

## What does this do?

Resolves the inconsistent CDN paths shown in `docs/index.html` (lines 324–338) where two different URL patterns (GitHub-based and npm-based) are presented as equivalent, potentially causing version confusion.

## How is it used?

Apply the two diffs documented in `demo.html` to `docs/index.html`:

1. **Lines 324–326** — Change the "recommended" CDN URL from the GitHub-based path to the npm-based path (`cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css`)
2. **Lines 331–338** — Reorder alternatives: npm is recommended, GitHub Raw is an alternative, unpkg is an alternative. Remove the raw.githubusercontent.com link (redundant with the jsDelivr GitHub path).

## Why is it useful?

A single recommended CDN path eliminates confusion. Users won't accidentally mix GitHub-pinned and npm-latest versions in their projects. The npm path is the most reliable for production because it always resolves to the latest published package.
