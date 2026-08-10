# Card Grid Long Title Fix

## Description

This example demonstrates a solution for maintaining consistent card heights and alignment when card titles have different lengths. Long titles wrap naturally while preserving a clean and balanced grid layout.

## Features

- Equal-height cards
- Proper long title wrapping
- Consistent button alignment
- Responsive CSS Grid layout
- Pure HTML & CSS
- No JavaScript required

## Usage

```html
<div class="card-grid">
    <div class="card">
        <h2 class="card-title">Card Title</h2>
        <p>Description</p>
        <button>View</button>
    </div>
</div>
```

## Fix Applied

- Uses Flexbox inside each card.
- Adds a minimum height to the title section.
- Uses `margin-top: auto` to keep buttons aligned.
- Prevents layout breaking with long text using `overflow-wrap` and `word-break`.

## Files

- demo.html
- style.css
- README.md