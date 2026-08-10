# Timeline Connector Alignment Fix

## Description

This example fixes the timeline connector alignment issue when timeline items have different content heights. The connector remains perfectly aligned between all timeline markers.

## Features

- Proper connector alignment
- Supports variable content heights
- Responsive layout
- Pure HTML & CSS
- Clean vertical timeline

## Usage

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="marker"></div>
    <div class="content">
      Timeline content
    </div>
  </div>
</div>
```

## Fix Applied

- Added a single vertical connector using a timeline pseudo-element.
- Kept markers aligned with Flexbox.
- Prevented connector gaps for cards of different heights.
- Responsive on desktop and mobile.

## Files

- demo.html
- style.css
- README.md