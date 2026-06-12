# Core Changes — Issue #4582: `ease-duration-fast/medium/slow` not fully documented

## Overview
The README "Duration Helpers" code example only shows `ease-duration-fast` and `ease-duration-slow`, omitting `ease-duration-medium`. The duration values table is correct but buried after the incomplete example.

## Problem
The HTML code block:
```html
<div class="ease-slide-up ease-duration-fast">Fast Animation</div>
<div class="ease-slide-up ease-duration-slow">Slow Animation</div>
```
Missing: `<div class="ease-slide-up ease-duration-medium">Medium Animation</div>`

The table below is correct:
| Class | Duration |
|-------|----------|
| `ease-duration-fast` | 150ms |
| `ease-duration-medium` | 300ms |
| `ease-duration-slow` | 600ms |

But a user scanning the code example first won't discover `ease-duration-medium`.

## Fix
Add the missing medium duration example to the HTML code block:
```html
<div class="ease-slide-up ease-duration-fast">Fast Animation</div>
<div class="ease-slide-up ease-duration-medium">Medium Animation</div>
<div class="ease-slide-up ease-duration-slow">Slow Animation</div>
```

## Affected Files
- `README.md` — add `ease-duration-medium` example to the Duration Helpers code block

## Labels
- `documentation`, `GSSoC-26`
