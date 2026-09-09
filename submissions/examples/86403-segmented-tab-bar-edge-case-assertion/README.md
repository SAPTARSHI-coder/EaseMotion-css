# Segmented Tab Bar — Edge Case Assertions

## Overview

This submission adds focused Vitest assertions for the Segmented Tab Bar indicator position.

The goal is to verify that the indicator remains within valid boundaries when the tab index reaches normal limits or unexpected values.

## Edge Cases Covered

- First tab (`index = 0`)
- Negative tab index
- Last valid tab
- Index immediately beyond the final tab
- Extremely large tab index
- Zero-tab configuration
- Single-tab configuration
- Invalid/negative tab count
- Custom tab width at the final position

## Expected Behavior

The indicator should never move before the first tab or beyond the final tab.

Invalid indices are clamped to the nearest valid boundary:

- Values below `0` resolve to the first position.
- Values greater than the final index resolve to the last position.
- Empty configurations resolve to a neutral position.

## Test File

The edge-case assertions are contained in:

`indicator-edge.test.js`

## Running the Tests

From the repository root:

```bash
npm run test