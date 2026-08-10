# CSS Slide-Up Carousel (Cyberpunk Neon)

A pure CSS interactive carousel component designed for Cyberpunk Neon Layouts. It features a heavy sci-fi aesthetic, distinct neon color-coding per slide, and a bouncy "Slide-Up" entrance animation.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Cyberpunk Aesthetic**: Utilizes raw technical fonts (`Share Tech Mono` and `Rajdhani`), a CRT scanline overlay, absolute-positioned cut corners, and intense neon color tokens (`--neon-pink`, `--neon-blue`, `--neon-yellow`) set against a dark grid background.
- **State Management**: The switching of slides is handled entirely via the hidden radio button hack (`<input type="radio">`). The navigation dots at the bottom are `<label>` elements wired to these hidden inputs.
- **The Slide-Up Effect**: 
- The `.slides-wrapper` uses `overflow: hidden` to mask the slides before they arrive and sets a fixed height.
- By default, all `.slide` containers are hidden (`opacity: 0`, `visibility: hidden`) and pushed downward (`transform: translateY(100%)`).
- When a slide's radio button is checked, it becomes visible and translates up to `translateY(0)`.
- The transition utilizes a custom cubic-bezier easing (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`) which creates a satisfying, physical "bounce" as the slide springs up into place.
- **Dynamic Indicators**: As the user clicks the navigation dots, CSS sibling selectors (`~`) update the active dot's background color and neon box-shadow to match the specific color theme of the currently active slide.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the bouncy slide-up translation and the continuous CRT scanline are completely disabled, safely falling back to immediate opacity cross-fades.

## Usage
Open `demo.html` in your browser. You will see a mock cyberware catalog interface. Click the navigation dots at the bottom. Observe how the active dot changes color to match the theme, while the new cyberware schematic bounces up rapidly from below into view.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup required for JS-free carousel state management.
- `style.css`: The styling, cyberpunk design tokens, CRT animations, and the complex sibling CSS selector (`~`) logic driving the dynamic colored indicators and bouncy slide-up mechanics.
