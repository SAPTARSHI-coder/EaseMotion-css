# CSS-only Dropdown: Material Design

A pure CSS, stateful dropdown menu that strictly follows Material Design guidelines, featuring floating labels, animated elevation transitions, and CSS-only interaction logic.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Material Aesthetics**: Implements the classic "Filled Text Field" variant look for the dropdown trigger, complete with a dark grey bottom border that animates into a primary color (`#6200ee`) indicator line upon focus/open.
  - **Floating Label**: Emulates the Material floating label using absolute positioning and `transform: translateY(-16px) scale(0.75)`.
  - **Elevation (Shadows)**: Uses authentic Material Design elevation box-shadows. The dropdown menu surfaces at `elevation-8` (`0 5px 5px -3px rgba(0,0,0,0.2)...`) to signify it sits above other content.
  - **Pure CSS State Management**: The open/closed state of the dropdown is managed entirely without JavaScript using the "Checkbox Hack". 
    - A hidden `<input type="checkbox" id="material-dropdown-toggle">` acts as the state container.
    - The visible trigger button is a `<label>`. Clicking it toggles the hidden checkbox.
    - The General Sibling Combinator (`~`) is used to reveal the menu, animate the bottom border indicator, and rotate the trailing chevron icon.
  - **Backdrop Dismissal**: Includes a full-screen, invisible `.dropdown-backdrop` label that only appears when the menu is open. Clicking anywhere outside the menu hits this backdrop, which triggers the checkbox again, effectively closing the dropdown.
  - **Material Easing**: Utilizes the standard Material Design transition curve (`cubic-bezier(0.4, 0.0, 0.2, 1)`) for all animations to ensure authentic motion.
- Accessible semantic structure. Uses appropriate ARIA roles (`role="button"`, `role="listbox"`, `role="option"`) and honors the `prefers-reduced-motion` standard.

## Usage
Open `demo.html` in your browser. Click the text field to reveal the dropdown menu and observe the floating label, animated indicator line, and scale-in transition of the menu surface.

## Files
- `demo.html`: The HTML structure defining the checkbox hack, the floating label, and the menu overlay.
- `style.css`: The styling, Material elevations, and the `~` combinator state logic.
