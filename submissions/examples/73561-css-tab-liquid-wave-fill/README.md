# CSS Liquid Wave Fill Tabs

## Overview

EaseMotion issue #73561 demonstrates a liquid-filled segmented navigation pattern using semantic links and vanilla CSS. The active tab receives a flowing wave surface that creates depth without JavaScript.

## Features

- Pure HTML and vanilla CSS
- Liquid wave keyframe animation
- Active-state emphasis
- Dark-mode-friendly colors
- Responsive mobile layout
- Visible keyboard focus styling
- Reduced-motion support
- No external dependencies

## Implementation

The active tab owns a decorative `.wave` layer. Two oversized pseudo-elements move in opposite directions to create a gentle water-like surface. Because the wave is decorative, the text remains directly in the link and is never dependent on the animation.

## Accessibility

Navigation uses regular links so it remains usable with keyboards and assistive technology. Focus-visible styling provides a clear keyboard indicator. The animation is disabled when the user prefers reduced motion.

## Files

- `demo.html` — navigation structure and content examples
- `style.css` — liquid animation, active state, layout, responsive rules, and accessibility styling
- `README.md` — implementation documentation

## Usage

Open `demo.html` in a modern browser. No build tools or package installation are needed.

## Issue

EaseMotion CSS issue #73561.
