# Dropdown: Glassmorphism Dark Mode

A pure CSS, stateful dropdown menu featuring a sleek dark mode glassmorphism aesthetic, animated backdrop blurs, and CSS-only interaction logic.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Glassmorphism in Dark Mode**: Utilizes a deep `#0f172a` base background. The glass effect is achieved using a semi-transparent dark background (`rgba(30, 41, 59, 0.4)`) combined with `backdrop-filter: blur(12px)`. Subtle white borders (`rgba(255, 255, 255, 0.1)`) create the sharp edge reflections typical of glass.
  - **Refraction Blobs**: Includes animated, heavily blurred (`blur(80px)`) background `.blob` elements positioned behind the dropdown. As these blobs slowly drift, their colors refract through the glass UI elements, enhancing the translucent effect.
  - **Pure CSS State Management**: The open/closed state of the dropdown is managed entirely without JavaScript using the "Checkbox Hack". 
    - A hidden `<input type="checkbox" id="dropdown-toggle">` acts as the state container.
    - The visible trigger button is actually a `<label for="dropdown-toggle">`. Clicking the label toggles the hidden checkbox.
    - The General Sibling Combinator (`~`) is used to style the menu based on the checkbox state: `.dropdown-checkbox:checked ~ .dropdown-menu { opacity: 1; visibility: visible; transform: scale(1); }`.
  - **Interaction Details**: Features a rotating chevron icon on open, subtle hover indentations on menu items, and a distinct red hover state for the "Logout" action.
- Accessible semantic structure. Uses appropriate ARIA roles (`role="button"`, `role="listbox"`, `role="option"`) to map the checkbox hack back to standard dropdown semantics for screen readers. Honors the `prefers-reduced-motion` standard.

## Usage
Open `demo.html` in your browser. Click the "Select an option" trigger to reveal the glass dropdown menu.

## Files
- `demo.html`: The HTML structure defining the checkbox hack and the glass UI layers.
- `style.css`: The styling, the `backdrop-filter` rules, and the `~` combinator state logic.
