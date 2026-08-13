# CSS-only Avatar with Retro Styling

A nostalgic, 8-bit arcade-style avatar component built purely with HTML and CSS.

## Features
- Simulated 8-bit pixelated borders created entirely using layered CSS `box-shadow` properties (no images used for the frame)
- CSS filters applied to the avatar image (`image-rendering: pixelated`, `contrast`, `sepia`) to give modern photos a retro CRT feel
- A pure CSS pixel-grid overlay using repeating `linear-gradient` to simulate low-res screens
- Classic arcade "Player 1 vs Player 2" color schemes
- Offline state styling with greyscale filtering and classic blinking "INSERT COIN" animation using `steps()` timing functions
- 8-bit rigid jump animation on hover

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Press Start 2P` font is loaded in your `<head>`. You can modify the `--pixel-size` CSS variable to easily scale the thickness of the 8-bit borders.
