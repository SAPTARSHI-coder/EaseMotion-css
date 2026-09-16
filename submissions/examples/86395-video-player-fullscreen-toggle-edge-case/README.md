# Video Player — Fullscreen Toggle Edge Cases

## Overview

This submission provides an interactive Video Player fullscreen toggle
demonstration together with a focused Vitest specification for edge-case
assertions.

The test suite validates fullscreen state transitions, repeated toggles,
boundary states, invalid inputs, and state invariants.

## State Model

The fullscreen state is represented by a boolean:

```text
false → fullscreen disabled
true  → fullscreen enabled