# CSS Particle Burst Progress

## Overview

Issue #73512 uses CSS pseudo-elements to create a lightweight particle-like burst around a progress indicator. The effect adds motion at the leading edge without requiring a particle library or JavaScript.

## Features

- Particle burst accents
- Animated progress entrance
- Gradient progress fill
- Accessible progressbar semantics
- Responsive sizing
- Visible focus treatment
- Higher-contrast support
- Reduced-motion support
- No JavaScript or external assets

## Implementation

The leading edge uses two pseudo-elements with staggered animation delays. Each particle expands through `box-shadow` while fading out, which creates the impression of a small burst without adding extra DOM nodes.

The progress fill itself has a separate entrance animation. Keeping the two animations independent makes it possible to disable all motion through one accessibility media query without changing the component structure.

## Responsive Behavior

The progress track scales with the page container and becomes slightly shorter on compact screens. Supporting metadata changes to a vertical layout when the available width is limited.

## Accessibility

The semantic progress value should be exposed through the ARIA attributes in `demo.html`. The focus treatment gives the component a visible boundary in keyboard-driven layouts. Higher contrast increases track separation, while reduced-motion preferences disable the fill and particle animations.

## Usage

Open `demo.html` and adjust the `--value` custom property. Keep the corresponding accessible value synchronized with the visual percentage.

## Files

- `demo.html` — progress markup and accessible value
- `style.css` — particle, fill, responsive, contrast, and motion styling
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73512.
