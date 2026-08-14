# CSS Bouncing Spring Text

## Overview

Issue #73405 demonstrates a spring-like entrance for display text using a custom cubic-bezier curve and controlled overshoot.

## Features

- Spring-style entrance
- Scale and vertical overshoot
- Responsive typography
- Stable surrounding layout
- Reduced-motion support
- Pure HTML and vanilla CSS

## Implementation

The animation combines translate and scale values across several keyframe stages. The final state settles at the original scale so the component remains predictable after the entrance.

## Accessibility

The content is semantic HTML text. The motion is decorative and is disabled with `prefers-reduced-motion: reduce`.

## Usage

Open `demo.html` and reuse `.spring` for short headings. Adjust the keyframe distance or cubic-bezier curve in `style.css` when a softer or stronger spring is required.

## Files

- `demo.html` — expanded semantic demonstration
- `style.css` — spring animation, responsive layout, and motion handling
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73405.
