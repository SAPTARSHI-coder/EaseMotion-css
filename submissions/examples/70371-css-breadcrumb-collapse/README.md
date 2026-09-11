# CSS Breadcrumb Collapse

## Overview

A responsive breadcrumb component that preserves the current page while allowing intermediate levels to collapse into a native disclosure control. The approach keeps the interaction accessible without JavaScript.

## Features

- Long breadcrumb hierarchy
- Collapsed intermediate path
- Native `details` and `summary` disclosure
- Keyboard-accessible expansion
- Visible focus states
- Responsive mobile layout
- Reduced-motion support
- Pure HTML and CSS

## Files

- `demo.html` — semantic breadcrumb navigation and disclosure content
- `style.css` — breadcrumb layout, disclosure styling, responsive behavior, and accessibility rules
- `README.md` — implementation documentation

## Usage

Open `demo.html` in a modern browser. The disclosure behavior is provided by native HTML, so no JavaScript is required.

## Accessibility

The breadcrumb is contained in a labeled navigation landmark. The current location uses `aria-current="page"`. The collapsed levels are inside a native `details` element, giving keyboard users a familiar disclosure interaction and avoiding a custom JavaScript control.

## Responsive Behavior

On wide screens, breadcrumb separators and links remain in a horizontal trail. On narrow screens, the hierarchy stacks vertically and the intermediate links can be expanded below the More control.

## Issue

EaseMotion CSS issue #70371.
