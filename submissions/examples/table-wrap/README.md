# Bug 5 Fix: Top Nav Underline Alignment

## Overview
Centers the active indicator border beneath the navigation text.

## Changes
1. Identified the `::after` pseudo-element on `.nav-item.active`.
2. Changed the width logic if it was using hardcoded pixels.
3. Implemented `left: 50%` and `transform: translateX(-50%)`.
4. This ensures pixel-perfect centering regardless of the length of the navigation text string.