# CSS Laser Ray Trace Card

## Overview

Issue #73270 demonstrates a dark card component with a moving laser-like trace around its perimeter.

## Features

- Pure HTML and Vanilla CSS
- Animated perimeter trace
- Dark-mode friendly surface
- Hardware-friendly transform animation
- Responsive card layout
- Keyboard-visible focus states
- Reduced-motion support

## Implementation

The trace is created with pseudo-elements and a small number of animated dimensions. The card content remains separate from the decorative layer so the effect does not affect document flow.

## Accessibility

The card content uses semantic headings, paragraphs, and native links. The decorative trace is hidden from assistive technology, and the animation is disabled when the user prefers reduced motion.

## Usage

Open `demo.html` and reuse the `.laser-card` pattern for product cards, feature panels, portfolio items, or other compact surfaces. The `--laser` custom property can be changed to create different trace variations.

## Files

- `demo.html` — expanded semantic demonstration
- `style.css` — laser trace, responsive layout, and motion handling
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73270.
