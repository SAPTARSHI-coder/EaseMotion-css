# CSS Cyberpunk Glitch Header

## Overview

A pure CSS header with RGB channel separation, scan-inspired decoration, neon accents, and controlled glitch motion.

## Features

- RGB split effect using pseudo-elements
- Glitch timing with CSS keyframes
- Neon cyan and magenta treatment
- Responsive typography
- Keyboard-visible focus states
- Reduced-motion support
- No JavaScript or external assets

## Files

- `demo.html` — semantic header, actions, and supporting content
- `style.css` — visual effects, animation, responsive rules, and accessibility styling

## Accessibility

The actual heading text remains semantic HTML while decorative channel layers are generated with CSS. Links have visible `:focus-visible` outlines, and reduced-motion preferences disable the glitch animation.

## Usage

Open `demo.html` in a modern browser. The component works without a build step or dependency installation.

## Issue

EaseMotion CSS issue #68570.
