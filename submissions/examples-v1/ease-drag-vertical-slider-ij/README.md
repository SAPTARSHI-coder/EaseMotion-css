# Drag Vertical Slider

A vertical slider controlled by mouse drag. CSS handles the fill height and thumb position via the `--slider-val` custom property (0 to 1).

## Features

- Vertical drag interaction to set a value
- Fill height and thumb position driven by `--slider-val` CSS variable
- Gradient fill from accent to yellow
- Grab cursor on thumb
- Value display updates in real-time

## Usage

Include `style.css` and structure with `.slider-track`, `.slider-fill`, and `.slider-thumb`. JS calculates `--slider-val` from mouse Y position. CSS transitions the fill and thumb.
