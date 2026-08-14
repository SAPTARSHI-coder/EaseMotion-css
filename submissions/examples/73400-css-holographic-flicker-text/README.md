# CSS Holographic Flicker Text

## Overview

Issue #73400 demonstrates a chromatic holographic flicker treatment for short display text using semantic HTML and vanilla CSS.

## Features

- Animated spectral gradient
- Controlled flicker intervals
- Responsive typography
- Dark-surface presentation
- Hardware-friendly visual properties
- Reduced-motion fallback
- No JavaScript or external assets

## Implementation

The effect combines a clipped multi-color gradient with opacity and background-position animation. The layout stays stable while only decorative visual properties change.

## Accessibility

The content remains real selectable text. The flicker is decorative, and `prefers-reduced-motion: reduce` disables both animations so the final text remains stable.

## Usage

Open `demo.html` in a modern browser. Reuse the `.holo` class for short headings or labels and adjust the gradient variables to match another interface palette.

## Files

- `demo.html` — semantic demonstration and usage examples
- `style.css` — holographic effect, responsive layout, and motion handling
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73400.
