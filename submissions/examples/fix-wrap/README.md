# Bug 3 Fix: Principle Code Badge Wrapping

## Overview
Fixes the issue where long badges like `Human-readable` would break into two lines in the table.

## Changes
1. Added a specific class `.principle-col` to the first column.
2. Applied `white-space: nowrap` to stop text breaking inside the table cell.
3. Used `width: 1%` hack on the column to tell the table to auto-size based on content width.
4. Set `.badge` to `inline-block` to respect padding uniformly.