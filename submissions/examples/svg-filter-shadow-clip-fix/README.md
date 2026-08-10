# Sandbox Layout Fix: Inline SVG Drop Shadow Filter Subregion Bounding Box Truncation Resolution

## Overview
A high-performance SVG vector rendering fix for high-spread drop shadow filters (`feDropShadow`, `feGaussianBlur`, `filter: drop-shadow()`) applied to inline icons. It completely eliminates boxy rectangular edge clipping, expands filter subregion bounds, and renders smooth ambient vector glows across all platforms.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a rounded button with an inline SVG icon and expanded drop-shadow filter.
* `style.css` — Scoped layout modifier asset layer specifying `overflow: visible` on SVG elements and `contain: layout` on parent buttons.

## 🐛 The Bug Resolved
Previously, applying an SVG vector drop shadow filter (`filter: url(#svg-shadow)` or `filter: drop-shadow(...)`) to an inline SVG icon inside a rounded button container caused the shadow to get sharply clipped at the rectangular edges of the SVG element's bounding box instead of spreading smoothly over the button background. SVG filters evaluate their rendering region using an implicit filter primitive subregion (`x="-10%" y="-10%" width="120%" height="120%"`). High-spread blur filters exceed this default 20% margin box and get truncated at the primitive's coordinate boundary.

## 🛠️ The Solution
The SVG filter primitive bounds and CSS overflow rules are explicitly expanded. By setting `x="-50%" y="-50%" width="200%" height="200%"` directly on the `<filter>` element, the filter subregion is expanded by 100% in all directions. Concurrently, declaring `overflow: visible;` on the SVG node in `style.css` paired with `contain: layout;` on the parent button allows vector shadows to render smoothly across button backgrounds with zero scripts.
