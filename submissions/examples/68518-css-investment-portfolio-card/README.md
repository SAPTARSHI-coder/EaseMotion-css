# CSS Investment Portfolio Card

## Overview

A responsive investment portfolio overview card for displaying total balance, annual performance, asset allocation, and individual holding groups.

## Features

- Portfolio balance summary
- Gain/loss indicator
- Animated performance chart
- Asset allocation visualization
- Equity, bond, crypto, and cash legend
- Holding detail rows
- Responsive mobile layout
- Visible keyboard focus state
- Reduced-motion support
- Pure HTML and CSS implementation

## Files

- `demo.html` — semantic portfolio structure and sample data
- `style.css` — layout, charts, allocation bars, interactions, animation, and responsive styling
- `README.md` — component documentation

## Usage

Open `demo.html` in a modern browser. No JavaScript, framework, package installation, or build process is required.

## Accessibility

The period control is a native button with a visible focus indicator. The allocation chart has an accessible description, while the decorative chart points remain non-semantic visual elements.

## Responsive Behavior

The card scales from a desktop dashboard presentation to a compact mobile layout. The allocation legend changes from four columns to two and then one column as available width decreases.

## Motion

The portfolio chart, allocation bars, and data points animate into place using CSS keyframes. Users who prefer reduced motion receive the same content without the animated transitions.

## Issue

EaseMotion CSS issue #68518.
