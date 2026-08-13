# Glassmorphism Minimalist Accordion

A sleek, fully functional accordion component utilizing modern frosted glass aesthetics and pure CSS state management.

## Features
- **Pure CSS Logic**: Utilizes the `<input type="radio">` hack alongside CSS Sibling Selectors (`~`) to manage the open/closed state of the accordion panels without any Javascript.
- **Smooth Grid Animation**: Employs the `grid-template-rows: 0fr` to `1fr` transition technique for flawlessly smooth accordion expanding/collapsing animations, bypassing standard `max-height` limitations.
- **Minimalist Glassmorphism**: Clean `backdrop-filter: blur` layered over a complex mesh gradient background.
- **CSS-Drawn Icons**: The open/close (+/-) icons are drawn entirely using CSS pseudo-elements (`::before`, `::after`) and animated using `transform: rotate()`.
- **Accessible & Responsive**: Adjusts padding and font sizes for mobile viewports.

## Usage
Include `demo.html` and `style.css` in your project. Ensure all radio buttons within the same accordion group share the same `name` attribute (e.g., `name="acc"`) so that opening one panel automatically closes the others. To allow multiple panels to be open simultaneously, replace `type="radio"` with `type="checkbox"`.
