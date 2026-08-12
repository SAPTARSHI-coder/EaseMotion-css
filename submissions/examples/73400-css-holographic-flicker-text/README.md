# CSS Holographic Flicker Text

## Overview

Issue #73400 creates an iridescent holographic text effect with a controlled flicker using only CSS.

## Features

- Animated chromatic gradient
- Subtle holographic flicker
- Responsive display type
- Semantic HTML text
- Reduced-motion support
- No JavaScript or external assets

## Implementation

A multi-stop gradient is clipped to the text while opacity changes create the flicker. The animation is deliberately restrained so it reads as a visual accent rather than a distracting strobe.

## Accessibility

The content remains real text. Reduced-motion users receive a static gradient treatment through the motion media query.

## Responsive behavior

Showcase cards and supporting facts collapse on small screens, while heading sizes scale fluidly.

## Files

- `demo.html` — holographic text showcase
- `style.css` — gradient, flicker, responsive, and accessibility rules
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73400.
