# Tabs Navigation Overflow Fix

## Description

This example fixes the issue where tab navigation overflows on small screens. Instead of extending beyond the viewport, the tabs become horizontally scrollable, ensuring every tab remains accessible.

## Features

- Responsive tabs navigation
- Horizontal scrolling on smaller screens
- Active tab styling
- Pure HTML & CSS
- Lightweight and reusable

## Usage

```html
<div class="tabs">
  <button class="tab active">Overview</button>
  <button class="tab">Features</button>
  <button class="tab">Pricing</button>
</div>
```

## Fix Applied

- Added `overflow-x: auto` to the tabs container.
- Prevented tab items from shrinking using `flex: 0 0 auto`.
- Added a thin horizontal scrollbar for better usability.
- Preserved responsive spacing and active tab styling.

## Files

- demo.html
- style.css
- README.md