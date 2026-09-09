# Responsive Toggle: Minimalist

A highly polished, JavaScript-free toggle switch component featuring a clean monochrome aesthetic and mathematically responsive scaling.

## Features
- Pure CSS and HTML implementation. The interactive state is managed entirely through the "Checkbox Hack".
- **Component Architecture & Styling Mechanics**: 
  - **The Checkbox Hack**: The toggle relies on a visually hidden `<input type="checkbox">` wrapped inside a `<label>`. Clicking anywhere on the label toggles the checkbox state. The CSS uses the adjacent sibling combinator (`.toggle-input:checked + .toggle-track`) to animate the background color and move the thumb.
  - **Mathematical Responsiveness**: Instead of hardcoding translation values, the thumb's movement is calculated dynamically using CSS `calc()` based on custom properties:
    `transform: translateX(calc(var(--toggle-width) - var(--thumb-size) - (var(--thumb-margin) * 2)));`
    This means you can resize the entire toggle perfectly just by overriding the `--toggle-width` and `--toggle-height` variables in a media query, without needing to manually adjust the animation distances.
  - **Minimalist Aesthetic**: The design avoids heavy shadows or gradients, relying on crisp borders, flat colors (stark black and white), and a smooth `cubic-bezier` timing function for a premium, lightweight feel.
- **Theming**: Configured via CSS Custom Properties. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`, intelligently swapping the monochrome palette while maintaining the minimalist aesthetic.
- Fully accessible semantic structure. Because it uses a real `<input type="checkbox">`, it is perfectly accessible to screen readers (with `aria-label`) and keyboards. Includes `:focus-visible` styling to draw a high-contrast outline when navigated via the Tab key. Honors the `prefers-reduced-motion` accessibility standard by disabling the translation animations if requested by the OS.

## Usage
Open `demo.html` in your browser. Click the toggles to see the smooth sliding animation. Resize your browser window to below 400px wide to observe how the toggle seamlessly scales down its dimensions and travel distance using CSS variable overrides.

## Files
- `demo.html`: The HTML structure defining the checkbox hack and accessibility attributes.
- `style.css`: The styling, the `calc()` geometry for responsive scaling, and the clean monochrome theme logic.
