# CSS Neumorphic Soft Shadow Text

## Overview

Issue #73398 demonstrates tactile text styling through paired light and dark shadows on a soft surface.

## Features

- Neumorphic shadow hierarchy
- Responsive display typography
- Subtle elevation animation
- Semantic text
- Reduced-motion support
- No JavaScript or external assets

## Implementation

The component uses opposing `text-shadow` layers and matching surface shadows to create the raised appearance. Small transforms provide movement without changing document flow.

## Accessibility

The visual treatment is applied to semantic HTML. Reduced-motion preferences disable animation while leaving the complete text content visible.

## Responsive behavior

Cards and supporting fact blocks collapse into a single column on smaller screens, and headings use fluid sizing.

## Files

- `demo.html` — neumorphic text showcase
- `style.css` — shadow, layout, animation, and responsive styling
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73398.
