# CSS Card Wall Layout

## Overview

A responsive card wall built with CSS Grid. The wall demonstrates spanning cards, a taller feature card, consistent spacing, hover elevation, and a mobile layout that progressively reduces the number of columns.

## Features

- CSS Grid-based card wall
- Wide and tall card variants
- Responsive column changes
- Hover elevation and border feedback
- Keyboard focus styling for links
- Semantic article and link structure
- Reduced-motion support
- No JavaScript or external dependencies

## Files

- `demo.html` — twelve semantic project cards
- `style.css` — grid geometry, card styling, responsive rules, and motion preferences
- `README.md` — component documentation

## Usage

Open `demo.html` in a modern browser. The layout works without a build system or runtime dependency.

## Layout Behavior

Large screens use four columns. Tablet widths reduce the wall to three columns, while smaller screens use two columns and then a single column on very narrow displays. Wide cards and the tall card automatically lose their spans when a single-column layout is required.

## Accessibility

Project links remain native anchors and receive a visible focus ring. The visual hover movement is supplemental and does not carry essential information. Reduced-motion preferences disable transitions.

## Issue

EaseMotion CSS issue #70370.
