# Scroll Snap Utilities — Issue #3914

## Overview

This submission adds scroll-snap utility classes to EaseMotion CSS with full
`-webkit-scroll-snap-type` vendor prefix support for Safari versions prior to 14.

## Issue

The existing `.ease-snap-x` and `.ease-snap-y` utilities were missing the
`-webkit-scroll-snap-type` vendor prefix, causing broken behavior on older Safari.

## Classes Added

| Class | Description |
|-------|-------------|
| `.ease-snap-x` | Horizontal mandatory scroll-snap |
| `.ease-snap-x-proximity` | Horizontal proximity snap |
| `.ease-snap-y` | Vertical mandatory scroll-snap |
| `.ease-snap-both` | Snaps on both axes |
| `.ease-snap-hide-scrollbar` | Hides scrollbar on all browsers |
| `.ease-snap-start` | Snap-align: start |
| `.ease-snap-center` | Snap-align: center |
| `.ease-snap-end` | Snap-align: end |

## Tokens Used

- `--ease-speed-fast`, `--ease-ease-out`
- `--ease-space-*` scale
- `--ease-radius-lg`
- `--ease-shadow-sm`, `--ease-shadow-lg`
- `--ease-color-*` tokens