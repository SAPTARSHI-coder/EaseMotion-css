# CSS Image Preview Overlay

A full-screen click-to-expand image lightbox with zoom animations, built entirely without JavaScript using the hidden checkbox trick.

## Features
- Pure CSS and HTML implementation without any JavaScript listeners.
- **Component Architecture**: 
  - **The Controller Trick**: The core logic relies on a visually hidden `<input type="checkbox" class="lightbox-toggle">`. 
  - **The Thumbnail**: The image thumbnail is wrapped in a `<label>` linked to the checkbox. Clicking the thumbnail checks the box.
  - **The Overlay**: The `.lightbox-overlay` is a fixed, full-screen container that is hidden by default using `opacity: 0; visibility: hidden; pointer-events: none;`. Inside, it contains the high-res image and additional `<label>` elements acting as close buttons (the dark background itself, and an X icon), which uncheck the box when clicked.
  - **The CSS Logic**: When the hidden checkbox is checked, the CSS general sibling combinator targets the overlay (`.lightbox-toggle:checked ~ .lightbox-overlay`) and flips it to `opacity: 1; visibility: visible`.
  - **Zoom Animation**: A `transform: scale(0.9)` is applied to the image container by default. When the overlay is triggered, it scales to `transform: scale(1)`, creating a smooth zoom-in effect powered by a `cubic-bezier` transition.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the background and text colors of the gallery view.
- Fully accessible semantic structure. The hidden checkbox remains focusable for keyboard users (`tab`), and the labels include proper `aria-label` tags for screen reader context.

## Usage
Open `demo.html` in your browser. Click the image thumbnail to expand the high-resolution preview overlay. Click the dark background or the X icon to close it.

## Files
- `demo.html`: The HTML structure defining the hidden checkbox, the thumbnail label, and the fullscreen overlay container.
- `style.css`: The styling, the `:checked` state logic, and the CSS scaling animations.
