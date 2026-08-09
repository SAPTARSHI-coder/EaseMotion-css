# CSS Custom Video Controls

A sleek, custom-styled video controls overlay that elegantly reveals on hover, built entirely with CSS. 

*Note: While the UI overlay, hover reveals, and button states are pure CSS, linking these custom buttons to actual HTML5 video playback functionality (`video.play()`, `video.volume`) requires a few lines of standard JavaScript.*

## Features
- **Hover Reveal Animation**: The control bar slides up elegantly into view only when the user hovers over the video container, ensuring an unobstructed viewing experience.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--player-bg`, `--icon-hover`) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Custom Input Range Overlays (Documented in Code)**: 
- Standard HTML `<input type="range">` sliders look drastically different across browsers.
- This component demonstrates how to use CSS to hide the native input appearance and overlay a sleek, custom-colored progress bar beneath it.
- **Checkbox UI State Hacks**: 
- Using a hidden `<input type="checkbox">`, the Play/Pause button can physically toggle between two different SVG icons purely in CSS, demonstrating state management without JS.
- **Hover-Expand Volume Slider**: The volume slider is initially hidden (`width: 0`). Hovering over the volume icon expands the slider smoothly, saving space on the control bar.
- Fully accessible with `prefers-reduced-motion` support. The sliding animations are disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. You will see a video playing silently in a loop. Hover your mouse anywhere over the video to reveal the custom control bar. Try hovering over the Volume icon to see the sleek slider reveal, and click the Play/Pause button to see the icons toggle instantly.

## Files
- `demo.html`: The HTML structure for the video player overlay, including the SVG icons and Checkbox state hack.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `<input type="range">` reset techniques.
