# Core Changes — Issue #9883: CSS Containment Utility Classes

## Overview

Add CSS containment utility classes (`content-visibility` and `contain`) to EaseMotion CSS for rendering performance optimization.

## Problem

EaseMotion CSS provides extensive animation and layout utilities but has no utility classes for CSS containment. Developers building long-scrolling pages with many sections or dynamic widgets must write custom CSS to enable rendering optimizations like `content-visibility: auto` and `contain: strict`.

## Solution

### Content Visibility
- `ease-content-visibility-auto` — skips rendering of off-screen elements
- `ease-content-visibility-hidden` — hides content while preserving rendering state
- `ease-content-visibility-visible` — default behavior

### Containment
- `ease-contain-none` — no containment
- `ease-contain-strict` — layout + paint + size + style
- `ease-contain-content` — layout + paint + style
- `ease-contain-layout`, `ease-contain-paint`, `ease-contain-size`, `ease-contain-style`
- `ease-contain-layout-paint` — common performance combo

## Affected Files

- `core/utilities.css` — new block to add in the utilities section

## Labels

- type:feature
- level:intermediate
- GSSoC-26
