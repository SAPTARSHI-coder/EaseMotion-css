# Live Demo Button Aesthetics Fix

## Issue

The "Live Demo →" button on the main documentation page appeared faded instead of having a crisp white text color.

## Root Cause

The `docs/index.html` file contained a CSS rule `.docs-header-links a` which forced a faded white color (`rgba(255, 255, 255, 0.6)`) onto all header links. Because this rule is more specific than `.ease-btn-primary`, it overrode the default `#ffffff` white text that the primary button should have.

## Solution

We reverted the selector change and instead added a specific CSS rule to explicitly override the color for the primary button when used within the header links.
By adding `.docs-header-links a.ease-btn { color: #ffffff; }`, we preserved the required layout properties (`padding`, `font-size`) while enforcing the intended crisp white text color.

## Files

- `demo.html` - Demonstrates the broken state vs the fixed state.
- `style.css` - Contains the snippet that caused the issue and the fix applied.
