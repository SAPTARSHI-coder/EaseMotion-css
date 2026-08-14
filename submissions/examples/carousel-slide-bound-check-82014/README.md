# Carousel Slide Index Bound Check

A responsive carousel edge-case testing example created for issue #82014.

## Overview

This example validates carousel slide index handling against valid,
boundary, and invalid values.

The audit verifies that carousel navigation:

- Accepts the first valid index.
- Accepts the final valid index.
- Prevents negative indexes.
- Prevents indexes above the maximum.
- Rejects fractional indexes.
- Rejects `NaN`.
- Rejects infinite values.
- Rejects string indexes.
- Handles empty carousels safely.
- Preserves state when invalid navigation is requested.

## Index Rules

For a carousel containing `N` slides, the valid index range is:

```text
0 ... N - 1