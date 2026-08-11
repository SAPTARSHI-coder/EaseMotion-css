# CSS-Only Before/After Image Comparison Slider

## Description
This submission resolves Issue #68954 by introducing a pure CSS before-and-after image comparison slider. The slider utilizes the CSS `resize` property on a wrapper element to allow dragging and resizing without any JavaScript event listeners.

## Features
- Pure CSS implementation, no JavaScript required.
- Uses `resize: horizontal` coupled with `overflow: hidden` to reveal or hide the before image.
- Both "before" and "after" images are perfectly aligned by locking the `background-size` across layers.
- Custom pseudo-element acts as a visual drag indicator in the bottom-right corner.

## Usage
Simply hover over the center of the image and drag the handle left and right. The images will flawlessly slide over one another.

### Configuration
Pass the image URLs using CSS variables directly on the `.ease-image-compare` wrapper:
- `--ease-compare-before`: The "Before" image URL
- `--ease-compare-after`: The "After" image URL
