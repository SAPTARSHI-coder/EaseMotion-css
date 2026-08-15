# CSS Slider: Minimalist Outline

A stark, architectural, JavaScript-free carousel utilizing the CSS radio button hack. Features strict typography, thin borders, ample whitespace, and elegant fade transitions, entirely devoid of gradients or 3D effects.

## Features
- Pure CSS and HTML implementation. No JavaScript required for slider navigation or state management.
- **Component Architecture**: 
  - **The Radio Button Hack**: The core functional logic relies on a series of hidden `<input type="radio">` buttons and the general sibling combinator (`~`). By placing `<label>` elements inside the `.slider-controls` UI that correspond to these radio IDs, clicking a control node actually checks the hidden radio button. The CSS then detects which button is `:checked` and alters the slide opacity and scale accordingly.
  - **Editorial Transitions**: Instead of typical fast horizontal sliding, this variation uses a slow, elegant `opacity` cross-fade combined with a very subtle `scale(1.02)` to `scale(1)` transition. This mimics the feeling of turning pages in a high-end magazine or architectural portfolio.
  - **The Frame Outline**: A static `.frame-outline` element sits above the slider track with `pointer-events: none`, ensuring a crisp 1px border frames the content regardless of the slide transitioning beneath it.
  - **Minimalist Controls**: Moving away from standard circles or dots, the navigation controls are thin horizontal lines, complementing the strict, geometric layout.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`), automatically inverting the stark black-and-white contrast for optimal readability while maintaining the strict aesthetic.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by entirely disabling the scaling transition, opting instead for a simple instant opacity cross-fade for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the thin horizontal lines below the frame to navigate between the slides using the pure CSS radio hack.

## Files
- `demo.html`: The HTML structure defining the radio button state logic, the slider track, the static frame, and the minimalist navigation controls.
- `style.css`: The styling, the `:checked` sibling selector matrix for slide opacity toggling, and the strict typographical layout rules.
