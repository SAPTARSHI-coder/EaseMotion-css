# Responsive SaaS Tab Bar

Issue #79679 adds a polished responsive tab bar with a modern SaaS visual language.

## Overview

This example focuses on a compact navigation pattern that stays readable on large screens and becomes touch-friendly on small screens. The component uses semantic navigation links, a clear active state, visible keyboard focus, and a layout that can collapse without JavaScript.

## Features

- Fully responsive tab navigation
- Modern SaaS spacing and surface treatment
- Clear active, hover, and focus-visible states
- Touch-friendly target sizing
- Semantic HTML navigation
- No JavaScript dependency
- Works with long labels and narrow screens
- Respects reduced-motion preferences

## Structure

- `demo.html` contains the accessible example and usage notes.
- `style.css` contains the component styling and responsive rules.

## Usage

1. Copy the navigation markup into the desired page.
2. Link `style.css` from the same directory.
3. Replace the sample href values with real application routes.
4. Keep the active class on the current route when server-rendering the navigation.

## Accessibility

The component uses real links rather than clickable generic elements. Focus-visible outlines remain visible for keyboard users, text remains readable against the surfaces, and the mobile layout keeps each navigation item comfortably tappable.

## Responsive behavior

At wider widths the tabs sit in one horizontal group. Below the mobile breakpoint they stack vertically, giving each link enough width for touch interaction while preserving the active-state hierarchy.

## Customization

Adjust the surface, accent, border, and text custom properties in `style.css` to match an existing product palette. The layout width and spacing are controlled in one place so the component can be reused without changing the markup.

## Issue

Created for EaseMotion-css issue #79679.
