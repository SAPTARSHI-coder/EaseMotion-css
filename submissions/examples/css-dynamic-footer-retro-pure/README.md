# Dynamic Retro Arcade Footer

A pure CSS footer component featuring an 8-bit, retro arcade aesthetic. 

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Retro Aesthetic**: Uses the Google Font `Press Start 2P` for classic 8-bit typography. 
- **Neon Colors**: High contrast neon pinks, blues, and yellows on a dark background, typical of 80s arcade UI.
- **CRT Scanlines**: An absolutely positioned overlay over the footer creates a subtle CRT monitor scanline effect using `linear-gradient` backgrounds.
- **Pixel Animations**:
  - Blinking text (`INSERT COIN` style).
  - Hover "glitch" or step animations on links (`steps(2)` for choppy, non-smooth transitions typical of low framerate retro games).
  - Pixelated box-shadows on buttons that press down smoothly.

## Usage
Open `demo.html` in your browser. Scroll down past the mock content to reveal the retro arcade footer. Hover over the links and the social buttons to see the hover effects.

## Files
- `demo.html`: The HTML structure containing a mock hero section to allow scrolling, and the footer itself.
- `style.css`: The styling, variables, animations, and typography for the retro effect.
