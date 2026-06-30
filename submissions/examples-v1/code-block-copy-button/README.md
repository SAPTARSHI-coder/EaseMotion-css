# Code Block Copy Button

A reusable code block component with built-in copy-to-clipboard functionality.

## Features

- One-click copy button
- SVG clipboard icon
- Success feedback ("Copied!")
- Responsive layout
- Modern UI design
- Works with any code snippet

## Use Cases

- Documentation websites
- Developer portals
- Tutorial pages
- Component libraries
- Code showcase pages

## How It Works

Each code block contains a copy button in the top-right corner. Clicking the button copies the entire contents of the code snippet using the Clipboard API and displays a temporary success message.

## Files

- `demo.html` – Demo showcasing the component
- `style.css` – Styling for the component

## Browser Support

Works in all modern browsers that support:

```javascript
navigator.clipboard.writeText();
```

## Preview

The component demonstrates:

- HTML code block
- CSS code block
- JavaScript code block
- Copy success state
