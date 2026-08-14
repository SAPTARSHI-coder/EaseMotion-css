# CSS Swipeable Tab Bar

## Overview

A mobile-first horizontal tab bar implemented with semantic links and CSS scrolling primitives.

## Features

- Pure HTML and CSS
- Horizontal overflow for touch devices
- Scroll snapping
- Clear active state
- Keyboard-visible focus state
- Responsive layouts
- Reduced-motion support
- No external dependencies

## Files

- `demo.html` — semantic navigation and example sections
- `style.css` — layout, interaction styling, responsive rules, and accessibility behavior

## Usage

Open `demo.html` in a modern browser. Swipe or horizontally scroll the tab row on smaller screens. Each tab is a normal anchor and therefore remains usable with keyboard navigation and assistive technology.

## Accessibility

The navigation uses a labelled `nav`, real links, `aria-current` for the active destination, and `:focus-visible` styling. Decorative icons are hidden from assistive technology. Reduced-motion preferences disable unnecessary transitions and smooth scrolling.

## Issue

EaseMotion CSS issue #68547.
