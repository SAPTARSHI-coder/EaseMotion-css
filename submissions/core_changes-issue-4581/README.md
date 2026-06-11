# Core Changes — Issue #4581: Deprecated `clip: rect()` in `.ease-sr-only`

## Overview
Removes the deprecated `clip: rect(0, 0, 0, 0)` property from `.ease-sr-only` in `core/utilities.css`. The property has been removed from the CSS specification and has no effect in modern browsers.

## Problem
The `.ease-sr-only` class in `core/utilities.css` includes both:
- `clip: rect(0, 0, 0, 0) !important;` — **deprecated**, no effect in modern browsers
- `clip-path: inset(50%) !important;` — current standard

The deprecated `clip` property adds dead CSS to the bundle and creates confusion about which property is actually responsible for the visual clipping.

## Fix
Remove the `clip: rect(0, 0, 0, 0) !important;` line. The `clip-path: inset(50%)` provides complete cross-browser support and is the standard approach.

## Affected Files
- `core/utilities.css` — remove `clip: rect(0, 0, 0, 0) !important;` from `.ease-sr-only`

## Labels
- `bug`, `GSSoC-26`
