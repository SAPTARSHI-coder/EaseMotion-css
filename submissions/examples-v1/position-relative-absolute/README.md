# Position Relative &amp; Absolute

## Overview

Demonstrates how `position: relative` on a parent container establishes a positioning anchor, allowing child elements with `position: absolute` to be placed precisely using `top`, `right`, `bottom`, and `left` offsets. The example also covers z-index layering and a common overlay/card badge pattern.

## Key Concepts

- **Positioning anchor**: `position: relative` on a container creates a new containing block for absolutely positioned descendants without moving the container itself.
- **Offset properties**: `top`, `right`, `bottom`, `left` position an absolutely positioned element relative to its nearest positioned ancestor.
- **Centering trick**: Combining `top: 50%; left: 50%` with `transform: translate(-50%, -50%)` perfectly centers an absolutely positioned element.
- **Z-index layering**: Stacking order within a positioned container is controlled with `z-index`; higher values appear on top.
- **Real-world pattern**: Badge and label overlays on cards/images use absolute positioning inside a relative container.

## Usage

Open `demo.html` in a browser. Observe how the colored boxes are pinned to each corner and center of the stage. The layered example shows overlapping boxes with increasing z-index. The card section illustrates a typical badge + caption overlay.
