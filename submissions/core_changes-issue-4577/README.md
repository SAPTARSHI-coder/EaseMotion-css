# Core Changes — Issue #4577: Duration helpers not fully documented

## Overview
The README "Duration Helpers" code example only shows `ease-duration-fast` and `ease-duration-slow`, omitting `ease-duration-medium`.

## Problem
HTML code block:
```html
<div class="ease-slide-up ease-duration-fast">Fast Animation</div>
<div class="ease-slide-up ease-duration-slow">Slow Animation</div>
```
Missing: medium variant.

## Fix
Add the missing medium example:
```html
<div class="ease-slide-up ease-duration-fast">Fast Animation</div>
<div class="ease-slide-up ease-duration-medium">Medium Animation</div>
<div class="ease-slide-up ease-duration-slow">Slow Animation</div>
```

## Affected Files
- `README.md`

## Labels
- `documentation`, `GSSoC-26`
