# Shape Outside Wrapping

## What it does

Demonstrates CSS `shape-outside` for magazine-style text wrapping. Five shape variants are shown as articles: circle, ellipse, polygon, an alternative star-like polygon, and a rounded rectangle (inset). Each shape floats the element and defines a wrapping contour using `shape-outside` with a matching `clip-path`, so the visible area and the wrapping boundary are identical.

## How to use it

Open `demo.html` in a browser that supports CSS Shapes (Chrome 37+, Firefox 62+, Safari 10.1+). Each section shows a different shape with floating elements and justified text. The coloured gradient shapes illustrate exactly where the wrapping boundary lies. On narrow viewports the floats collapse to a stacked layout.

## Why it fits EaseMotion CSS

Shape-based wrapping is a powerful layout technique that pairs naturally with animated reveal patterns — for instance, text that slides in behind a shape. This example complements the library's layout utilities by showing how `shape-outside`, `shape-margin`, and `clip-path` work together, enabling contributors to build richer, more editorial motion compositions.
