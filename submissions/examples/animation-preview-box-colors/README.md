# Animation Preview Box Colors Fix

Fixes #7931

## Problem
On the Animation Preview page, the inner preview boxes lack adequate background contrast or distinct borders when rendering in Light Theme. This makes them blend directly into the card containers, reducing visibility.

## Solution
Added explicit background, border, and text color styles for `.animation-preview-box` in both light and dark themes using `[data-theme]` attribute selectors.

## Files
- `style.css` — theme-aware styles for `.animation-preview-box`
- `demo.html` — interactive demo with theme toggle to see the fix in action

## Usage
Add the class `animation-preview-box` to any preview element inside an animation card. The styles will automatically adapt to the current theme.
