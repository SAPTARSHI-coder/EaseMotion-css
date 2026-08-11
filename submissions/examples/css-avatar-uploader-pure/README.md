# CSS Avatar Uploader

A pure CSS profile picture upload component featuring hover micro-interactions, explicit focus outlines for keyboard navigation, and a standard circular crop aesthetic natively styled via the `<label>` element.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Hidden Input Technique**: The default browser `<input type="file">` is notoriously difficult (and often impossible) to style consistently across browsers. This component hides the input using the `sr-only` visually hidden technique (which preserves accessibility) and instead relies on a `<label>` element bound to the input via the `for` attribute. Clicking the beautifully styled label automatically triggers the hidden file input.
  - **Keyboard Accessibility**: When a keyboard user tabs to the hidden file input, the browser natively applies focus to it. We use the adjacent sibling combinator (`input[type="file"]:focus-visible + .avatar-preview`) to detect this focus state and pass a visible `outline` and `border-color` change to the custom label, ensuring the component remains fully accessible.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate dark mode aesthetic with high-contrast hover states.
- Fully accessible semantic structure. The input uses an explicit `aria-label` to provide context to screen readers despite being visually hidden. Honors the `prefers-reduced-motion` accessibility standard by disabling the lift and icon bounce hover animations for motion-sensitive users.

## Usage
Open `demo.html` in your browser. You can click the circular dropzone or use your keyboard (`Tab` -> `Space`/`Enter`) to trigger the native file upload dialogue. 

*(Note: As a pure CSS UI component, it cannot process or display the uploaded file as a preview image, which requires JavaScript's `FileReader` API).*

## Files
- `demo.html`: The HTML structure demonstrating the `for` attribute binding between the hidden input and the label dropzone.
- `style.css`: The styling, hover transitions, and the sibling selector logic for keyboard focus management.
