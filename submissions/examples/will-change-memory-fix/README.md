# Will-Change Memory Optimization

A critical performance architecture pattern demonstrating how to properly utilize the CSS `will-change` property without causing severe VRAM memory leaks or browser crashes on low-end devices.

## Features
- **The Bug Context**: The `will-change` property is a hint to the browser's rendering engine that an element is going to be animated. The browser responds by immediately promoting that element to its own hardware-accelerated compositor layer on the GPU (consuming VRAM). Many developers erroneously apply `will-change: transform` universally to all list items or buttons in a UI. If a page has 500 interactive list items, the browser suddenly attempts to allocate 500 GPU layers on page load, which drastically throttles performance and crashes low-end mobile devices (OOM - Out of Memory).
- **The Fix**: "Lazy Allocation". The `will-change` property is designed to be applied *just before* an animation happens, and removed when finished. In CSS, the best proxy for "about to animate" is the `:hover` pseudo-class (for scale/translate effects) or applying it via a parent `.is-animating` class. By moving `will-change` into the `:hover` state, we ensure that the browser only allocates VRAM for the 1 specific element the user is actively engaging with, completely fixing the memory leak.

## Usage
Open `demo.html` in your browser. 
- Look at the **Buggy** side. If you were to inspect this in Chrome DevTools > Rendering > Layer Borders, you would see that every single buggy element has an orange border permanently drawn around it, signifying a permanent GPU layer allocation.
- Look at the **Fixed** side. The GPU layer is only created dynamically the moment your mouse enters the element's bounding box, and is released when you leave.

## Files
- `demo.html`: The HTML structure demonstrating the side-by-side comparison of list items.
- `style.css`: The styling engine containing the optimized `:hover` state memory allocation.
