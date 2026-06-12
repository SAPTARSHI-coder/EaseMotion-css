# Fix: Button Loading Spinner on Light Variants

## Problem

The spinner inside `.ease-btn-loading` uses hardcoded white border color making it invisible on light buttons.

## Fix

Changed `border-color` to `currentColor transparent transparent transparent`. The spinner now always matches the button text color.
