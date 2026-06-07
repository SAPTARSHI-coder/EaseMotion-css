# Live Demo Button Aesthetics Fix

## Issue
The "Live Demo →" button on the main documentation page appeared faded instead of having a crisp white text color.

## Root Cause
The `docs/index.html` file contained a CSS rule `.docs-header-links a` which forced a faded white color (`rgba(255, 255, 255, 0.6)`) onto all header links. Because this rule is more specific than `.ease-btn-primary`, it overrode the default `#ffffff` white text that the primary button should have.

## Solution
We modified the CSS in `docs/index.html` to exclude elements with the `.ease-btn` class from being styled as a generic header link.
By changing the selector to `.docs-header-links a:not(.ease-btn)`, the primary button styling works perfectly, and the Live Demo button now matches the intended crisp and vibrant aesthetics of the framework.

## Files
- `demo.html` - Demonstrates the broken state vs the fixed state.
- `style.css` - Contains the snippet that caused the issue and the fix applied.
