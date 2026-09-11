# Accessible Loading Button Showcase

## Overview
This submission fixes the accessibility of the loading button component. Previously, it relied entirely on visual cues (a CSS spinner), making the loading state invisible to screen readers.

## Changes Made
- Added `aria-busy="true"` to signal to screen readers that the element is processing.
- Added `aria-label="Loading..."` to provide explicit fallback text for assistive technologies.
- Added `cursor: wait` in the local stylesheet for better mouse UX.

This simple enhancement ensures better compliance with web accessibility (a11y) standards without altering the core visual layout!
