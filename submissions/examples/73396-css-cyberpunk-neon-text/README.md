# CSS Cyberpunk Neon Text

## Overview

Issue #73396 demonstrates a cyberpunk-inspired text treatment using only HTML and vanilla CSS.

## Features

- Layered cyan and magenta neon glow
- Responsive display typography
- Hover and focus feedback on showcase cards
- Hardware-friendly opacity and filter animation
- Semantic, selectable text
- Reduced-motion support
- No JavaScript or external assets

## Implementation

The visual identity comes from multiple text-shadow layers and a restrained brightness animation. Cards use simple transforms and border transitions so the interaction remains lightweight.

## Accessibility

The text remains semantic HTML and is not replaced by generated content. Decorative animation is disabled when `prefers-reduced-motion: reduce` is enabled. The supporting content provides context without depending on the glow effect.

## Responsive behavior

The showcase grid becomes a single column on smaller screens, while headings use fluid `clamp()` sizing. Status information also stacks vertically on narrow layouts.

## Usage

Open `demo.html` in a browser. The component requires no build step and no external dependency.

## Files

- `demo.html` — semantic cyberpunk text showcase
- `style.css` — neon effects, layout, responsive rules, and motion handling
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73396.
