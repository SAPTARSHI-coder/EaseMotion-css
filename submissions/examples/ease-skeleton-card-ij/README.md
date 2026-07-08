# Skeleton Card

A card skeleton with a banner and text lines, using a shimmer wave animation. `--sk-w` controls the line width. The shimmer is a pseudo-element sliding across the skeleton.

## Features

- Banner skeleton with shimmer
- Text line skeletons with variable width via --sk-w
- Shimmer wave animation with @keyframes
- Card layout with padding
- Pure CSS animation (no JS)

## Usage

Create `.sk-banner` for the image area and `.sk-line` elements for text lines. Set `--sk-w` for variable line widths. The `::after` pseudo-element creates the shimmer effect.
