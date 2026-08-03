# Accessible Footer Color Contrast Fix

This sub-module provides a hotfix patch targeting accessibility bugs found across layout demo templates where dark typography tokens failed readability tests upon switching into light-mode environments.

## Bug Analysis (#36404)
- **Problem**: The token used inside the light theme mapped the footer text to a faint background tint value, pushing color contrast down below `1.5:1`.
- **Solution**: Reconfigured the stylesheet system to deploy `--text-footer: #475569` during light mutations. This guarantees a safe contrast multiplier exceeding `5:1`, fully clearing WCAG AA standards.