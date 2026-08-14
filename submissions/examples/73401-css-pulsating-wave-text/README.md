# CSS Pulsating Wave Text

## Overview

Issue #73401 demonstrates a rhythmic text animation using a moving gradient wave and a restrained pulse.

## Features

- Animated highlight wave
- Subtle scale and opacity pulse
- Responsive display sizes
- Stable document flow
- Reduced-motion fallback
- Pure HTML and vanilla CSS

## Implementation

The text uses a clipped gradient whose background position moves across the glyphs. A small scale and opacity pulse adds rhythm without changing surrounding layout dimensions.

## Accessibility

The effect is decorative and the content remains semantic, selectable text. `prefers-reduced-motion: reduce` disables the animation and leaves a stable gradient presentation.

## Usage

Open `demo.html` and reuse the `.wave-text` class for short headings or labels. Adjust the gradient colors and animation duration in `style.css` to match the surrounding design.

## Files

- `demo.html` — semantic examples and design notes
- `style.css` — wave, pulse, responsive, and motion rules
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73401.
