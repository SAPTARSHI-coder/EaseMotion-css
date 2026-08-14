# Backdrop Brightness Contrast

Demonstrates the `backdrop-filter` CSS property with `brightness()` and `contrast()` filter functions. An interactive photo-editing-style interface lets users adjust both values via sliders or select from presets, with real-time visual feedback on a gradient "photograph."

## Usage

Open `demo.html` in a browser. Drag the brightness and contrast sliders (0–200%) to see the backdrop-filter adjust in real time. Click preset buttons for quick transformations: Normal, Vibrant, High Contrast, Faded, and Dramatic.

## Notes

- `backdrop-filter` applies filters to the area behind an element, unlike `filter` which applies to the element itself.
- The overlay uses `pointer-events: none` so slider interactions pass through to the underlying controls.
- `-webkit-backdrop-filter` is included for Safari/older Chromium compatibility.
