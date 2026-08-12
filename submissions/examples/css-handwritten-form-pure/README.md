# CSS Handwritten Form

A charming, notebook-style form utilizing a handwritten web font, minimalist underlined inputs, and a custom sketched checkbox.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **Handwritten Aesthetic**: The form heavily utilizes the Google Font 'Caveat' to simulate handwriting. The standard box-model styling on inputs is removed (`appearance: none; border: none; background: transparent;`) and replaced with a simple bottom border to create fill-in-the-blank style underlines.
  - **Lined Paper Textarea**: The multiline `<textarea>` uses a CSS `repeating-linear-gradient` as its background image. By precisely matching the gradient stops (`2rem`) to the CSS `line-height` (`2rem`), it perfectly draws notebook lines directly under each row of handwritten text.
  - **Sketched Custom Checkbox**: The native checkbox is visually hidden and replaced with a custom CSS square. To simulate a hand-drawn look, the border radius is made intentionally irregular (`border-radius: 4px 8px 3px 6px`). The checked state uses pseudo-elements to draw a slightly crooked checkmark (`transform: rotate(40deg) skewX(-10deg)`).
  - **Imperfect Button**: The submit button uses a complex, 8-value `border-radius` configuration (e.g., `255px 15px 225px 15px/15px 225px 15px 255px`) to simulate a hand-drawn circle/box around the text.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the paper background from off-white to a dark slate chalkboard look, and swapping the ink colors for contrast.
- Fully accessible semantic structure. The custom checkbox is paired with a visually hidden native input to preserve keyboard navigation and screen reader support.

## Usage
Open `demo.html` in your browser to view the handwritten form style.

## Files
- `demo.html`: The HTML structure defining the form, the inline labels, and the textarea.
- `style.css`: The styling, Google font imports, and the lined paper gradient tricks.
