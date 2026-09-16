# Interactive Input Field

## Overview

Issue #78790 demonstrates a responsive dark-mode input field with clear interaction states and accessible native controls.

## Features

- Dark interface styling
- Visible focus treatment
- Native input and select controls
- Responsive form layout
- Keyboard-friendly interaction
- Reduced-motion support

## Implementation

The component uses native form elements and CSS transitions for hover and focus feedback. No JavaScript is required for the visual interaction states.

## Accessibility

Labels are directly associated with their controls. Focus rings remain visible, and the checkbox uses the browser's native accessible interaction model.

## Usage

Open `demo.html` and reuse the `.field` pattern for additional controls. Keep labels visible so the component remains understandable when placeholders disappear.

## Files

- `demo.html` — form demonstration
- `style.css` — dark-mode styling and interaction states
- `README.md` — documentation

## Issue

EaseMotion CSS issue #78790.
