# CSS Glassmorphism Blur Text

## Overview

Issue #73397 demonstrates a glassmorphism-inspired CSS text animation using transparency, blur, and layered depth.

## Features

- Frosted glass presentation
- Responsive typography
- Subtle blur animation
- Interactive showcase cards
- Semantic HTML
- Reduced-motion support
- No JavaScript or external assets

## Implementation

The effect combines translucent surfaces, `backdrop-filter`, restrained shadows, and a soft opacity transition. The text remains normal HTML content so it can be selected and read by assistive technology.

## Accessibility

The animation is decorative and is removed under `prefers-reduced-motion`. Supporting copy does not depend on the visual blur to communicate meaning.

## Responsive behavior

The three-column showcase and supporting fact grid collapse to one column on smaller screens. Heading sizes use `clamp()` to avoid oversized text on mobile devices.

## Usage

Open `demo.html` directly in a browser. No build process or JavaScript dependency is required.

## Files

- `demo.html` — glass text showcase
- `style.css` — glass surfaces, blur, animation, and responsive rules
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73397.
