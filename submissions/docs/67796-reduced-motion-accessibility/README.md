# Reduced Motion Accessibility Tests

## Issue

Closes #67796

## Description

This submission adds regression coverage for EaseMotion CSS reduced-motion behavior.

The tests verify that animation utilities respect the user's `prefers-reduced-motion: reduce` preference while preserving normal animation behavior when reduced motion is not requested.

## Covered Cases

* Reduced-motion preference is detected.
* Animations are disabled or minimized when reduced motion is requested.
* Normal animation behavior remains available without the preference.
* Multiple animation utilities can follow the reduced-motion rule.
* Animation-related transitions are handled consistently.

## Expected Behavior

When `prefers-reduced-motion: reduce` is active, unnecessary animation should be disabled or minimized.

When the preference is not active, the normal animation behavior should remain unchanged.

## Scope

This contribution focuses on regression-test coverage and does not modify the core animation implementation.
