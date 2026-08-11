# Theme Toggle Icon Fix

Submission for EaseMotion CSS · Fixes Issue #33752

## What does this do?

Fixes the theme toggle button's moon icon so it stays visible in light mode.

## Bug

The moon icon inherited `color: var(--page-text)`, which flips from white (dark mode) to near-black (light mode). Since the header bar stays dark in both themes, the icon became invisible in light mode.

## Fix

Introduced a dedicated `--header-icon-color` variable, always white, decoupled from the page's general text color, since the header background doesn't change between themes.

## How is it used?

Apply `color: var(--header-icon-color)` to `.theme-toggle-btn` instead of `var(--page-text)`.
