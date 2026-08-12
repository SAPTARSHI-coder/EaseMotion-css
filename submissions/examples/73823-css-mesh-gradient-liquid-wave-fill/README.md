# CSS Mesh Gradient: Liquid Wave Fill

## Overview

This example creates a liquid-style mesh gradient using layered wave surfaces, blurred color fields, and slow CSS motion. The composition is designed to feel fluid without requiring JavaScript, canvas rendering, external libraries, or image assets.

## Features

- Layered liquid wave contours
- Multiple independently animated gradient blobs
- Smooth color blending and depth
- Dark-mode-friendly presentation
- Responsive layout for desktop and mobile
- Keyboard-accessible interactive content
- Visible focus treatment
- Reduced-motion support
- Pure HTML and vanilla CSS

## Implementation

The visual field is composed from several absolutely positioned decorative layers. Blurred blobs provide the underlying color variation while three wave layers create the liquid surface. Each layer uses its own animation timing and transform values so the movement does not feel synchronized or mechanical.

The main content sits above the decorative layers and remains regular document content. This keeps the visual effect separate from the accessible information and interaction.

## Files

- `demo.html` — semantic demo structure and content
- `style.css` — gradient layers, animation, responsive rules, and accessibility behavior
- `README.md` — implementation and usage documentation

## Usage

Open `demo.html` directly in a modern browser. No build step or dependency installation is required. The example works as a standalone HTML/CSS demonstration.

## Accessibility

Decorative gradient layers do not carry essential information. The interactive link remains keyboard accessible and receives a visible `:focus-visible` outline. The stylesheet also honors `prefers-reduced-motion` so continuous movement can be disabled for users who request less animation.

## Responsive Behavior

The main demo scales to the viewport while preserving the layered composition. At smaller widths, the content area and stage height are reduced and supporting cards collapse into a single column for easier reading.

## Performance

The animation uses CSS transforms and opacity for the moving layers. Blurs are kept on decorative elements and the composition avoids JavaScript animation loops.

## Issue

EaseMotion CSS issue #73823.
