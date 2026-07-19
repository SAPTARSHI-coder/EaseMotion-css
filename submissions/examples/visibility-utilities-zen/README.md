# Visibility Utilities

CSS utility classes for controlling element visibility.

## Classes

- `.visible` — `visibility: visible`
- `.invisible` — `visibility: hidden`

## Why

The `.invisible` class hides an element visually while preserving its space in the layout, unlike `display: none` which removes the element from the flow. This is useful for toggle visibility without layout shifts, accessible hiding patterns, and preserving element dimensions during transitions.
