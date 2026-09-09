# Glowing Cyberpunk Button

An aggressive, high-contrast pure CSS button component inspired by modern cyberpunk UI aesthetics, featuring clipped corners, deep neon glows, and interactive glitch animations.

## Features
- **Clipping Path Architecture**: The classic cyberpunk angled/chamfered corners are achieved natively using CSS `clip-path: polygon()`, allowing the button to remain fully responsive without relying on static background images.
- **Neon Glow Engine**: Utilizes a combination of `inset` and outer `box-shadow` properties paired with `currentColor` to dynamically generate intense neon glows that match the button's variant color.
- **Interactive Glitch Masking**: On hover, a hidden `.btn-glitch` span is revealed. This span utilizes rapidly shifting `clip-path: inset()` coordinates and harsh `text-shadow` offsets within an `@keyframes` loop to simulate an authentic UI rendering glitch.
- **Tactical ID Tags**: Includes a small, clipped absolute-positioned yellow tag (`_R4`) in the bottom right corner, a staple of tactical cyberpunk interfaces.
- **CRT Scanline Background**: The demo file includes a pure CSS linear-gradient background that simulates old CRT monitor scanlines.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Rajdhani` font family is loaded in your `<head>` for the authentic sci-fi technical typography.
- **Important**: To use the Glitch effect, you must duplicate the button text into the `.btn-glitch` span (e.g., `<span class="btn-glitch">ABORT</span>`).
