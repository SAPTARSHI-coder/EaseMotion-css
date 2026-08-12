# Drawer Slide Panel

Sliding drawer panel that opens from the right edge. Content slides in with smooth cubic-bezier transition, overlay darkens behind via `--dp-open` custom property.

## Features

- Panel slides in from right edge via `--dp-open`
- Overlay darkens behind with opacity transition
- Close button inside panel
- Smooth cubic-bezier transition
- Toggle switches inside drawer

## Usage

Set `--dp-open` (0 or 1) on `.dp-overlay` and `.dp-drawer`. CSS controls the transform translation and overlay opacity.
