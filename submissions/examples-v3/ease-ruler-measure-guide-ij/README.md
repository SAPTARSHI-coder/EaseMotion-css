# Ruler Measure Guide

An on-screen measurement guide with horizontal and vertical rulers that slide in from the edges with animation. Tick marks are rendered via `repeating-linear-gradient`, and measurement lines snap to elements.

## Features

- Horizontal (top) and vertical (left) rulers
- Slide-in animation from edges
- Tick mark rendering via CSS gradients
- Measurement lines with labels
- Toggle visibility with controls

## Usage

Add two `.ruler` elements (one `.ruler-top`, one `.ruler-left`) at the page level. Toggle the `active` class to show/hide them with animation. Add `.measure-line` elements inside a canvas area with `.visible` class to display measurement guides.

## Custom Properties

| Property            | Default                  | Description              |
|---------------------|--------------------------|--------------------------|
| `--rmg-duration`    | `0.5s`                   | Ruler slide-in duration  |
| `--rmg-ruler-color` | `#2d2d44`                | Ruler bar background     |
| `--rmg-tick-color`  | `#6e6e73`                | Tick mark color          |
| `--rmg-label-color` | `#1d1d1f`                | Measurement label color  |
| `--rmg-bg`          | `rgba(245,245,247,0.95)` | Label background         |
