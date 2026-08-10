# Zoom In Modal

Modal dialog that opens with a zoom-in scale animation. Content scales from 0.85 to 1 with backdrop blur via `--zm-open` custom property.

## Features

- Modal zooms in on open via `--zm-open`
- Backdrop blur overlay
- Close on X button or overlay click
- Scale and opacity transition
- Bounce cubic-bezier for zoom

## Usage

Set `--zm-open` (0 or 1) on `.zm-overlay` and `.zm-modal`. CSS controls scale, opacity, blur, and background transitions.
