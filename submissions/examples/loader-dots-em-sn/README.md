# Fix: Loader Dots Scalable with em Units

## Problem
Dot loader dots have hardcoded pixel sizes.

## Fix
Converted to `0.5em` units so dots scale proportionally. Added `.ease-loader-sm` and `.ease-loader-lg` helpers.