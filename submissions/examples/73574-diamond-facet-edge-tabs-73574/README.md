# CSS Diamond Facet Edge Tabs

## Overview

Issue #73574 adds a pure CSS tabs and segmented-control component with faceted geometry inspired by cut gemstone edges.

## Features

- Four tab states
- Angled diamond-like edges
- CSS-only state switching
- Smooth transforms and transitions
- Dark-mode friendly surfaces
- Visible keyboard focus
- Responsive layout
- Reduced-motion support

## Implementation

Native radio inputs provide state, while sibling selectors reveal the matching panel. Pseudo-elements build the inner facet and active edge without external assets.

## Accessibility

Controls remain keyboard focusable and use visible labels. The reduced-motion media query removes decorative animation while preserving the selected content.

## Usage

Open `demo.html` in a modern browser. Replace the sample panel content with project-specific sections while retaining the radio and label relationship.

## Files

- `demo.html` — expanded tab demonstration
- `style.css` — faceted styling, transitions, responsiveness, and motion handling
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73574.
