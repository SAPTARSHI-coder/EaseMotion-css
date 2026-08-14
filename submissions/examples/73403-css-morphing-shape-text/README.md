# CSS Morphing Shape Text

## Overview

Issue #73403 demonstrates a fluid typographic morph using transform and spacing changes with no JavaScript.

## Features

- Organic scale and skew transition
- Controlled easing curve
- Responsive display sizes
- Stable surrounding layout
- Reduced-motion support
- Pure HTML and vanilla CSS

## Implementation

The `.morph` class changes scale, skew, and letter spacing around the center of the text. Because the element is transformed rather than reflowed, surrounding content remains stable.

## Accessibility

The content is semantic HTML text. The animation is decorative and is disabled with `prefers-reduced-motion: reduce`.

## Usage

Open `demo.html` and reuse `.morph` for short display headings. Keep animated phrases concise so the transformation remains easy to follow.

## Files

- `demo.html` — semantic examples
- `style.css` — morph animation and responsive rules
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73403.
