# CSS-only Animated Envelope Reveal

A delightful, interactive CSS-only envelope component that opens and reveals a letter when hovered over. No JavaScript required.

## Overview
This component simulates a real envelope opening mechanism. Using CSS border hacks to create the envelope flaps, CSS 3D transforms (`rotateX`) to fold back the top flap, and precise `z-index` manipulation to pull the letter out from behind the front flaps.

## Features
- ✨ 100% CSS-only (no JavaScript)
- ✉️ Interactive 3D envelope opening animation
- 📝 Sliding letter reveal effect on hover
- 🖌️ Beautiful typography using Google Fonts (`Dancing Script` and `Inter`)
- 📐 Complex shape creation using pure CSS border rendering

## Files
- `demo.html`: The HTML structure including the envelope back, letter, front flaps, and top flap.
- `style.css`: The styling, geometry (border hacks), and hover transitions.

## Usage
Simply copy the HTML structure and link the CSS file. You can replace the text inside the `.ease-letter-content` to display any message, invitation, or card you want.

## Customization
Adjust the envelope colors by modifying the border colors in `style.css`:
- Envelope Back: `.ease-envelope-back` (`#f43f5e`)
- Top Flap: `.ease-envelope-flap` (`#e11d48`)
- Front Left/Right Flaps: `.ease-envelope-left`, `.ease-envelope-right` (`#fb7185`)
- Front Bottom Flap: `.ease-envelope-bottom` (`#fda4af`)
