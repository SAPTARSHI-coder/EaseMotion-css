# Stacked Toast Notifications Layout

## Description
This submission resolves Issue #68975 by implementing a modern, stacked toast notification layout natively in CSS. It automatically positions and styles incoming toasts so that the newest is displayed prominently on top, while older toasts visually recede backwards in the z-axis using CSS scale and translate transformations.

## Features
- Pure CSS 3D depth stack effect.
- Uses structural pseudo-classes (`:nth-last-child()`) to automatically style elements based on their position in the DOM.
- No JavaScript logic needed for the layout itself (JS is only used to append or remove elements in the demo).
- Smooth transitions for `transform` and `opacity`.
- Older notifications gracefully fade and shrink into the background before disappearing.

## Usage
Create a container element with the `.ease-toast-container` class, and append new notifications as `.ease-toast` elements at the end of the container. 

```html
<div class="ease-toast-container">
  <div class="ease-toast">Notification 1 (Oldest)</div>
  <div class="ease-toast">Notification 2</div>
  <div class="ease-toast">Notification 3 (Newest)</div>
</div>
```

The newest element (the last child) will automatically be styled to stay at the front.
