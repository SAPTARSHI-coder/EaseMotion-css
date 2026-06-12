# Fix: Card Hover Shadow Uses Design Token

## Problem

Hardcoded box-shadow on card hover prevents theming.

## Fix

Added `--ease-shadow-card` and `--ease-shadow-hover` tokens. Hover shadow now respects the design token system.
