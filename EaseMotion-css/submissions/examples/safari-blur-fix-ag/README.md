Safari Backdrop Filter Blur Fix Showcase
A standalone, minimal component designed to demonstrate the solution for Issue #55205, where the backdrop-filter glassmorphism effect silently failed in Safari browsers.

The Bug
Safari (and iOS Safari) historically requires the -webkit- vendor prefix to render backdrop-filter correctly. Without it, the browser ignores the property entirely, breaking the frosted glass UI effect expected in overlays, command palettes, and footers.

The Fix Demonstrated
This submission provides a verified fallback block. It forces Safari to utilize the hardware-accelerated blur while keeping standard rendering intact for Chromium/Gecko engines:
/* The required dual-declaration order */
-webkit-backdrop-filter: blur(8px);
backdrop-filter: blur(8px);

How to Test
Open demo.html in Safari (Mac or iOS) to confirm the frosted glass effect renders correctly over the background image.
