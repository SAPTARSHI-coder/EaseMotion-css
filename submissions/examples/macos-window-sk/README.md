# MacOS Style Window Layout Container

A layout container that styles its wrapper to look exactly like a native macOS application window.

## Files
- `demo.html`: The HTML structure for the window, titlebar, and content area.
- `style.css`: The CSS that draws the window frame and the traffic light buttons.
- `README.md`: This file.

## Features
- **Traffic Light Buttons:** Uses `::before` and `::after` pseudo-elements along with `box-shadow` on the titlebar to render the iconic red, yellow, and green buttons without requiring three separate `div` elements.
- **Realistic Shadows:** Applies a soft, wide drop shadow to mimic the native macOS window depth.
- **Highly Reusable:** The content area is completely unstyled, allowing you to drop code snippets, terminal logs, or images perfectly inside the frame.

## Usage
Wrap your content inside the `.macos-window` and `.macos-content` containers. The `.macos-titlebar` automatically handles the top buttons.
