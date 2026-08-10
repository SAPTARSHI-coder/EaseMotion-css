# Pure CSS iOS-Style Segmented Control

## Description
This submission resolves Issue #68958 by introducing a pure CSS iOS-style segmented control (radio button group) with a sliding highlight pill. 

## Features
- Completely CSS-based, no JavaScript required.
- Uses CSS Grid for perfect equal-width spacing of the segments.
- Uses hidden `<input type="radio">` buttons to maintain native HTML form accessibility and state.
- The highlighted pill utilizes the general sibling combinator (`~`) and `transform: translateX()` to slide smoothly into place based on which radio is `:checked`.
- Dynamically scales based on the `--segment-count` CSS variable.

## Usage
Simply structure your HTML so that the radio inputs are defined first, followed by the labels, and ending with the `.ease-segmented-highlight` pill. Set the `--segment-count` variable on the wrapper to match the number of options you have. Click the labels to see the pill slide elegantly behind the text.
