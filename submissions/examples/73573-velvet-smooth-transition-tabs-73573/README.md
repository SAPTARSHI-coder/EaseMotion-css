# CSS Velvet Smooth Transition Tabs

## Overview

Issue #73573 adds a pure CSS tabs and segmented-control pattern using a soft velvet-inspired surface and smooth state transitions.

## Features

- Four tab states
- CSS-only state switching
- Smooth active indicator
- Dark-mode friendly palette
- Keyboard-visible focus styling
- Responsive layout
- Reduced-motion support

## Implementation

Native radio inputs provide the state model. CSS sibling selectors and `:has()` position the active surface and reveal the matching panel without JavaScript.

## Accessibility

Each control has a visible label, focus-visible treatment, and readable contrast. Reduced-motion users receive the same content without animated transitions.

## Usage

Open `demo.html` in a modern browser. The tab labels and panels can be replaced with project-specific content while keeping the state structure intact.

## Files

- `demo.html` — expanded semantic tabs demonstration
- `style.css` — transition, responsive, and accessibility styling
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73573.
