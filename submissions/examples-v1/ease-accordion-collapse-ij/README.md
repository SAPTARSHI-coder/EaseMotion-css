# Accordion Collapse

An accordion/collapse component with animated height, opacity, and icon rotation. State controlled via `--acc-open` (0 or 1) CSS variable. CSS handles all transitions.

## Features

- Expandable panels with animated max-height
- Opacity fade for content reveal
- Icon rotates 180° when open
- Smooth transition on max-height, opacity, and padding
- Driven by `--acc-open` CSS custom property

## Usage

Set `--acc-open` (0 or 1) on the `.acc-header` button. CSS handles max-height, opacity, and icon rotation transitions. JS toggles the value on click.
