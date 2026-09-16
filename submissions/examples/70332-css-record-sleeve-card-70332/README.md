# CSS Record Sleeve Card

## Overview

Issue #70332 presents an album-inspired card styled as a printed record sleeve with a CSS-built vinyl record.

## Features

- Pure HTML and vanilla CSS
- CSS radial-gradient record artwork
- Decorative vinyl rotation
- Responsive card layout
- Keyboard-visible interaction
- Reduced-motion support

## Implementation

The record is constructed from layered radial gradients and pseudo-elements. The sleeve uses gradients, borders, and shadows to create a tactile printed surface without external assets.

## Accessibility

The card content uses semantic headings and a real link. The rotating record is decorative and stops under `prefers-reduced-motion: reduce`.

## Files

- `demo.html` — complete card demonstration
- `style.css` — record artwork and responsive layout
- `README.md` — implementation notes

## Issue

EaseMotion CSS issue #70332.
