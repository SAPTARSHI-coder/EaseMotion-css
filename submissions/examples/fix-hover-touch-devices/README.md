# Touch-safe Hover Fix

## Problem
Hover-based animation classes stayed active on touch devices after a tap,
since touch screens don't have a real hover state — the animation
persisted until the user tapped elsewhere.

## Fix
Wrap hover-only styles in `@media (hover: hover) and (pointer: fine)`
so they only apply on devices with genuine pointer-based hover support
(mouse/trackpad), not touchscreens.

## Usage
Apply this pattern to any `em-hover-*` utility class to prevent
sticky hover states on mobile/tablet.

Fixes #52661