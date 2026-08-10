# CSS LED Dot Matrix Text

A pure CSS implementation of a digital LED dot matrix display. This effect transforms standard HTML text into a dot matrix grid without requiring JavaScript, custom pixel fonts, or complex DOM structures (like rendering thousands of individual `<span>` dots).

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Masking Technique**: The core of this effect relies on the CSS `-webkit-mask-image` property. The text is styled normally with a bright solid color and a `text-shadow` to create an LED glow. We then apply a `radial-gradient` mask over the text.
  - **The Dot Grid**: The radial gradient is defined as `radial-gradient(circle, black 65%, transparent 65%)` and set to a strict size via `mask-size: 6px 6px`. Because CSS gradients repeat by default, this creates an infinite grid of small solid circles surrounded by transparent space. When applied as a mask, it punches this dot grid out of the solid text, creating the perfect illusion of individual LED segments.
  - **Board Styling**: The parent `.led-board` features an inset box-shadow to simulate depth and a subtle unlit dot background pattern, grounding the glowing text in a realistic physical display.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate dark mode aesthetic for the surrounding layout.
- Fully accessible semantic structure. Because we are manipulating standard text with CSS masks rather than splitting the string into complex DOM nodes, the text remains entirely readable, selectable, and perfectly compatible with screen readers. Honors the `prefers-reduced-motion` accessibility standard by disabling the secondary blinking LED animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the effect. You can freely change the text content inside the `<h2>` tags, and the CSS mask will automatically apply the dot matrix grid to the new characters.

## Files
- `demo.html`: The standard HTML structure containing the text payload.
- `style.css`: The styling, neon text-shadows, and the critical `mask-image` radial gradient logic.
