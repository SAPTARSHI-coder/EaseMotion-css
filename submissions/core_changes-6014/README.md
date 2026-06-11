# Feature #6014: Add ease-progress bar component

## Description
Add a progress bar component with fill and striped variants, completing the set of classes listed in the cheatsheet (#5716).

## Proposed Implementation
- `.ease-progress` — container with `--ease-progress-height` (default 0.75rem)
- `.ease-progress-fill` — inner bar with `--ease-progress-width` (default 0%)
- `.ease-progress-striped` — adds diagonal stripe pattern
- Dark mode overrides for both container and fill

## Files
- `style.css` — all progress bar classes
- `demo.html` — interactive demo with animate button
