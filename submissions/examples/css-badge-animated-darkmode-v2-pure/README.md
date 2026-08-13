# Animated Dark Mode Badge V2

A collection of three unique, pure CSS animated badges designed specifically for modern dark mode interfaces.

## Features & Variants
1. **Neon Pulse Badge**: A classic "system online" indicator featuring a deeply layered glowing box-shadow and a continuous, radar-like pinging animation utilizing `box-shadow` expansion on a nested dot.
2. **Border Sweep Badge**: Creates the illusion of a glowing laser moving continuously around the pill-shaped border. Achieved purely in CSS using a rotating `conic-gradient` hidden behind a solid inner pseudo-element.
3. **Cyber Glitch Badge**: An interactive badge that triggers a chaotic, cyberpunk-style text glitch effect on hover. Engineered using `clip-path: inset()` animations on the `::before` and `::after` pseudo-elements.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Space Grotesk` font is loaded via your `<head>`.
- For the Glitch badge, you must duplicate the badge text into the `data-text` HTML attribute (e.g., `<span class="badge badge-glitch" data-text="BETA">BETA</span>`) for the CSS pseudo-element injection to work.
