# Grid Utility Classes

## Overview

This submission adds regression-test coverage for EaseMotion CSS Grid utility
classes.

The tests are intended to verify that Grid-related utilities continue to
generate their expected CSS declarations.

## Test Coverage

The coverage includes:

- Grid column utilities
- `ease-grid-auto`
- Column span utilities
- `ease-place-center`
- `ease-place-start`
- `ease-place-end`

## Expected Behavior

Each Grid utility should generate the expected CSS Grid declaration without
unexpected changes to unrelated properties.

## Demo

Open `demo.html` directly in a browser.

The demo provides examples of:

- Grid layouts
- Grid column behavior
- Column spanning
- Grid item placement

## Purpose

These regression tests improve confidence in EaseMotion's layout utilities
and help prevent accidental changes to existing Grid behavior.

## Related Issue

Closes #69269