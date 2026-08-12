# CSS Markdown Preview Toggle

A pure CSS markdown editor interface featuring a smooth, sliding segmented control toggle that transitions seamlessly between a raw text editor and a formatted visual preview without any JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for the state toggle or sliding animations).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with distinct background colors for code blocks, text areas, and toolbars.
- **Component Architecture (Documented in Code)**: 
  - **The Radio Button Hack**: State management is handled entirely by two hidden `<input type="radio">` buttons at the top of the container. 
  - **Segmented Control Animation**: The toggle switch in the toolbar uses the `~` sibling selector. When `#mode-preview:checked` is true, the `.toggle-slider` pseudo-element slides `100%` to the right using a CSS transform, and the active label text color updates.
  - **View Panel Transition**: Both the `.panel-edit` (textarea) and `.panel-preview` (formatted HTML) sit absolutely positioned on top of each other. Clicking "Preview" slides the Edit panel out to the left (`translateX(-50%)`) while fading its opacity, and slides the Preview panel in from the right to the center (`translateX(0)`).
- Fully accessible semantic structure. Screen readers are instructed to ignore the hidden state radios via `aria-hidden="true"`, interacting directly with the styled `<label>` buttons, which feature `tabindex="0"` for keyboard navigation. Honors the `prefers-reduced-motion` accessibility standard by disabling the sliding transitions in favor of instantaneous opacity swaps for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Preview" and "Edit" buttons in the top right toolbar to watch the segmented control slide and the editor panels seamlessly transition.

## Files
- `demo.html`: The HTML structure containing the hidden radio state inputs, segmented control labels, the raw textarea, and the mocked formatted preview output.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:checked ~` state transition logic.
