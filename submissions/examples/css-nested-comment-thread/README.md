# CSS Comment Thread

A clean, indented comment system featuring deeply nested replies and a dynamic reply form toggle, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for UI state toggles or structural styling).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--bg-card`, `--accent`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: light/dark`).
- **Structural Nesting (Documented in Code)**: 
- Deeply nested comment threads are achieved purely through HTML structure. 
- By placing a reply `.comment-thread` *inside* its parent `.comment-thread` container and appending the `.nested` class, the child inherits a left margin (indentation) and a visual left border connecting line.
- This creates an infinitely scalable threading system standard in platforms like Reddit or HackerNews.
- **Dynamic CSS Reply Form (Checkbox Hack)**: 
- When the user clicks the "Reply" button, a textarea form slides down smoothly. This complex UI state is handled 100% in CSS using the Checkbox Hack.
- A hidden `<input type="checkbox">` is linked to a `<label>` styled perfectly as a button. 
- Using the CSS general sibling selector (`~`), checking the box toggles the `max-height` and `opacity` of the reply form container, smoothly expanding it into view.
- Fully accessible with `prefers-reduced-motion` support. The sliding animations on the reply form are disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. You will see a 3-level deep comment thread. Notice the structural indentations and the subtle connecting lines on the left side (hover over them to see them highlight). Try clicking the "Reply" button on any comment to see the dynamic form slide into view, and click "Cancel" to slide it away—all without a single line of JavaScript.

## Files
- `demo.html`: The HTML structure detailing the nested containers and the hidden checkboxes required for the UI state.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `max-height` transition trick for the reply forms.
