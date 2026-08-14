# CSS Currency Converter Widget

A pure CSS interactive widget featuring a smooth exchange rate animation, clean semantic input grouping, and a pulsing live-rate indicator, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for animations or layout).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--input-bg`, `--input-focus-ring`, etc.). Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), providing a deep, elegant dark mode UI.
- **Component Architecture (Documented in Code)**: 
  - **Input Styling**: We completely strip out native browser spinners (`-moz-appearance: textfield` and `::-webkit-outer-spin-button`) on the `type="number"` inputs to ensure a clean, app-like currency entry feel.
  - **Contextual Animation**: By utilizing the `:focus-within` pseudo-class on the parent `<form>`, we trigger a bouncy `180deg` rotation on the central exchange arrows SVG *only* when the user is actively typing or focusing an input, simulating calculation feedback.
  - **Live Indicator**: Uses a continuous `@keyframes pulseDot` animation on `box-shadow` to create an infinite, expanding radar-pulse effect, indicating "live" data.
- Fully accessible with `<label class="sr-only">` tags for screen readers, and `prefers-reduced-motion` support that disables the bouncing exchange icon and pulsing live-rate dot for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click into the "Amount to convert" input field and start typing. Notice how the blue outline wraps the entire complex input group, and the exchange icon in the middle springs to life.

## Files
- `demo.html`: The HTML structure containing the semantic form, input groups, and SVGs.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:focus-within` animation techniques.
