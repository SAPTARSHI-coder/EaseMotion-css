# CSS-Only Gauge Meter

## Overview

A responsive speedometer-style gauge implemented entirely with HTML and CSS. The component uses layered gradients, a tick-mark ring, a moving needle, a central hub, and a compact legend to communicate a percentage-style reading without JavaScript.

## Features

- CSS-only gauge visualization
- Conic-gradient dial with multiple value zones
- Repeating tick-mark scale
- Animated needle sweep
- Central mechanical hub
- Numeric readout and unit label
- Low, mid, and high scale indicators
- Responsive gauge sizing
- Responsive supporting detail cards
- Reduced-motion support
- No JavaScript or external dependencies

## Component Structure

The gauge is assembled from independent HTML elements. The dial provides the base scale, the ticks create the measurement marks, and the needle communicates the current reading. The hub visually anchors the needle while the readout supplies a textual representation of the value.

The supporting cards explain the component's visual zones and make the demo useful as a reusable reference rather than only a decorative animation.

## Files

- `demo.html` — semantic gauge structure, labels, legend, and supporting content
- `style.css` — dial construction, needle animation, responsive layout, and accessibility rules
- `README.md` — component documentation

## Usage

Open `demo.html` in a modern browser. No build step, package installation, JavaScript, or external dependency is required.

## Accessibility

The gauge includes descriptive text alongside its visual representation so the information is not communicated by color alone. The component also respects `prefers-reduced-motion` by minimizing the needle animation and interactive transitions.

## Responsive Behavior

The gauge scales with the available viewport while retaining its circular aspect ratio. The supporting detail grid changes from four columns to two columns and finally to one column on smaller screens.

## Issue

EaseMotion CSS issue #68284.
