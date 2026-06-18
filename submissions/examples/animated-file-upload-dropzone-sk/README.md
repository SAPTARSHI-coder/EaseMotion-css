# Animated File Upload Dropzone

A CSS-only file upload dropzone with a dashed border, hover states, file icon with inline SVG, and a "browse" link. Simulated drag-state styling is included via the `.upload__dropzone--drag` modifier. Created by @saurabhhhcodes.

## Features

- Pure CSS dropzone (no JavaScript)
- Interactive hover state with border color & background tint
- Forward/upload SVG icon
- "Browse files" link prompt
- Drag state styling via BEM modifier
- BEM naming throughout

## Usage

Include `style.css` and the demo HTML structure. The dropzone is built with a `<label>` wrapping a hidden `<input type="file">`. The `.upload__dropzone--drag` class can be toggled server-side for visual drag feedback.
