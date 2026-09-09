# CSS Animated Menu Icon Set

## Overview

A dependency-free set of five animated interface icons for common navigation actions: home, user, settings, notifications, and search. The visual icons are drawn with CSS pseudo-elements and respond to hover and keyboard focus without JavaScript.

## Features

- Five reusable icon patterns
- Pure HTML and CSS
- Hover and focus motion
- Semantic buttons with accessible labels
- Responsive icon grid
- Visible keyboard focus states
- Reduced-motion support
- No external assets or dependencies

## Files

- `demo.html` — semantic showcase and accessible controls
- `style.css` — icon construction, motion, layout, responsive rules, and accessibility styles
- `README.md` — component documentation

## Usage

Open `demo.html` directly in a modern browser. The icons are implemented as CSS shapes, so there are no image files, icon libraries, JavaScript bundles, or build tools required.

## Accessibility

Each icon is presented inside a native `button` with an explicit accessible label. Decorative icon shapes are hidden from assistive technology with `aria-hidden`. Keyboard users can reach every example with Tab and receive a strong visible focus indicator.

## Motion

Hover and focus states enlarge the icon and lift the card to provide clear feedback. Users who request reduced motion through their operating-system preferences receive an effectively static presentation.

## Responsive Behavior

The five-card layout uses five columns on large screens, three columns at tablet widths, and two columns on narrow mobile screens. Spacing and card dimensions are reduced at the smallest breakpoint.

## Issue

EaseMotion CSS issue #70362.
