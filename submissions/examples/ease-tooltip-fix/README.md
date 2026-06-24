# Tooltip Mobile Overflow Fix

This directory contains a native implementation to handle horizontal layout bleed caused by absolutely positioned tooltips on small viewports.

## Implementation Details
- Shifts right-aligned tooltip nodes underneath the source component when the screen size drops below 480px.
- Drops the `white-space: nowrap` constraint and replaces it with a bounded `max-width` element container to ensure text wraps securely within a 320px mobile viewport interface.