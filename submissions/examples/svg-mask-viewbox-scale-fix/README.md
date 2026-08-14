# Sandbox Layout Fix: CSS SVG Masking (`mask-clip: view-box`) Transform Scale Invisibility Resolution

## Overview
A high-performance CSS SVG masking vector resolution fix for cards utilizing CSS Masks (`mask-image: url(#id)`) combined with CSS scale transformations (`transform: scale()`). It completely eliminates element invisibility during scale passes, prevents zero-area coordinate matrix collapses, and locks vector clip bounds using relative bounding box units.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an embedded relative SVG mask and an interactive scale-transform card.
* `style.css` — Scoped layout modifier asset layer specifying `mask-clip: border-box` overrides and scale-invariant mask properties.

## 🐛 The Bug Resolved
Previously, when using CSS Masking (`mask-image: url(#custom-mask)`) with `mask-clip: view-box` to cut stylized shapes out of an SVG container, scaling the parent container down (`transform: scale(0.8)`) caused the masked element to turn completely invisible. WebKit and Blink evaluate SVG `view-box` coordinate spaces before computing CSS transform scale matrices. When scale properties reduce the container box model, the `view-box` mask bounds resolve to zero-area coordinates during composition.

## 🛠️ The Solution
The mask clipping model and vector coordinate units are updated to be transform-invariant. By switching `mask-clip` to `mask-clip: border-box;` in `style.css` and defining SVG mask geometry using `maskContentUnits="objectBoundingBox"` with normalized relative decimal coordinates ($0.0 \text{ to } 1.0$), vector mask paths scale relative to the element's bounding box independently of CSS scale matrices.
