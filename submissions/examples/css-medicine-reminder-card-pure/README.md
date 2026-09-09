# CSS Medicine Reminder Card

A pure CSS interactive medication card that leverages hidden checkboxes and the `:checked` pseudo-class to trigger seamless "taken" state animations and styling, built entirely without JavaScript.

## Features
- Pure CSS and HTML state management.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with adapted success colors.
- **Component Architecture (Documented in Code)**: 
  - **The Checkbox Hack**: The entire interaction logic is driven by a hidden `<input type="checkbox">`. The "Take" button (and the "Undo" button) are actually `<label>` elements linked to the checkbox via the `for` attribute. Clicking them toggles the checkbox state.
  - **State Transitions**: When the checkbox is checked (`.med-checkbox:checked`), CSS sibling selectors (`+`) trigger a cascade of changes:
    - The `.success-overlay` fades in (`opacity: 1`) and scales up (`transform: scale(1)`), gaining `pointer-events: auto` so the "Undo" button inside it becomes clickable.
    - The success checkmark SVG inside the overlay performs a staggered bounce animation using `transition-delay`.
    - The original card content behind the overlay is dimmed (`opacity: 0.3`) and blurred (`filter: blur(2px)`) to create a deep, frosted glass effect behind the success message.
  - **CSS Drawn Icons**: The pill icon is drawn entirely using CSS border radii and split `<div>` elements, avoiding the need for external image assets.
- Fully accessible semantic structure. Screen readers interact with the focused `<label>` elements which act as standard toggle buttons. Honors the `prefers-reduced-motion` accessibility standard by disabling the scale and bounce animations for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Take" button to mark the medication as taken and trigger the animated success overlay. Click "Undo" to revert the state.

## Files
- `demo.html`: The HTML structure containing the hidden checkbox, labels, and the success overlay markup.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:checked` state transition logic.
