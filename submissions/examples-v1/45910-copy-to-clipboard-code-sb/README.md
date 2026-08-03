# Copy-to-Clipboard Code Blocks

Documentation-style code blocks with one-click copy-to-clipboard functionality.

## Files

- `demo.html` - Demo page showing code blocks with copy functionality
- `style.css` - Code block styles with copy button

## Usage

Open `demo.html` in a browser. Click the "Copy" button on any code block to copy its content to clipboard.

## Features

### Copy-to-Clipboard
- One-click copy functionality
- Visual feedback on copy success
- Automatic button state reset
- Accessible aria-label

### Code Block Variants
- Default dark theme
- HTML syntax highlighting variant
- JavaScript syntax highlighting variant
- CSS syntax highlighting variant

### Design System
- Clean documentation aesthetic
- Dark code blocks
- Rounded corners
- Smooth hover states

## Classes

| Class | Description |
|-------|-------------|
| `ease-code-block-sb` | Code block container |
| `ease-copy-btn-sb` | Copy to clipboard button |
| `ease-code-html-sb` | HTML code variant |
| `ease-code-js-sb` | JavaScript code variant |
| `ease-code-css-sb` | CSS code variant |

## JavaScript Usage

The copy functionality requires a small JavaScript snippet:

```javascript
document.querySelectorAll('.ease-copy-btn-sb').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    await navigator.clipboard.writeText(text);
    btn.classList.add('copied');
    // Reset after 2 seconds
  });
});
```

## Implementation

1. Add `data-copy="your-code-here"` attribute with the code to copy
2. Include the JavaScript snippet to handle clicks
3. Add `aria-label="Copy to clipboard"` for accessibility

Closes #45910
