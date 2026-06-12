# Sandbox Layout Fix: Gradient Text WebKit Clipping and Flicker Resolution

## Overview

A typographic rendering patch for elements utilizing complex gradient text attributes (`background-clip: text`) to completely eliminate character clipping, layout shifts, and random paint flickering on mobile WebKit and Safari engines.

## 📁 Sandbox Configuration Files

- `demo.html` — Precision testing stage featuring interactive layout toggles to stress test text wrapping and gradient updates.
- `style.css` — Scoped style controller applying bounding box rules and inline decoration overrides linked back to global tokens.

## 🐛 The Bug Resolved

Previously, applying multi-stop linear gradients to text modules using `background-clip: text` paired with `-webkit-text-fill-color: transparent` triggered major visual bugs on Apple Safari browsers. When text boxes scaled during responsive transitions, the graphics engine miscalculated bounds, leading to randomly cropped text glyph elements and distracting flicker artifacts.

## 🛠️ The Solution

The canvas painting limits are stabilized. By changing the text block's dimension framework to use an explicit `width: fit-content` or `display: inline-block` rule, the background region matches the actual text length perfectly. Additionally, applying `-webkit-box-decoration-break: clone` forces the engine to calculate font fragments line-by-line during text wrap events, ensuring stable, crisp text rendering across all screen resolutions.
