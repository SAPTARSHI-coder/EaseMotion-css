# CSS Live Data Feed

## Overview

A simulated live activity feed where the newest record enters from the top. The example demonstrates how a small amount of CSS motion can make changing content feel immediate while keeping every record as normal HTML.

## Features

- New-item entrance animation
- Live status indicator
- Avatar and activity metadata
- Responsive feed rows
- Reduced-motion support
- Pure HTML and CSS
- No JavaScript or external dependencies

## Files

- `demo.html` — activity feed structure and content
- `style.css` — feed layout, entrance animation, responsive behavior, and motion preferences
- `README.md` — implementation notes

## Usage

Open `demo.html` in a modern browser. The example is intentionally static so it can demonstrate the visual treatment without pretending that CSS alone is receiving network data.

## Accessibility

The feed uses ordinary headings, paragraphs, timestamps, and text labels. The animation is not required to understand any record. Reduced-motion preferences disable the entrance animation and status pulse.

## Responsive Behavior

Feed rows use a three-column arrangement on larger screens and move the category tag below the record content on small screens. Supporting explanation cards collapse into one column for mobile.

## Issue

EaseMotion CSS issue #70368.
