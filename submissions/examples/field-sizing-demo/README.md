# CSS field-sizing: content Demo

This example demonstrates the modern, pure CSS solution for auto-growing and auto-expanding form fields without requiring JavaScript resize observers or custom height/width listeners.

## How It Works
The `field-sizing: content` property tells form controls to calculate their intrinsic dimensions based directly on the text currently typed inside them. 

* **`<textarea>`**: Automatically expands vertically to fit additional text lines.
* **`<input>`**: Automatically expands horizontally to match the text length.

## Constraints Used
To prevent inputs from completely breaking or collapsing when empty, this demo uses defensive CSS:
* `min-width` / `max-width` on the text input.
* `min-height` / `max-height` on the textarea.

## Key Benefits
* **Zero JavaScript**: Eliminates the overhead of `ResizeObserver` or manual `scrollHeight` logic.
* **Performance**: Browser-native rendering results in lag-free, perfectly timed resizing during active typing.