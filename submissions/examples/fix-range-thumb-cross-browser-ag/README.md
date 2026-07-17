# Fix ease-range Thumb Cross-Browser Consistency

## What does this do?
Adds `::-moz-range-thumb` and `::-moz-range-track` rules so the range
slider thumb looks identical in Firefox, Chrome, and Safari.

## How is it used?
```html
<input class="ease-range" type="range" min="0" max="100" value="50">
```

## Why is it useful?
Without Firefox-specific vendor prefix selectors, the slider thumb
uses the OS default in Firefox — visually inconsistent with Chrome/Safari.
Fixes: #35785
