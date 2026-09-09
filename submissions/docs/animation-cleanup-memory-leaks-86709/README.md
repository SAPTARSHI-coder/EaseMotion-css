# Animation Cleanup & Memory Leak Regression Test

## Overview

This submission provides a standalone regression test for animation cleanup behavior.

It focuses on scenarios where animations are repeatedly started, cancelled,
removed, or recreated.

## Test Scenarios

The demo covers:

- Repeated animation start/stop
- Cancelled animations
- DOM element removal during animation
- Re-initialization of the same element
- Multiple animations on the same target
- Cleanup of stale animation references
- Repeated stress testing

## How to Run

Open `demo.html` directly in a browser.

No server or build step is required.

## Expected Behavior

- Animations should start normally.
- Cancelled animations should stop immediately.
- Removing an animated element should not leave active animation references.
- Recreating the element should work normally.
- Repeated animation cycles should not break the page.
- The stress test should complete without crashes or visible instability.

## Why This Fits EaseMotion CSS

This regression test focuses on animation lifecycle behavior and cleanup.
It helps verify that repeated animation usage does not leave stale animation
objects or callbacks behind.

## Issue

Closes #86709