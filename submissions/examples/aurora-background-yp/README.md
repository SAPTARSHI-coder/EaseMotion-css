# Aurora Background Demo (CSS-Only)

## Overview
A premium, **CSS-only** aurora background effect combined with an interactive starry night and scroll parallax. The design features a deep night sky blending into a vibrant green aurora, a glass-morphism hero card, and works in all modern browsers.

## Features
- **Starry Night Background**: A pure CSS starry sky using `radial-gradient`.
- **Dynamic Aurora**: Smooth, sweeping green/teal aurora effects utilizing `mix-blend-mode` and CSS keyframes.
- **Interactive Parallax**: A lightweight JavaScript snippet adds mouse movement and scroll-based parallax, causing the aurora light to shift as you scroll down.
- **Premium Typography**: Uses the modern Inter font from Google Fonts.

## Files
- `demo.html` - HTML structure including the hero section, starry background, and the interactive parallax script.
- `style.css` - All styling including gradients, animations, glass-morphism, and responsive design.
- `README.md` - This documentation.

## How to Use
1. Open `demo.html` in a browser.
2. The aurora animation and starry background will start automatically.
3. Move your mouse to see the layers shift, and **scroll down** to see the aurora move upwards!

## Customization Tips
- **Colors** - Adjust the `radial-gradient` colors in `.aurora1`, `.aurora2`, etc., to change the aurora's hue.
- **Scroll Speed** - In `demo.html`, tweak the `speed` variable inside the `window.addEventListener("scroll")` to change how fast the aurora shifts on scroll.
- **Overlay** - Modify `.hero` for different glass-morphism blur and transparency.

## License
MIT - Feel free to use, modify, and share.
