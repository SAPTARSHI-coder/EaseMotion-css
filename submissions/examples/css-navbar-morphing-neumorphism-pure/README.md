# Morphing Neumorphism Navbar

A highly tactile, soft-UI navigation bar featuring pure CSS shape-morphing animations and deep box-shadow manipulations to simulate physical states.

## Features
- **Neumorphic Extrusion Physics**: The primary container and buttons are styled using complex, layered `box-shadow` configurations (a dark shadow bottom-right, light shadow top-left) to simulate an object extruded from the background material.
- **Physical Link States**: 
  - Standard state: Flat against the surface.
  - Hover state: Morphs outwards (extrudes) using positive box-shadows.
  - Active state: Morphs inwards (pressed) using `inset` box-shadows.
- **Pure CSS Morphing Search Bar**: Features a search button that physically morphs into a text input field when clicked. This is driven entirely by CSS using a hidden `<input type="checkbox">` and the `~` sibling selector.
  - The container animates its width with a `cubic-bezier` spring effect.
  - The shadow seamlessly transitions from an extruded outer shadow to a pressed `inset` shadow.
  - The SVG icons (Search/Close) perform a scaling and rotating crossfade.
- **Floating Pill Architecture**: Designed as a detached, floating pill-shaped container (`border-radius: 50px`), providing a modern alternative to edge-to-edge navbars.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Nunito` font is loaded in your `<head>`.
- **Important**: The Neumorphism effect relies entirely on the parent container (or `body`) matching the exact background color of the navbar (`#e0e5ec`). If you change the background color, you must also recalculate the highlight (`--shadow-light`) and shadow (`--shadow-dark`) hex codes for the illusion to work.
