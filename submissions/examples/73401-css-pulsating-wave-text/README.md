# CSS Pulsating Wave Text

## Overview

Issue #73401 demonstrates a calm pulsating wave animation for display text using pure HTML and CSS.

## Features

- Gentle vertical pulse
- Soft cyan glow
- Responsive typography
- Semantic HTML
- Reduced-motion support
- No JavaScript or external assets

## Implementation

The animation combines a small transform and opacity change with layered text shadows. The effect is intentionally subtle so the text remains easy to read.

## Accessibility

The content is real text and remains selectable. `prefers-reduced-motion` disables the animation for users who request less movement.

## Responsive behavior

Cards and fact panels collapse on smaller screens while the heading scale adjusts with `clamp()`.

## Files

- `demo.html` — wave text showcase
- `style.css` — pulse animation and responsive styling
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73401.
