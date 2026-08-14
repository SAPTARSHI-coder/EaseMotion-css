# CSS Pomodoro Timer

## Overview

A responsive Pomodoro timer interface with a circular progress presentation and four-stage focus rhythm.

## Features

- Circular timer presentation
- Focus and break phase cards
- Responsive layout
- Keyboard focus states on controls
- CSS-only visual motion
- Reduced-motion support
- No external dependencies

## Files

- `demo.html` — timer structure and phase information
- `style.css` — dial, controls, responsive layout, and animation styles

## Note

This issue asks for a CSS demonstration. The visible timer value is intentionally presented as a visual state rather than implemented as a real-time JavaScript countdown.

## Accessibility

Controls use semantic buttons and visible focus outlines. The interface remains understandable without animation, and `prefers-reduced-motion` disables decorative motion.

## Issue

EaseMotion CSS issue #68573.
