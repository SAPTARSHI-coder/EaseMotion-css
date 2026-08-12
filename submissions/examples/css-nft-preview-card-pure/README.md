# CSS NFT Preview Card

A pure CSS NFT card component featuring a glassmorphism hover effect, creator avatar integration, and semantic layout for bids and countdowns, built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--card-bg`, `--accent-cyan`, etc.). Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating the classic moody, high-contrast dark mode aesthetic popular in Web3/Crypto interfaces.
- **Component Architecture (Documented in Code)**: 
  - **Typography**: Uses the `Outfit` font from Google Fonts, a staple in modern Web3 design.
  - **Glassmorphism Reveal**: The main product image container (`.nft-image-wrapper`) utilizes `aspect-ratio: 1/1` to remain perfectly square. It contains an `.nft-overlay` that defaults to `opacity: 0`. 
  - On hover or `:focus-within`, the overlay fades in. The overlay utilizes `backdrop-filter: blur(4px)` to blur the NFT image beneath it.
  - **Button Entrance**: The "Place Bid" button inside the overlay has a slight `transform: translateY(10px)`. When hovered, it transitions to `0`, creating a dynamic spring-up entrance effect.
- Fully accessible with `prefers-reduced-motion` support. The hover lift and button translations are disabled for motion-sensitive users. The `.nft-card` uses `tabindex="0"` and `:focus-within` to ensure keyboard navigators can interact with and trigger the glassmorphism overlay.

## Usage
Open `demo.html` in your browser to view the NFT card. Hover your mouse (or tab focus) over the card to see it lift, and over the image to trigger the frosted glass overlay and action button.

## Files
- `demo.html`: The HTML structure containing the card sections (image wrapper, content, metrics, creator footer).
- `style.css`: The styling, robust CSS Custom Property theming blocks, and the glassmorphism backdrop filter mechanics.
