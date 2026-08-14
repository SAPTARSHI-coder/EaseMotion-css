# CSS Synthwave Grid Line Navigation

## Overview

Issue #73336 implements a pure CSS navigation using a synthwave grid line visual language.

## Features

- Semantic navigation links
- Neon gradient treatment
- Perspective grid decoration
- Hover and keyboard focus states
- Responsive layout
- Reduced-motion support
- No external JavaScript

## Implementation

The navigation uses repeating linear gradients for the grid and CSS transitions for interaction. The grid is decorative, while links remain standard anchors so browser navigation and keyboard behavior stay intact.

## Accessibility

Visible focus styles are provided with `:focus-visible`. The decorative animation is disabled for users who prefer reduced motion.

## Usage

Open `demo.html` in a modern browser. Copy the `.nav` structure and adjust the gradient variables in `style.css` to integrate the navigation into another page.

## Files

- `demo.html` — semantic navigation example
- `style.css` — synthwave visuals, interaction states, and responsive rules
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73336.
