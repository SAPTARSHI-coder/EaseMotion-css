# Breadcrumb Arrow Slide

A breadcrumb navigation component with arrow separators and slide transitions.

## Preview

Breadcrumb items connected by arrow separators. Active step is highlighted. When navigating forward/backward, items slide in from the direction of travel with a translateX + opacity transition.

## Usage

Open `demo.html` in a browser. Use the **Back** and **Forward** buttons to navigate through breadcrumb levels.

## CSS Variables

| Variable                  | Description                    |
| ------------------------- | ------------------------------ |
| `--crumb-duration`        | Transition duration (default `0.35s`) |
| `--crumb-arrow-color`     | Arrow separator color          |
| `--crumb-active-color`    | Active breadcrumb item color   |
| `--crumb-inactive-color`  | Inactive breadcrumb item color |
| `--crumb-bg`              | Component background           |

## Features

- 5-step breadcrumb trail with arrow separators
- Forward/backward slide animation with translateX and opacity
- Active step highlight with distinct color
- Prev/next items fade/slide directionally
- Disabled state on boundary buttons
- Inter font, clean modern design
