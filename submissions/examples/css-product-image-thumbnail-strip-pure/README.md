# CSS Product Image Thumbnail Strip

A pure CSS interactive image gallery using hidden radio buttons to synchronize a sliding main viewport with a scrollable horizontal thumbnail strip, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or sliding animations).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI.
- **Component Architecture (Documented in Code)**: 
  - **The Radio Hack**: We place 5 hidden `<input type="radio">` elements at the top of the gallery container. Both the main viewport and the thumbnail strip react to the `:checked` state of these radios using the general sibling selector (`~`).
  - **Main Viewport Slider**: The `.viewport-slider` is set to `500%` width (containing 5 images, each at `100%` width of the parent). When a radio button is checked, a CSS transform slides the container horizontally (e.g., `#img-2:checked ~ .gallery-viewport .viewport-slider { transform: translateX(-20%); }`).
  - **Active Thumbnail Highlight**: The thumbnails are actually `<label>` elements linked to the hidden radios via the `for` attribute. Clicking a thumbnail checks the corresponding radio. The CSS then detects which radio is checked and highlights the correct `<label>` below it by changing its border color and opacity.
- Fully accessible semantic structure. Screen readers are instructed to ignore the hidden state radios via `aria-hidden="true"`, interacting directly with the styled `<label>` buttons, which feature `role="tab"` and `tabindex="0"` for keyboard navigation. Honors the `prefers-reduced-motion` accessibility standard by disabling the sliding transitions in favor of instantaneous swaps for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the thumbnails in the bottom strip to watch the main image viewport slide to the correct position, while the active thumbnail highlights.

## Files
- `demo.html`: The HTML structure containing the hidden radio state inputs, the main viewport slider, and the scrollable thumbnail labels.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:checked ~` state transition logic.
