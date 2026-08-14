# CSS Sand Timer Loader

## Overview

A CSS-only hourglass loader that communicates waiting progress through a falling stream of sand. The top chamber drains while the lower chamber fills, followed by a gentle reset cycle.

## Features

- Pure HTML and CSS animation
- Falling sand stream
- Animated upper and lower sand chambers
- Hourglass frame built without images
- Responsive presentation
- Reduced-motion support
- No JavaScript or external assets

## Files

- `demo.html` — semantic loader stage and supporting explanation
- `style.css` — hourglass construction, keyframes, layout, and responsive styling
- `README.md` — implementation documentation

## Usage

Open `demo.html` in a modern browser. All visual shapes are created with borders, gradients, clipping, and CSS transforms.

## Accessibility

The loader is exposed as an image-like decorative status with an accessible label so the visual animation has a meaningful description. The supporting text remains available as normal document content. Users who prefer reduced motion receive a static presentation.

## Motion Model

The loader uses separate animations for the upper sand pile, lower sand pile, falling stream, indicator, and overall hourglass rotation. Keeping those effects independent makes the timing easy to tune without JavaScript.

## Responsive Behavior

The central stage scales to the available viewport, while the supporting feature cards collapse from three columns to one column on smaller screens.

## Issue

EaseMotion CSS issue #70363.
