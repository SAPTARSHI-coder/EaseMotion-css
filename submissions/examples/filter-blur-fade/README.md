# Filter Blur Fade &amp; Glassmorphism

Explores `backdrop-filter` blur for glassmorphism panels with fade transitions. Demonstrates blur intensity levels, hover-triggered transitions, content readability, and glass variant styles.

## Blur &amp; Glass Effects

`backdrop-filter: blur(radius)` applies a Gaussian blur to the area behind an element, creating frosted-glass transparency. Lighter blur (2px) maintains background detail; heavy blur (30px) washes it into soft color. Combining blur with opacity and saturation transitions produces dynamic glass effects where panels sharpen or blur further on hover.

## Usage

Open `demo.html` in a modern browser (Chromium or Safari for `backdrop-filter` support). Each panel sits over a multi-radial-gradient background. Hover over transition panels to see blur, opacity, and saturation animate. The readability showcase demonstrates how text remains crisp on a blurred gradient background. Edit blur radii, transition durations, or tint colors in `style.css`.
