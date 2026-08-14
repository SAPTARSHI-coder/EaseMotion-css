# CSS Brutalist Form

A high-contrast, neobrutalism styled web form featuring stark typography, thick borders, solid block shadows, and a custom CSS checkbox implementation.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **Neobrutalism Aesthetics**: The form embraces raw HTML default colors combined with highly customized, unblurred CSS `box-shadow` properties to simulate 3D depth without gradients. A stark monochrome palette with one aggressive accent color (red) defines the style.
  - **Dynamic Input Shadows**: The `.brutalist-input` fields have a subtle hard shadow that expands and changes border color on `:focus`, physically lifting the input upwards via a `transform: translate()` offset.
  - **Custom Brutalist Checkbox**: The native HTML checkbox is hidden visually (but remains in the DOM for screen reader focus). A custom `.custom-checkbox` span is styled alongside it. Using the adjacent sibling combinator (`input:checked + span`), the checked state is rendered purely in CSS by drawing two intersecting absolute pseudo-elements to form an aggressive 'X' mark.
  - **Button Compression**: The submit button uses the `:active` pseudo-class to reverse the box-shadow offset, making the button physically "compress" down into the page when clicked.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), cleanly inverting the solid black shadows to stark white shadows.
- Fully accessible semantic structure. Standard `<form>`, `<label>`, and `<input>` associations ensure full screen reader compatibility, even for the custom styled checkbox.

## Usage
Open `demo.html` in your browser to interact with the brutalist form elements.

## Files
- `demo.html`: The HTML structure defining the form labels, inputs, and the custom checkbox setup.
- `style.css`: The styling, hard shadows, monospaced typography, and interaction pseudo-classes.
