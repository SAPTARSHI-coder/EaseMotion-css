# Blend Mode Duotone

## What

An image gallery using `mix-blend-mode` to create duotone overlays on colored placeholder backgrounds. Each card uses a different blend mode (multiply, screen, overlay, difference), and overlays fade away on hover.

## How

Each card has a colored `base` div and an `overlay` div with `mix-blend-mode` set per-card via nth-child selectors. On hover, the overlay becomes transparent and scales up with a smooth CSS transition, revealing the original color beneath.

## Why

Blend modes are a powerful CSS tool for creative visual effects like duotone images, color grading, and texture overlays — all achieved purely with CSS, no JavaScript or image editing required.
