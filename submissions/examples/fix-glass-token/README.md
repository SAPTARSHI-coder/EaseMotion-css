# Glass Card Token Fallback Fix

## Description
This submission fixes the issue where `.ease-card-glass` relied on a hardcoded fallback color. By properly defining the `--ease-color-text-dark` token within this example's CSS scope, we ensure design system consistency.

## Changes
- Removed hardcoded hex values.
- Implemented proper CSS variable token usage.
- Added dark mode support via scoped media queries.