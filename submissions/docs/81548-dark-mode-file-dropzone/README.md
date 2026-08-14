# Dark Mode File Dropzone

Documentation for the Dark Mode File Dropzone requested in issue #81548.

## Scope

This guide covers the advanced-styling variant named in the issue title.
It explains the dropzone structure, class naming, theme variables, visual states, and accessibility.
The example is designed to be copied into a project without additional UI dependencies.

## Features

- Dark interface treatment with strong surface contrast.
- Drag-and-drop visual states.
- Keyboard-friendly file selection control.
- Clear idle, hover, active, and selected states.
- Custom CSS variables for advanced theming.
- Responsive dropzone sizing.
- Reduced-motion support.
- Focus-visible styling.

## Structure

Use `.dropzone` as the component root.
Place the file input inside the interactive drop area.
Keep the input accessible even when its visual presentation is customized.
Use a status area to describe selected files or current state.
The complete structure is available in `demo.html`.

## Class Naming

Use `.dropzone__input` for the native file input.
Use `.dropzone__content` for the instructional content.
Use `.dropzone__icon` for decorative iconography.
Use `.dropzone__title` for the primary instruction.
Use `.dropzone__hint` for supporting constraints.
Use `.dropzone--active` for drag-over presentation.
Use `.dropzone--selected` for a selected-file state.
Keep state modifiers independent from the base layout classes.

## CSS Variables

Variables control the dark surface, border, glow, text, spacing, and transition timing.
Override variables on the root element to create project-specific dark themes.
Use state variables to keep hover and active colors consistent.
Avoid scattering color literals across state selectors.

## Advanced Styling

The dropzone can use dashed borders, layered shadows, and subtle glow effects.
Active drag states should be visually stronger than the idle state.
Selected-file styling should remain distinct from the drag-over state.
Decorative glow must never replace a textual state message.
Transitions should be short enough to preserve responsive feedback.

## Basic Usage

Connect the visible dropzone to a native file input.
Use a label or equivalent accessible association for the input.
Update the status text when files are selected.
Validate file type and size in application logic rather than CSS.
Keep the demo styling independent from file-processing code.

## Accessibility

Use a real file input for file selection.
Provide an accessible label that explains what can be uploaded.
Do not require drag-and-drop because keyboard and touch users may not use it.
Keep focus visible when the input is reached by keyboard.
Ensure status changes are available as text.
Maintain sufficient contrast in the dark theme.
Respect `prefers-reduced-motion` for glow and transition effects.

## Responsive Behavior

The dropzone uses a flexible width with a readable maximum size.
On small screens the content and controls stack naturally.
Padding decreases without removing instructions.
The file selection control remains easy to reach on touch devices.

## Customization

Adjust border style and glow intensity through CSS variables.
Change corner radius to match the surrounding design system.
Tune internal spacing without changing markup.
Set a different dark surface while preserving contrast.
Modify transition timing while retaining reduced-motion support.

## Demo

Open `demo.html` directly in a browser.
The demo shows the idle and focused dropzone states and includes a native file picker.
No server or build step is required for the visual example.

## Files

- `demo.html` — expanded dropzone demonstration.
- `style.css` — formatted advanced dark-theme styling.
- `README.md` — feature-specific documentation.

## Verification

Test file selection with keyboard navigation.
Check the dropzone at narrow and wide viewport sizes.
Confirm focus remains visible.
Test the visual treatment with reduced motion enabled.
Verify the instructions remain understandable without drag-and-drop.
