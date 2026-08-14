# Split View Comparison Panel Transition

## Overview

A code review style split view comparing a "Before" and "After" version of a function, where focusing either side smoothly resizes both panels instead of snapping between layouts. It solves the production problem of comparing two related pieces of content, code, specs, or document versions, without losing sight of the other side. Coordinated panel transitions preserve context by keeping both panels visible and readable throughout the resize, so users never lose their place mid-comparison. Implemented entirely with HTML and CSS, no JavaScript.

## Features

- Responsive split view with left ("Before") and right ("After") panels
- Realistic code comparison content with added/removed line highlighting
- Three CSS-only view states: balanced, left-focused, right-focused
- Radio-button controlled focus with clearly highlighted active control
- Animated width, spacing, opacity and shadow emphasis on focus change
- De-emphasized inactive panel without hiding its content
- Layout stays stable and both panels remain readable during transitions
- CSS custom properties for spacing, duration, easing and color
- Fully responsive with a stacked, single-column mobile layout

## File Structure

- demo.html
- style.css
- README.md

## How It Works

- **Split layout**: two flex panels of equal width by default, separated by a thin divider
- **Focus controls**: three hidden radio inputs sharing a `name`, paired with labels styled as a segmented control
- **Panel transitions**: `:checked` on a given radio, combined with sibling combinators, increases the matching panel's `flex-grow` while shrinking, dimming and slightly scaling down the other
- **CSS-only interaction**: radios and labels handle all state changes, no scripting involved
- **Responsive behavior**: below the split breakpoint, panels stack vertically and focus states reset to equal size so content stays fully readable on small screens

## Example Use Cases

- Code review platforms
- File comparison tools
- Product comparison pages
- Analytics dashboards
- Document comparison interfaces

## Why This Example?

Abrupt layout changes, panels that jump to a new size with no transition, make it hard to track what changed and where to look next. Smooth panel transitions keep both sides visually connected as focus shifts, which directly improves comparison workflows where users move back and forth between two versions. This fits EaseMotion CSS as a focused example of coordinated, context-preserving motion across two regions, and it is production-inspired because focus-driven split views are a common pattern in code review and comparison tooling.
