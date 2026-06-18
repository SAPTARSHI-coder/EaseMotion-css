# @property Demo

## What does this do?
Demonstrates CSS `@property` for registering typed custom properties that can be smoothly animated.

## How is it used?
Define with `@property` in CSS:

    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

## Why is it useful?
Enables animation of custom properties that CSS would otherwise not interpolate.

## Tech Stack
- HTML
- CSS (@property)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
