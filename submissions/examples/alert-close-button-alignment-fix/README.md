# Alert Close Button Alignment Fix

## Description

This example fixes the issue where the alert close (`×`) button becomes top-aligned when the alert contains multiple lines of text. The close button now remains vertically centered regardless of the alert height.

## Features

- Vertically centered close button
- Supports multi-line alert messages
- Responsive layout
- Pure HTML & CSS
- Flexbox-based alignment

## Usage

```html
<div class="alert">
  <span class="alert-text">
    Your alert message goes here.
  </span>

  <button class="alert-close">&times;</button>
</div>
```

## Fix Applied

- Used Flexbox with `align-items: center`.
- Prevented the close button from shrinking using `flex-shrink: 0`.
- Kept the button centered for alerts of varying heights.
- Added responsive sizing for smaller screens.

## Files

- demo.html
- style.css
- README.md