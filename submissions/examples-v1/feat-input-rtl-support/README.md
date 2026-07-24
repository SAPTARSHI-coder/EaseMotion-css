# Input Right-to-Left (RTL) Support

## Description
Adds full Right-to-Left (RTL) layout support to the `input` component. This update migrates static margins/paddings to CSS logical properties (`margin-inline-start`, etc.) and adds a `[dir="rtl"]` selector override to flip gradients, borders, and pseudo-elements automatically.

## Usage
RTL mode activates automatically whenever `<html dir="rtl">` or `<div class="ease-input" dir="rtl">` is detected in the DOM.

## Changes
- `style.css`: 60+ lines introducing logical CSS properties and `[dir="rtl"]` selectors.
- `demo.html`: Dual LTR and RTL interactive demo.
- `README.md`: Describes the feature.
\nFixes #54942\n