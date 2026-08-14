# CSS Retro Arcade Pixel Progress

## Overview

Issue #73513 creates a pixel-inspired progress bar with stepped CSS animation and arcade styling. The component uses gradients, hard-edged shadows, and discrete animation steps to preserve the visual language of classic game interfaces.

## Features

- Pixel-inspired visuals
- Stepped fill animation
- Layered scanline texture
- Accessible progressbar semantics
- Responsive presentation
- Visible focus treatment
- Higher-contrast support
- Reduced-motion support
- Pure CSS implementation

## Implementation

The fill uses a repeating linear gradient to create a block-based texture. `steps()` controls the entrance animation so the value advances in visible increments instead of using a continuous easing curve.

A second pseudo-element adds a restrained scanline texture to the track. It is kept independent from the progress value so the visual texture does not imply a different completion percentage.

## Responsive Behavior

The component uses a fluid container and reduces the track height and page padding on compact screens. Supporting metadata can switch to a vertical arrangement so text does not collide with the progress indicator.

## Accessibility

The progress value should be represented by the ARIA attributes in `demo.html`. The focus treatment remains visible independently of the arcade shadow styling. Higher contrast strengthens the progress border, and reduced-motion preferences disable the stepped animation.

## Usage

Open `demo.html` and modify `--value` to change the progress amount. Keep the visual value and accessible value synchronized when demonstrating another percentage.

## Files

- `demo.html` — semantic progress structure
- `style.css` — arcade styling, stepped animation, responsive behavior, and accessibility states
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73513.
