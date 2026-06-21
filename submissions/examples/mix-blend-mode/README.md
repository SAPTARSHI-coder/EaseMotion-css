## What

This example demonstrates both `mix-blend-mode` (text/content blended onto a background) and `background-blend-mode` (multiple background layers blended together). It includes an interactive text-overlay section with a 16-option blend mode dropdown, a background-blend-mode demo with gradient/pattern layers, and a static showcase grid comparing six blend modes on gradient backgrounds.

## How

The text overlay section positions heading text on a gradient pseudo-element background with `mix-blend-mode` controlled by a `<select>` dropdown that updates the property via JavaScript. The background-blend section uses three stacked CSS background images (gradient, radial gradient, repeating pattern) blended with `background-blend-mode`, also controlled by a dropdown. The showcase grid applies hardcoded `background-blend-mode` values to identical gradient backgrounds for easy visual comparison.

## Why

Blend modes are a powerful CSS feature for creating rich visual effects without pre-composited images. `mix-blend-mode` enables text to integrate naturally with background imagery (like magazine-style headlines), while `background-blend-mode` allows multiple background layers to combine in creative ways. Understanding the full range of blend modes — from `multiply` and `screen` to `difference` and `luminosity` — expands the designer's toolkit for contrast, texture, and visual depth.
