# CSS Origami Paper Fold Buttons

## Overview

Issue #73254 adds a pure CSS button family inspired by folded paper and origami surfaces.

## Features

- Primary, secondary, and compact variants
- Folded-corner pseudo-elements
- Hover and press depth
- Keyboard-visible focus
- Responsive layout
- Reduced-motion support
- Native HTML buttons

## Implementation

The paper folds are created with clipped pseudo-elements. Transform and box-shadow changes provide tactile hover and press feedback without changing document layout.

## Accessibility

Native `button` elements preserve keyboard and interaction behavior. `:focus-visible` provides a clear focus ring, while reduced-motion preferences remove decorative transitions.

## Usage

Open `demo.html` and reuse the `.origami` class with the appropriate variant. Change the accent and paper variables in `style.css` to match an existing interface.

## Files

- `demo.html` — expanded button examples
- `style.css` — fold geometry, interaction states, and responsive rules
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73254.
