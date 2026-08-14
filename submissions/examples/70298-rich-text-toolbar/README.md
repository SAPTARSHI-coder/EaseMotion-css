# CSS Rich Text Toolbar

A responsive and accessible pure CSS **Rich Text Toolbar** pattern for text editing interfaces.

The component demonstrates toolbar controls for bold, italic, underline, alignment, and link styling without requiring an external UI library.

## ✨ Features

- Rich text editor interface
- Bold toggle
- Italic toggle
- Underline toggle
- Left, center, and right alignment controls
- Link styling toggle
- Responsive toolbar
- Native keyboard-accessible controls
- Semantic toolbar structure
- Contenteditable editing surface
- Visible focus states
- Dark-mode compatible
- Light-mode compatible
- Reduced-motion support
- No external dependencies
- No JavaScript required

## 🎨 CSS State Demo

The toolbar uses CSS form controls and `:has()` to demonstrate formatting states.

For example:

```css
.editor-shell:has(#bold-toggle:checked) .editor-surface {
  font-weight: 700;
}