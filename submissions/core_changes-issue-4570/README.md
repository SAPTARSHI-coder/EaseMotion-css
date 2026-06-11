# Core Changes — Issue #4570: Conflicting `@keyframes ease-kf-bounce-in`

## Overview
Fixes the keyframe mismatch between `easemotion/bounce.css` and `core/animations.css` for `@keyframes ease-kf-bounce-in`.

## Problem
Both files define the same keyframe name with different values:
- `easemotion/bounce.css`: starts at `scale(0.3)` with a gentler curve (4 steps)
- `core/animations.css`: starts at `scale(0)` with a more pronounced overshoot (5 steps)

Since both live in `@layer easemotion-utilities`, load order determines which wins.

## Fix
Adopt the `core/animations.css` version as canonical — it has a more complete bounce curve (including the 85% overshoot keyframe) that produces a more polished animation.

## Affected Files (maintainer applies)
- `easemotion/bounce.css` — replace `@keyframes ease-kf-bounce-in` and `.ease-bounce-in` rule
- `core/animations.css` — already correct, verify it's unchanged

## Labels
- `bug`, `level:beginner`, `GSSoC-26`
