# Elastic Dropzone File Uploader

An interactive file uploader card utilizing spring-physics mimicking cubic-bezier scales and elastic rebounds when files are dragged or hovered over the drop area.

## What does this do?
This demo displays an interactive drag-and-drop file uploader area. As dragging events are detected over the dropzone, the card borders pulse, and the core icon scales up with elastic springs.

## How is it used?
1. Reference `style.css` in your HTML file.
2. Setup the dropzone elements:
   ```html
   <div class="dropzone-card">
     <div class="dropzone-area">...</div>
   </div>
   ```
3. Use JavaScript events (`dragover`, `dragleave`, `drop`) to toggle CSS states such as `.drag-active` which trigger animations.

## Why is it useful?
Using clean CSS transitions with elastic rebound effects during drag operations makes file upload flows feel active, modern, and engaging.
