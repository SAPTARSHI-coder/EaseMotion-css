# CSS Bouncing Spring Progress

## Overview

Issue #73510 demonstrates a spring-like progress entrance using a cubic-bezier easing curve and a controlled scale bounce. The progress value remains deterministic while the entrance provides a tactile motion cue.

## Features

- Spring-style entrance
- Soft glow treatment
- Semantic progressbar structure
- Responsive layout
- Visible focus treatment
- Higher-contrast support
- Reduced-motion support
- Pure CSS implementation

## Implementation

The spring effect uses a custom cubic-bezier curve with a short overshoot phase. The fill scales vertically during the entrance rather than shifting its position, keeping the surrounding layout stable.

Additional styling adds a subtle inset track, a gradient fill, and a restrained highlight. These additions strengthen depth without competing with the numeric progress value.

## Responsive Behavior

The container uses a fluid width and a desktop maximum. On compact screens the track becomes slightly shorter and supporting metadata switches to a vertical arrangement to prevent cramped text.

## Accessibility

The progress value should be exposed through the ARIA attributes in `demo.html`. Focus styling remains visible when the component is embedded in a focusable context. Reduced-motion preferences remove the spring animation, leaving the completed state visible without movement.

## Usage

Open `demo.html` and adjust `--value` to change the progress amount. Keep the visual percentage and accessible value synchronized when changing the example.

## Files

- `demo.html` — progress markup and accessible value
- `style.css` — spring animation, visual treatment, responsive behavior, and motion preferences
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73510.
